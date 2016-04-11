var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    var parmstr = url.parse(req.url).query;
    var parm = querystring.parse(parmstr);

    console.log(pathname);
    console.log(parmstr);
    console.log(parm);

    switch(pathname){
        case '/index' : resIndex(res);
            break;
        case '/img'   : resImage(res);
            break;
        default       : resDefault(req,res);
            break;
    }

    //console.log(req.method);
    //console.log(req.headers);

}).listen(1337, "192.168.1.14");

function resIndex(res){
    /* 获取当前index.html的路径 */
    var readPath = __dirname + '/' +url.parse('index.html').pathname;
    var indexPage = fs.readFileSync(readPath);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexPage);
}

function resImage(res){
    /* 获取当前image的路径 */
    var readPath = __dirname + '/' +url.parse('logo.png').pathname;
    var indexPage = fs.readFileSync(readPath);
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(indexPage);
}

function resDefault(req,res){
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end((querystring.parse(url.parse(req.url).query)).username);
}

console.log('Server running at http://192.168.1.14:1337');