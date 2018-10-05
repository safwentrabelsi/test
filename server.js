const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')


const messageModel= require('./model/messageModel')



const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.port || 3001;

app.listen(port,() =>{
    console.log('server started on port '+port);

});
mongoose.connect('mongodb://webmaster:web123@ds223063.mlab.com:23063/message')
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

app.post('/addmessage',(req,res)=>{

if(validateEmail(req.body.email)){
    
    new messageModel({
        name: req.body.name,
        email: req.body.email,
        content:req.body.content
      }).save().then((newMessage)=>{
       
       res.send(true);
    
     } )
    }else{
        res.send(false)
        
    }
})
app.get('/getmessage',(req,res)=>{
    messageModel.find({}, { id:1, name: 1, email:1,content:1 }).then((current)=>{
        res.json(current)
    })
})