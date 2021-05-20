//Exploring inference around functions
// Inference of the output of a function will work, however, we will always not rely on inference for the output type because there are cases where errors may not be found such as a outputs of void
const add = (a:number,b:number): number => {
  return a + b; 
};

const subtract = (a:number, b: number):number => {
  return a-b; 
};

//Annotations for Anonymous Functions
function divide(a: number, b: number): number {
  return a/b; 
}

//Anonymous function assigned to a variable
const multiply = function(a:number,b: number): number {
  return a*b; 
}

//Exploring types Void and Never //void means it does not return anything
const logger = (message: string): void => {
  console.log(message);
}

//outpus type of Never means we will not reach the end of this function or never execute this function completely
const throwError = (message: string): void => {
  if (!message){
  throw new Error(message);
  }
   
}

//Destructoring with Annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather }: {date: Date, weather: string} ): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);