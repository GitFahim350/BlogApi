
const mongoose=require("mongoose")

mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    posttitle:{
        type:string,
        required:true,
    },
    postdesc:{
        type:String,
        required:true,
    }

})