const Inv ={
    get:(req,res)=>{
        res.status(200).send('Una sola cosa')
    }, 
    list:(req,res)=>{
        res.status(200).send('Listado')
    },
    create:(req, res)=>{
        res.sendStatus(201).send('Creando Inventario')
    },
    update:(req,res)=>{
        res.sendStatus(204).sed('Actualizando inventario')
    },
    destroy:(req,res)=>{
        res.sendStatus(204).sed('Eliminado inventario')
    }
}
module.exports = Inv