//Classes --> Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing' 

//classes are first letters uppercase
class Vehicle {
  drive(): void {
    console.log('chugga chugga')
  }
}

//instance of a class is same word frist letter lowercase -- using the key work 'new' 
const vehicle = new Vehicle();
vehicle.drive();