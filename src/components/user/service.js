const studentsModel = require('./model')
const { studentValidation } = require('./controller');

exports.getStudentByEmail = function(req, res) {
    console.log('GET request');

    const {error} = studentValidation(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send({ message: 'Validation error'});
    }
    if(studentsModel.getStudentByEmail(req.body.email)) {
        return res.status(200).send(studentsModel.getStudentByEmail(req.body.email));
    }
    return res.status(404).send({ message: 'Student not found' });
}

exports.addNewStudent = function(req, res) {
    console.log('POST request');

    const {error} = studentValidation(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send({ message: 'Validation error'});
    }

    studentsModel.addNewStudent(req.body);
    return res.status(200).send({ message: 'Student Added' });
}

exports.updateStudentByEmail = function(req, res) {
    console.log('PATCH request');

    const {error} = studentValidation(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send({ message: 'Validation error'});
    }

    if(studentsModel.getStudentByEmail(req.body.email)) {
        studentsModel.changeStudentNameByEmail(req.body.email, req.body.name);
        return res.status(200).send({ message: 'Student changed' }); 
    }
    return res.status(404).send({ message: 'Student not found' })
}

exports.deleteStudentByEmail = function(req, res) {
    console.log('Delete request');

    const {error} = studentValidation(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send({ message: 'Validation error'});
    }

    if(studentsModel.getStudentByEmail(req.body.email)) {
        studentsModel.deleteStudentByEmail(req.body.email);
        return res.status(200).send({ message: 'Student Deleted' });
    }
    return res.status(404).send({ message: 'Student not found' })
}