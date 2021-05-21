# TypeScript lesson notes
## Annotations
## Type annotations: Code we add to tell Typescript what type of value a variable will refer to
## Type inference: Typescript tries to figure out what type of values a variable refers to
### Annotations on variables are actually not necessary as TS would infer the correct type for the variable
### TYPE INFERENCE rule: If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us 
### When will we rely on Type Inference? Always!
### When will we rely on Type annotations?
  #### 1. When we delcare a variable on one line then initialize it later
  #### 2. When we want a variable to have a type that can't be inferred
  #### 3. When a function returns the 'any' type adn we need to clarify the value 
  ### Inference of the output of a function will work, however, we will always not rely on inference for the output type because there are cases where errors may not be found such as a outputs of void
  ### type Void means it does not return anything like a console.log
  ### Outpus type of Never means we will not reach the end of this function or never execute this function completely
  ## What is a Tuple?
  #### --> An Array-like structure where each element represents some property of a record
  #### Tuples have a fixed order or sequence 
  #### Type Alias: we abstracted the idea of what a drink is into a Type Alias and freely use it throughout our application 
  #### We don't use Tuples often. Objects are more useflul than a tuple
  ### Typed Arrays: Arrays where each element is some consistent type of value
  #### If we need to initialize an empty array, we must annotate the type otherwise the array would have a type of 'any'
  ### Why do we care?
#### 1) TS can do type inference when extracting values from an array
#### 2) TS can prevent us from adding incompatible values to the array
#### 3) We can get help with 'map', 'forEach', 'reduce' functions
#### 4) Flexible - arrays can still contain multiple different types
### Where to use typed arryas? 
#### Any time we need to represent a collection of records with some arbitrary sort order

## Interfaces
### Interfaces --> Creates a new type, describing the property names and value types of an object 
### Note: We can use a single interface to describe very different objects like oldCivid and drank
### The point being is, this encourages us to write very generic functions like print Summary -- make resuable functions  

## Classes 
### Classes --> Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing' 
### classes are first letters uppercase

## Modifiers
### Modifiers are key words we can place on different methods and properties inside a Class. 
### The difference options are PUBLIC, PRIVATE, and PROTECTED
### The of these modifiers is to restrict access to different functions or variables 
### By default classes are public
## PUBLIC
### Means this method can be called any where, any time
## PRIVATE
### Means this method can only be called on by other methods in the exact same Class definition
## PROTECTED 
### Means this method can be called by other methods IN THIS CLASS, or by other methods in CHILD CLASSES as well 
## We use Modifiers like 'private' so that we can restrict the methods other developers can call 

## Contructor 
### Constructor function is a special function defined in a Class
### Anytime we define a Constructor it will be instantly executed right when we create a new instance of the Class
### If we use 'this' method to initialize in the Constructor, w don't have to initialize it outside the scope of the Constructor (an either or decision). Either you initialize a property on the same line or you can initialize the property inside the Constructor using 'this'. 








