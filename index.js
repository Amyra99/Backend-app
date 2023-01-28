const express =require ("express"); 
const mongoose=require("mongoose");
const cors = require('cors');


const VolsModel=require("./Models/Vol")
const HotelsModel=require("./Models/Hotel")
const CommentModel=require("./Models/Comments")
const CroisModel=require("./Models/Croisiere")
const RVolsModel=require("./Models/ReservationVol")

const app=express();
app.use(express.json()) ; 

app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/Vols",{
    useNewUrlParser: true,
   useUnifiedTopology: true
},async (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected");
    }
}

);

app.get('/aa',async(req,res)=>{
 
    const RV=new RVolsModel({prenom:"Amira",nom:"Soltani",Numero:"21002008",Email:"Amyra@gmail.com"})
console.log(RV)
    try{
        await RV.save();
         }catch(err){
           console.log(err)
        }
});

app.get('/com',async(req,res)=>{
 
    const com=new CommentModel({hotel:"france",user:"amira",note:5,msg:"mediocre"})
console.log(com)
    try{
        await com.save();
         }catch(err){
           console.log(err)
        }
});

   
   app.get("/croisiere",async(req,res)=>{
   
    CroisModel.find({},(err,result)=>{
    if (err){
        
        res.send(err)
    }
    else{
       // console.log(result)
    res.send(result)
 }    })} );
 
    
  

   


   app.post('/insertCom',async(req,res)=>{
    const hotel=req.body.hotel;
    const user=req.body.user;
    const note=req.body.note;
    const msg=req.body.msg;

    
     const com=new CommentModel({hotel:hotel,user:user,note:note,msg:msg}
     
    
    );
     
    try{
    await com.save();
    }catch(err){
        console.log(err)
    }
    })




    app.post('/insertvol',async(req,res)=>{
        const prenom=req.body.prenom;
        const nom=req.body.nom;
        const Numero=req.body.Numero;
        const Email=req.body.Email;
    
        
         const RV=new RVolsModel({prenom:prenom,nom:nom,Numero:Numero,Email:Email}
         
        
        );
         
        try{
        await RV.save();
        }catch(err){
            console.log(err)
        }
        })
    









    var Sentiment=require('sentiment')
    var sentiment=new Sentiment()
    var docx=sentiment.analyze("I LIKE APPLE")
    console.log(docx)





app.post('/insert',async(req,res)=>{
const de=req.body.De;
const dest=req.body.Destination;
const h=req.body.horaire;
const comp=req.body.compagnie;
const prix=req.body.prix;
const note=req.body.note;
const ref=req.body.ref;

 const vol=new VolsModel({De:de,Destination:dest,horaire:h,compagnie:comp,prix:prix,note:note,ref:ref}
 

);
 
try{
await vol.save();
}catch(err){
    console.log(err)
}
})



app.get("/read",async(req,res)=>{
   
    VolsModel.find({},(err,result)=>{
    if (err){
        res.send(err)
    }
    else{
    res.send(result)
 }    })} );

        app.get("/readhotels",async(req,res)=>{
   
            HotelsModel.find({},(err,result)=>{
            if (err){
                res.send(err)
            }
            else{
            res.send(result)
         }    })}
                
                );
                app.get("/readcomments",async(req,res)=>{
   
                    CommentModel.find({},(err,result)=>{
                    if (err){
                        res.send(err)
                    }
                    else{
                    res.send(result)
                 }    })}
                        
                        );




app.listen(3001,()=>{
    console.log("server working!!")
})