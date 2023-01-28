const mongoose=require("mongoose")

const RvolSchema=mongoose.Schema({
    prenom:{type:String},
    nom:{type:String},
    Numero:{type:String},
    Email:{type:String}
},{ versionKey:false})

const Rvol=mongoose.model("ReservationVol",RvolSchema)
module.exports=Rvol