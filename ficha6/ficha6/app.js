var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const fs = require('fs');
const PORT = 3000;
const LOG_FILE = 'log.txt';

// info log
const logEntry = `${new Date().toISOString()}, ${req.method}, ${req.url}\n`;


// ficheiro log 
fs.appendFile(LOG_FILE, logEntry, (err) => {
  if (err) {
      console.error('Erro ao escrever no ficheiro log:', err);
  }
});

// lista conteudo do ficheiro log
app.get('/logs', (req, res) => {
  fs.readFile(LOG_FILE, 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
  });
});

// download do ficheiro log.txt
app.get('/download-logs', (req, res) => {
  res.download(LOG_FILE, 'log.txt', (err) => {
  });
});

// apagar o ficheiro log.txt
app.get('/clear-logs', (req, res) => {
  fs.writeFile(LOG_FILE, '', (err) => {
      if (err) {
          return res.status(404).send('Erro ao limpar o ficheiro de log.');
      }
      res.send('Ficheiro de log apagado com sucesso.');
  });
});


// cabeçalho
app.get('/user/:name', (req, res) => {
  const userName = req.params.name; 
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Olá, ${userName}! Bem-vindo ao servidor.`);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
