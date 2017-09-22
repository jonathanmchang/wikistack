const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const chalk=require('chalk');



app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'))

app.get('/',function(req,res){
    res.send("you got the root")
})

app.listen(3000,function(){
    console.log( "Example app listening on port 3000" )
})

// app.use('/', routes)