const { Autor } = require("../models/autores.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createAutor = async (request, response) => {
    try {
        const autor = await Autor.create(request.body);
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllAutor = async (request, response) => {
    try {
        const autores = await Autor.find({}).sort({ nombre: 1 })
        response.json(autores);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAutor = async (request, response) => {
    try {
        const autor = await Autor.findOne({ _id: request.params.id })
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updateAutor = async (request, response) => {
    try {
        const autor = await Autor.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteAutor = async (request, response) => {
    try {
        const autor = await Autor.deleteOne({ _id: request.params.id })
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}