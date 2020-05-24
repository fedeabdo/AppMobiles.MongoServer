module.exports = (app) => {
    const person = require("../controllers/person.controller.js");

    app.post('/person/create', person.create);

    app.put('/person/update/:personId', person.put);

    app.get('/person/findAll', person.findAll);

    app.delete('/person/delete/:personId', person.delete);
}