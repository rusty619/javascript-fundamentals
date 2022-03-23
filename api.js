// create a function called request
let data;
const request = () => {
    fetch('https://raw.githubusercontent.com/rusty619/javascript-fundamentals/main/user.json')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log("Data returned is", data)
    })
    return "Done with This function"
}

// Async Await
const request2 =  async() => {
    let req = await fetch('https://raw.githubusercontent.com/rusty619/javascript-fundamentals/main/user.json')
    let res = await req.json()
    console.log("RESPONSE 2",res)
    data = res // gets the json object from the url that is in fetch 
    return res
}

request2()

// Fetch
// return a promise object
// in order to operate on the promise returned by fetch
// you need to wait until the oromise resolves