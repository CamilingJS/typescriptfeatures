//Classes --> Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing' 

//classes are first letters uppercase
// class Vehicle {
//   color: string; 
//   constructor(color: string) {
//     this.color = color; 
//   }
//   protected honk(): void {
//     console.log('beep');
//   }
// }

//Short cut for the above using public modifier
class Vehicle {
  constructor (public color: string) {}
  protected honk(): void {
    console.log('beept');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// //We overridden drive method on the child class
// // We cannot change a modifier in child class 
// class Car extends Vehicle {
//   private drive(): void {
//     console.log('vroom');
//   }

//   startDrivingProcess(): void {
//     this.drive();
    
//   }
// }
// const car = new Car();
// car.startDrivingProcess();



//instance of a class is same word frist letter lowercase -- using the key work 'new' 
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();