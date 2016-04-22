var fs = require('fs');
var path = require('path');


exports.get = function(req,res){
    res.end(req.query.username);
}


exports.post = function(req,res){
    res.end(req.body.userId);
}

exports.savePng = function(req,res,next){
    var pngData = req.files.fileUpload;
    var filePath = pngData.path;
    var originalFilename = pngData.originalFilename;

    if(originalFilename){
        fs.readFile(filePath, function(err, data){
            var timestamp = Date.now();
            var type = pngData.type.split('/')[1];
            var pngfile = timestamp + '.' + type;
            var newPath = path.join(__dirname, '../../', '/public/upload/' + pngfile);

            fs.writeFile(newPath, data, function(err){
                console.log('file write success');
                //req.pngfile = pngfile;
                //next();

                //将文件返回给Unity
                var options = {
                    root: __dirname + '../../../' + '/public/upload/',
                    dotfiles: 'deny',
                    /*headers: {
                        'x-timestamp': Date.now(),
                        'x-sent': true
                    }*/
                };

                var fileName = pngfile;
                res.sendFile(fileName, options, function (err) {
                    if (err) {
                        console.log(err);
                        res.status(err.status).end();
                    }
                    else {
                        console.log('Sent:', fileName);
                    }
                });

            })
        })
    }else{
        console.log('no file exist');
        //next();
    }

}

/*
exports.getSound = function(req,res){

    var fileName = "/public/sounds/music.wav";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', fileName);
        }
    });
}*/
