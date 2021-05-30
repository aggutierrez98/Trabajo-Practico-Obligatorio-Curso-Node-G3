const Categoria = require('../models/categoria');

const elNombreExiste = async(nombre) => {

    nombre = nombre.toUpperCase();
    const existeNombre = await Categoria.findOne({ nombre });
    if (existeNombre) {
        throw new Error(`El nombre: ${ nombre }, ya está registrado`);
    }
}


module.exports = {
    elNombreExiste
}