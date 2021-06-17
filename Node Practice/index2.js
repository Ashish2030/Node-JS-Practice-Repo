const http=require('http');

http.createServer(function(req,res)
{
    var person={
        id:1,
        name:"ashish",

    };
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write(JSON.stringify(person));
    res.end();
}).listen(3000,function()
{
    console.log('server started at 3000');
});