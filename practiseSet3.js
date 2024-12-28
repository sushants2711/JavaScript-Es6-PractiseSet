// 1. Create a function that takes an array of
//    strings as an argument and returns a string that includes the number
//    of items in the array and the first and last items.

const fruitsarr = ["orange", "apple", "mango", "guava"];
const firstLast = (arr) => `the length of an fruits array is ${fruitsarr.length} and the 1st item is ${arr[0]} and last item is ${arr[arr.length-1]}`
// console.log(firstLast(fruitsarr))

// 2. Create a function that takes a product object as an
//    argument and returns a string that includes the product name, price,
//    and a message based on whether it is in stock or not.

const shopdetails = {
    name: "apple",
    price: "120 kg",
    stock: true
}
const shopdetails2 = {
    name: "apple",
    price: "120 kg",
    stock: false
}

const isavailable = (product) => product.stock === true ? "available" : "not availlable"
console.log(isavailable(shopdetails))
console.log(isavailable(shopdetails2))

// 3. Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.
const user =[
    {
    name: "Oggy",
    age: 20
},
{
    name: "Ajay",
    age: 15
},
{
    name: "Jack",
    age: 25
}
]

const findPerson = (person, name) => person.some((a) => a.name.toLowerCase() === name.toLowerCase())
// console.log(findPerson(user, "Jack"))
// console.log(findPerson(user, "sushant"))



// 4. Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.



// 5. Convert the following code to ES6+ syntax with minimum number of characters.

// const startsWithA = (str) => (str.charAt(0) === "A" ? `Found` : "Not-Found");

const startsWithA = (str) => str.charAt(0) === "A" ? `Found` : "Not-Found";
// console.log(startsWithA("Akshita"));
// console.log(startsWithA("Jeena"));

// 6. Write an ES6 function to return only the first character of the given array.

const firstElem = ["orange", "apple", "mango", "guava"];
// const returnfirstChar = (firstElem) => firstElem.charAt(0)
// console.log(returnfirstChar(firstElem))

// 7. Write a function to return the last 5 characters as an array from the given array.


// 8. Write an ES6 function to return the second element of the given array by multiplying 20 to it.

const mult20 = [100,5,4,9,85]
const multiply20 = (mult) => `${mult[1]*20}`
// console.log(multiply20(mult20))

const multBySlice = (mult) => {
    let multiply =1;
    for(let i=0; i<mult.length ;i++ ){
        if(i === 1) {
            multiply =mult[i] * 20;
            break;
        }
    }
    return multiply
}
// console.log(multBySlice(mult20))

// 9. Write an ES6 function to return the second element of the given array by adding “Hello” before it.

const name = ["Ram", "alice", "Bob", "Martin"]
const secondElement = (namefind)=> `hello ${namefind[1]}`
// console.log(secondElement(name))


const secondElementBySlice = (nameis) => {
    const slicetheArray = nameis.slice(1,2);
    return `HELLO ,${slicetheArray}`
}
// console.log(secondElementBySlice(name))

// 10. Write an ES6 function to return sum of all numbers at even indices of the given array.

const arr = [1,15,4,9,6,1,5,7,6];
const sumOfEvenIndex = (arr) => {
    let sum = 0;
    for (const key in arr) {
        if(key%2 === 0){
            sum+=arr[key]
        }
    }
    return sum;
}
// console.log(sumOfEvenIndex(arr))


// 11. Write an ES6 function to return the sum of only first 2 elements of the array .

const sumarray = [100,15,4,9,85]
const sumOfFirstTwo = (arr) => arr[0]+arr[1];
// console.log(sumOfFirstTwo(sumarray))


// 12. Write an ES6 function to return the first element which is a multiple of 5 in the given array.

const arrayis = [100,15,4,9,85]

const returnFirstElement = (arrayis) =>{
    let firstElement ;
    for(let i=0; i<arrayis.length ;i++){
        if(arrayis[i] % 5 === 0) {
            firstElement = arrayis[i];
            break;
        }
    }
    return firstElement;
}

// console.log(returnFirstElement(arrayis))


// 13. Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.

const userData = {
  name: "Jane Doy",
  postalCode: "12134",
  city: "Germany",
};

const updateData = (data) => {
    const { postalCode, city } = data;
    return { postalCode, city }
}
// console.log(updateData(userData))



// 14. Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.
// // Your ES6 code here

const userDetails = {
    name: "Sushant",
    age: 18,
    country: "India"
}

const print = (user) => `name is ${user.name} and he/she lives in ${user.country}`
// console.log(print(userDetails))


// 15. Create a function which takes a product object and returns a sentence about the product using ES6 features.
const product = {
  name: "Apple MacBook Air 2020",
  specification: {
    capacity: "256GB",
    size: "13.3 Inch",
  },
  price: 82900,
};

const productprint = (product) =>{
    const {name, specification: {capacity, size}, price} = product;
    return `product name is ${name} and the specification is ${capacity} RAM, and screen size is ${size} and final price should be ${price}`
}

// console.log(productprint(product))