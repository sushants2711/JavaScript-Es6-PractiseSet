// ========================================>lets start <=======================================

//1. Write a function that takes a user's age and determines
// if they are old enough to vote (age 18 or older) ?

const isEligibleforVoting = (age) => age >= 18 ? console.log("Yes you are eligible for vote") : console.log("Sorry you are not eligible");
// isEligibleforVoting(19);
// isEligibleforVoting(25);
// isEligibleforVoting(16);
// isEligibleforVoting(18);
// ========================================>     2      <=======================================

//2. Write a function that takes two numbers as input and determines which one is greater.

const greaterNumber = (num1, num2) => {
  if (num1 === num2) return "num1 and num2 are equal";
  else if (num1 > num2) {
    return `Number ${num1} is greater than Number ${num2}`
  } else {
    return `Number ${num2} is greater than Number ${num1}`
  }
}
// console.log(greaterNumber(4,5));
// console.log(greaterNumber(40,36));

// ========================================>     3      <=======================================

//3. Write a function that takes a number as input and determines if it is positive or negative.
const checkInteger = (num) => num >= 0 ? "Positive number" : "Negative number"
// console.log(checkInteger(5));
// console.log(checkInteger(-8));

// ========================================>     4      <=======================================

//4. Write a function that takes a number as input and determines if it is even or odd.
const evenOdd = (num) => num % 2 === 0 ? "Even number" : "Odd number"
// console.log(evenOdd(5));
// console.log(evenOdd(10));
// console.log(evenOdd(12));
// console.log(evenOdd(99));
// // ========================================>     5      <=======================================

// 5.Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.
const letterPresent = (str) => 
  str.toLowerCase().includes('a') ? `yes, it contains {a} in ${str}` : `no, it does,'t contains {a} in ${str}`;
  // str.toUpperCase().includes('A') ? `yes, it contains {A} in ${str}` : `no, it does,'t contains {A} in ${str}`;


// console.log(letterPresent("abcd"));
// console.log(letterPresent("Animal"));
// console.log(letterPresent("BadBoy"));
// console.log(letterPresent("user"))



// ========================================>     6      <=======================================

// 6. Write a function that takes a string as input and determines if it is longer than 5 characters.
const strLength = (str) => str.length>5 ? console.log("yes the given string is longer than 5 characters") : console.log("No the given string is less than 5 characters")
// strLength("sushant");
// strLength("joy")
// strLength("jenny");
// strLength("reference")
// ========================================>     7      <=======================================

// 7.Write a function that takes a number as input and determines if it is between 1 and 10.
const checkInBetween = (num) => num > 0 && num < 10 ? console.log(`num is between 1 to 10 and number is ${num}`) : console.log(`num is not in between 1 to 10 and number is ${num}`)
// checkInBetween(50);
// checkInBetween(4);
// checkInBetween(0);
// checkInBetween(10);
// checkInBetween(1);

// ========================================>     8      <=======================================

// 8. Write a function that takes a string as input and determines if it contains the word "hello".
const strCheck = (str) => str.toLowerCase().trim().includes("hello") ? console.log(`yes ${str} it includes hello`) : console.log(`No ${str} it not includes hello`)
// strCheck("helloworld");
// strCheck("programming");
// strCheck("helloJavaScript")

// ========================================>     9      <=======================================

// 9. Write a function that takes a number as input and determines if it is a multiple of 3.
const checkMultiple = (num) => num%3 === 0 ? console.log(`${num} is multiple of 3`) : console.log(`${num} is not multiple of 3`)
// checkMultiple(3);
// checkMultiple(30);
// checkMultiple(31);
// checkMultiple(23);

// ========================================>    10      <=======================================

// 10. Write a function which takes in a number as input and returns it after multiplying by 10.
const numMultiply = (num) => num*10
// console.log(numMultiply(10));
// console.log(numMultiply(5));
// ========================================>     11      <=======================================

// 11. Console individual values of the product object using object destructuring.
const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};

// const { title, price, description } = product;
// console.log(title);
// console.log(price);
// console.log(description);



// ========================================>     12      <======================================

// 12. Create an object book with properties title, author, and pages.
// Create a function getBookDetails that takes a book object as a parameter and returns
// if the book has more than 100 pages.

const book = {
  title: "Physocology of trading in stock market",
  author: "G.C Selden",
  pages: 640,
};
const getBookDetails = (book) => book.pages>100 ? "more than 100 pages" : "less than 100 pages"
// console.log(getBookDetails(book))

const getBookDetailsDes = ({ pages }) => pages>100 ? "more than 100 pages" : "less than 100 pages"
// console.log(getBookDetailsDes(book))

// ========================================>     13      <=======================================

// 13. Create a function changeOccupation that takes an object person and
// a string newOccupation as parameters, and changes the occupation property of
// the person object to the newOccupation. Log the person object to the console
// before and after calling the function.

const person = {
  name: "Sushant kr singh",
  age: 20,
  branch: "CSE",
  occupation: "Web developer",
};
// const changeOccupation = (person, newOccupation) => person.occupation = newOccupation 
// console.log(person);
// changeOccupation(person, "full stack developer")
// console.log(person)

// ========================================>     14      <=======================================

// 14. Given an array numbers containing the numbers 1, 2, and 3. Use array
// destructuring to log each number to the console.
const array = [1, 2, 3];
const [x, y, z] = array;
// console.log(x);
// console.log(y);
// console.log(z);


// ========================================>     15      <=======================================

// 15. Convert the given function into ES6 with least amount of characters.

const defaultParamsFunc = (a, b, c = 4) => a * b * c;

//using nullish coalescing
const defaultParamsFuncUsingNullishCoalescing = (a, b, c) => a+b+( c ?? 10 )
// console.log(defaultParamsFuncUsingNullishCoalescing(10,10));
// console.log(defaultParamsFuncUsingNullishCoalescing(100,5,100));
// console.log(defaultParamsFuncUsingNullishCoalescing(10,1));