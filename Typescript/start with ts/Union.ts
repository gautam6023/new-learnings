// We can define multiple type of a variable
let score: number | string | boolean = 33;

score = "33";
score = false;

//Lets say there is two different user schema for user and admin

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

//Union in function

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

//Union Types with array

const data: number[] = [1, 2, 3]; //number of Array
const data1: string[] = ["1", "2", "3"]; //string of Array

// Lets make array which will include bothe
//const data3 : string[] | number [] = [1,2,"3"] //Error bcz of wrong syntax
//Above syntx states that array can have either strings only or numbers only

const data3: (number | string)[] = [1, 2, "3"]; //Works fine
