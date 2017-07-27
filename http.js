var http=require("http");

http.get(process.argv[2],function(response){
    
   response.on("data",function(data)
              {
       console.log(data+"");
       
   });
    
    
    
}).on('error',function(e){
    
    
    console.log("ERROR MESSAGE:"+e);
});