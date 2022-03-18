const laptop = {
    price: 1000,
    brand: 'HP',
    memory: "2GB",
    color: 'pink',
}

const car = {
    engine: 'VB',
    doors: 2,
    model: 'BMW',
    price: 200000,
    make: 'M4'
}

const company = {
    name: 'Vittles',
    ceo: 'Micheal Law',
    isTheBest: true,
    publicTraded: false,

}

const room = {
    windows: 0,
    dimensions: '200x200',
    closet: false,
    isLegal: false,
    pets: false
}

const item = {
    name: 'Excalibur',
    attackPower: 130 + Infinity
}

const ally = {
    name: 'Geralt',
    power: {name: 'Kamehameha', attackPower: 9001}
}

const character = {
    hairColor: 'blue',
    height: "6,7",
    race: 'ELF',
    gender: null,
    strength: Infinity,
    dlc: false,
    class: 'Mage',
    cohort: '031422',
    item: item,
    ally: ally
}

character.ally.power['manaCost'] = 50

//console.log(laptop)
//console.log(car)
//console.log(company)
//console.log(room)
console.log(character)
console.log(character.item.name)
console.log(character.ally.power.attackPower)
console.log(character)