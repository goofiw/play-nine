var express = require('express');
    
var app = express();

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/scripts'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000);
