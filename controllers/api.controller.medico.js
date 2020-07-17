
var Usuario2=require('../models/medico.model');
//var Usuario3=require('../models/almacen.model');
var jwt=require('jsonwebtoken');
var config=require('../config/config');
var bcrypt=require('bcrypt');
async function  list(req,res,next){
    //t=new Usuario3;
    Usuario2.find({estado:1},(err,resultado)=>{
        if(err)
            return res.status(200)
            .json({medico:[],estado:0,msg:'paso algo con el server'+err});
        if(!resultado)
            return res.status(200)
            .json({medico:[],estado:0,msg:'no se nada'});
        return res.status(200)
            .json({medico:resultado,estado:1});   
    });

}
async function  buscar(req,res,next){
    //t=new Usuario3;
 console.log("****************")
    Usuario2.find({estado:1,nombre:req.params.busqueda},(err,resultado)=>{
        if(err)
            return res.status(200)
            .json({medico:[],estado:0,msg:'paso algo con el server'+err});
        if(!resultado)
            return res.status(200)
            .json({medico:[],estado:0,msg:'no se nada'});
        return res.status(200)
            .json({medico:resultado,estado:1});   
    });

}
async function  getitem(req,res,next){
    Usuario2.findOne({estado:1,_id:req.params.id},(err,resultado)=>{
        if(err)
            return res.status(200)
            .json({medico:[],estado:0,msg:'paso algo con el server'+err});
        if(!resultado)
            return res.status(200)
            .json({medico:[],estado:0,msg:'no se nada'});
        return res.status(200)
            .json({medico:resultado,estado:1});   
    });

}
function add(req,res,next){
    req.body.estado=1;
    req.body.fecha=Date.now();
    let nuevo=new Usuario2(req.body);
    let val=nuevo.validateSync();
    if(val)
        return res.status(200).json({estado:8,error:val});
    nuevo.save((err,cambio)=>{
        //la variable cambio tiene la id de la tabla(collection)
        if(err)
            return res.status(200).json({estado:0,error:err});
        if(!cambio)//error si no guardo los datos
            return res.status(200).json({estado:0,error:val});
        return res.status(200).json({estado:1,dato:cambio,mgs:'Datos guardados!!'});
    });
}
function remove(req,res,next){
    Usuario2.findByIdAndUpdate(req.params.id,{estado:0},(err,antiguo)=>{
        if(err)
            return res.status(200).json({estado:0,error:err});
        return res.status(200).json({estado:1,mgs:'Datos borrado!!!'});
    });
}
function edit(req,res,next){
    req.body.estado=1;
    Usuario2.findByIdAndUpdate(req.params.id,req.body,(err,antiguo)=>{
        if(err)
            return res.status(200).json({estado:0,error:err});
        return res.status(200).json({estado:1,mgs:'Datos borrado!!!'});
    });
}

module.exports={
    lista:list,
    nuevo:add,
    borrar:remove,
    editar:edit,
    buscar:buscar,
    getitem:getitem
}