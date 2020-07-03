var express = require('express');
var router = express.Router();
var control = require('../controllers/api.controller.usuario');
var verifica=require('../middleware/controlAccess');
/* GET home page. */
//dominio.com/api/usuario/
//listar
router.get('/',verifica.control,control.lista );
//nuevo
router.post('/',verifica.control,control.nuevo);
//router.post('/roles',control.rol);
//editar
router.put('/:id',verifica.control,control.editar);
//borrar
router.delete('/:id',verifica.control,control.borrar);
//login
router.post('/login',control.login);
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
