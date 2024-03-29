# Start with Typescript

## Installation

-  Install TS Globaly

```
npm install -g typescript
```

-  Install TS as a DEV depedency

```
npm install typescript --save-dev
```

-  To execute run particuller ts file

```
tsc <File Name>
```

-  Types in TS

```
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Void
7. Object
8. Array
9. Tuples
10. Any
11. Never
12. Unkown
```

## Syntax

```js
let firstName: string = "Gautam";
```

```js
let greetings: string = "Hello Gautam";

greetings = 6; //Error

let number: number = 5;
```

-  In JS 'number' covers both Floats and Integers but in other languages they both are used differently to define values.

-  Numbers in TS

```js
let age: number = 25;
/**
 * Above practice is good but TS is capable of recognizing type of data automatically
 
 * So if we declare variable with any data type we do not need to give type while defining 

 * Basically TS infering type of variable automatically
*/

let age = 25;

age = "Gautam"; //Error as TS already knows that this variable contains number only
```

## any

-  When TS does not know which value to infer TS infer as a "any"
-  It basically turned of the type checking for that particuller variable
-  We should always avoid to use any as its just not checking type

```js
let hero;

function getHero() {
   return true;
}

hero = getHero();
```

-  Above "hero" type infered as a any because TS dosent know "getHero" function which value it will return.
-  We should avoid above code example

```js
let hero: string;

function getHero() {
   return true;
}

hero = getHero(); //Error
```

-  In above code example if type of an variable is defined we will have consistency in our app.
-  Now if any ottrueher developer will return something different value from "getHero" function TS will not allow it.

## Function in Typescript

-  In TS while defining a function we need to take care about input , return value types.

## Input types

```js
// 1
function addTwo(val) {
   return val + 2;
}

addTwo("2"); //No errors

//2

function signUp(name, email, isPaid) {}
signUp(1, 2, 3); //No errors
```

-  Above function will not throw an error as "val" type is by default any

```js
//1

function addTwo(val: number) {
   return val + 2;
}

addTwo("2"); // Error

//2

function signUp(name: string, email: string, isPaid: boolean) {}
signUp(1, 2, 3); //Error
```

-  Above code example is perfect, where we have defined type of input value

-  To take default value in function value below code example will be usefull

```js
//1
const signUp = (name: string, email: string, isPaid: boolean) => {};
signUp("Gautam", "G@gmail.com"); //Error

//2
const signUp2 = (name: string, email: string, isPaid: boolean = false) => {};
signUp2("Gautam", "G@gmail.com"); //No Errors
```

## Return value type

### Function without return value type

```js
function addTwo(val: number) {
   // return val + 2;
   return "string";
}

let number = addTwo("2"); // No Errors
```

-  Above code example will not throw an error as we have not given return value type in the function.
-  Because of that, type of return value is any

### Function with return value type

```js
function addTwo(val: number): number {
   // return val + 2;
   return "string";
}

let number = addTwo("2"); // Error
// To remove above error, this function should always return a number value
```

### Return multiple types values

-  Sometimes there might be a case when a function is returning a multiple type of values

```js
function returnAns(num: number): string | boolean {
   if (num > 5) {
      return true;
   } else {
      return "403 Error";
   }
}
returnAns(5);
```

-  We can use UNION operator in TS from which we can return a multiple types of values from a function

### Function which returns nothing

-  When a function which will not return any value we should use "void"

```js
const consoleError = (errMsg: string): void => {
   console.log(errMsg);
};
consoleError("202");
```

-  In above code example if we try to return something after mentioning void TS will throw an error

```js
const consoleError = (errMsg: string): void => {
   console.log(errMsg);
   return "";
};
consoleError("202"); //Error
```

### Function which will never return value

-  When this type of case comes into the picture, TS has given documantation regarding the same

```js
const handleError = (errMsg: string): never => {};
```

### And Operator

-  In below example, we can use 'and' operator to combine different types.

