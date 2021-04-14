const http=require('http');
function processRequest(req,res)
{
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('Hello World!');
    res.end();
}
http.createServer(processRequest).listen(3000);