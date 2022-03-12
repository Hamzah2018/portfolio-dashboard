var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
const multer = require('multer');
const app = require('../app');
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    if(file.mimetype=="image/png" || file.mimetype=="image/jpg")
    cb(null,"public/uploads/")
    else if(file.mimetype== "application/pdf")
    cb(null,"public/pdf/")
  },filename:(req,file,cb)=>{
    var extension = file.originalname.split(".");
    var ext = extension[extension.length - 1];

    //var uploaded_file_name =Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname;
    var uploaded_file_name =
      file.fieldname +
      "-" +
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "." +
      ext;

    cb(null, uploaded_file_name);
  }
});
const upload = multer({ 
  storage:storage,
fileFilter:(req,file,callback)=>{
 if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "application/pdf"){
   callback(null,true)
 }
 else callback(null,false)
  // file.mimetype
  // callback()
},  limits:1024*1024 * 5
});
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
router.post('/add_person',upload.single('pro_image'),(req,res)=>{
    const p = new Person(
      {
          id:mongoose.Types.ObjectId,
          name: req.body.namep,
          portfileText:req.body.profile_desc,
          // portfileImage:req.body.pro_image
          portfileImage:req.file.filename
          
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