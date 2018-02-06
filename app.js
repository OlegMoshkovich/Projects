var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var thoughts = require('./routes/thoughts');
var cv = require('./routes/cv');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/thoughts', thoughts);
app.use('/resume', cv);
app.use('/work', index);

app.get('/hello', function(req, res){
  res.json([
    {"title":"Trees","artist":"Reena Vaswani","url":"https://www.google.com/search?q=girls+scouts&ie=utf-8&oe=utf-8&client=firefox-b-1-ab","image":"http://localhost:4000/images/environment1.png","thumbnail_image":"http://localhost:4000/images/avatar1.png"},
    {"title":"Mountain","artist":"Kate Dobbs","url":"https://www.google.com/search?q=girls+scouts&ie=utf-8&oe=utf-8&client=firefox-b-1-ab","image":"http://localhost:4000/images/environment2.png","thumbnail_image":"http://localhost:4000/images/avatar2.png"},
    {"title":"More Trees","artist":"Jane Smith","url":"https://www.google.com/search?q=girls+scouts&ie=utf-8&oe=utf-8&client=firefox-b-1-ab","image":"http://localhost:4000/images/environment3.png","thumbnail_image":"http://localhost:4000/images/avatar3.png"},
    {"title":"More Mountain","artist":"Emma Brownstein","url":"https://www.google.com/search?q=girls+scouts&ie=utf-8&oe=utf-8&client=firefox-b-1-ab","image":"http://localhost:4000/images/environment4.png","thumbnail_image":"http://localhost:4000/images/avatar4.png"},
    {"title":"Rocks","artist":"Sophia Perez","url":"https://www.google.com/search?q=girls+scouts&ie=utf-8&oe=utf-8&client=firefox-b-1-ab","image":"http://localhost:4000/images/environment5.png","thumbnail_image":"http://localhost:4000/images/avatar5.png"}]
);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
