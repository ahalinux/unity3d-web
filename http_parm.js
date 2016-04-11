var _res,_req;
var url = require('url');

// 初始化res和req
exports.init = function(req, res){
    _res = res;
    _req = req;
}

/** 同步处理GET请求
exports.GET = function(key){
    var getData = url.parse(_req.url).query;
    return getData;
}
*/

// 处理GET请求
exports.GET = function(callback){
    var getData = url.parse(_req.url).query;
    callback(getData);
}

// 处理POST请求
exports.POST = function(callback){
    var postData = '';

    _req.addListener('data', function(postDataChunk) {
        postData += postDataChunk;
    });

    _req.addListener('end', function() {
        callback(postData);
    });
}