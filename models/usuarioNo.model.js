var mongoose=require('mongoose');

var modelo =
 new mongoose.Schema({
    nombre: String,
    a_paterno:String,
    a_materno:String,
    ci:String,
    estado:Number
    //_id:objectID
  },{
      document:'usuario',
  });

module.exports=mongoose.model('usuario',modelo);
