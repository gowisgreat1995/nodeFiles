var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
    
    
            readstream=fs.createReadStream(process.argv[3]);
        readstream.pipe(res);
    
    
    
    
});


server.listen(process.argv[2]);