//1. Write an ES6 function that accepts an array of integers and returns the maximum element in the array.
// Avoid using in-built methods.
let arrayNum = [4, 78, 8, 3, 6, 0, 12, 34];

// using built in method;
// arrayNum.sort((a, b) => b-a);
// console.log(arrayNum[0]);

//using without built in method
const greaterArrayNum = (array) => {
    let greaterNum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (greaterNum < array[i]) {
            greaterNum = array[i];
        }
    }
    return greaterNum;
}
// console.log(greaterArrayNum(arrayNum));

// 2.Write an ES6 function that takes an array of numbers and
// returns the average of all the numbers.
// built in methods

const arr = [1, 3, 4, 5, 10, 34];
// const sum = arr.reduce((acc, curr) => acc+curr, 0)
// const avg = sum/arr.length;
// console.log(sum)
// console.log(avg)


const sumOfArray = (arrNumbers) => {
    const sum = arr.reduce((acc, curr) => {
        return acc + curr;
    }, 0)

    const avg = sum / arrNumbers.length;
    return avg;
}

// console.log(sumOfArray(arr))
// Avoid using in-built methods.

const sumAvg = (arr) => {
    let arrayLength = arr.length;
    let sum = 0;
    for (let x of arr) {
        sum += x;
    }
    return sum / arrayLength;
}

// console.log(sumAvg(arr))



// 3. write an ES6 function that takes an array of numbers
//    and converts even numbers to odd numbers by adding 1 to that number.

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const convertOdd = (num) => {
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            num[i] += 1;
        }
    }
    return num;
}

// console.log(convertOdd(numArr))

// By using for each method
const convertEventoOdd = (arr) => {
    arr.forEach((element, index) => {
        if (element % 2 === 0) {
            arr[index] = element + 1
        }
    });
    return arr;

}

// console.log(convertEventoOdd(numArr))



// 4. write an ES6 function that takes an array of words and
// returns an array with all its elements whose length is greater than 5.
const words = ["eat", "sleep", "code", "repeat", "neog", "community"];

const arrWordsLength = (str) => {
    let newWord = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > 5) {
            newWord.push(str[i]);
        }
    }
    return newWord
}

// console.log(arrWordsLength(words))

// 5.Write an ES6 function that takes an array of strings
// and returns a new array with each string capitalized.

const stringCapitalize = (str) => {
    let newCapitiaizStr = [];
    for (let i = 0; i < str.length; i++) {
        newCapitiaizStr.push(str[i].toUpperCase())
    }
    return newCapitiaizStr
}

let capitalized = ["eat", "sleep", "code", "repeat", "neog", "community"];
// console.log(stringCapitalize(capitalized))



// 6.Write an ES6 function that takes an array of objects
// and a property name and returns a new array with only
// the values of that property. Avoid using in-built methods.

const property = [
    {
        propertyName: "DLF",
        price: 8000000
    },
    {
        propertyName: "Sobha Industries",
        price: 1000000
    },
    {
        propertyName: "Kolar field",
        price: 750000
    }
]

const newArray = (data) => {
    let arr = [];
    for(let i=0; i<data.length;i++){
        arr.push(data[i].price)
    }
    return arr;
}

// console.log(newArray(property))


// 7.Write an ES6 function that takes the users' details and
// returns the data with team ID. Avoid using in-built methods.

let details = {
    name: "joe",
    age: 20,
    country: "UK"
};

const addTeamId = (users) => {
    users.teamId = Math.floor(Math.random() * 10000)
    return users;
}

// by using spread operator and destructuring 

const addTeam = (users) => ({
    ...users, teamId: Math.floor(Math.random() * 10000)

})

// console.log(addTeamId(details))
// console.log(addTeam(details))




// 8.Write an ES6 function which checks if a student already has a team.
// If team is not given then add them to team “A” and return the object
// else do nothing and return the same object. Avoid using in-built methods.

const teamFun = (data) => {
    if (!data.team) data.team = "A"
    return data
}

const data1 = {
    name: "John",
    student: true,
    team: "C"
}

const data2 = {
    name: "Jenny",
    student: true,
    team: "B"
}
const data3 = {
    name: "Payal",
    student: true,
}

// console.log(teamFun(data1))
// console.log(teamFun(data2))
// console.log(teamFun(data3))


// 9. Destructure the following code to get the desired outputs.
// Avoid using in-built methods.

const book = {
  title: "JavaScript: The Definitive Guide",
  authors: [
    { name: "David Flanagan", age: 49 },
    { name: "Yukihiro Matsumoto", age: 57 },
  ],
  publisher: { name: "O'Reilly Media", location: "CA" },
};

const { title , authors: [name, age], publisher: {name: publisherName, location}} = book;
console.log(title)
console.log(name);
console.log(publisherName)
console.log(location)



// 10. Write an ES6 function that takes an array of objects and
// returns the sum of all ages.

const array = [
    {
        name: "Sushant",
        age: 20
    },
    {
        name: "Abhijeet",
        age: 22,
    },
    {
        name: "Jay",
        age: 22
    }
]

const arrSum = (arr) => {
    let sumOfAge = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfAge = sumOfAge + arr[i].age
    }
    return sumOfAge;
}
// console.log(arrSum(array))

const arrSum2 = (arr) => arr.reduce((acc, curr) => acc + curr.age, 0)

// console.log(arrSum2(array))

