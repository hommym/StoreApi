// importing express
const express= require("express")
const app=express()

// importing dotenv
require("dotenv").config()


// importing fuction for connecting to database
const {connectDB}=require("./db/connect.js")

// importing routes
const {routes}= require("./routes/products.js")

// importing not found middleware

const {notFound}= require("./middleware/not-found.js")












// settig up routes
app.use("/api/v1/products",routes)


// setting up respond for accessing unavialable resources
 app.use(notFound)

 


// setting up server port
const port=(process.env.PORT!==undefined)?process.env.PORT:3000





const start= async ()=>{

// connecting to dataBase
await connectDB(process.env.ConnectionUrl)

app.listen(port,()=>{

    console.log(`Server is listening to port ${port}`);
})

}


// starting application
start()
