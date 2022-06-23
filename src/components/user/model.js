const fs = require('fs');
let students = require('./test.json');

function writeFile() {
    fs.writeFile("./src/components/user/test.json", JSON.stringify(students, null, 4), (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
    });
}

exports.getStudentByEmail = function(email) {
    return students.find(student => student.email === email);
}

exports.addNewStudent = function(newStudent) {
    students.push(newStudent);
    writeFile();
}

exports.changeStudentNameByEmail = function(studentEmail, studentName) {
    students[students.indexOf(this.getStudentByEmail(studentEmail))].name = studentName;
    writeFile();
}

exports.deleteStudentByEmail = function(email) {
    students = students.filter(student => student.email !== email);
    writeFile();
}

