// importing fuction for connecting to database
const {connectDB}=require("./db/connect.js")

// importing model for crude operations
const {products}= require("./models/product.js")



// importing dotenv
require("dotenv").config()


// importing data
const data=require("./products.json")

const populateData= async()=>{

try {
await connectDB(process.env.ConnectionUrl)
products.create(data)

console.log("Successs");
} catch (error) {
    console.log(`Failed`);
}



}

populateData()