```js
type CardNumber = {
   cardNumber: string,
};

type CardDate = {
   cardDate: string,
};

type Card = CardNumber &
   CardDate & {
      cardName: string,
   };

let user: Card = {
   cardName: "Gautam",
   cardNumber: "56343",
   cardDate: "17th Aug",
};
```

## Array Types

-  There are probably two ways to give types to array as mentioned below

```js
const superHero: string[] = [];
const heroPower: Array<number> = [];

// Objects of array

type User = {
  name:string
  isActive:boolean
}

const userData:User = []

//2d Array of numbers

const twoDArray : number[][] = [
  [1,2,3],
  [4,5,6],
  //"" Error
]
```

-  Read only Array
-  We can not mutate values in read only arrays

```js
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push("hello!");
Property 'push' does not exist on type 'readonly string[]'.
}

```

-  Refer following Documentation for more [Click here](https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type)

## Union Types : "|"

-  Union we basically use, when we are not sure what type of value our code will return probably

```ts
// We can define multiple type of a variable
let score: number | string | boolean = 33;

score = "33";
score = false;
```

-  Lets say there is two different user schema for user and admin

```ts
type User = {
   name: string;
   id: number;
};

type Admin = {
   username: string;
   id: number;
};

let gautam: User | Admin = {
   username: "gautam",
   id: 1,
}; //Works fine
```

-  Union in function

```js
function doStuff(id: number | string) {
   /**
    * Here I can not do string or number operation with id directly
    * as id's value is not perfectly defined
    */

   if (typeof id === "number") {
      // Here id's type always will be number
      id + 2;
   } else {
      // Here id's type always will be string
      id.toLocaleUpperCase();
   }

   //Use this for good coding practice
}
```

### Union Types with array

```js
const data: number[] = [1, 2, 3]; //number of Array
const data1: string[] = ["1", "2", "3"]; //string of Array
```

-  Lets make array which will include both types

```js
const data3: string[] | number[] = [1, 2, "3"]; //Error bcz of wrong syntax
```

-  Above syntx states that array can have either strings only or numbers only

-  Right syntax would be as writted below

```js
const data3: (number | string)[] = [1, 2, "3"]; //Works fine`
```

## Touples in Typescrip :

-  Touple is way in typescript in which we can define exact array element types with order of the elements

```js
const userArray: [string, boolean, string] = ["Gautam", 23, "G@gmail.com"];

let user: [number, string] = [13, "Gautam"];

// user[0] = "6" //Error
//But while using Toupeles
user.push("5");
//We can mutate array by using Array methods
```

## ENUMS in Typescript :

-  Enums are used when we want ristrict choice of values for users

### Syntax

```js
const enum PaymentOptions {
   UPI = "UPI",
   Cards = "Cards",
   COD = "COD",
}

const choosedOption = PaymentOptions.Cards;

```

## Interfaces in Typescript :

-  Interface is kind of define Object structure,

### Syntax

```js
interface NewUser {
   readonly dbId: number;
   email: string;
   userId: number;
   googleId?: string;
   //Methods
   //Two ways to write a methods
   startTrail: () => string;
   getCoupon(couponName: string, value: number): number;
}

const Gautam: NewUser = {
   dbId: 1245,
   userId: 4433,
   email: "g@gmail.com",
   startTrail: () => "started",
   //In below method parameter name doesnt matter but type of parameter should be same as mentioned in interface
   getCoupon: (gautam10: string, noname: 5) => 10,
};

```

-  We can edit interface easily
-  We can call it as re-opening of an interface

```js
//we can use same interface as used above

interface NewUser {
   githubToken: string;
}

//isn't it simple
```

### Inheritence in interface

```js
interface Admin extends NewUser {
   // Now we have all property types of NewUser in Admin interface same as js Classes

   role: "Admin" | "User" | "Super-Admin";
}
```

### Interface vs Type Aliases :

-  Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
-  Almost all features of an interface are available in type,
-  the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
