var fs = require('fs');
var path = require('path');


exports.get = function(req,res){
    res.end(req.query.username);
}


exports.post = function(req,res){
    res.end(req.body.userId);
}

exports.savePng = function(req,res){
    //var thumbnail = req.files.thumbnail
    //var postData = req.files;
    console.log('---------------------------------------');
    console.log(req.is());
    console.log(req.files);

}

exports.png = function(req,res){}