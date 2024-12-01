# phase1-week1-code-challenge

This project contains a simple JavaScript program to determine a student's grade based on their marks. The program runs in a Node.js environment and accepts user input for marks, validates the input, and outputs the corresponding grade.

## Table of Contents
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Grade Calculation](#grade-calculation)
- [Example Output](#example-output)
- [Author](#author)

## Description
The program prompts the user to input student marks (0 to 100), validates the input, and assigns a grade based on the following criteria:

- **A**: Marks > 79
- **B**: Marks 60 to 79
- **C**: Marks 50 to 59
- **D**: Marks 40 to 49
- **E**: Marks < 40

## Technologies Used
- Node.js
- JavaScript
- [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) for synchronous input handling

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:Cramelsim/phase1-week1-code-challenge.git


# Speed Checker Program

This is a simple Node.js program that checks the speed of a car and calculates the corresponding demerit points. It follows the rules outlined below:

- If the speed is less than 70 km/h, the program prints "Ok".
- If the speed is 70 km/h or more, for every 5 km/h above the limit, the program adds one demerit point.
- If the driver accumulates more than 12 demerit points, the program will print "License suspended".

## Requirements

- Node.js installed on your machine.
- `prompt-sync` library for capturing user input in Node.js.

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/speed-checker.git
    ```

2. Navigate into the project directory:

    ```bash
    cd speed-checker
    ```

3. Install the required dependencies:

    ```bash
    npm install prompt-sync
    ```

## Usage

1. Run the program using Node.js:

    ```bash
    node speedChecker.js
    ```

2. You will be prompted to enter the speed of the car. Based on the entered speed, the program will print:
    - **"Ok"** if the speed is less than 70 km/h.
    - **"Points: X"** where `X` is the number of demerit points if the speed is 70 km/h or more.
    - **"License suspended"** if the demerit points exceed 12.

### Example

```plaintext
Enter the speed of the car (in km/h): 80
Points: 2


### Key Sections of the `README.md`:
- **Project Overview**: A brief description of what the program does.
- **Requirements**: Specifies the prerequisites like Node.js and `prompt-sync`.
- **Installation Instructions**: Step-by-step guide to set up the project on your local machine.
- **Usage Instructions**: Detailed instructions on how to run the program with examples of input and output.
- **License**: A section to specify the license type for the project (you can modify it based on your preference).

Make sure to replace the repository URL and license if needed!





# Net Salary Calculator

This is a simple Node.js program that calculates an individual's net salary based on their basic salary and benefits. The program calculates the gross salary, tax (PAYE), NHIF deductions, NSSF deductions, and finally, the net salary.

## Features

- **Gross Salary Calculation**: Calculates the gross salary by adding the basic salary and benefits.
- **PAYE (Tax) Calculation**: Uses progressive tax rates to calculate the tax based on salary ranges.
- **NHIF Deduction**: Determines the NHIF deduction based on salary ranges defined by the Kenyan National Hospital Insurance Fund.
- **NSSF Deduction**: Calculates NSSF contribution as 6% of the gross salary (based on employee's contribution).
- **Net Salary**: The net salary is calculated by subtracting the tax, NHIF, and NSSF deductions from the gross salary.

## Requirements

- Node.js installed on your machine.
- `prompt-sync` library for capturing user input in Node.js.

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/net-salary-calculator.git
    ```

2. Navigate into the project directory:

    ```bash
    cd net-salary-calculator
    ```

3. Install the required dependencies:

    ```bash
    npm install prompt-sync
    ```

## Usage

To calculate the net salary:

1. Run the program using Node.js:

    ```bash
    node netSalaryCalculator.js
    ```

2. You will be prompted to enter the **basic salary** and **benefits**. The program will then output the following:
    - **Gross Salary**: The total salary before deductions.
    - **PAYE Tax**: The calculated tax based on the salary.
    - **NHIF Deduction**: The National Hospital Insurance Fund contribution.
    - **NSSF Deduction**: The National Social Security Fund contribution.
    - **Net Salary**: The amount the individual will take home after all deductions.

### Example

```plaintext
Enter the basic salary (in KES): 60000
Enter benefits (in KES): 10000
Gross Salary: KES 70000
PAYE Tax: KES 13500
NHIF Deduction: KES 1300
NSSF Deduction: KES 4200
Net Salary: KES 38500
