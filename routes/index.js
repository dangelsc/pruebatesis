var express = require('express');
var router = express.Router();

/* GET home page. */
//dominio.com/
router.get('/', function(req, res, next) {
  //req del clientes
  //res mandar al clientes
  res.render('index', { title: 'Express' });
});
/**  rest api
 * get-> listar, busquedas
 * post->insertar
 * put->editar
 * delete->borrar
 * 
*/
module.exports = router;
