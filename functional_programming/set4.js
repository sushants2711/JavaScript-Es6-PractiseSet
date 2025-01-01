//? 1. Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.

const cars = [
    {
        make: "Hundai",
        model: "bs6 engine",
        year: 2010
    },
    {
        make: "Toyota",
        model: "Corolla",
        year: 2012
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2012
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2015
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2018
    },
]

const findCar = (currEle)=> currEle.find((ele) => ele.make.toLowerCase().trim() === "toyota" && ele.year > 2010)
//! console.log(findCar(cars))

//? 2. Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars that were made after the year 2012.

const cars2 = [
    {
        make: "Hundai",
        model: "bs6 engine",
        year: 2010
    },
    {
        make: "Toyota",
        model: "Corolla",
        year: 2012
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2012
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2015
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2018
    },
]

const after2012 = (carObj) => carObj.filter((curr) => curr.year>2012)
//! console.log(after2012(cars2))

//? 3. Write an ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category "electronics".

const products = [
    {
        name: "Table",
        price: 1000,
        category: "Furniture"
    },
    {
        name: "Tiffin box",
        price: 120,
        category: "Utensils"
    },
    {
        name: "Heater",
        price: 1800,
        category: "Electronics"
    },
    {
        name: "Air Conditionar",
        price: 48800,
        category: "Electronics"
    }
]

const firstElectronics = (pro) => pro.find((currEle) => currEle.category.toLowerCase() === "electronics")
//! console.log(firstElectronics(products))

//? 4. Write an ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".

const products2 = [
    {
        name: "Table",
        price: 1000,
        category: "Furniture"
    },
    {
        name: "Laptop",
        price: 48800,
        category: "Electronics"
    },
    {
        name: "Tiffin box",
        price: 120,
        category: "Utensils"
    },
    {
        name: "Heater",
        price: 1800,
        category: "Electronics"
    },
    {
        name: "Air Conditionar",
        price: 48800,
        category: "Electronics"
    }
]

const findCategoryDetails = (product) => product.filter((currEle) => currEle.category.toLowerCase() ==="electronics")
//! console.log(findCategoryDetails(products2))

//? 5. 5. Write an ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.

const studentInformation = [
    {
        name: "Sushant",
        age: 21,
        grade: 'A'
    },
    {
        name: "Dolphy",
        age: 11,
        grade: 'A'
    },
    {
        name: "Abhijeet",
        age: 22,
        grade: 'A'
    },
    {
        name: "Roze",
        age: 18,
        grade: 'b'
    },
    {
        name: "jack",
        age: 21,
        grade: 'b'
    },

]

const findGradeFilter = (studentData) => studentData.filter((currEle) => currEle.grade.toLowerCase() ==='a')
//! console.log(findGradeFilter(studentInformation))

//? 6. Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pageCount: 180 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 105 },
    { title: "1984", author: "George Orwell", pageCount: 328 },
    { title: "Moby Dick", author: "Herman Melville", pageCount: 635 },
    { title: "Pride and Prejudice", author: "Jane Austen", pageCount: 279 }
  ];
const findFirstBookPage500 = (book) => book.find((currEle) => currEle.pageCount > 500)
// console.log(findFirstBookPage500(books))  

//? 7. Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.

const customInformation = [ 
        { name: "John Doe", age: 28, gender: "Male" },
        { name: "Jane Smith", age: 25, gender: "Female" },
        { name: "Michael Johnson", age: 34, gender: "Male" },
        { name: "Emily Davis", age: 22, gender: "Female" },
        { name: "William Brown", age: 40, gender: "Male" },
        { name: "Sophia Wilson", age: 30, gender: "Female" }      
];

const findMale = (customer) => customer.filter((currEle) => currEle.gender.toLowerCase() === "male");
// console.log(findMale(customInformation))

//? 8. Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.

const games = [
    {
      title: "The Legend of Zelda: Breath of the Wild",
      developer: "Nintendo",
      genre: "Action-Adventure"
    },
    {
      title: "God of War",
      developer: "Santa Monica Studio",
      genre: "Action"
    },
    {
      title: "Stardew Valley",
      developer: "ConcernedApe",
      genre: "Simulation"
    },
    {
        title: "Pubg",
        developer: "ConcernedApe",
        genre: "Simulation"
      },
    {
      title: "Hollow Knight",
      developer: "Team Cherry",
      genre: "Metroidvania"
    },
    {
      title: "Overwatch",
      developer: "Blizzard Entertainment",
      genre: "First-Person Shooter"
    }
  ];
  const filterGenere = (game, usergen) => game.filter((currEle) => currEle.genre.toLowerCase() === usergen.toLowerCase())
//   console.log(filterGenere(games, "Metroidvania"))
//   console.log(filterGenere(games, "Simulation"))


//? 9. Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the car model that were made after the year 2012.

const cars3 = [
    {
        make: "Hundai",
        model: "bs6 engine",
        year: 2010
    },
    {
        make: "Toyota",
        model: "Corolla",
        year: 2012
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2012
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2015
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2018
    },
]

const after2012s = (carObj) => carObj.filter((curr) => curr.year>2012)
//! console.log(after2012(cars2))

//? 10. Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the all book titles that have more than 700 pages.

const books2 = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pageCount: 180 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 710 },
    { title: "1984", author: "George Orwell", pageCount: 800 },
    { title: "Moby Dick", author: "Herman Melville", pageCount: 635 },
    { title: "Pride and Prejudice", author: "Jane Austen", pageCount: 700 },
];

const allBookGreaterthan700Pages = (book, pages) => book.filter((a)=> a.pageCount> pages)
//! console.log(allBookGreaterthan700Pages(books2, 700))

//? 11. Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.
const arr = [2,5,7,8,90,2,4,44,1,51,60];

const findSumOfEvenNum = (sum)=> sum.reduce((acc, curr) => (curr % 2 === 0 ? acc+curr : acc),0)

// const findSumOfEvenNum = (sum) => {
//     let val =0;
//     for(let key of sum){
//         if(key % 2 === 0){
//             val=val+key
//         }
//     }
//     return val
// }

//! console.log(findSumOfEvenNum(arr));

//? 12. Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.
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

const averageFunction = (avgis) => avgis.reduce((acc, curr) => acc+curr.score/avgis.length, 0)
//! console.log(averageFunction(cricketScore))

//? 13. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns the total cost of all the products using the reduce function.
 const products3 = [
   { name: 'Shirt', price: 20, quantity: 2 },
   { name: 'Pants', price: 30, quantity: 1 },
   { name: 'Shoes', price: 50, quantity: 1 },
   { name: 'Hat', price: 10, quantity: 3 },
 ];
const totalPrice = (pro) => pro.reduce((acc, curr) => acc+(curr.price * curr.quantity),0)
//! console.log(totalPrice(products3))

//? 14. Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function const strings = ['Hello', ' ', 'world', '!'];

const strings = ['Hello', ' ', 'world', '!'];
const concatAllStr = (str) => str.reduce((acc, curr) => acc+curr, '')
//! console.log(concatAllStr(strings))

//? 15. Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function. const numbers = [10, 5, 8, 3, 6];

const numbers = [10, 5, 8, 3, 6];
const minNumber = (num) => num.reduce((acc, curr) => curr<acc ? curr:acc)
//! console.log(minNumber(numbers))
