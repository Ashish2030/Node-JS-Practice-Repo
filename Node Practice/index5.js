const http=require('http');
const fs=require('fs');
const url=require('url');
http.createServer(function(req,res)
{
    
    if(req.url==='/login')
    {
        fs.readFile('index.html',function(err,data)
        {
            if(err)
            {
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write('not found');
                res.end();
            }
            else
            {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end(); 
            }
        })
    }
    else if(req.url==='/homepage')
    {
        fs.readFile('home.html',function(err,data)
        {
            if(err)
            {
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write('not found');
                res.end();
            }
            else
            {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end(); 
            }
        });

    }
    else if(url.parse(req.url,true).pathname==='/logreq')
    {
        var data=url.parse(req.url,true).query;
    console.log(data);
        
        if(data.nm==='a'&& data.pwd==='123')
        {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('ashish');
            res.end(); 

        }
        else
        {
            res.writeHead(404,{'Content-Type':'text/html'});
                res.write('not Valid');
                res.end();
        }

    }
    else if(req.url==='/formpage')
    {
        fs.readFile('form.html',function(err,data)
        {
            if(err)
            {
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write('not found');
                res.end();
            }
            else
            {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end(); 
            }
        })
    }
    else
    {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('not found');
        res.end();
    }
}).listen(3000,function()
{
    console.log("done");
})