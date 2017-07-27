module.exports = function (directory,fileExt,callback)
{
var fs=require("fs");
var path=require("path");
    var toReturn=[];
    var count=0;

fs.readdir(directory,function(err,gotData)
          {
   
 if(err)
     return callback(err);
for(i=0;i<gotData.length;i++){
         
        if(path.extname(gotData[i])===("."+fileExt))
        {  
            toReturn[count]=gotData[i];
            
            count++;}
        
        
    }
    
    callback(null,toReturn);
}) ;
   
    
    
}
