const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name:String,
    email: String,
    content:String
})

const message =mongoose.model('message',messageSchema)

module.exports= message;