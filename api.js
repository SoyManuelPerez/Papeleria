const express = require('express')
const mongoose = require('mongoose')
const usario = require('./controller/Usuario')
var app = express()
var port = 3000;
app.use(express.json())
mongoose.connect('mongodb+srv://ManuelP:Mp27238181@mundoliterario.wuml8kn.mongodb.net/Usuarios?retryWrites=true&w=majority')

app.get('/',usario.list)
app.post('/',usario.create)
app.get('/',usario.get)
app.put('/:id',usario.update)
app.patch('/:id',usario.update)
app.delete('/:id',usario.destroy)

//Para Crear el puerto
app.listen(port,()=>{
    console.log('Servidor corriendo correctamente en la url: localhost:3000')
})