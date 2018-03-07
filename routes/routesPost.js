'use strict'

const express = require('express')
const PostCtrl = require('../controllers/mypost')
const api = express.Router()


api.get('/mypost',PostCtrl.getMyposts)
api.get('/',(req,res)=>{
    res.json({
        pesponse:'runing'
    })
})

module.exports = api