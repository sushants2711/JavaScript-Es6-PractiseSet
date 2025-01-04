// Set:- 2
//? 1.	Given an array, write an ES6 function that returns the total length of all the strings in an array.

const arrSt = ["sushant", "kumar","singh"];
const totalLengthOfStr = (str) => str.join('').length;
//! console.log(totalLengthOfStr(arrSt))

const totalLength = (num) => num.reduce((acc, curr) => acc+curr.length,0)
//! console.log(totalLength(arrSt))


//? 2.	Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array.

const array = [2,3,4,3,5,29,9];
const sumSquares = (num) => num.map((currEle) => currEle*currEle).reduce((acc, curr) => acc+curr,0)
//! console.log(sumSquares(array))

// 3.	Write an ES6 function that calculates and returns the total value of all items in an array of objects.

const items = [10,20,2,40,1,10];
const totalValueOfItems = (num) => num.reduce((acc, curr) => acc+curr, 0)
//! console.log(totalValueOfItems(items))

//? 4.	Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

const arrStr = ["sushant", "kumar","singh"];
const singleStr = (str) => str.join('')
//! console.log(singleStr(arrStr))

//? 5.	Write an ES6 function to multiply and return all the elements of a given array.

const items2 = [10,20,2,40,1,10];
const multiply = (num) => num.reduce((acc, curr) => acc*curr, 1);
//! console.log(multiply(items2))

//? 6.	Write an ES6 function that takes an array of strings and returns the longest string.

const arrString = ["sushant", "RohitHitmanSharma","singh"];
const longestStr = (str) => str.reduce((acc, curr) => curr.length>acc.length ? curr : acc)
console.log(longestStr(arrString))

//? 7.	Write an ES6 function that takes an array of objects with name and age properties, and returns the name of the oldest person.
const people1 =[
    {
        name: "Sushant",
        age: 21
    },
    {
        name: "Harsh",
        age: 22
    },
    {
        name: "Joe",
        age: 22
    },
    {
        name: "Roze",
        age: 26
    }
];

const oldestPerson = (num) => num.sort((a, b) =>b.age-a.age)[0]
//! console.log(oldestPerson(people1))

//? 8.	Write an ES6 function that takes an array of objects representing people with name and age properties, and returns an object with the average age of all the people.

const people =[
    {
        name: "Sushant",
        age: 21
    },
    {
        name: "Harsh",
        age: 22
    },
    {
        name: "Joe",
        age: 22
    },
    {
        name: "Roze",
        age: 26
    }
];
const averageAgeOfPeople = (num) => {
   const sumis=  num.reduce((acc, curr) => acc+curr.age,0);
   const avgAge = sumis/num.length;
   return avgAge
}
//! console.log(averageAgeOfPeople(people))

//? 9.	Write an ES6 function that takes an array of objects representing products with name, price, and quantity properties, and returns an object with the most expensive product.

const products = [
    {
        name: "I-Phone",
        price: 55000,
        quantity: 5
    },
    {
        name: "MacBook Air m2",
        price: 95000,
        quantity: 4
    },
    {
        name: "Analog Watch",
        price: 5000,
        quantity: 10
    },
    {
        name: "Tv",
        price: 45000,
        quantity: 2
    },
];
const mostExpensive = (num) => num.sort((a,b) => b.price-a.price)[0];
//! console.log(mostExpensive(products))

//? 10.	Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
const countOfEachStr = (str) => {
  // not solve
}
//! console.log(countOfEachStr(strings))