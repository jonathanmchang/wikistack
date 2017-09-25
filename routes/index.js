
const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');


router.use('/', wikiRouter);
router.use('/wiki',wikiRouter);
router.use('/user',userRouter);
// router.get('/',function(req,res){
//     res.send("is it here?")
// })



module.exports = router;


