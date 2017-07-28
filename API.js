var http=require("http");
var url = require('url');

var server=http.createServer(function(req,res){
    
    
   var url_parts = url.parse(req.url, true);
    
var query = url_parts.query;
    var iso=query.iso;
   var date=new Date(iso);
    if(typeof (res.writeHead)==="function")
     res.writeHead(200, { 'Content-Type': 'application/json' });
    if(url_parts.pathname==="/api/parsetime")
  var data={"hour":date.getHours(),"minute":date.getMinutes(),"second":date.getSeconds()};
    else if(url_parts.pathname==="/api/unixtime")
       var data={"unixtime":date.getTime()};
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(process.argv[2]);