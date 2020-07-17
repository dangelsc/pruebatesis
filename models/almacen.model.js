var mongoose=require('mongoose');

var modelo =
 new mongoose.Schema({
    nombre:{ 
      type:String,
      required:[true,'te dije que esto es necesario!!!']
    },
    direccion:String,
    estado:Number,
    compras:[
      {
        fecha:Date,
        proveedor:String,
        total:Number,
        detalle:[
          {
            producto:{ 
              type:mongoose.Schema.Types.ObjectId,
              ref:'producto'
            },
            cant:Number,
            precioCompra:Number,
            importe:Number
          }
        ]
      }
    ],
    ventas:[
      {
        fecha:Date,
        cliente:String,
        total:Number,
        detalle:[
          {
            producto:{ 
              type:mongoose.Schema.Types.ObjectId,
              ref:'producto'
            },
            cant:Number,
            precio:Number,
            importe:Number
          }
        ]
      }
    ],
  },{
      document:'almacen',
  });

module.exports=mongoose.model('almacen',modelo);
