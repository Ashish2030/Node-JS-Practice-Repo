const fs=require('fs');
fs.appendFile('data.txt','append ashish',function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('save');
    }

});