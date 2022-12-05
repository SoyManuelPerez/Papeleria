//importando clase express
const express = require('express');
const app = express()// aplicadon la clase express a un objeto
const port = 3000 // creacipn de in puerto para verificar que funciones

//get para obtenr informacion
app.get('/',(req, res)=>{
    res.status(200).send('hola si funciono')
})
// post es para la creacion
app.post('/',(req, res)=>{
    res.status(201).send('El creador esta funcionando')
})
//put es para ingresar
app.put('/',(req, res)=>{
    res.status(204).send('')
})
//patch es para modificar
app.patch('/',(req, res)=>{
    res.status(204).send('')
})
//delete es para eliminar
app.delete('/',(req, res)=>{
    res.status(204).send('')
})
//Para verificar que este funcionando en el puerto
app.listen(port,()=>{
    console.log('inicio la apliacion')
})