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
    img:String,
    estado:Number
  },{
      document:'medico',
  });

module.exports=mongoose.model('medico',modelo);