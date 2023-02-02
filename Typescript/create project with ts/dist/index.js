"use strict";
//Classes in ts
class User {
    constructor(email, name, age, city = "jamnagar") {
        this._id = "id"; // readonly property
        this.email = email;
        this.name = name;
        this.city = city;
        this.age = 23;
    }
}
const gautam = new User("g@g.com", "gautam", 23, "jam");
// gautam._id = "" Error
// gautam.email = 4 Error
gautam.name = "Gautam Gohil";
console.log(gautam);
// People more prefer below way to create classes in ts
class Vehicle {
    constructor(name, company, twoWheeler, model, ownBy, numberPlate, chessisNumber) {
        this.name = name;
        this.company = company;
        this.twoWheeler = twoWheeler;
        this.model = model;
        this.ownBy = ownBy;
        this.numberPlate = numberPlate;
        this.chessisNumber = chessisNumber;
    }
}
//In above method we need to mention Public and Private according to keys
const splendor = new Vehicle("splendor", "Hero", true, 2023, "Gautam", "8846", "1-2456/c");
// splendor.chessisNumber  Error
console.log(splendor);
