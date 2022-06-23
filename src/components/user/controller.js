const Joi = require('joi');
const studentsService = require('./service'); 

const validateRequestData = (data) => {
    const {error} = Joi.object({
        name: Joi.string().min(2).max(20),
        email: Joi.string().min(4).max(255).required().email()
    }).validate(data); 
    return error === undefined;
}

exports.getStudent = function(req, res) {
    if (!validateRequestData(req.body)) {
        return res.status(400).send({ message: 'Validation error'});
    }

    const student = studentsService.getStudentByEmail(req.body.email);
    if(student) {
        return res.status(200).send(student);
    } else {
        return res.status(400).send({ message: 'Student not found' });
    }
}

exports.createStudent = (req, res) => {
    if (!validateRequestData(req.body)) {
        return res.status(400).send({ message: 'Validation error'});
    }

    const isSuccess = studentsService.createStudent(req.body.email, req.body.name);
    if (isSuccess) {
        return res.status(200).send({ message: 'Student added' });
    } else {
        return res.status(400).send({ message: 'Student already exsists' })
    }
}

exports.updateStudent = (req, res) => {
    if (!validateRequestData(req.body)) {
        return res.status(400).send({ message: 'Validation error'});
    }

    const isSuccess = studentsService.updateStudentByEmail(req.body.email, req.body.name);
    if (isSuccess) {
        return res.status(200).send({ message: 'Student changed' }); 
    } else {
        return res.status(400).send({ message: 'Student not found' })
    }
}

exports.removeStudent = (req, res) => {
    if (!validateRequestData(req.body)) {
        return res.status(400).send({ message: 'Validation error'});
    }

    studentsService.deleteStudentByEmail(req.body.email);
    return res.status(200).send({ message: 'Student Deleted' });
}

