//
// Description: Sophisticated and Elaborate JavaScript Code
// Filename: sophisticated_code.js
//

// Generate an array of random integers within a given range
function generateRandomArray(length, min, max) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return randomArray;
}

// Sort an array using Bubble Sort algorithm
function bubbleSort(arr) {
  let len = arr.length;
  let sorted = false;
  
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
    len--;
  }
  
  return arr;
}

// Calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Validate if a string is a palindrome
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  
  return true;
}

// Generate the Fibonacci sequence up to a given limit
function generateFibonacci(limit) {
  let sequence = [0, 1];
  
  while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= limit) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  
  return sequence;
}

// Calculate the sum of all numbers in an array recursively
function recursiveArraySum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + recursiveArraySum(arr.slice(1));
  }
}

// Convert a decimal number to binary
function decimalToBinary(decimal) {
  let binary = "";
  
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  
  return binary;
}

// Use all the functions defined to perform complex tasks
let randomArray = generateRandomArray(10, 1, 100);
console.log("Generated Random Array:", randomArray);

let sortedArray = bubbleSort(randomArray);
console.log("Sorted Array:", sortedArray);

let number = 5;
console.log(number + "! (Factorial):", factorial(number));

let palindromeString = "racecar";
console.log("Is Palindrome:", isPalindrome(palindromeString));

let fibonacciLimit = 100;
console.log("Fibonacci Sequence (Limit:", fibonacciLimit + "):", generateFibonacci(fibonacciLimit));

let sumArray = [1, 2, 3, 4, 5];
console.log("Recursive Array Sum:", recursiveArraySum(sumArray));

let decimalNumber = 10;
console.log("Decimal to Binary (Number:", decimalNumber + "):", decimalToBinary(decimalNumber));

// ... additional complex code with more than 200 lines goes here ...