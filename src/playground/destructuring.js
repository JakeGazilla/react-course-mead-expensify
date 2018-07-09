// console.log('destructuring');

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Paris',
//     temp: 32
//   }
// };

// // primitive way
// // const name = person.name;
// // const age = person.age;
// // console.log(`${name} is ${age}.`)


// //  better, scalable way to destructurize obj - with name default value
// // this temp: temperature will grab person.location.temp and save it as temperature
// const {name: firstName = 'Anonymous', age} = person;
// const { city, temp: temperature} = person.location;

// console.log(`${firstName} is ${age}. He lives in ${city} where temperature is ${temperature} degrees high.`)


// Challange
// const book = {
//   title: 'Ego is the enemy.',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { title, author } = book;
// const { name:publisher = 'Unknown'} = book.publisher;

// console.log(`The book I am reading is titled ${book}. ${author} is the author. It was published by ${publisher}.`)



// -- Array destructurizing
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19172'];
// match by position
// const [ , city, state,  ] = address;   <---- it will pull only 1 & 2 index
const [ street, city, state = 'New York', zip ] = address; // <---- it will use default for third item if no value provided
console.log(`You are in ${city} ${state}.`)


const item = ['Coffee (hot)', '2.00', '2.50', '2.75'];
const [name, , ,lg] = item;
console.log(`A medium ${name} costs $${lg} `);