const studentList = require('../components/user/service');

module.exports = function(app) {
  app.route('/v1/user')
    .get(studentList.getStudentByEmail)
    .post(studentList.addNewStudent)
    .patch(studentList.updateStudentByEmail)
    .delete(studentList.deleteStudentByEmail);
};