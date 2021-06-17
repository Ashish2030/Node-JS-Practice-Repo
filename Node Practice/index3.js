const http=require('http');

http.createServer(function(req,res)
{
    if(req.url==='/login')
    {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('Login Page!');
    res.end();
    }
    else if(req.url==='/signup')
    {
        res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('Signup Page!');
    res.end();
    }
    else
    {
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write('Home Page!');
        res.end();
    }
}).listen(3000,function()
{
    console.log('server started at 3000');
});