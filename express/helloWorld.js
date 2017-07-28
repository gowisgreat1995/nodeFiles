var express=require("express");

var app=express();

app.get('/home',function(req,res){
    
  
    res.write("Hello World!");
    res.end();
    
}).on("error",function(e){console.log(e);});
app.listen(process.argv[2]);