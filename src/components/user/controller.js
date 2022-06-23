const Joi = require('joi');

exports.studentValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(20),
        email: Joi.string().min(4).max(255).required().email()
    })
    return schema.validate(data);
}


