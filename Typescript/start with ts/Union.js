// We can define multiple type of a variable
var score = 33;
score = "33";
score = false;
var gautam = {
    username: "gautam",
    id: 1,
    name: "Gaut"
}; //Works fine
//Union in function
function doStuff(id) {
    /**
     * Here I can not do string or number operation with id directly
     * as id's value is not perfectly defined
     */
    if (typeof id === "number") {
        // Here id's type always will be number
        id + 2;
    }
    else {
        // Here id's type always will be string
        id.toLocaleUpperCase();
    }
    //Use this for good coding practice
}
//Union Types with array
var data = [1, 2, 3]; //number of Array
var data1 = ["1", "2", "3"]; //string of Array
// Lets make array which will include bothe
//const data3 : string[] | number [] = [1,2,"3"] //Error bcz of wrong syntax
//Above syntx states that array can have either strings only or numbers only
var data3 = [1, 2, "3"]; //Works fine
