console.log("Hello, World!");

function maxOfTwoNumbers(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log("Exercise 2 Result:", isAdult(10));
console.log("Exercise 2 Result:", isAdult(21));

function isCharAVowel(char) {
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    return true;
  } else {
    return false;
  }
}

console.log("Exercise 3 Result:", isCharAVowel("a"));
console.log("Exercise 3 Result:", isCharAVowel("I"));
console.log("Exercise 3 Result:", isCharAVowel("b"));

function generateEmail(name, domain) {
  return `${name}@${domain}`;
}

console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}

console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else if (num3 >= num1 && num3 >= num2) {
    return num3;
  }
}

console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));
console.log("Exercise 6 Result:", maxOfThree(5, 2, 8));
console.log("Exercise 6 Result:", maxOfThree(5, 2, 1));

function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}

console.log("Exercise 7 Result:", calculateTip(50, 20));

function convertTemperature(temperature, unit) {
  if (unit === "C" || unit === "c") {
    return `${(temperature * 9) / 5 + 32} Fahrenheit`;
  } else if (unit === "F" || unit === "f") {
    return `${((temperature - 32) * 5) / 9} Celsius`;
  }
}

console.log("Exercise 8 Result:", convertTemperature(32, "C"));
console.log("Exercise 8 Result:", convertTemperature(86, "F"));

function basicCalculator(num1, num2, operationType) {
  if (operationType === "add") {
    return num1 + num2;
  } else if (operationType === "subtract") {
    return num1 - num2;
  } else if (operationType === "multiply") {
    return num1 * num2;
  } else if (operationType === "divide") {
    return num1 / num2;
  }
}

console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));
console.log("Exercise 9 Result:", basicCalculator(10, 5, "add"));
console.log("Exercise 9 Result:", basicCalculator(10, 5, "multiply"));
console.log("Exercise 9 Result:", basicCalculator(10, 5, "divide"));

// the extra level up exercises

function calculateGrade(x) {
  if (x >= 90) {
    return "A";
  } else if (x >= 80 && x < 90) {
    return "B";
  } else if (x >= 70 && x < 80) {
    return "C";
  } else if (x >= 60 && x < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Exercise 10 Result:", calculateGrade(85));
console.log("Exercise 10 Result:", calculateGrade(75));
console.log("Exercise 10 Result:", calculateGrade(65));
console.log("Exercise 10 Result:", calculateGrade(50));
console.log("Exercise 10 Result:", calculateGrade(95));

function createUsername(firstName, lastName) {
  return `${firstName.slice(0, 3)}${lastName.slice(0, 3)}${firstName.length + lastName.length}`;
}

console.log("Exercise 11 Result:", createUsername("Samantha", "Green"));

function numArgs(...args) {
  return args.length;
}

console.log("Exercise 12 Result:", numArgs(1, 2, 3, 4));
