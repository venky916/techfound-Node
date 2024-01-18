const express = require('express')
const mongoose = require('mongoose')
const morgan= require('morgan')
const bodyparser=express('body-parser')

mongoose.connect('mongodb://localhost:2701/trydb',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})

const db= mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('Database Connection Establisher')
})


const app=express()

app.use(morgan('dev'))
// app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


const PORT=process.env.PORT||3000

app.listen(PORT,()=>{
    console.log('Server is running on port ${PORT}')
})
