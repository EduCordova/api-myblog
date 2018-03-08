'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MypostSchema = Schema({
    _id:Schema.Types.Mixed,
    title:String,
    date:String,
    description:String,
    content:String,
    img:String,
  

})

module.exports = mongoose.model('Mypost',MypostSchema)