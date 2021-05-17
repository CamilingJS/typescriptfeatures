//Interfaces --> Creates a new type, describing the property names and value types of an object 
//Note: We can use a single interface to describe very different objects like oldCivid and drank
//The point being is, this encourages us to write very generic functions like print Summary -- make resuable functions  

interface Reportable {
  summary(): string; 
}

// interface Vehicle {
//   name: string; 
//   year: Date;
//   broken: boolean; 
//   summary(): string; 
// }

//Intro an object that defines a car
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drank = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams fo sugar`
  }
}

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken?  ${vehicle.broken}`);
// };

//refactored using the Interface Vehicle 
// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary());
// };
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drank);

