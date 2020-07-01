var Usuario=require('../models/usuario.model');
var Usuario2=require('../models/usuarioNo.model');
async function  list(req,res,next){
    //select *from tbpersona where
    //asincrona
   /* Usuario.findAll({where:{estado:1}})
        //.then(function(resultado){
        .then((resultado)=>{
            
            console.log("datos....");
            console.table(resultado);
            return res.status(200)
            .json({dato:resultado,estado:1});
        });*/
    //sincronizado
    /*try{
        let resultado=await Usuario.findAll({where:{estado:1}});
        return res.status(200)
        .json({dato:resultado,estado:1});
    }catch(e){
        return res.status(400)
        .json({dato:[],estado:0});
    }*/
    //asincrona
    /*Usuario2.find({estado:1},(err,resultado)=>{
        if(err)
            return res.status(400)
            .json({dato:[],estado:0,msg:'paso algo con el server'+err});
        if(!resultado)
            return res.status(400)
            .json({dato:[],estado:0,msg:'no se nada'});
        return res.status(200)
            .json({dato:resultado,estado:1});   
    });*/
    ///sincronizando
    try{
        resultado=await Usuario2.find({estado:1});
        if(!resultado)
            return res.status(400)
            .json({dato:[],estado:0,msg:'no se nada'});
        return res.status(200)
            .json({dato:resultado,estado:1});
    }catch(e){
        return res.status(400)
            .json({dato:[],estado:0,msg:'no se nada'});
    }

    
}
function add(req,res,next){
    return res.status(200)
        .json({dato:'nuevo'});
}
function remove(req,res,next){
    return res.status(200)
        .json({dato:'borrado'});
}
function edit(req,res,next){
    return res.status(200)
        .json({dato:'editado'})
}
module.exports={
    lista:list,
    nuevo:add,
    borrar:remove,
    editar:edit
}