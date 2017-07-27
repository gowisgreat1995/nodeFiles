var http=require("http");
var url = require('url');

var server=http.createServer(function(req,res){
    
    
   var url_parts = url.parse(req.url, true);
    console.log(url_parts);
var query = url_parts.query;
    var iso=query.iso;
   var date=new Date(iso);
    return {"hour":date.getHours,"minutes":date.getMinutes,"seconds":date.getSeconds};
    res.end();
});

server.listen(process.argv[2]);