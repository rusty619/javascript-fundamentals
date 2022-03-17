// objects = {name: 'Ruslan', score: 100}
// object2 = {street: 'Norman', zicode: 11222}

// arrays = [100,200,300]
// array2 = ['Ruslan', 'Dima', 'Paul']

// user = {
//     name: "Ruslan Khait",
//     email: "ruslankhait@gmail.com",
//     private: true,
//     followers: 2,
//     following: 100000
// }

// const followingCount = [100,200,300,400]

let apt1 = {
    bedrooms: 4,
    sqft: 50,
    bathrooms: 3,
    windows: 0,
    rent: 4500,
    unit: '1A',
    tentants: []
}

let apt2 = {
    bedrooms: 1,
    sqft: 25,
    bathrooms: 1,
    windows: 4,
    rent: 3500,
    unit: '1B',
    tentants: []
}

let apt3 = {
    bedrooms: 4,
    sqft: 100,
    bathrooms: 5,
    windows: 10,
    rent: 6000,
    unit: '2A',
    tentants: []
}

let apt4 = {
    bedrooms: 0,
    sqft: 10,
    bathrooms: 0,
    windows: 0,
    rent: 900,
    unit: '2B',
    tentants: []
}

let tentant1 = {
    name: 'John Doe',
    creditScore: 350,
    salary: 15000,
    age: 30
}

let tentant2 = {
    name: 'Billy John',
    creditScore: 600,
    salary: 22000,
    age: 36
}


let building = {
    streetAddress: '77 7th street, Brooklyn NY 11232',
    laundry: false,
    allowsPets: true,
    lease: function (apt,tentant) {
        if (apt.tentants.length === apt.bedrooms) return `${apt.unit} is already full!`
        apt.tentants.push(tentant)
        console.log(tentant.name, 'has rented out', apt.unit)
    },
    apartments:[apt1,apt2,apt3]
}