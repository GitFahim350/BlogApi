const mongoose=require('mongoose')
const category=mongoose.Schema({
    categoryname:{
        type:String,
        required:true,
        unique:true
    }
},
{ timestamps: true })
module.exports=mongoose.model("category",category)