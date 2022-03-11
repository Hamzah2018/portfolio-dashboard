var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose = require("mongoose");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./config/db');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const Person = require('./models/person.js');
var app = express();
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.urlencoded())
app.get('/protofile',auth,(req,res)=>{
    // req.query.role
    res.render('protofile');
});
app.get("/add_person", auth, (req, res) => {
  res.render("protofile");
});
app.post('/add_person',auth,(req,res)=>{
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


// app.get('/person/add','auth',(req,res)=>{
//   res.render('protofile');
// });
// app.post('/person/add',upload.single('image'),(req,res)=>{
// res.end();
//     //  const p = new Person({
//     //    id:mongoose.Types.ObjectId,
//     //   name:req.body.name,
//     //   portfileText:req.body.profile_name,
//     //   portfileImage:req.body.image
//     //  });
// });















// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
