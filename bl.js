var bl=require("bl");

var http=require("http");
var sum=0;
http.get(process.argv[2],function(res){
    sum=0;res.pipe(bl(function(err,data){
        var str=data.toString();
        console.log(str.length);
        console.log(str);
    }))
    
    
})