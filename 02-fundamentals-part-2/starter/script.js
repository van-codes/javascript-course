// JavaScript Fundamentals Part 2 - Hour 1

// console.log("Part 2: Functions ready!");

// Functions - Declaration and  Expression
// console.log("=== FUNCTIONS ===")

// Function Declaration
// function logger() {
//     console.log("My name is Van");
// }

// Calling
// logger();
// logger();
// logger();

// Funtion Parameters
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Without funtion (repetitive)
// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 1 oranges.`;

// With (resuseable)
// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);    
// const juice3 = fruitProcessor(3, 1);

// Function Expression
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// const age1 = calcAge(2005);
// console.log(age1);

// console.log(calcAge(1991));

// Parameters
// function introduce(fistName, lastName, age) {
//     const introduction = `Hi, I'm ${fistName} ${lastName}, and I'm ${age} years old.`;
//     return introduction;
// }

// console.log(introduce("Van", "Arbes", 20));
// console.log(introduce("John"));

// Return Values andd Scope
// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;    

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years.`;
//     } else {
//         return `${firstName} has already retired.`;
//     }
// }
//  console.log(yearsUntilRetirement(2005, "Van"));

 // Scope
//  const glovalVar = "I am global";

//  function testScope() {
//     const localVar = "I am local";
//     console.log(glovalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(glovalVar);
// console.log(localVar); 

////////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//     } else {
//         return "No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}";
//     }
// }

////////////////////////////////////
// JavaScript Fundamentals Part 2 - Hour 2

// Arrays
// const grades = [85, 92, 78, 90, 88];
// console.log(grades);

// Array creation
// const friends =["Michael", "Steven", "Peter"];
// console.log(friends);

// Different data types
// const mixed = ["Jonas", 40, false, friends];
// console.log(mixed);

// Alternative way
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// Accessing Array Elements
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[4]);

// Access the length
// console.log(friends.length);

// Changing array elements
// friends[0] = "Jay";
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const ages = [calcAge(2005), calcAge(1940), calcAge(1991)];
// console.log(ages);

// Adding Elements
// Push - add to the end
// const newLength = friends.push("John");
// console.log(friends);
// console.log(newLength);  

// Unshift - add to the beginning
// friends.unshift("Mark");
// console.log(friends);

// Removing Elements
// Pop - remove last item in the list
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// Shift - remove first item in the list
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// Finding Elements
// IndexOf - find the position of element
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Mark"));

// Includes - check if element is exists
// console.log(friends.includes("Peter"));
// console.log(friends.includes("John"));

// Array Iteration
// Traditional For Loop
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// one way to create for each
// friends.forEach(function (friend, index) {
//     console.log(`${index + 1}: ${friend}`);
// });

// another way to create for each (arrow function)
// friends.forEach((friend, index) => {
//     console.log(`${index + 1}: ${friend}`);
// });

// Practical Example
// const grades2 = [85, 92, 78, 90, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }
// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach((grade) => {
//     if (grade >= 70) passedCount++;
// }); 
// console.log(`${passedCount} out of ${grades.length} students passed`);  

////////////////////////////////////
// Coding Challenge #2

const grades = [78, 85, 92, 67, 88, 95, 73, 82];
console.log(grades);

// Function to calculate average
let total = 0;
for (let i = 0; i < grades.length; i++) {
    total += grades[i];
}
const average = total / grades.length;
console.log(`Average grade: ${average.toFixed(2)}`);

// Function to find highest grade
let highest = grades[0];
grades.forEach((grade) => {
    if (grade > highest) highest = grade;
});
console.log(`Highest grade: ${highest}`);

// Function to find lowest grade
let lowest = grades[0];
grades.forEach((grade) => {
    if (grade < lowest) lowest = grade;
});
console.log(`Lowest grade: ${lowest}`);

// Function to count passing students
let passedCount = 0;
grades.forEach((grade) => {
    if (grade >= 70) passedCount++;
});
console.log(`${passedCount} out of ${grades.length} students passed`);

