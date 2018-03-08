const Mypost = require('../models/mypost')


//Mostrar todas las publicaciones
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

//Crear una nueva Publicacion
function saveMypost(req,res){
    //para verificar
    console.log('Post /api/post')
    console.log(req.body)

    //instanciamos
    let mypost = new Mypost()
    mypost.title = req.body.title
    mypost.date = req.body.date
    mypost.description = req.body.description
    mypost.content = req.body.content
    mypost.img = req.body.img

    //save
    mypost.save((err,postCreado)=>{
        if(err) {
            res.status(500).send({message:'error al crear el post: '+err})
        }else{
            res.status(200).send({mypost:postCreado})
        }
    })

}


//mostrar un publicacion en especifico

function getOnepost(req,res){
    let postId = req.params.postId

    Mypost.findById(postId,(err,mypost)=>{
        if(err){
            return res.status(500).send({message:'Error al realizar la peticion'})
        }else if(!mypost){
            return res.status(404).send({message:'el producto no existe'})
        }else{
            res.status(200).send({mypost})
        }
    })
}

//update un post
function updatePost(req,res){
    let postId = req.params.postId
    let update = req.body

    Mypost.findByIdAndUpdate(postId,update,(err,postUpdate)=>{
        if(err){
            res.status(500).send({message:'Error al actualizar'})
        }else{
            res.status(200).send({post:postUpdate})
        }
    })
}
//borrar un post
function deletePost(req,res){
    let postId = req.params.postId

    Mypost.findById(postId,(err,mypost)=>{
        if(err) res.status(500).send({menssage:'error al eliminar Post'})

        mypost.remove(err =>{
            if(err) res.status(500).send({menssage:'Error al borrar el Post'})

            res.status(200).send({menssage:'Post Borrado'})
        })
    })
}


module.exports = {
    getMyposts,
    saveMypost,
    getOnepost,
    deletePost,
    updatePost
}