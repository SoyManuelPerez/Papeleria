//importando clase express
const express = require('express');
const Inv = require('./controller/Inventario')
const app = express()// aplicadon la clase express a un objeto
//get para obtenr informacion
app.get('/',Inv.list )
// post es para la creacion
app.post('/',Inv.create)
//Para busacr solo a uno
app.get('/:id',Inv.get )
//put es para ingresar
app.put('/:id',Inv.update)
//patch es para modificar
app.patch('/:id',Inv.update)
//delete es para eliminar
app.delete('/:id',Inv.destroy)
//Para anuncial paginas inexistentes
app.get('*',(req,res)=>{
    res.status(404).send('Pagina No existe')
})
module.exports = app;