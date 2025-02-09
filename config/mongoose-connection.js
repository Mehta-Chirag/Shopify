const mongoose = require('mongoose');

const uri = 'mongodb+srv://chirag233:lShiTsfhR2eSR5D9@newtodo.at5aviu.mongodb.net/?retryWrites=true&w=majority&appName=NewTodo';

mongoose
.connect(uri)
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;