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

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];
// console.log(grades);

// Function to calculate average
// let total = 0;
// for (let i = 0; i < grades.length; i++) {
//     total += grades[i];
// }
// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// // Function to find highest grade
// let highest = grades[0];
// grades.forEach((grade) => {
//     if (grade > highest) highest = grade;
// });
// console.log(`Highest grade: ${highest}`);

// // Function to find lowest grade
// let lowest = grades[0];
// grades.forEach((grade) => {
//     if (grade < lowest) lowest = grade;
// });
// console.log(`Lowest grade: ${lowest}`);

// // Function to count passing students
// let passedCount = 0;
// grades.forEach((grade) => {
//     if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades.length} students passed`);



////////////////////////////////////
// JavaScript Fundamentals Part 2 - Hour 3

// Problems with Arrays
// const vanArray = [
//     "Van",
//     "Arbes",
//     2025 - 2005,
//     "teacher",
//     ["Michael", "Peter", "Steven"], 
// ];
// console.log(vanArray[0]); // First Name
// console.log(vanArray[1]); // Last Name
// console.log(vanArray[2]); // Age

// const vanObject = {
//     firstName: "Van",
//     lastName: "Arbes",
//     age: 2025 - 2005,
//     job: "Software Engineer",
//     friends: ["Michael", "Peter", "Steven"]
// };
// console.log(vanObject);

// // Property access methods
// // Dot Notation
// console.log(vanObject.firstName);
// console.log(vanObject.lastName);
// console.log(vanObject.age);

// // Bracket Notation
// console.log(vanObject["firstName"]);
// console.log(vanObject["lastName"]);
// console.log(vanObject["age"]);

// const nameKey = "Name";
// console.log(vanObject["first" + nameKey]);
// console.log(vanObject["last" + nameKey]);

// // Modifying existing properties
// vanObject.job = "Programmer";
// vanObject["age"] = 21;
// console.log(vanObject);

// // Add new properties
// vanObject.location = "Philippines";
// vanObject["twitter"] = "@vanarbes";
// vanArray.hasDriverLicense = false;
// console.log(vanObject);

// // Arrays
// const listofYears = [1991, 2005, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// // Object
// const person = {
//     name: "Van",
//     age: 20,
//     occupation: "Software Engineer",
// };
// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "Blue",
// };

// // Objects can contain arrays, arrays can contain objects
// const student = {
//     name: "Van",
//     grades: [85, 92, 78],
//     address: {
//         street: "123 Main St",
//         city: "New York",
//     },
// };
// console.log(student.grades[0]);
// console.log(student.address.city);

// // Object Methods
// const van = {
//     firstName: "Van",
//     lastName: "Arbes",
//     birthYear: 2005,
//     job: "Software Engineer",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriverLicense: false,

//     calcAge: function(birthYear) {
//         return 2025 - birthYear;
//     },
// };
// console.log(van.calcAge(2005));

// // 'This' keyword
// const vanImproved = {
//     firstName: "Van",
//     lastName: "Arbes",
//     birthYear: 2005,
//     job: "Software Engineer",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriverLicense: false,

//     calcAge: function() {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge() }-year old ${this.job}, 
//         and he has ${this.hasDriverLicense ? "a" : "no"} drivers license`;
//     },
// };
// console.log(vanImproved.calcAge());
// console.log(vanImproved.age);
// console.log(vanImproved.getSummary());

// // Complex object with multiple methods
// const bankAccount = {
//     owner: "John Doe",
//     movements: [200, 450, -400, 3000, -650 , -130, 70, 1300],
//     interestRate: 1.2,
//     pin: 1111,

// // Method to calculate balance
// calcBalance: function () {
//     this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
//     return this.balance;
//   },

// // Method to add movement
// deposit: function(amount) {
//     this.movements.push(amount);
//     this.calcBalance();
//   },

// withdraw: function (amount) {
//     this.movements.push(-amount);
//     this.calcBalance();
//   },

// // Method for account summary
// getStatement: function () {
//     return `${this.owner}'s account balance: ${this.calcBalance()}`;
//   },
// };
// console.log(bankAccount.getStatement());
// bankAccount.deposit(500);
// console.log(bankAccount.getStatement());


////////////////////////////////////
// Coding Challenge #3 

// const user = {
//   firstName: "Van",
//   lastName: "Arbes",
//   birthYear: 2005,
//   location: "Philippines",
//   interests: ["watching", "travel", "singing"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   // Calculate age method
//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//   },
  
//   // Add friend method
//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status });
//     return this.friends.length;
//   },

//   // Get active friends count
//   getActiveFriends: function () {
//     const activeFriends = this.friends.filter(friend => friend.status === "active")
//     return activeFriends.length;
//     },

//   // Toggle active status
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   // Generate profile summary
//   getSummary: function () {
//     const age = this.calcAge();
//     const activeFriends = this.getActiveFriends();
//     const status = this.active ? "active" : "inactive";
//     return `${this.firstName} ${this.lastName} (${this.age}) from ${this.location}
//     Currently ${status} 
//     ${activeFriends} active friends out of ${this.friends.length} total
//     Interest: ${this.interests.join(", ")}
//     Connected and sharing life's adventure`;
//   },
// };
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());



////////////////////////////////////
// JavaScript Fundamentals Part 2 - Hour 4

// querySelector - uses css selectors
// const message = document.querySelector(".message");
// // gets us the entire element object with all its properties
// console.log(message);

// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);
// //query selector returns the first matching elements

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// // getElementByID
// const buttonByID = getElementByID("btn");
// console.log(buttonByID);
// console.log(buttonByID === button);

// // querySelectorAll - Multiple Elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);
// console.log(allParagraphs.length);

// Modifying element content
const message = document.querySelector(".message");

// Text Content
console.log(message.textContent);
message.textContent = "Hello From JavaScript";
console.log(message.textContent);

// innerHTML
message.innerHTML = "<strong>Bold text from JS!</strong>";

// innerText
console.log(message.innerText);

// Input Element Values
const input = document.querySelector(".guess");
console.log(input.value);
input.value = "Default text";

// Changing element style
const heading = document.querySelector("h1");

heading.style.color = "red";
heading.style.backgroundColor = "yellow"
heading.style.fontSize = "3rem";

const button = document.querySelector("#btn");
button.style.padding = "20px";
button.style.borderRadius = "10px";

// Event Listeners - user interactions
button.addEventListener("click", function() {
    console.log("Button was clicked!");
    message.textContent = "You clicked the button";
    message.style.color = "green";
});

let clickCount = 0;
button.addEventListener("click", function() {
    clickCount++;
    button.textContent = `Clicked ${clickedCount} times`;
    button.style.backgrounColor = `hsl(${clickedCount * 30}, 70%, 50% )`;
});

// Input Events
const display = document.querySelector(".message");
input.addEventListener("input", function() {
    const userText = input.value;
    display.textContent = `You typed ${userTexT}`;
    display.style.fontSize = `${userText.length + 10}px`;
});

// Keyboard events - respond to specific key
input.addEventListener("keydone", function(event) {
    console.log(`Key pressed ${event.key}`);

    if (event.key === "Enter") {
        display.textContent = `You pressed Enter! Text was ${input.value}`;
        input.value = ""; //clear-input
    }
});

