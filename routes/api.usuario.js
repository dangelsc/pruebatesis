var express = require('express');
var router = express.Router();
var control = require('../controllers/api.controller.usuario');
/* GET home page. */
//dominio.com/api/usuario/
//listar
router.get('/',control.lista );
//nuevo
router.post('/',control.nuevo);
//router.post('/roles',control.rol);
//editar
router.put('/:id',control.editar);
//borrar
router.delete('/:id',control.borrar);
/**  rest api
 * get-> listar, busquedas
 * post->insertar
 * put->editar
 * delete->borrar
 * 
*/

//ORM
//mysql,postgres,sqlserver-> Sequelize()
//mongodb,tink,redis,->mongoose,

module.exports = router;
