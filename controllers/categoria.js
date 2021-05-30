const { response, request } = require('express');
const categoria = require('../models/categoria');
const Categoria = require('../models/categoria');


const categoriaGet = async(req = request, res = response) => {

    const categorias = await Categoria.find();
    res.json({
        categorias
    });
}

const categoriaGetPorId = async(req = request, res = response) => {

    const { id } = req.params;

    const categoria = await Categoria.findById(id);
    res.json({
        categoria
    });
}

const categoriaPost = async(req, res = response) => {

    const nombre = req.body.nombre.toUpperCase();
    const categoria = new Categoria({ nombre });

    // Guardar en BD
    await categoria.save();

    res.json({
        categoria
    });
}



const categoriaDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    const categoria = await Categoria.findByIdAndDelete(id);

    res.json({
        categoria
    });
}

module.exports = {
    categoriaGet,
    categoriaPost,
    categoriaDelete,
    categoriaGetPorId
}