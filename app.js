/**
 * nodejs
 * >npm install express-generator -g
 * >npm install nodemon -g 
 * >express --view=ejs  mitesis
 * >cd mitesis
 * >npm install
 * >nodemon
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiusuario  = require('./routes/api.usuario');
var apimedico  = require('./routes/api.medico');
var upload = require('./routes/upload')
var imagenesRoutes = require('./routes/images')
var middle=require('./middleware/controlAccess');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

///////////////////////////////////////////
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tesis', {useNewUrlParser: true});
const db = mongoose.connection;
mongoose.set('debug', true);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('conectados!!!!!');
});
///////////////////////////////////////////
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('mariadb://root:@localhost:5432/pymes') // Example for postgres
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
///////////////////////////////////////////
app.use(middle.cord);
///dominio.com
///localhost:3000
app.use('/', indexRouter);
//dominio.com/users/
app.use('/users', usersRouter);
app.use('/api/usuario',apiusuario);
app.use('/api/medico',apimedico);
app.use('/api/upload',upload)
app.use('/api/img', imagenesRoutes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
