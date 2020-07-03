var mongoose=require('mongoose');

var modelo =
 new mongoose.Schema({
    nombre:{ 
      type:String,
      required:[true,'te dije que esto es necesario!!!']
    },
    a_paterno:String,
    a_materno:String,
    ci:String,
    estado:Number,
    login:String,
    password:String,
    rol:{
      tipo:String,
      nombre:String,
    },
    //_id:objectID
  },{
      document:'usuario',
  });

module.exports=mongoose.model('usuario',modelo);
