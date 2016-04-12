

exports.get = function(req,res){
    res.end(req.query.username);
}


exports.post = function(req,res){
    res.end(req.body.userId);
}