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

Router.post('/api/getKhachTro1',(req,res)=>{    
    db.getKhachTro1((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        console.log(result)
        res.json(result[0])
    },req.body.data.id)
})

Router.post('/api/getHoaDon',(req,res)=>{    
    db.getHoaDon((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        console.log(result)
        res.json(result)
    },req.body.data.idPhong)
})

Router.post('/api/getHoaDonMoi',(req,res)=>{    
    db.getHoaDonMoi((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        console.log(result)
        res.json(result[0])
    },req.body.data.idPhong)
})

Router.post('/api/getDienNuoc',(req,res)=>{    
    db.getDienNuoc((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        console.log(result)
        res.json(result[0])
    },req.body.data.idPhong)
})
Router.post('/api/updateDienNuoc',(req,res)=>{
    console.log(req.body)
    // let dienNuoc = {
    //     "id_hoa_don": req.body.data.id_hoa_don,
    //     "so_nuoc_moi": req.body.data.so_nuoc_moi,
    //     "so_dien_moi": req.body.data.so_dien_moi,        
    // }
    db.updateDienNuoc((result,err)=>{
        if(err !== null){            
            console.log('Lỗi : '+err)  
            res.send(false)   
            return;
        }
        console.log(result)      
        res.json(true)
    },req.body.data)
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

Router.post('/api/updateProfile',(req,res)=>{
    console.log(req.body)
    db.updateProfile((result,err)=>{
        if(err !== null){            
            console.log('Lỗi : '+err)  
            res.send(false)   
            return;
        }
        console.log(result)      
        res.json(true)
    },req.body.data)
})

Router.post('/api/createProfile',(req,res)=>{
    console.log(req.body)
    db.createProfile((result,err)=>{
        if(err !== null){            
            console.log('Lỗi : '+err)  
            res.send(false)   
            return;
        }
        console.log(result)      
        res.json(true)
    },req.body.data)
})

Router.post('/api/deleteProfile',(req,res)=>{
    console.log(req.body)
    db.deleteProfile((result,err)=>{
        if(err !== null){            
            console.log('Lỗi : '+err)  
            res.send(false)   
            return;
        }
        console.log(result)      
        res.json(true)
    },req.body.data.id)
})

Router.post('/api/getRoomDetail',(req,res)=>{    
    db.getRoomDetail((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        console.log(result)
        res.json(result)
    },req.body.data.idPhong)
})

Router.post('/api/getBangGia',(req,res)=>{    
    db.getBangGia((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        console.log(result)
        res.json(result)
    },[])
})

Router.post('/api/getMotorDetail',(req,res)=>{    
    db.getMotorDetail((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        console.log(result)
        res.json(result)
    },req.body.data.idPhong)
})

Router.post('/api/updateMotor',(req,res)=>{
    console.log(req.body)
    db.updateMotor((result,err)=>{
        if(err !== null){            
            console.log('Lỗi : '+err)  
            res.send(false)   
            return;
        }
        console.log(result)      
        res.json(true)
    },req.body.data)
})

Router.post('/api/createMotor',(req,res)=>{
    console.log(req.body)
    db.createMotor((result,err)=>{
        if(err !== null){            
            console.log('Lỗi : '+err)  
            res.send(false)   
            return;
        }
        console.log(result)      
        res.json(true)
    },req.body.data)
})

Router.post('/api/deleteMotor',(req,res)=>{
    console.log(req.body)
    db.deleteMotor((result,err)=>{
        if(err !== null){            
            console.log('Lỗi : '+err)  
            res.send(false)   
            return;
        }
        console.log(result)      
        res.json(true)
    },req.body.data.id_xe)
})

module.exports = Router