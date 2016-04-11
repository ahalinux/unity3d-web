var http = require('http');
var url = require('url');
var httpParam = require('./http_parm');

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    httpParam.init(req, res);
    switch(pathname){

        case '/get' : resGet(res,req);
            break;

        case '/post' : resPost(res, req);
            break;

        default : resDefault(res);
            break;

    }
}).listen(1337, "192.168.1.14");

function resDefault(res){
    res.end("Default Process");
}

/** 同步GET
function resGet(res){
    var getData = httpParam.GET();
    res.end(getData);
}
*/

function resGet(res, req){
    req.setEncoding('utf8');
    httpParam.GET(function(getData){
        res.end(getData);
    });
}

function resPost(res, req){
    req.setEncoding('utf8');
    httpParam.POST(function(postData){
        res.end(postData);
    });
}

console.log('Server running at http://192.168.1.14:1337');