var express=require("express");

var app=express();
var path=require("path");


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/form',function(req,res){
    
    
   var str=req.body.str.split('').reverse().join('');
    res.send(str);
    res.end();
});
app.listen(process.argv[2]);