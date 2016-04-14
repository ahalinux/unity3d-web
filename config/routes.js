var Index = require('../app/controllers/index')

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

module.exports = function(app){

    // pre handle user
    /*app.use(function(req,res,next){
        var _user = req.session.user
        app.locals.user = _user
        next()
    })*/

    // Index
    app.get('/get', Index.get);
    app.post('/post', Index.post);
    app.post('/savepng', multipartMiddleware, Index.savePng);
    //app.post('/save', Index.save);




}