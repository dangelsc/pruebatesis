var mongoose=require('mongoose');

var modelo =
 new mongoose.Schema({
    nombre:{ 
      type:String,
      required:[true,'te dije que esto es necesario!!!']
    },
    cantidad:Number,
    precio:String,
    categoria:String,
    estado:Number
  },{
      document:'producto',
  });

module.exports=mongoose.model('producto',modelo);