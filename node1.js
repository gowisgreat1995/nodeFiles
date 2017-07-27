var func=require("./module.js");


function printThem(err,data)
{
    
  if(err)
      console.log("THERE HAS BEEN AN ERROR "+err);
    else
        {
          
            for(i=0;i<data.length;i++)    
                console.log(data[i]);
    
            
            
        }
    
    
}
func(process.argv[2],process.argv[3],printThem);

