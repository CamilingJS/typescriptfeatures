//Classes --> Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing' 

//classes are first letters uppercase
class Vehicle {

  private honk(): void {
    console.log('beep');
  }
}

//We overridden drive method on the child class
// We cannot change a modifier in child class 
class Car extends Vehicle {
  protected drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const car = new Car();
car.startDrivingProcess();
car.honk();


//instance of a class is same word frist letter lowercase -- using the key work 'new' 
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();