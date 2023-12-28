const express=require('express');
var router=express.Router();

router.get('/', (req,res)=>{
    // res.sendfile(path.join(__dirname,'index.html'))
      res.render('index')
});
router.get('/loginUser', (req,res)=>{
      res.render("loginUser")
});
router.get('/signupUser', (req,res)=>{

      res.render("signup")
});
router.get('/signupMessOwner', (req,res)=>{

      res.render("sign_up_for_owner")
});

module.exports=router;