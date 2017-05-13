var express = require('express');
var ejs = require('ejs');

var app = express();

app.set('views', __dirname + '/docs');
app.set('view engine', 'ejs');
app.engine('ejs',ejs.renderFile);

app.use(express.static('docs/'));

app.get('/', function(req, res){
  // res.render('index', {});
  res.render('main', {});
});

app.get('/test', function(req, res){
  res.render('main', {});
});

app.listen(3000);
