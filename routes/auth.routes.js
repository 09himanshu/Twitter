
const controller = require('../controller/user.controller');

module.exports =(app) => {
    app.post('/api/v1/signup', controller.create);

    app.post('/api/v1/signin', controller.signin);
}