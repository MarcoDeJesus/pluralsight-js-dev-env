import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */

const port = 3001;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


//Removing since now we're consuming the service from Heroku
/*
app.get('/users', function(req, res){
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1, "fitstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2, "fitstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3, "fitstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});
*/

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
