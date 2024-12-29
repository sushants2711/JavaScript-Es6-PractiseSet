// FUNCTIONAL PROGRAMMING

// SET:-1 (BEGINNER)

//? 1.	  Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

const number = [2,4,6,8,10,12];

const addone = (num) => num.map((curr, index, arr) => curr+1)
// console.log(addone(number))

//? 2.	  Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

const names = ["sushant", "alice", "Bob", "roze"];
const capitialize = (str) => {
    const capital = str.map((curr) => curr.toUpperCase());
    return capital;
}
// console.log(capitialize(names))

//? 3.	Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.
const personDetails = [
    {
        name: "Roze",
        age: 19,
        school: "DAV"
    },
    {
        name: "Sushant",
        age: 19,
        school: "DAV"
    },
    {
        name: "Jaya",
        age: 21,
        school: "Dav"
    }
]

const findage = (person) => person.map((find) => find.age)
// console.log(findage(personDetails))

//? 4.	  Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.
const personDetails1 = [
    {
        name: "ROZE",
        age: 19,
        school: "DAV"
    },
    {
        name: "SUSHANT",
        age: 19,
        school: "DAV"
    },
    {
        name: "JAYA",
        age: 21,
        school: "Dav"
    }
]

const convertNameLowerCase = (products) => {
    const arr = products.map((curr) => curr.name.toLowerCase());
    return arr;
}
// console.log(convertNameLowerCase(personDetails1))

//? 5.	  Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.
const cities = [
    {cityName: "Delhi", population: 80000},
    {cityName: "Noida", population: 100000},
    {cityName: "Dehradun", population: 40000},
]
const cityreturn = (city) => city.map((c) => c.cityName)
// console.log(cityreturn(cities))

//? 6.	  Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.
const arrName = ["sushant", "rose", "mongoDb", "postman", "Roshtan Chase", "db", "jaya", "jaaz"]

const strgreaterthanFive = (str) => {
    const result = [];
    for(let key in str) {
        if(str[key].length > 5) {
            result.push(str[key]);
        }
    }
    return result
}
// console.log(strgreaterthanFive(arrName))

const strGreaterThanFive = (str) => {
    const value_in = str.filter((curr) => curr.length>5)
    return value_in;
}
// console.log(strGreaterThanFive(arrName))

//? 7.	  Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.
const divNumber = [3,5,15,25,30];
const checkItDivisible = (num) => {
    const itdivisible = num.filter((a)=> a%3===0 && a%5===0)
    return itdivisible;
}
// console.log(checkItDivisible(divNumber))

//? 8.	  Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.
const checkObj = [
    {
        name: "Sushant singh",
        age: 21
    },
    {
        name: "Roshan singh",
        age: 31
    },
    {
        name: "Rohit sharma",
        age: 24
    },
    {
        name: "Bhartendu jha",
        age: 35
    }
];

const checkage = (num) => {
    const data = num.filter((a) => a.age>30)
    return data;
}
// console.log(checkage(checkObj))

//? only if you want name if age is greater than 30

const onlyName = (num) => num.filter((a)=>a.age>30).map((a)=> a.name)
// console.log(onlyName(checkObj))

//? 9.	  Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.

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
    }
];

const scoreCheck = (score) => score.filter((a) => a.score > 80)
// console.log(scoreCheck(cricketScore))

// if you only want to print score 
const scoreOnly = (score) => score.filter((a) => a.score > 80).map((a)=> a.score)
// console.log(scoreOnly(cricketScore))

// if you only want to print name 
const sname = (score) => score.filter((a) => a.score > 80).map((a)=> a.name)
// console.log(sname(cricketScore))


//? 10.	  Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

const dataIs = [
    {
        name: "Ajay",
        age: 71,
        city: "Dhanbad"
    },
    {
        name: "Bob",
        age: 70,
        city: "Indore"
    },
    {
        name: "Alice",
        age: 80,
        city: "Indore"
    }
];

const checkAgeCity = (num) => num.filter((a)=>a.age>70 && a.city.toLowerCase() === "indore")
// console.log(checkAgeCity(dataIs))

//? 11.	  Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Science Fiction"
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Science Fiction"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Classic"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Science Fiction"
    }
  ];
  
  const genreCheck = (gene) => gene.filter((a) => a.genre.toLowerCase() === "science fiction")
//   console.log(genreCheck(books))

//? 12.	  Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

const empInfo = [
    {
        name: "Sushant",
        age: 35,
        salary: 70000
    },
    {
        name: "Diwakar",
        age: 25,
        salary: 5000
    },
    {
        name: "Jazz",
        age: 26,
        salary: 40000
    },
    {
        name: "Rozz",
        age: 15,
        salary: 40000
    }
];

const checkAgeandSalary = (curr) => curr.filter((a)=> a.age>25 && a.salary>22000)
// console.log(checkAgeandSalary(empInfo))