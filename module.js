
/* 
 Functions

 1. Functions allows us to bundle together a lot of functionally and then easily call it all at once by name (function name)

 2. Functions allow to specify exactly WHEN we want to call all of this functionality

*/


// function quiz(){
//     let myName = prompt('Enter your name')
//     let month = prompt('Enter the month you were born')
//     let food = prompt('Enter what is your favorite food')

//     console.log("My Name is", myName)
//     console.log("I Was born in", month)
//     console.log("My favorite is", food)
// }

const quiz = () => {
    let myName = prompt('Enter your name')
    let month = prompt('Enter the month you were born')
    let food = prompt('Enter what is your favorite food')

    console.log("My Name is", myName)
    console.log("I Was born in", month)
    console.log("My favorite is", food)
}

const print = () => {
    console.log('I love to print!')
}

const functionA = (f) => {
    console.log('FUNCTION A HAS BEEN CALLED!')
    f()
}

const functionB = () => {
    console.log('FUNCTION B HAS BEEN CALLED!')
}

const functionC = () => {
    console.log("FUCTION C HAS BEEN CALLED!")
}

const greet = (person)=>{
    console.log("HELLO!", person)
}

const blender = (string) => {
    return string.split('')
}

const square = (num, message) => {
    console.log('Message: ', message)
    return num * num;
}

