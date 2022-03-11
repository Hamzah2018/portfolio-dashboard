

const mongoose = require('../config/db');
const Schema = mongoose.Schema; 
//app.use(express.urlencoded());
const personSchema = new mongoose.Schema({
    // id:{type:String,require:true},
  name:{
    type:String,
    // required:true
  },
  portfileText:{
    type:String,
    // required:true
  },
  portfileImage:{
    type:String,
    // required:true
  }});
const person = mongoose.model("persons",personSchema);
module.exports = person;