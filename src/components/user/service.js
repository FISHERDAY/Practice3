const studentsModel = require('./model');

exports.getStudentByEmail = (email) => studentsModel.readStudentByEmail(email);

exports.createStudent = (email, name) => {
    if (studentsModel.readStudentByEmail(email)) {
        return false;
    } else {
        studentsModel.createStudent(email, name);
        return true;
    }
}

exports.updateStudentByEmail = (email, name) => {
    if (studentsModel.readStudentByEmail(email)) {
        studentsModel.updateStudentByEmail(email, name);
        return true;
    } else {
        return false;
    }
}

exports.deleteStudentByEmail = (email) => studentsModel.deleteStudentByEmail(email);
