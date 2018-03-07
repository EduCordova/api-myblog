'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3001

mongoose.connect('mongodb://adminapi:123456@ds161148.mlab.com:61148/mypost',(err,res)=>{
    if(err){
        return console.log("error al conectarse con la BD")
    }else{
        console.log("Conexion establecida correctamente!")
    }

    app.listen(port,()=>{
        console.log(`Api rest corriendo en el puerto :${port}`)
    })
})