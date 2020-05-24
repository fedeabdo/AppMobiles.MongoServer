const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number
},
{
    timestamps: true
});

module.exports = mongoose.model('Persona', PersonSchema);