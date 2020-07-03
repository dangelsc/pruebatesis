var jwt=require('jsonwebtoken');
var config=require('../config/config');
module.exports={
    control:function(req,res,next){
        let token=req.headers['authorization'];
        jwt.verify(token,config.llave,(err,datos)=>{
            if(err)
                return res.status(400).json({estado:0,error:'No tienes acceso!!!!'});
            req.usuario=datos;
            next();
        });
    }
}