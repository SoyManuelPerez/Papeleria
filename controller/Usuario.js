const Usu ={
    get:(req,res)=>{
        res.status(200).send('Un solo usuario')
    }, 
    list:(req,res)=>{
        res.status(200).send('Listado de usuarios')
    },
    create:(req, res)=>{
        res.sendStatus(201).send('Creando Usuario')
    },
    update:(req,res)=>{
        res.sendStatus(204).sed('Actualizando Usuario')
    },
    destroy:(req,res)=>{
        res.sendStatus(204).sed('Eliminado Usuario')
    }
}
module.exports = Usu