var Index = require('../app/controllers/index')

module.exports = function(app){

    // pre handle user
    /*app.use(function(req,res,next){
        var _user = req.session.user
        app.locals.user = _user
        next()
    })*/

    // Index
    app.get('/get', Index.get)
    app.post('/post', Index.post)



}