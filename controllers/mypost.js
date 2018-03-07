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



module.exports = {
    getMyposts,
    saveMypost
}