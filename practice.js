//Write a basic JavaScript object that represents a user //that has no fewer than 3 keys/properties about that user

let user = {
    name: "FireLordStar",
    age: 55,
    location: 'NYC'
}

//Write a function called greet that takes no arguments and //prints the string "Hello World"

let greet = () => {
    console.log("Hello World")
}

//greet()

//Create an array called fruits with 5 elements

let fruits = ['apple', 'bannana', 'lemon', 'pinapple', 'orange']

//console.log the second element and console.log the last element of the above array
//console.log(fruits[1])
//console.log(fruits[4])

// var x = fruits.slice(1,2)
// var y = fruits.slice(-1,1)
// console.log(x)
// console.log(y)

//Create an object that represents an apartment building without referring to any code

let apt1 = {
    unit: "1a",
    salary: 22000,
    bedrooms: 1,
    bathroom: 0,
    rent: 2300
}

let apt2 = {
    unit: "1b",
    salary: 12000,
    bedrooms: 3,
    bathroom: 2,
    rent: 3400
}

let building = {
    address: "23 SomePlace st SomePlace in ny",
    apartments: [apt1, apt2],
    lanudary: false,
    petsAllowed: true,
    tenants: ["Some Guy", "Some dude", "Some"]
}

console.log(building)