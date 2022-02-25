const mongoose=require("mongoose")

const posts=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:false,
    },
    posttitle:{
        type:String,
        required:true,
    },
    postdesc:{
        type:String,
        required:true,
    }

},
    { timestamps: true }
)

module.exports=mongoose.model("posts",posts)