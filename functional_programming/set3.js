// SET:-1 (ADVANCED)

//?  1. Write a function that takes an array of objects with properties `start` and `end` (representing time intervals).The function should return an array of intervals that are merged if they overlap.


//?  2. Write a function that takes a deeply nested object and a string representing a path (e.g., "user.address.city").The function should return the value located at that path, or `undefined` if the path does not exist.

const nestedObject = {
    user: {
        name: "sushant",
        address: {
            pincode: 828130,
            state: "Jharkhand",
            city: "Dhanbad"
        }
    }
}

// const checkCity = (obj) => {
//     const cityFind = obj.user.address.city;
//     if(cityFind || undefined) {
//         const path = cityFind
//     }
//     return cityFind
// }

console.log(checkCity(nestedObject))

//?  3. Write a function that implements a debounce mechanism. The function should accept a callback and a delay, and it should delay the execution of the callback until after the specified delay has passed since the last invocation of the function.


//?  4. Write a function that accepts a number and returns an array of all its divisors.The function should optimize the process of finding divisors by checking only up to the square root of the number.


//?  5. Write a function that accepts a list of strings and returns a new string that contains all the unique characters across the strings, sorted in lexicographical order.


//?  6. Write a function that implements a custom `map` function that mimics the behavior of `Array.prototype.map`.It should accept a callback and return a new array with the results of calling the provided function on every element in the original array.


//? 7. Write a function that takes an array of objects representing a hierarchical tree structure (e.g., categories with subcategories), and returns the hierarchy flattened into a single-level array with properties `id`, `parentId`, and `name`.


//?  8. Write a function that implements a `Promise.all`-like function but resolves the promises sequentially, i.e., waits for one promise to resolve before moving to the next one.


//?  9. Write a function that accepts a string and returns the longest substring without repeating characters.The function should implement an efficient algorithm with a time complexity of O(n).


//?  10. Write a function that implements deep cloning of an object. It should handle circular references and objects with special properties (e.g., Date, RegExp, Map, Set).


//?  11. Write a function that implements a "rate limiter" for API calls. The function should allow a maximum of `n` API requests to be made per `m` milliseconds. Ensure the requests are executed at a rate not exceeding this limit.


//?  12. Write a function that accepts two arrays of objects and returns a new array where the objects are merged by a unique identifier property (e.g., `id`), combining their properties into one object for each `id`. Ensure that if the `id` exists in both arrays, the object from the second array takes precedence.
