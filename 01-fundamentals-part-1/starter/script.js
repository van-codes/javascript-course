// JavaScript Fundamentals - Hour 1
// My first JavaScript code!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// Variables with LET (can be changed)
// Useful for values that may change over time
// console.log("=== VARIABLES ===");

// let firstName = "Van";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 20; // This will change the value of age
// console.log(age);

// Variables with CONST (cannot be changed)
// const birthYear = 2005;
// console.log(birthYear);

// birthYear = 1990; 
// ^This will throw an error because birthYear is a constant

// const PI = 3.1415;
// console.log(PI);

// Variables with VAR (old way, not recommended)
// var job = "programmer";
// job = "teacher";
// console.log(job);

// const country = "Philippines";
// const language = "Filipino";

// age = 21;
// age = 22;

// Good names
// let firstName = "Saint";
// let myCurrentJob = "Software Engineer";
// let PI = 3.1415; 

// Bad names (will cause errors)
// let 3years = 3; // Can't start with number
// let jonas&matilda = "JM"; // No special characters
// let new = 27; // Can't use reserved words

// console.log("=== DATA TYPES ===");

// Numbers
// let id = 12345;
// console.log(id);
// console.log(typeof id); // Number

// Strings
// let lastName = "Arbes";
// console.log(lastName);
// console.log(typeof lastName); // String

// Booleans
// let javascriptIsFun = true; 
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun); // Boolean

// Undefined
// let year;
// console.log(year);
// console.log(typeof year); // Undefined

// Start as a number
// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);

// Change to a string
// dynamicVariable = "I am now a string!";
// console.log(dynamicVariable, typeof dynamicVariable); 

// Change to a boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable); 

// "typeof" tells you what type of data it is
// "console.log" display output in the console
// data types (number, string, boolean, undefined) 


//////////////////////////////////////
// JavaScript Fundamentals - Hour 2
// Basic Operators
// console.log("=== MATH OPERATORS ===");

// const now = 2025;
// const ageVan = now - 2005;
// const ageSaint = now - 1995;
// console.log(ageVan, ageSaint); // 20, 30

// console.log(ageVan * 2, ageSaint / 10, 2 ** 3); // 40, 3, 8
// 2 ** 3 means 2 raised to the power of 3 (2^3)

// All Operators
// console.log("Math operataions:");
// console.log("Addition:", 10 + 5); // 15
// console.log("Subtraction:", 20 - 8); // 12
// console.log("Multiplication:", 4 * 7); // 28
// console.log("Division:", 15 / 3); // 5
// console.log("Exponentiation:", 2 ** 3); // 8

// Math with Strings
// const firstName = "Van";
// const lastName = "Arbes";
// console.log( firstName + " " + lastName); // "Van Arbes"

// console.log("Hello " + "World" + "!"); // "Hello World!"
// console.log("I am " + 20 + " years old"); // "I am 20 years old"
// Plus (+) joins strings together

// Assignment Operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5; 
// console.log("x starts as:", x);

// x += 10; 
// console.log("x starts as:", x);

// x *= 4;
// console.log("x starts as:", x);

// x /= 2;
// console.log("x starts as:", x);

// x++;
// console.log("x starts as:", x);

// x--;
// console.log("x starts as:", x);

// Comparison Operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age Comparison:");
// console.log(ageVan > ageSaint); // false 
// console.log(ageVan >= 18); // true 
// console.log(ageVan < 30); // true 

// console.log("Number Comparison:");
// console.log(25 > 20); // true
// console.log(15 < 10); // false
// console.log(18 >= 18); // true
// console.log(16 <= 15); // false

// const isFullAge = ageVan >= 18;
// console.log("Van is adult", isFullAge); // true

// console.log("Complex Comparison:");
// console.log(now - 2005 > now - 1995); // false (Same as: ageVan > ageSaint)

// let z, y;
// z = y = 25 - 10 - 5; 
// console.log(z, y); // 10, 10

// Parentheses
// const averageAge = (ageVan + ageSaint) / 2;
// console.log(ageVan, ageSaint, averageAge); // 20, 30, 25


//////////////////////////////////////
// Coding Challenge #1 - BMI Calculator
// Test Data 1
// const massMark = 78; 
// const heightMark = 1.69; 
// const massJohn = 92;
// const heightJohn = 1.95; 

// Solution
// const BMIMark = massMark / heightMark ** 2;
// console.log("Mark's BMI:", BMIMark); // 27.309968138370508

// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log("John's BMI:", BMIJohn); // 24.194608809993426

// const markHigherBMI = BMIMark > BMIJohn;


//////////////////////////////////////
// JavaScript Fundamentals - Hour 3
// Strings and Template Literals

// const firstName = "Van";
// const job = "Software Engineer";
// const birthYear = 2005;
// const year = 2025;

// const van = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(van); 

// Modern way (recommended)
// const vanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(vanNew); 

// Any expression can be used inside the ${}
// console.log(`I'm ${2025 - 2005} years old`);
// console.log(`Math works here: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);

// You can use backtricks (``) for any string
// console.log(`Just a regular string...`);

// if else statement
// const age = 20;

// if (age >= 18) {
//     console.log(`Van can start driving license`);
//     } else {
//     const yearsLeft = 18 - age;
//     console.log(`Van is too young. Wait another ${yearsLeft} years :)`);
//     }

// Truthy and Falsy Values
// 5 falsy values
// console.log(Boolean(0)); // falsy values
// console.log(Boolean(undefined)); // falsy values
// console.log(Boolean("Van")); // truthy values
// console.log(Boolean({})); // truthy values
// console.log(Boolean("")); // falsy values

// Coding Challenge #2 - BMI Comparison with if/else
// Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }


//////////////////////////////////////
// JavaScript Fundamentals - Hour 4
// Type Conversion and Coercion

// Type Conversion
// const inputYear = "2005";
// console.log(Number(inputYear), inputYear); 
// console.log(Number(inputYear) + 18); 

// console.log(Number("Van")); 
// console.log(typeof NaN); 

// console.log(String(23), 23); 
// console.log(typeof String(23)); 

// Automatic Type Coercion
// console.log("I am " + 20 + " years old"); 
// console.log("20" - "10" - 3); // 7
// console.log("20" / "2"); // 10
// console.log("20" * "2"); // 40

// Plus (+) sign converts numbers to strings, so it did not add them
// let n = "1" + 1; // 11
// console.log(n);

// Minus (-) sign converts strings to numbers, and other math operation
// n = n - 1; // 10
// console.log(n);

// type conversion = explicit/manual (recommended)
// type coercion = implicit/automatic (javascript does itself)

// Equality - Strict
// const age = 18;
// if (age === 18) console.log(`You just became an adult (strict)`);
// if (age == 18) console.log(`You just became an adult :D (loose)`);

// console.log("18" === 18); // false
// console.log("18" == 18); // coercion happens, true
// console.log(18 === 18); // true

// why == can be dangerous
// console.log("0" == 0);
// console.log(0 == false); 
// console.log("0" == false); 
// console.log(null == undefined); // special case where they are equal

// console.log("" == 0);
// console.log("   " == 0);

// best practice
// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { 
//     console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//     console.log("7 is also a cool number");
// } else if (favourite === 9) {
//     console.log("9 is also a cool number");
// } else {
//     console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`); // AND: true
// console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`); // OR: true
// console.log(`NOT OPERATOR: ${!hasDriversLicense}`); // NOT: false

// // Example
// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired); 

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Van is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }


//////////////////////////////////////
// "Create a club entry system:
// 1. Create variables: age (number), hasID (boolean), isVIP (boolean)
// 2. Entry rules: (age >= 21 AND hasID) OR isVIP
// 3. Test with different combinations:
//   - age 25, hasID true, isVIP false (should enter)
//   - age 19, hasID true, isVIP true (should enter)
//   - age 19, hasID false, isVIP false (should NOT enter)
// 4. Use if/else to log appropriate messages"

// const ageClub = 25;
// const hasID = true;
// const isVIP = false;

// if ((ageClub >= 21 && hasID) || isVIP) {
//     console.log("Welcome to the club!");
// } else {
//     console.log("You cannot enter the club.");
// }


//////////////////////////////////////
// Ternary Operator
// const age2 = 23;

// // basic ternary: condition ? valueifTrue : valueifFalse
// const drink = age2 >= 18 ? "wine" : "water";
// console.log(drink);

// // if/else statement
// let drink2;
// if (age2 >= 18) {
//     drink2 = "wine";
// } else {
//     drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age2 >= 18 ? "wine" : "water"}`);



//////////////////////////////////////
// Coding Challenge #3 - Tip Claculator
const bill = 275; 

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"


