'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MypostSchema = Schema({
    title:String,
    description:String,
    content:String

})

module.exports = mongoose.model('Mypost',MypostSchema)