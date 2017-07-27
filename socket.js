var net=require("net");

var server=net.createServer(function(socket){
    var date=new Date();
    var month=parseInt(date.getMonth())+1;
    if(month<10)
        month="0"+month;
    socket.write(date.getFullYear()+"-"+month+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n");
    socket.on("error",function(e){
        
       console.log(e); 
    });
   socket.end(); 
}).on("error",function(e){console.log("");});
server.listen(process.argv[2]);