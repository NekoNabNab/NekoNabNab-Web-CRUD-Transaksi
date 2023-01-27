import jwt from "jsonwebtoken";
import { db } from "../database.js";

const JWT_Secret = "rahasia"

export const registrasiController = (req, res) => {
    return res.render('registrasi')
}

export const dbregistrasiController = (req, res) => {
    const nama = req.body.nama
    const email = req.body.email
    const password = req.body.password

    db.query(`insert into buyer (nama, email, password) values ("${nama}", "${email}", "${password}")`)
    res.redirect('/login')
}

export const loginController = (req, res) => {
    res.render('login')
}

export const dbloginController = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query(`select * from buyer where email = "${email}" and password = "${password}"`, (err, result) => {
        if (err) {
            console.log(err)
            return res.redirect('/login')
        }

        const pengguna = result[0]
        if (!pengguna) return res.redirect('/login')

        const token = jwt.sign({
            email: pengguna.email,
            password: pengguna.password
        }, JWT_Secret, { expiresIn: '1h' })

        req.session.penggunaToken = token;
        return res.redirect('/home')
    })
}

export const logoutController = (req, res) => {
    req.session.penggunaToken = undefined
    return res.redirect('/login')
}

export const cekUserController = (req, res, next) => {
    if (!req.session.penggunaToken) return res.redirect('/homeLogin')

    jwt.verify(req.session.penggunaToken, JWT_Secret, (err, pengguna) => {
        if (err) {
            console.log(err)
            return res.redirect('/login')
        }
        req.pengguna = pengguna
        next()
    })
}