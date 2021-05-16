//Note: These type annotations below are actually not necessary as TS would infer the correct type
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true; 

let nothingMuch: null = null; 
let nonthihng: undefined = undefined; 

//built in objects
let now: Date = new Date ();

// Array of strings (Type Annotations)
let colors: string[] = ['red', 'green', 'blue'];
// Array of numbers
let myNumbers:number[] = [1,2,3];
// Array of boolean
let truths: boolean[] = [true, true, false];

//Classes
class Car {

}
let car: Car = new Car(); 

// Object literal
let point: {x:number; y: number;} = {
  x: 10,
  y: 20
}

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//TYPE INFERENCE rule: If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us 
//When will we rely on Type Inference? Always!
//When will we rely on Type annotations?
  //1. When we delcare a variable on one line then initialize it later
  //2. When we want a variable to have a type that can't be inferred
  //3. When a function returns the 'any' type adn we need to clarify the value 


  //When to use annotations
  //1) Function that returns the 'any' type
const json = '{"x":10,"y":20}';
const coordinates:{x:number; y: number}= JSON.parse(json);
console.log(coordinates); // {x:10,y:20};

//2) When we declare a variable on line 
//and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i=0; i < words.length; i++) {
  if (words[i] === 'green'){
    foundWord = true; 
  }
}

//3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}




