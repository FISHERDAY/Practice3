const studentController = require('../components/user/controller');

module.exports = function(app) {
  app.route('/v1/user')
    .get(studentController.getStudent)
    .post(studentController.createStudent)
    .patch(studentController.updateStudent)
    .delete(studentController.removeStudent);
};