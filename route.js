const express=require('express');
var router=express.Router();

router.get('/', (req,res)=>{
    // res.sendfile(path.join(__dirname,'index.html'))
      res.render('index')
});
router.get('/loginUser', (req,res)=>{
   
      res.render("loginUser")
});
router.get('/signUpUser', (req,res)=>{
   
      res.render("signup")
});

module.exports=router;