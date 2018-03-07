'use strict'

const express = require('express')
const PostCtrl = require('../controllers/mypost')
const api = express.Router()


api.get('/mypost',PostCtrl.getMyposts)
api.post('/mypost',PostCtrl.saveMypost)
api.get('/',(req,res)=>{
    res.send("api rest  mongodb + express")
})

module.exports = api