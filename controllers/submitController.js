import { db } from "../database.js";

export const submitController = (req,res)=>{

    const namaa = req.body.nama;
    const emaill = req.body.email;
    const plann = req.body.plan;
    const payy = req.body.pay;
    const passwordd = req.body.password;
    
    db.query(`insert into buyer (nama, plan, pay, password, email ) values('${namaa}','${plann}','${payy}','${passwordd}','${emaill}')`)

    res.redirect('/home')
}

export const edittController = (req,res)=>{

    const id = req.params.id;
    const data = req.body;
    console.log(data)

    db.query(`update buyer set nama = "${data.nama}" , password = "${data.password}" where id = ${id}`)
    
    res.redirect('/admin')
}

export const updateController = (req,res)=>{

    const id = req.params.id;

    db.query(`update buyer set status = "aktif" where id = ${id}`)
    
    res.redirect('/admin')
}

export const deleteController = (req,res)=>{

    const id = req.params.id;

    db.query(`delete from buyer where id= ${id}`)
    
    res.redirect('/admin')
}

// Awal Transaksi