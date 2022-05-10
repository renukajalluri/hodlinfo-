const express = require('express');
const path  = require('path')
const res = require('express/lib/response');

const db  = require('./config/mongoose');
const Post = require('./models/fetch')

const fetch = require('node-fetch');
const app = express();

// port
var port_number = process.env.PORT ||3000;

// setting ejs
app.set('view engine','ejs');

// path to views
app.set('views',path.join(__dirname,'views'));

app.use(express.static('assets'));

// fetching data 
async function getPosts(){

    fetch("https://api.wazirx.com/api/v2/tickers")
  .then(response => response.json())
  .then(data => 
    { 
        // insering data to db
    Post.insertMany(Object.values(data))
    });
    }
    getPosts();


app.get('/',(req,res)=>{
   Post.find({},(err,post)=>{
    //    console.log(post.slice(0,10))
       if(err){
           console.log(err)
       }else{
           return res.render('home',{post:post.slice(10,21)})
       }
   })
})


app.listen(port_number,()=>{
    // console.log("listening on port 3000");    
    console.log(`listening on port ${port_number}`);    
})