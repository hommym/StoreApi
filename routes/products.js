// importing express
const express= require("express")


// importing collection 
const {products}=require("../models/product")




const routes= express.Router()

// featured, company, name, sort, fields,limit ,page numericFilters =query parameters

routes.get("/", async (req,res)=>{

try {

const {featured,company,name,fields,sort,limit,page}=req.query
const queryObject={}

if(featured){
    queryObject.featured=Boolean(featured==="true")
}

if(company){
    queryObject.company=company
}

if(name){
    queryObject.name={$regex:`${name}`,$options:'i'}
}

const queryReturned=  products.find(queryObject)


// setting the properties to be used for sorting
if(sort){
    queryReturned.sort(sort.split(",").join(" "))
}


// // setting the proprties that is returned in the returned documents 
if(fields){
     queryReturned.select(fields.split(",").join(" "))
}

// // setting up paging functionality
const limitNumber=(limit)? Number(limit):10
const pageNumber=(page)? Number(page):1

queryReturned.limit(limitNumber).skip((pageNumber-1)*limitNumber)


const allProducts= await queryReturned


res.status(200).json({products:allProducts ,numOfProducts:allProducts.length})

} catch (error) {
    
    res.status(500).json({message:error})
}

})




module.exports={routes}