var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var express = require('express');
var router = express.Router();

var almacenPersona = [];
var plantillaPersona = {
  nombre:"",
  cuenta:"",
  correo:"",


};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// registrar
router.get('/datos', function(req,res,next){
  res.render('datos',{})
});
router.post('/datos',function(req,res,next){
        console.log(req.body);

        var newPersona = Object.assign({},plantillaPersona);
        newPersona.nombre =req.body.txtNombre;
        newPersona.cuenta =req.body.txtCuenta;
        newPersona.correo =req.body.txtCorreo;

        console.log(almacenPersona);
        var data = Object.assign({}, req.body);
        data.personas = almacenPersona;
        res.render('datos',data);
      });
module.exports = router;
