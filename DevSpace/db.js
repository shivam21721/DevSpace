const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
dotenv.config()

 //const url = process.env.URL
const url = "mongodb+srv://shivam:Shivam2001@cluster0.os3m3y7.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, (err, client)=>{
    if(err) throw err

    console.log("db connected...")
    module.exports = client

    const app = require('./app')
    // app.listen(process.env.PORT, ()=>{
        app.listen(8000, ()=>{
        console.log("server listening on 8000...")
    })
})