
const express = require('express');
const router = express.Router();
const bodyParser=require('body-parser')
module.exports = router;
var models = require('../models');
var Page = models.Page; 
var User = models.User; 
router.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
    res.send('got to GET /wiki/');
  });
  
  router.post('/', function(req, res, next) {
    res.send('got to POST /wiki/');
  });
  
  router.get('/add', function(req, res, next) {
    res.render('addpage');
  });


  router.post('/add', function(req, res, next) {
      console.log(req.body.title)
      Page.create({  
        title: req.body.title,
        content: req.body.content
      })
     
      .then(function(page){
        res.json(page)
      }
    
    )
    
      // STUDENT ASSIGNMENT:
      // make sure we only redirect *after* our save is complete!
      // note: `.save` returns a promise or it can take a callback.
      // -> after save -> res.redirect('/');
    });
