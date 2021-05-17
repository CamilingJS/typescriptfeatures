
//What is a Tuple? --> An Array-like structure where each element represents some property of a record
// Tuples have a fixed order or sequence 

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// const pepsi: [string, boolean, number] = ['brown', true, 40];

//Type Alias: we abstracted the idea of what a drink is into a Type Alias and freely use it throughout our application 
type Drink= [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//Why Tuples? We don't use Tuples often... 
const carSpecs: [number, number] = [400, 3354];

//Objects are more useful than a tuple 
const carStats = {
  horsepower: 400,
  weight: 3354
};







