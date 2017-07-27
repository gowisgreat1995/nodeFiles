var http=require("http");
var bl=require("bl");
var arr=[];var recieved=[];var count=1;

for(var i=2;i<process.argv.length;i++)
    {
        
        arr.push(process.argv[i]);
    }


for(var i=2;i<process.argv.length;i++)
    {
        http.get(process.argv[i],function(res)
                
                {
            
            
            res.pipe(bl(function(err,data)
                        {
            
            
                     recieved[arr.indexOf(process.argv[i])]=data.toString();
                     console.log(data.toString());
                
           
            }));
        if(recieved.length===3)
            printThem(recieved);
        
        }
                ).on("error",function(e){
        
        console.log("Error:"+e);
    });
        
    }

function printThem(array)
{
    
    for(i=0;i<array.length;i++)
        console.log(array[i]);
}