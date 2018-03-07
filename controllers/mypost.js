const Mypost = require('../models/mypost')

function getMyposts(req,res){

    Mypost.find({},(err,mypost)=>{
        if(err){
            return res.status(500).send({menssage:'error al realizar la peticion'})
        }else if(!mypost){
            return res.status(404).send({menssage:'No se encontro nada'})
        }else{
            res.status(200).send({mypost})
        }
    })
}

module.exports = {
    getMyposts
}