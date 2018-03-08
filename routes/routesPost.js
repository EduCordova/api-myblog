'use strict'

const express = require('express')
const PostCtrl = require('../controllers/mypost')
const api = express.Router()


api.get('/mypost',PostCtrl.getMyposts)
api.post('/mypost',PostCtrl.saveMypost)
api.get('/mypost/:postId',PostCtrl.getOnepost)
api.put('/mypost/:postId',PostCtrl.updatePost)
api.delete('/mypost/:postId',PostCtrl.deletePost)


api.get('/',(req,res)=>{
    res.send("api rest  mongodb + express demo")
})

module.exports = api