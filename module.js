
/* 
 Functions

 1. Functions allows us to bundle together a lot of functionally and then easily call it all at once by name (function name)

 2. Functions allow to specify exactly WHEN we want to call all of this functionality

*/


function quiz(){
    let myName = prompt('Enter your name')
    let month = prompt('Enter the month you were born')
    let food = prompt('Enter what is your favorite food')

    console.log("My Name is", myName)
    console.log("I Was born in", month)
    console.log("My favorite is", food)
}

