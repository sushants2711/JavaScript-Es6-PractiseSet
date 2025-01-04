// Set3:- 
//? 1.	Write an ES6 function that takes an array of numbers and returns the highest even number.
const num = [10,12,22,23,4,4,46,20,90,799,21,200,29,90,999];
const highestEvenNumber = (num) => num.filter((currEle) => currEle % 2 === 0).sort((a,b) => b-a)[0];
//! console.log(highestEvenNumber(num))

//? 2.	Write an ES6 function that takes an array of strings and returns an array with only the strings that start with a vowel.

const stringis = ["sushant", "apple","elephnat","Macbook"];
const alphabets = ['a','e','i','o','u'];
const stringStartWithVovels = (str, alpha) =>  str.filter((currEle) => alpha.includes(currEle[0].toLowerCase()));
//! console.log(stringStartWithVovels(stringis, alphabets))

//? 3.	Write an ES6 function that takes an array of numbers and returns the sum of all odd numbers in the array.

const numOdd = [10,12,22,23,4,4,21,200,29,90];
const sumOfOddNum = (num) => num.filter((currEle) => (currEle %2 !== 0)).reduce((acc, curr) => acc+curr,0)
//! console.log(sumOfOddNum(numOdd))

//? 4.	Write an ES6 function that takes an array of objects and returns the object with the lowest price.

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
const lowestPrice = (num) => num.sort((a,b) => a.price-b.price)[0];
//! console.log(lowestPrice(products))

//? 5.	Write an ES6 function that takes an array of strings and returns an array with the strings sorted by length in ascending order.

const data = ["sushant", "apple","elephnat","Macbook"];
const sortedByLength = (str) => str.sort((a,b)=>a.length-b.length)
//! console.log(sortedByLength(data))

//? 6.	Write an ES6 function that takes an array of objects with name and age properties, and returns the object with the youngest person.

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
        age: 20
    },
    {
        name: "Roze",
        age: 26
    }
];

const youngestPerson = (num) => num.sort((a, b) =>a.age-b.age)[0]
//! console.log(youngestPerson(people1))

//? 7.	Write an ES6 function that takes an array of numbers and returns an array with each number cubed.
const numberis = [10,12,22,23,4,4,21,200,29,90];
const EachNumIsCube = (num) => num.map((currEle) => currEle*currEle*currEle);
//! console.log(EachNumIsCube(numberis))

//? 8.	Write an ES6 function that takes an array of numbers and returns the difference between the largest and smallest numbers.
const numberisagain = [10,12,22,23,4,4,21,200,29,90];
const differenceBetweenLargestAndSmallest = (num) => {
    const largest = num.sort((a,b) => b-a)[0];
    const smallest = num.sort((a,b) =>a-b)[0];
    return largest-smallest;
}
//! console.log(differenceBetweenLargestAndSmallest(numberisagain))

//? 9.	Write an ES6 function that takes an array of strings and returns an object where the keys are the strings and the values are the lengths of the strings.

const str4 = ["sushant", "apple","elephnat","Macbook"];
const strLengthAndValues = (str) => {
  return str.map((curr, index) => {
    return{
        index,
        length: curr.length
    }
  })
}
//! console.log(strLengthAndValues(str4))

//? 10.	Write an ES6 function that takes an array of numbers and returns the number of even numbers in the array.

const evenOddNum = [10,12,22,23,4,4,21,200,29,90];
const onlyEven = (num) => num.filter((currEle) => currEle%2===0)
//! console.log(onlyEven(evenOddNum))