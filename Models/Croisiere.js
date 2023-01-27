const mongoose=require("mongoose")

const croiSchema=mongoose.Schema({
depart:{type:String},
date:{type:String},
escale1:{type:String},
escale2:{type:String},
escale3:{type:String},
escale4:{type:String},
escale5:{type:String},
escale6:{type:String},
img1:{type:String},
img2:{type:String},
img3:{type:String},
prix:{type:Number}
},{versionKey: false })

const Croisiéres=mongoose.model("croisiers",croiSchema)
module.exports=Croisiéres
