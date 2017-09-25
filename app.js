const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const chalk=require('chalk');
const models = require('./models');

app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))

// app.get('/',function(req,res){
//     res.send("you got the root")
// })

app.get('/',function(req,res){
 res.send('./models')
})

models.db.sync({force: true})
.then(function () {
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);
