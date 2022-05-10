const mongoose = require("mongoose");

const DB = 'mongodb+srv://Signup:123@cluster0.nnrbm.mongodb.net/intern?retryWrites=true&w=majority';



mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('connection successful')
}).catch((err)=>{
   console.log(err)            
})