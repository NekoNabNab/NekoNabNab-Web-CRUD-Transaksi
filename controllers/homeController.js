import { db } from "../database.js"

export const subscribeController = (req,res)=>{
    res.render('subscribe')
}

export const homeController = (req,res)=>{
    res.render('home')
}

export const homeLoginController = (req,res)=>{
    res.render('homeLogin')
}

export const editController = (req,res)=>{
    const id = req.params.id
    return db.query(`select * from buyer where id =${id}`, (err,result)=>{
        if(err) throw err
        return res.render('edit',{buyer : result[0]})
    })
}

export const adminSubscriberController = (req,res)=>{
    return db.query('select * from buyer',(err, result)=>{
        if(err) throw err
        return res.render('admin',{buyer : result})
    })
    // res.render('admin')
} 
