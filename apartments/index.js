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
    tenants: []
}

let apt2 = {
    bedrooms: 1,
    sqft: 25,
    bathrooms: 1,
    windows: 4,
    rent: 3500,
    unit: '1B',
    tenants: []
}

let apt3 = {
    bedrooms: 4,
    sqft: 100,
    bathrooms: 5,
    windows: 10,
    rent: 6000,
    unit: '2A',
    tenants: []
}

let apt4 = {
    bedrooms: 0,
    sqft: 10,
    bathrooms: 0,
    windows: 0,
    rent: 900,
    unit: '2B',
    tenants: []
}

let tenant1 = {
    name: 'John Doe',
    creditScore: 350,
    salary: 15000,
    age: 30,
    pet: 'Fido'
}

let tenant2 = {
    name: 'Billy John',
    creditScore: 600,
    salary: 22000,
    age: 36
}


let building = {
    streetAddress: '77 7th street, Brooklyn NY 11232',
    laundry: false,
    allowsPets: false,
    lease: function (apt,tenant) {
        if (apt.tenants.length === apt.bedrooms) return `${apt.unit} is already full!`
        if(this.allowedPets === false && tenant.pet) {
            return `${apt.unit} is available, but you must give ${tenant.pet} up for adoption!`
        }
        let t = apt.tenants.push(tenant)
        console.log(tenant.name, 'has rented out', apt.unit)
        return t
    },
    occupiedApts: function(){
        // returns  only the apts which have tenants inside them 
        // condition to test: apt.tenants.length
        return this.apartments.filter((apt) => {
            return apt.tenants.length > 0
        })
    },
    fullApts: function(){
        // returns only the apts which are completely full
        // condition to test: apt.tenants.length === apt.bedrooms
        return this.apartments.filter( (el) => {
            return el.tenants.length === el.bedrooms
        })
    }, 
    apartments:[apt1,apt2,apt3]
}