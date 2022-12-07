const mongoose = require('mongoose')
// Creacion de Usuario
const User = mongoose.model('Usuario',{
    Nombre:{type: String,required:true,minLegth:4},
    Contraseña: {type: String,required:true,minLegth:4}
})
module.exports = User