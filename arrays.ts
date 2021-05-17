//Typed Arrays --> Arrays where each element is some consistent type of value

const carMakers = ['ford', 'toyota', 'chevy'];

//If we need to initialize an empty array, we must annotate the type otherwise the array would have a type of 'any'
const carDealers:string[]  = [];

const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camrarp']
];

//Why do we care?
//1) TS can do type inference when extracting values from an array
//2) TS can prevent us from adding incompatible values to the array
//3) We can get help with 'map', 'forEach', 'reduce' functions
//4) Flexible - arrays can still contain multiple different types 

//Help with inference when extracting values
const car = carMakers[0];
const myCar =carMakers.pop();

//Prevent incompatible values
carMakers.push(100);

//Help with 'map'
carMakers.map((car:string): string=> {
  return car.toUpperCase(); 
});

//Flexible types // We can override inference
const importantDates:(Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());

//Where to use typed arryas? --> Any time we need to represent a collection of records with some arbitrary sort order










