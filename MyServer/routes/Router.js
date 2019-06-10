const Router = require('express').Router();
var db = require('../model/database')

Router.get('/',(req,res)=>{
    res.send("hahahas")
})

Router.get('/api/getPhong',(req,res)=>{
    db.getPhong((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        res.json(result)
    })
})

Router.post('/api/getKhachTro',(req,res)=>{    
    db.getKhachTro((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        console.log(result)
        res.json(result)
    },req.body.data.idPhong)
})

Router.post('/api/testTaiKhoan',(req,res)=>{    
    console.log(req.body)
    db.testTaiKhoan((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        console.log(result)      
        res.json(result)
    },req.body.data)
})

// Router.post('/api/signupUser',(req,res)=>{
//     var req = req.body
//     var param={
//         SDT:req.sdt,
//         Pwd:req.pwd,
//         Role:req.role,
//         Ten:req.ten,
//         Email:req.email,
//         Tuoi:req.tuoi
//     }
//     console.log(req)
//     db.registerUser((result,err) =>{
//         if(err){
//             res.json(err)
//             return;
//         }
//         let Respone = {
//             resultCode:0,
//             sdt:param.SDT,
//             role:param.Role,
//             ten:param.Ten,
//             email:param.Email,
//             tuoi:param.Tuoi
//         }
//         res.json(Respone)
//     },param)
// })
module.exports = Router