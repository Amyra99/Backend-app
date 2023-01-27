const mongoose=require("mongoose")

const ComSchema=mongoose.Schema({
    
  hotel:{type:String},
  user:{type:String},
  note:{type:Number},
  msg:{type:String}


},{
    versionKey: false })

const Comments=mongoose.model("Commentdatas",ComSchema)
module.exports=Comments;