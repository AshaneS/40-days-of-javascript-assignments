//Store student details in an object (name, age, grades).
//Implement a method to calculate the average grade.

const student = {
  name: " John Doe",
  age: 12,
  grades: [88, 75, 66, 52, 63],
  average: function () {
    let sum = 0;
    let average = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return (average = sum / this.grades.length);
    console.log(average);
  },
};

const studentAverage = student.average();
console.log("student average is", studentAverage);
