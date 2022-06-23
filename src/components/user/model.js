const fs = require('fs');
let students = require('./db.json');

const writeFile = () => {
    fs.writeFile("./src/components/user/db.json", JSON.stringify(students, null, 4), (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
    });
}

exports.readStudentByEmail = (email) => students.find(student => student.email === email);

exports.createStudent = (email, name) => {
    students.push({email: email, name: name});
    writeFile();
}

exports.updateStudentByEmail = (email, name) => {
    students[students.indexOf(this.readStudentByEmail(email))].name = name;
    writeFile();
}

exports.deleteStudentByEmail = (email) => {
    students = students.filter(student => student.email !== email);
    writeFile();
}
