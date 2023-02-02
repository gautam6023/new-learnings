//Classes in ts

class User {
   email: string;
   name: string;
   city?: string; //Optional parameter
   readonly _id: string = "id"; // readonly property
   // Let's say you want do not allow to access some properties then use Private
   // By default all keys are Public
   // To make  Private in js we can use # at starting name of a variable
   private age: number;
   constructor(
      email: string,
      name: string,
      age: number,
      city: string = "jamnagar"
   ) {
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
   constructor(
      public name: string,
      public company: string,
      public twoWheeler: boolean,
      public model: number,
      readonly ownBy: string,
      readonly numberPlate: string,
      private chessisNumber: string
   ) {}
}
//In above method we need to mention Public and Private according to keys

const splendor = new Vehicle(
   "splendor",
   "Hero",
   true,
   2023,
   "Gautam",
   "8846",
   "1-2456/c"
);

// splendor.chessisNumber  Error
console.log(splendor);
