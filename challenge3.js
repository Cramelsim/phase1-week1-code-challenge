const prompt = require('prompt-sync')();

// Function to calculate PAYE tax based on KRA rates
function calculatePAYE(grossSalary) {
  let tax = 0;

  if (grossSalary <= 24000) {
    tax = grossSalary * 0.1; // 10% tax for up to 24,000
  } else if (grossSalary <= 48000) {
    tax = 24000 * 0.1 + (grossSalary - 24000) * 0.25; // 25% tax for 24,000 - 48,000
  } else if (grossSalary <= 80000) {
    tax = 24000 * 0.1 + 24000 * 0.25 + (grossSalary - 48000) * 0.3; // 30% tax for 48,000 - 80,000
  } else {
    tax = 24000 * 0.1 + 24000 * 0.25 + 32000 * 0.3 + (grossSalary - 80000) * 0.35; // 35% tax for above 80,000
  }
  
  return tax;
}

// Function to calculate NHIF deductions based on salary
function calculateNHIF(grossSalary) {
  let nhif = 0;

  if (grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary <= 7999) {
    nhif = 300;
  } else if (grossSalary <= 11999) {
    nhif = 400;
  } else if (grossSalary <= 14999) {
    nhif = 500;
  } else if (grossSalary <= 19999) {
    nhif = 600;
  } else if (grossSalary <= 24999) {
    nhif = 750;
  } else if (grossSalary <= 29999) {
    nhif = 850;
  } else if (grossSalary <= 34999) {
    nhif = 900;
  } else if (grossSalary <= 39999) {
    nhif = 950;
  } else if (grossSalary <= 44999) {
    nhif = 1000;
  } else if (grossSalary <= 49999) {
    nhif = 1100;
  } else if (grossSalary <= 59999) {
    nhif = 1200;
  } else if (grossSalary <= 69999) {
    nhif = 1300;
  } else if (grossSalary <= 79999) {
    nhif = 1400;
  } else if (grossSalary <= 89999) {
    nhif = 1500;
  } else if (grossSalary <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }

  return nhif;
}

// Function to calculate NSSF deductions (Assumed employee contribution)
function calculateNSSF(grossSalary) {
  const nssfRate = 0.06; // NSSF contribution is 6% of gross salary
  return grossSalary * nssfRate;
}

// Main function to calculate the net salary
function calculateNetSalary() {
  // Get input from the user
  const basicSalary = parseFloat(prompt("Enter the basic salary (in KES): "));
  const benefits = parseFloat(prompt("Enter benefits (in KES): "));

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate deductions and taxes
  const tax = calculatePAYE(grossSalary);
  const nhif = calculateNHIF(grossSalary);
  const nssf = calculateNSSF(grossSalary);

  // Calculate the net salary
  const netSalary = grossSalary - tax - nhif - nssf;

  // Display results
  console.log(`Gross Salary: KES ${grossSalary}`);
  console.log(`PAYE Tax: KES ${tax}`);
  console.log(`NHIF Deduction: KES ${nhif}`);
  console.log(`NSSF Deduction: KES ${nssf}`);
  console.log(`Net Salary: KES ${netSalary}`);
}

// Call the function to start the salary calculation
calculateNetSalary();
