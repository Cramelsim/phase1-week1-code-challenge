//user input
const prompt = require('prompt-sync')();
function getStudentGrade() {
    // Prompt the user for input
    let marks = parseFloat(prompt("Enter student marks (0 to 100):"));
  
    // Validate the input
    if (isNaN(marks) || marks < 0 || marks > 100) {
      console.log("Invalid input! Please enter a number between 0 and 100.");
      return;
    }
  
    // Determine the grade
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 50) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    // Output the grade
    console.log(`Marks: ${marks}, Grade: ${grade}`);
  }
  
  // Call the function
  getStudentGrade();
  