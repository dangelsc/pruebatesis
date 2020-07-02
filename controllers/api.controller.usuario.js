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
    ///asincrona
    Usuario2.find({estado:1},(err,resultado)=>{
        if(err)
            return res.status(400)
            .json({dato:[],estado:0,msg:'paso algo con el server'+err});
        if(!resultado)
            return res.status(400)
            .json({dato:[],estado:0,msg:'no se nada'});
        return res.status(200)
            .json({dato:resultado,estado:1});   
    });

    ///////
    ///sincronizando
   /* try{
        resultado=await Usuario2.find({estado:1});
        if(!resultado)
            return res.status(400)
            .json({dato:[],estado:0,msg:'no se nada'});
        return res.status(200)
            .json({dato:resultado,estado:1});
    }catch(e){
        return res.status(400)
            .json({dato:[],estado:0,msg:'no se nada'});
    }*/
}
function add(req,res,next){
    ///post/put
    //req.body.ci;
    ///get por la url(ejemplo dominio.com/usuairo?ci=786616)//
    //req.query.ci;
    ///variables por url( dominio.com/usuario/78987) pretty url
    //router('usuario/:ci')
    //req.params.ci
    req.body.estado=1;
    req.body.fecha=Date.now();
    let nuevo=new Usuario2(req.body);
    let val=nuevo.validateSync();
    if(val)
        return res.status(400).json({estado:8,error:val});
    nuevo.save((err,cambio)=>{
        //la variable cambio tiene la id de la tabla(collection)
        if(err)
            return res.status(400).json({estado:0,error:err});
        if(!cambio)//error si no guardo los datos
            return res.status(400).json({estado:0,error:val});
        return res.status(200).json({estado:1,mgs:'Datos guardados!!'});
    });
}
//variable en la url 
/// "/api/usuario/:id"
function remove(req,res,next){
    //"select * from usuario where _id="+req.params.id
    //req.params.id='1 or 1=1'
    //"select * from usuario where _id=1 or 1=1
   /* Usuario2.findByIdAndDelete(req.params.id,(err,antiguo)=>{
        if(err)
            return res.status(400).json({estado:0,error:err});
        return res.status(400).json({estado:1,mgs:'Datos borrado!!!'});
    });*/
    Usuario2.findByIdAndUpdate(req.params.id,{estado:0},(err,antiguo)=>{
        if(err)
            return res.status(400).json({estado:0,error:err});
        return res.status(400).json({estado:1,mgs:'Datos borrado!!!'});
    });
}
function edit(req,res,next){
    req.body.estado=1;
    Usuario2.findByIdAndUpdate(req.params.id,req.body,(err,antiguo)=>{
        if(err)
            return res.status(400).json({estado:0,error:err});
        return res.status(400).json({estado:1,mgs:'Datos borrado!!!'});
    });
}
module.exports={
    lista:list,
    nuevo:add,
    borrar:remove,
    editar:edit
}