// importing mongoose
const mongoose= require("mongoose")


// creating schema
const schema= new mongoose.Schema({

    name:{ type:String,
    required:true,
    },

    price:{
        type:Number,
        required:true
    },

    company:{
        type:String,
        enum:["caressa", "ikea","liddy","marcos"],
        required:true
    },
    rating:Number
       
})



// creating collection
const products=mongoose.model("Product",schema)



module.exports={products}