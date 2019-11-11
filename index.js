require('dotenv-safe').config()
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')

const usuarios = require('./routes/usuarios')
const filmes = require('./routes/filmes')
const categorias = require('./routes/categorias')
const comentarios = require('./routes/comentarios')

const mongoose = require('./config/database')
require('./config/validate')()
const app = express()

app.use(cors())
//app.use(cors({origin: ['http://localhost:5000','http://localhost:8100']}))
app.use(helmet())
app.use(logger('dev'));
app.use(bodyParser.json())
//app.use(bodyParser.json({limit: '20mb'}))

app.get('/', function(req, res){
  //res.sendStatus(403);
  res.json({status: "success",code:200, message: "ok", data: null});
});
app.use('/usuarios', usuarios);
app.use('/filmes', authorize, filmes);
app.use('/categorias', authorize, categorias);
app.use('/comentarios', authorize, comentarios);

app.use(function(req, res, next){
  let err = new Error('not found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next){
  if(err.status === 404){
  	res.status(404).json({message: "not found"});
  }else{
    res.status(500).json({message: "something wrong"});
  }
});

var porta = process.env.PORT || 8080;
app.listen(porta);
//app.listen(process.env.PORT, '127.0.0.1');
//module.exports = app;
