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

let gautam1: User | Admin = {
   username: "gautam",
   id: 1,
   name: "gautam",
}; //Works fine
