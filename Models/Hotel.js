const mongoose=require("mongoose")

const hotelschema=mongoose.Schema({
    
    Pays:{
        type:String
    },
    region:{
type:String
    },
    Nom:{
        type:String
         
    },
    number:{type:String}
,
 stars:{
        type:Number},
 prix:{ type:Number},
 img1:{ type:String},
 img2:{ type:String},
img3:{type:String},
         
    



},{versionKey: false })

const Hotels=mongoose.model("hoteldata",hotelschema)
module.exports=Hotels;