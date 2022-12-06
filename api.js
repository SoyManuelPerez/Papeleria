const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ManuelP:Mp27238181@mundoliterario.wuml8kn.mongodb.net/Usuarios?retryWrites=true&w=majority')
// Creacion de Usuario
const User = mongoose.model('Usuario',{
    Nombre:String,
    Contraseña: Number
})
//Metodo para crear un usuario
const crear = async()=>{
    const usuario = new User({Nombre:'Satiago',Contraseña:32123})
    usuario.save()

}
//crear()
// metodo para buscar toda la lista
const buscartodo = async()=>{
    const Usuarios = await User.find()
    console.log(Usuarios)
}
//buscartodo()
//Metodo para buscar un usuario especifico
 const Buscar = async()=>{
    const usuario = await User.findOne({Nombre:'Manuel Perez'})
    console.log(usuario)
 }
 //Buscar()
//Metodo para actualizar DB
const actualizar = async()=>{
    const usuario = await User.findOne({Nombre:'Manuel Perez'})
    console.log(usuario)
    usuario.Nombre = 'Manuel'
    await usuario.save()
}
//actualizar()
//Metodo para eliminar
const eliminar = async()=>{
    const usuario = await User.findOne({Nombre:'Santiago'})
    if(usuario){
    await usuario.remove()
    }
}
eliminar()