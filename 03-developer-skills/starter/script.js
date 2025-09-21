// JavaScript Developer Skills
// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log('=== DEVELOPMENT ENVIRONMENT SETUP ===');

const messyExample = function (name, age) {
  if (age >= 18) {
    return 'Hello ' + name + ', you are an adult';
  } else {
    return 'Hello ' + name + ', you are a minor';
  }
};
console.log('Current messy code example:', messyExample('John', 25));
console.log('Goal: Automatic formatting, auto-fresh, and typing shortcuts');

// Extension Test
function testExtensions() {
  const extensionTests = [
    { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
    { name: 'Live Server', status: 'installed', purpose: 'auto-refresh' },
    {
      name: 'Auto Rename Tag',
      status: 'installed',
      purpose: 'HTML efficiency',
    },
  ];
  return extensionTests;
}
const extensionStatus = testExtensions();
console.log('Extension installation status:', extensionStatus);

// Prettier Configuration Test
const prettierTest = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  skills: ['JavaScript', 'React', 'Node.js'],
  isActive: true,
};
const messyFunction = function (x, y, z) {
  if (x > 0 && y > 0) {
    return x + y + z;
  } else {
    return 0;
  }
};
const messyArrow = items => {
  return items.map(item => {
    return item.toUpperCase();
  });
};
console.log(
  'Before Prettier formatting - this code works but looks unprofessional'
);

// Live Server Testing
// Test 1: Basic live reload
let liveServerTest = 'Update message - change #2';
console.log('Live Server test:', liveServerTest);

// Test 2: Time-based updates
const timeStamp = new Date().toLocaleTimeString();
const updateCount = 1;

console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// Test 3: Function testing
function demonstrateLiveReload() {
  const randomColor = ['red', 'blue', 'green', 'purple', 'orange'][
    Math.floor(Math.random() * 5)
  ];
  const message = `Live Server rocks! Random color: ${randomColor}`;

  console.log(message);
  return message;
}
demonstrateLiveReload();

// Add this function and test live reload
function showCurrentTime() {
  const now = new Date().toLocaleTimeString();
  console.log('Current time:', now);
  return now;
}
showCurrentTime();

// Code Snippets Testing
// Type 'cl' then press Tab
console.log('Testing snippet functionality - cl + Tab created this!');

// Type 'func' then press Tab
function testSnippets() {
  console.log('Function created with snippet - func + Tab!');
  return 'Snippets working perfectly!';
}
testSnippets();

// Type 'arrow' then press Tab
const snippetTest = message => {
  console.log(`Arrow function from snippet: ${message}`);
  return message;
};
snippetTest('Snippets save so much typing time!');

// JAVASCRIPT HOUR 2
console.log('=== HOUR 2: DEVELOPER MINDSET & PROLEM SOLVING ===');

// PRACTICAL PROBLEM-SOLVING
// PROBLEM STATEMENT:
// Given an array of temperatures from one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error.
// Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// EXTENDED IMPLEMENTATION

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);

console.log(
  'Problem-solving framework applied successfully to extended challenge!'
);
