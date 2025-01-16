const mongoose= require('mongoose')
const connectDB = async()=>{
   await mongoose.connect('mongodb+srv://debajitdey90:debajit@devcoder.aqbuo.mongodb.net/getMatched')
}
module.exports=connectDB

