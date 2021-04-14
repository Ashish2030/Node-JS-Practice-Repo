const fs=require('fs');
fs.writeFile('data.txt','hello js ',function(err)
{
    if(err)
    {
        console.log(err);
    }

});