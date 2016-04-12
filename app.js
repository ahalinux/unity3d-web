var express = require('express')
var path = require('path')

//var mongoose = require('mongoose')
var bodyParser = require('body-parser')

//var cookieParser = require('cookie-parser')
//var session = require('express-session')
//var mongoStore = require('connect-mongo')(session)

var serveStatic = require('serve-static')
var app = express()

//连接数据库
//var dbUrl = 'mongodb://localhost/unitydb'
//mongoose.connect(dbUrl)

//设置视图和模板引擎
app.set('views','./app/views/pages')
app.set('view engine','jade')

app.use(bodyParser.urlencoded())
/*app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
    secret: 'mylove',
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({
        url: dbUrl,
        collection: 'sessions'
    })
}))*/


//app.locals.moment = require('moment')
app.use(serveStatic(path.join(__dirname,'public')))

require('./config/routes')(app)

process.env.PORT = 1337;
var port = process.env.PORT || 5000
app.listen(port)

console.log('Site started on port ' + port)