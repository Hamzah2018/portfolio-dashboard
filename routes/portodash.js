var express = require('express');
var router = express.Router();
const Person = require('../models/person');

/* GET users listing. */


//--------------------------------
///protofile
router.get('/protofile',auth,(req,res)=>{
    // req.query.role
    res.render('protofile');
});
router.get("/add_person", auth, (req, res) => {
  res.render("protofile");
});
router.post('/add_person',auth,(req,res)=>{
    const p = new Person(
      {
          name: req.body.namep,
          portfileText:req.body.profile_desc,
          portfileImage:req.body.pro_image
      }   
    )
    p.save((error,result)=>{
      if(error)
     console.log(error.message);
      else
      console.log(result);});
      console.log("data inserted successful");
    res.end();
//    res.render("user_info", { info: req.body });
//  console.log(req.body);
// res.render('protofile')
    // res.end();
});

function auth(req,res,next){
    next();
}
module.exports = router;