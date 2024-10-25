const express = require("express")
const app = express()
require("dotenv").config();

const dashboardRoutes = require("./router/router");
const { default: mongoose } = require("mongoose");



mongoose.connect (process.env.connect_str).then(()=>{
    console.log("Data base is connected")
    app.listen(process.env.PORT,()=>{
        console.log(`Hello Dashboard Listing to the port ${process.env.PORT}`)
    })
}).catch((error)=>{
console.log(`error in correction db : ${error}`)
})



app.use("/dashboard",dashboardRoutes)
app.use(express.json())

