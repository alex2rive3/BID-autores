const AutorController = require('../controllers/autores.controller');
module.exports = function (app) {
    app.get('/api', AutorController.index);
    app.post('/api/autores', AutorController.createAutor);
    app.get('/api/autores', AutorController.getAllAutor);
    app.get('/api/autores/:id', AutorController.getAutor);
    app.put('/api/autores/:id', AutorController.updateAutor);
    app.delete('/api/autores/:id', AutorController.deleteAutor);
}
