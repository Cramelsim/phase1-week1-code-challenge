// Importing the prompt-sync module for input
const prompt = require('prompt-sync')();

// Function to calculate demerit points based on speed
function checkSpeed() {
  // Get the speed from the user
  let speed = parseFloat(prompt("Enter the speed of the car (in km/h): "));
  
  // Define the speed limit
  const speedLimit = 70;

  // If the speed is below the limit, print "Ok"
  if (speed < speedLimit) {
    console.log("Ok");
  } else {
    // Calculate the number of demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / 5);

    // If the demerit points are greater than 12, print "License suspended"
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}

// Call the function to check speed and calculate demerit points
checkSpeed();
