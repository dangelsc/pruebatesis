var express = require('express');
var router = express.Router();
var control = require('../controllers/api.controller.medico');
var verifica=require('../middleware/controlAccess');
/* GET home page. */
//dominio.com/api/usuario/
//listar
router.get('/',//verifica.control,
control.lista );
router.get('/busqueda/:busqueda',//verifica.control,
control.buscar );
router.get('/medico/:id',//verifica.control,
control.getitem );
//nuevo
router.post('/',//verifica.control,
control.nuevo);
//router.post('/roles',control.rol);
//editar
router.put('/:id',verifica.control,control.editar);
//borrar
router.delete('/:id',verifica.control,control.borrar);

module.exports = router;
