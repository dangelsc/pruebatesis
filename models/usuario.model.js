const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('pymes', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
  });
//const sequelize = new Sequelize();

class Usuario extends Model {}

Usuario.init({
  // Model attributes are defined here
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  a_paterno: {
    type: DataTypes.STRING
   },
   a_materno: {
    type: DataTypes.STRING
   },
   estado: {
    type: DataTypes.TINYINT
   },
   ci: {
    type: DataTypes.STRING
   }
   ,
   idrol: {
    type: DataTypes.INTEGER            
   },
   id: {
    type: DataTypes.INTEGER ,
    primaryKey: true          
   }

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  //modelName: 'Usuario', // We need to choose the model name
  timestamps: false,
  tableName: 'tbpersona'
});
module.exports=Usuario;