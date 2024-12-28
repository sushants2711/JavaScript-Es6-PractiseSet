// 1. Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value.
//    Initial age should be 30.

const person = {
    name: "Jhon Doe",
    age: 30
}
// person.age = 32;
// console.log(person)

// 2. Write a function that takes an object car and returns true if the car
//    is a sports car (i.e. has a horsepower property greater than or equal to 300)


const sportsCarCheck = (car) => {
    if(car.horsepower>= 300) {
        return true;
    }
    return false
};
const carObj1 = { name: "Porshe" ,price: 800000, horsepower: 500}
const carObj2 = { name: "BMahindra Thar" ,price: 70000, horsepower: 250}
const carObj3 = { name: "BMW" ,price: 10000000, horsepower: 800}

// console.log(sportsCarCheck(carObj1))
// console.log(sportsCarCheck(carObj2))
// console.log(sportsCarCheck(carObj3))

// 3. Write a function that takes an object person and a number num
//    as arguments and returns true if the person's age plus num is greater
//    than or equal to 21. Otherwise, it should return false.

const isGreater = (person, num) => person.age+num >= 21 ? true : false
const person1 = {
    name: "Joy",
    age: 24
}
const person2 = {
    name: "Roze",
    age: 16
} 
// console.log(isGreater(person1,10))
// console.log(isGreater(person2,2))


// 4. Write a function that takes an object blog and returns true
//    if the blog has more than 1000 views (i.e. has a views property greater than 1000)

const isViews = (blog) => blog.views>1000 ? true : false
const blog1 = {
    blogname: "Es6 blog in js",
    views: 16000
}
const blog2 = {
    name: "Django otp verification",
    views: 999
}

// console.log(isViews(blog1))
// console.log(isViews(blog2))

// 5. Swap the values of two variables using array destructuring.

let first = 10;
let second = 20;
[first, second] = [second, first]
// console.log(first)
// console.log(second)


// 6. Convert this function into ES6 with least amount of characters.

const add = (a = 30, b = 0) => a + b;
const add1 = (a,b) => (a??30) + (b??0)

// console.log(add1());
// console.log(add1(50));
// console.log(add1(40,80));


// 7. Write an ES6 function combineObjects with least amount
//    of characters which merges two objects into one.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const objCombine = (obj1,obj2) => Object.assign({}, obj1, obj2)
// console.log(objCombine(obj1,obj2))

const objCombineByUsingSpread = (a, b) => ({ ...a, ...b})

// console.log(objCombineByUsingSpread(obj1, obj2))

// Expected Output: {a: 1, b: 2, c: 3, d: 4}

//8. Convert the function getData, into an ES6 function with least amount of characters.
//   Hint: Destructuring

const personDeatils = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};

const { name: fulName, address :{city, state } } = personDeatils
// console.log(fulName)
// console.log(city)
// console.log(state)


// 9. Write a function that takes a string as input
//    returns the string in all uppercase letters.

const changeToUpperCase = (str) => str.toUpperCase()
// console.log(changeToUpperCase("Josh English"))

// 10. Write a function that takes two strings as input and concatenates them together.

const str1 = "Jhon"
const str2 = "Doe"

const concatStr = (str1, str2) => str1+str2
const concatStr2 = (str1, str2) => `${str1}${str2}`
// console.log(concatStr(str1, str2))
// console.log(concatStr2(str1, str2))

// 11. Write a function that takes an array and returns the last element in the array.
const arrayis =[ 2, 4, 5, 6, 8, 10, 15 ];
const arr2is = [4,8,4,5,66,55,100]

const lastElementArray = (arr) => arr[arr.length-1];
// console.log(lastElementArray(arrayis))

const lastElementByPop = (arr) => arr.pop();
// console.log(lastElementByPop(arrayis))

const lastElementByUnshift = (arr) => arr.unshift(); 
// console.log(lastElementByUnshift(arr2is))

const lastElementBySlice = (arr) => arr.slice(-1)
// console.log(lastElementBySlice(arr2is))

// 12. Write a function that takes an array and returns the first element of the array.

const firstArray = [1,2,3,4,5,6];
const firstElement = (elem) => elem[0];
// console.log(firstElement(firstArray))

const byUsingSlice = (elem) => elem.slice(0,1)
// console.log(byUsingSlice(firstArray))

const byUsingShift = (elem) => elem.shift();
console.log(byUsingShift(firstArray))


// 13. Write a function that takes an array and a
//     number and returns the sum of first element and the number.

const sumarr = [1,2,3,4,5,6];
const sumFirstAndLast = (ar) => ar[0]+ar[ar.length-1]
// console.log(sumFirstAndLast(sumarr))

// 14. Write a function that takes an array and returns the sum of first and last element.


// 15. Write a function that takes an object representing a
//     person's information (name, age, occupation) and returns a template
//     literal that includes the person's name and age in a sentence.

const personInfo = {
    name: "Sushant",
    age: 21,
    occupation: "Student"
}

const stringLiteral = (person) => `name is ${person.name}, age is ${person.age} and occupation is ${person.occupation}`
// console.log(stringLiteral(personInfo))

// 16. Write a function that takes an two array and than merge it
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergeArr = (a, b) => [...a, ...b]
// console.log(mergeArr(arr1, arr2))