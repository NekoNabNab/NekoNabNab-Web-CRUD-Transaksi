//commom js

// const express = require("express");
// const app = express();

// app.get ("/",function(req,res){
//     res.send("Hello World")
// })

// app.listen(3000, function(){
//     console.log("App berjalan dengan baik")
// })

//module js

import express, { urlencoded } from 'express'; //inisialisasi npm install express
import { adminSubscriberController, editController, homeController, homeLoginController } from './controllers/homeController.js';
import { deleteController, edittController, submitController, updateController } from './controllers/submitController.js';
import { dbloginController, dbregistrasiController, logoutController, loginController, registrasiController, cekUserController } from './controllers/userController.js';
import session from 'express-session';
import { adminLoginController, adminLogoutController, CekAdminController, dbAdminLoginController } from './controllers/adminController.js';
import { indexController, tambahController, tarikController, updateItemController } from './controllers/transaksiController.js';
import { shopChartController, transaksiController } from './controllers/checkoutController.js';
const app = express();

app.use(urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.static('views/img'))
app.use(express.static('views/vid'))

app.use(session({
    secret: "rahasia"
}));

app.set("view engine", "ejs") //inisialisasi npm install ejs


app.get("/home", cekUserController, shopChartController, homeController);
app.get("/homeLogin", homeLoginController);

// CRUD
app.post("/submit", submitController);
app.get("/edit/:id", editController);
app.post("/edit/:id", edittController);
app.get("/update/:id", updateController);
app.get("/delete/:id", deleteController);

// User
app.get("/registrasi", registrasiController);
app.post("/registrasi", dbregistrasiController);
app.get("/login", loginController);
app.post("/login", dbloginController);
app.get("/logout", logoutController);

// Admin
app.get("/adminLogin", adminLoginController);
app.post("/adminLogin", dbAdminLoginController);
app.get("/adminLogout", adminLogoutController);
app.get("/admin", CekAdminController, adminSubscriberController);

// Gudang Admin
app.get('/gudangAdmin', indexController);
app.post('/items/tambah', tambahController);
app.post('/items/tarik', tarikController);
app.get("/updateItem/:id", updateItemController);

// User Transaksi
app.post('/items/beli', transaksiController);

app.listen(4000, () => {
    console.log("App berjalan dengan baik")
})