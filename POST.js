var newFunc=require("through2-map");

var http=require("http");

var server=http.createServer(function(req,res){
req.pipe(newFunc(function(portionOfString){
    console.log(req);
    return portionOfString.toString().toUpperCase();
    
})).pipe(res);

});

server.listen(process.argv[2]);