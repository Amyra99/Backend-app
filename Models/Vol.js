const mongoose=require("mongoose")

const volschema=mongoose.Schema({
    
    De:{
        type:String
    },
    Destination:{
        type:String
         
    },
     horaire:{
        type:String
         
    },
    compagnie:{
        type:String
    },
    prix:{type:String},
    ref:{type:String},
    note:{type:Number}



},{
    versionKey: false })

const Vols=mongoose.model("voldatas",volschema)
module.exports=Vols;