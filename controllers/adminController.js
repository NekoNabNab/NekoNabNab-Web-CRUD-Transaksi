import jwt from "jsonwebtoken";
import { db } from "../database.js";

const JWT_Secret = "rahasia"

export const adminLoginController = (req, res) => {
    res.render('adminLogin')
}

export const dbAdminLoginController = (req, res) => {
    const adminEmail = req.body.adminEmail
    const adminPassword = req.body.adminPassword

    db.query(`select * from admin where adminEmail = "${adminEmail}" and adminPassword = "${adminPassword}"`, (err, result) => {
        if (err) {
            console.log(err)
            return res.redirect('/adminLogin')
        }

        const pengguna = result[0]
        if (!pengguna) return res.redirect('/adminLogin')

        const token = jwt.sign({
            adminEmail: pengguna.adminEmail,
            adminPassword: pengguna.adminPassword
        }, JWT_Secret, { expiresIn: '1h' })

        req.session.penggunaToken = token;
        return res.redirect('/admin')
    })
}

export const adminLogoutController = (req, res) => {
    req.session.penggunaToken = undefined
    return res.redirect('/adminLogin')
}

export const CekAdminController = (req, res, next) => {
    if (!req.session.penggunaToken) return res.redirect('/homeLogin')

    jwt.verify(req.session.penggunaToken, JWT_Secret, (err, pengguna) => {
        if (err) {
            console.log(err)
            return res.redirect('/adminLogin')
        }
        req.pengguna = pengguna
        next()
    })
}