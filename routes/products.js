// importing express
const express= require("express")


// importing collection 
const {products}=require("../models/product")




const routes= express.Router()


routes.get("/", async (req,res)=>{

try {
const allProducts= await products.find({})
res.status(200).json({products:allProducts ,numOfProducts:allProducts.length})

} catch (error) {
    
    res.status(500).json({message:error})
}

})




module.exports={routes}