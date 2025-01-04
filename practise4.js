// Set :- 1
//? 1.	Write a function to calculate the sum of n elements.

const sum = (...num) => num.reduce((acc, curr) => acc+curr, 0);
//! console.log(sum(2,3,4,5))

//? 2.	Write a function that takes an array of "n" numbers as an argument and returns an object containing the maximum number, minimum number, and the average of all numbers in the array.

const mathematicalValue = (num) => {
    const maximum = num.sort((a,b) => b-a)[0];
    const minimum = num.sort((a,b) => a-b)[0];
    const maximumByReducer = num.reduce((acc, curr) => curr>acc? curr: acc)
    const minimumByReducer = num.reduce((acc, curr) => acc>curr? curr:acc)
    const maximumByMathOperator = Math.max(...num);
    const minimumByMathOperator = Math.min(...num);
    const avg = Math.round(num.reduce((acc, curr) => acc+curr,0)/num.length)
    return{
        maximum, minimum, maximumByReducer, minimumByReducer, maximumByMathOperator, minimumByMathOperator, avg
    }
}
const arr = [20,3,4,50,1,14]
//! console.log(mathematicalValue(arr))

//? 3.	Given an array of numbers, write a function that returns the sum of all the even numbers.

const arrsum = [1,2,3,4,4,45,5,66,2,7,7,];
const sumOfEvenNum = (num) => {
    let sum = 0;
    num.map((currEle) => {
        if( currEle % 2 === 0 ) {
            sum = sum+ currEle
        }
    })
    return sum
}
//! console.log("The sum is ",sumOfEvenNum(arrsum))

const arrsumis = (num) => num.filter((val) => val%2 ===0).reduce((acc, curr) => acc+curr, 0)
//! console.log(arrsumis(arrsum))


//? 4.	Given an array of numbers, write a function that returns the difference between the largest and smallest numbers.

const arrDif = [22,34,5,6,18,1,2];
const differenceHighestAndSmallest = (num) => {
    const maximum = num.sort((a,b) => b-a)[0];
    const minimum = num.sort((a,b) => a-b)[0];
    return maximum-minimum;
}
//! console.log(differenceHighestAndSmallest(arrDif))

//? 5.	Given an array of objects representing people, where each object has a name property and an age property, write a function that returns the name of the oldest person.

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
const oldestPerson = (product) => product.sort((a, b) => b.age - a.age)[0].name
//! console.log(oldestPerson(people))

//? 6.	Write a function that calculates the product of all numbers in an array.

const productArr = [2,4,5,6,1,10];
const productFun = (num) => num.reduce((acc, curr) => acc*curr, 1)
//! console.log(productFun(productArr))

//? 7.	Write a function that checks whether a given number is a prime number.

const checkPrime = (num) => {
    if( num === 1 ||num === 2 ) return true;
    for(let i=2; i<=num/2; i++){
       if( num % i === 0 ){
        return false
       }
    }
    return true;
}
//! console.log(checkPrime(1))
//! console.log(checkPrime(2))
//! console.log(checkPrime(13))
//! console.log(checkPrime(10))
//! console.log(checkPrime(45));

//? 8.	Write a function that returns the largest even number in an array.

const arrr3 = [1,2,3,4,4,45,5,66,2,7,7,];
const largestEvenNum = (num) => num.filter((currEle) => (currEle%2===0)).sort((a,b) => b-a)[0]
//! console.log(largestEvenNum(arrr3))

//? 9.	Write a function that takes an array of numbers and returns an array with each number squared.

const arrr4 = [1,2,3,4,4,45,5,66,2,7,7,];
const EachNumIsSquare = (num) => num.map((currEle) => currEle*currEle)
//! console.log(EachNumIsSquare(arrr4))

//? 10.	Write a function that removes duplicates from an array of numbers.

const arrr5 = [1,2,3,4,4,45,5,66,2,7,7,];

const removeDuplicates = (num) => new Set(num.map((currEle) => currEle))
//! console.log(removeDuplicates(arrr5))

const removeDuplicates1 = (num) => [...new Set(num)]
//! console.log(removeDuplicates1(arrr5))

const removeDuplicates2 = (num) => num.reduce((acc, curr) => {
    if(!acc.includes(curr)) {
        acc.push(curr)
    }
    return acc;
},[])
//! console.log(removeDuplicates2(arrr5))

const removeDuplicates4 = (num) => {
    let newarris = [];
    num.map((currELe) => {
        if(!newarris.includes(currELe)) {
            newarris.push(currELe)
        }
    })
    return newarris;
}
//! console.log(removeDuplicates4(arrr5))

//? 11.	Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

const str = "madam";
const checkPalindrome = (str) => {
  const newStr = str.split('').reverse().join(''); 
  return str === newStr; 
}
//! console.log(checkPalindrome(str));

//? 12.	Write a function that takes an array of numbers and returns the index of the first occurrence of the maximum number.

const array1 = [1,2,4,3,4,4,45,5,66,2,7,7,4,4,5]
const firstOccuranceOfHighestNumberIndex = (num) => {
    let maxNum = num[0];
    let indexis = 0;
    for(let i=1; i<num.length; i++) {
        if(maxNum<num[i]) {
            maxNum = num[i];
            indexis = i;
        }
    }
    return {
        maxNum, indexis
    }
}

const firstOccuranceOfHighestNumberIndex2 = (num) => {
    let index = 0;
    return num.reduce((acc, curr, indexof) => curr>acc?index=indexof: index)

}

//! console.log(firstOccuranceOfHighestNumberIndex2(array1))
//!  console.log(firstOccuranceOfHighestNumberIndex(array1))

//? 13.	Write a function that takes an array of numbers and returns an array with the numbers in reverse order.

const array2 = [1,2,4,3,4,4,45,5,66,2,7,7,4,4,5]
const reverseis = (num) => num.reverse()
//! console.log(reverseis(array2))

//? 14.	Write a function that calculates the factorial of a given number.

const factorialis = (num) => {
    if( num === 0 || num === 1 ) {
        return 1;
    }
    return num * factorialis(num - 1);
}
//! console.log(factorialis(5));

//? 15.	Write a function that returns the second largest number in an array of numbers.

const array3 = [1,2,4,3,4,4,45,5,66,2,7,7,4,4,5]
const secondLargestNum = (num) => num.sort((a,b) => b-a)[1];
//! console.log(secondLargestNum(array3))