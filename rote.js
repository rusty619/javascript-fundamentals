// const greet = ()=>{
//     console.log("hello world")
// }

// greet()

// const square = (num) => {
//     return num* num
// }

// square(2)

// const greetByName = (str) => {
//     console.log('Hello', str)
// }
// greetByName("Ruslan")

const multiply = (n1,n2) => {
    console.log("Muliplying", n1, "by", n2)
    return n1*n2
}

const double = (n) => {
    return n*2
}

let array1 = ['a','b','c','d','e']
let array2= [1,2,3,4,5,6,7]

const determineLength = (arr) => {
    if(arr.length > 5){
        return 'This array is long'
    } else {
        return 'This array is short'
    }
}

const askForString = () =>{
    let str = prompt('ENTER A STRING')
    return str;
}

console.group(askForString().split(''))