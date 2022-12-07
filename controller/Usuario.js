const usuario = require('../routes/usuario')
const Usu ={
    get:async(req,res)=>{
        res.status(200).send('Un solo usuario')
    }, 
    list: async (req,res)=>{
        const listado = await usuario.find()
        res.status(200).send(listado)
    },
    create:async(req, res)=>{
        console.log(req.body)
        res.sendStatus(201).send('Creando Usuario')
    },
    update:async(req,res)=>{
        res.sendStatus(204).sed('Actualizando Usuario')
    },
    destroy:async(req,res)=>{
        res.sendStatus(204).sed('Eliminado Usuario')
    }
}
module.exports = Usu