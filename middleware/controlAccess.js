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
    ,
    cord:function(req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");//solo para desarrollo
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept');
        next();
    }
}