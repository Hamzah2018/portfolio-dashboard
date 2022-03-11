var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
// var conn = mongoose.connection;
// conn.on('connected', function() {
//     console.log('database is connected successfully');
// })
// conn.on('disconnected',function(){
//     console.log('database is disconnected successfully');
// })
// conn.on('error', console.error.bind(console, 'connection error:'));
// module.exports = conn;
                //  'mongodb://localhost:27017/test
mongoose.connect("mongodb://localhost:27017/dashboard3").then((resu)=>{
//  console.log(resu);
}).catch((erree)=>{
// console.log(erree);

});
module.exports = mongoose;