// FUNCTIONAL PROGRAMMING
// SET:-1 (MID - LEVEL)

//?  1. Write a function that takes an array of numbers and returns a new array where each number is the result of multiplying the corresponding number in the original array by its index. Use the `map` method.

const numbers = [2,4,6,1,3,4];
const multiplyByIndex = (num) => {
    const newnumbers = num.map((curr, index) => curr*index)
    return newnumbers
}
//! console.log(multiplyByIndex(numbers))

//?  2. Write a function that takes an array of objects with properties `name` and `price` and returns a new array of names sorted by price in ascending order.
const productsDetails =[
    {name: "Rice", price: 60},
    {name: "Wheat", price: 40},
    {name: "Sugar", price: 60},
    {name: "Milk", price: 34},
    {name: "Coke", price: 50}
];

const ascendingOrder = (products) =>  {
    return products.sort((a, b) => a.price - b.price)
}

const descendingOrder = (products) =>  {
    return products.sort((a, b) => b.price - a.price)
}
//! console.log(ascendingOrder(productsDetails))
//! console.log(descendingOrder(productsDetails))

//?  3. Write a function that takes an array of strings and returns a new array where each string is reversed. Use the `map` method.
const arr = ["hero", "honda", "tatamotors", "mahindra"];
const reverseStr = (str) => {
    const newArr = str.map((a)=> a.split('').reverse().join(''))
    return newArr
}
//! console.log(reverseStr(arr))

//?  4. Write a function that takes a number `n` and returns the sum of all the numbers divisible by 5 and 7, up to `n`.
const checkDivisible = (n) => {
    let sum = 0;
    for (let i =1; i<n; i++){
        if( i%5 === 0 && i%7===0 ){
            // console.log(i)
            sum+=i;
        }
    }
    return sum;
}
//! console.log(checkDivisible(500))

//?  5. Write a function that takes an array of objects with properties `name`, `age`, and `city`. Return the object with the highest age from the array.
const personDetails1 = [
    {
        name: "ROZE",
        age: 19,
        city: "Dhanbad"
    },
    {
        name: "SUSHANT",
        age: 19,
        city: "Patna"
    },
    {
        name: "JAYA",
        age: 21,
        city: "Bokaro"
    }
]

const highestage = (a) => {
    const greaterAge = a.sort((a, b)=> b.age - a.age)[0]
    return greaterAge
}
//! console.log(highestage(personDetails1))

//?  6. Write a function that takes a string and returns a new string where each character is shifted by `n` positions in the alphabet. If `n` is negative, the shift should be reversed. Handle both uppercase and lowercase letters.


//  7. Write a function that takes an array of numbers and returns an object containing the sum, average, maximum, and minimum of the numbers in the array.
const numMath =[10,2,30,10,50,5,10];

const allMathFun = (num) => {
    let totalSum = 0;
    const sum = num.reduce((acc, curr) => acc+ curr, 0)
    const avg = Math.round((sum / num.length));
    const maximum = Math.max(...num);
    const aMax = num.reduce((acc, curr) => curr>acc ? curr : acc)
    const aMin = num.reduce((acc, curr) => curr<acc ? curr : acc)
    const minimum = Math.min(...num);
    return {
        sum,
        avg,
        maximum,
        minimum,
        aMax,
        aMin
    }
}

//! console.log(allMathFun(numMath))

const arraySort = (numsort) => numsort.sort((a,b) => a-b)
//! console.log(arraySort(numMath))

//?  8. Write a function that accepts an array of strings, where each string represents a number in words (e.g., "one", "three", "seven"). The function should return the sum of these numbers.

const strNumber = ["one", "three", "seven", "eight", "ten"]
//! not solve
//?  9. Write a function that takes an array of objects with properties `name` and `score`. Return a new array of the top 3 highest-scoring students.

const cricketScore = [
    {
        name: "Sushnat",
        score: 100
    },
    {
        name: "Roshtan",
        score: 79
    },
    {
        name: "Bob",
        score: 99
    }, {
        name: "Oggy",
        score: 88
    },
    {
        name: "Jonthy",
        score: 93
    }
];

//! console.log("All cricket players data ----", cricketScore);

const highestScore = (scr) => {
   const value = scr.sort((a,b) => b.score - a.score )
   const newArr = []
   for(let i=0; i<=2; i++) {
    newArr.push(value[i]);
   }
   return newArr;
}
//! console.log("Top 3 players of data -----", highestScore(cricketScore))


//?  10. Write a function that takes an array of objects representing events, each with properties `date` and `name`, and returns the event that occurs the soonest (i.e., has the earliest `date`.

const events = [
    { date: '2024-12-31', name: 'New Year Party' },
    { date: '2024-12-25', name: 'Christmas Celebration' },
    { date: '2024-12-24', name: 'Christmas Eve Dinner' }
  ];

const checkEarlierEvent = (e) => e.sort((a, b) => new Date(a.date) - new Date(b.date) )[0]
//! console.log(checkEarlierEvent(events))

//?  11. Write a function that accepts a nested array, where each sub-array represents a collection of numbers. Return a flattened array containing all the numbers in the sub-arrays, sorted in ascending order.

const nestedArray = [1,[2,3],[4,5,[7,10,1]]]

const convertSimpleArray = (arr) => arr.flat(Infinity).sort((a, b) => a-b)
//! console.log(convertSimpleArray(nestedArray))


//  12. Write a function that takes an array of strings, checks for duplicate strings, and returns a new array that contains only unique strings (without using `Set`).

const allStr = ["sushant","sushant","sushant", "mango", "lion", "Lion", "Lion", "sushant", "mango", "lapy", "lapy", "Lapy"];

const checkDuplicate = (str) => {
    let newArr = [];
    for(let i=0; i<str.length; i++) {
        let isduplicate = false;
        for(let k=i+1; k<str.length; k++) {
            if(str[i] === str[k]) {
                isduplicate = true;
                break;
            }
        }
        if (!isduplicate) {
            newArr.push(str[i]); 
        }
    }
    return newArr;
}
console.log(checkDuplicate(allStr))