const express = require( 'express');
const  app  = express();

app.get('/', function (req, res){

  res.write("a maronn");
  res.end();

}
);

app.get('/index', function (req, res){

  res.sendFile(__dirname + '/Index/index.html');

});

app.get('/login', function (req, res){

res.sendFile(__dirname + '/Index/Login.html');

});

app.listen(process.env.PORT || 3000);
