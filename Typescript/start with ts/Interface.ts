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

//Re-open interface

interface NewUser {
   githubToken?: string;
}
const Gautam: NewUser = {
   dbId: 1245,
   userId: 4433,
   email: "g@gmail.com",
   startTrail: () => "started",
   //In below method parameter name doesnt matter but type of parameter should be same as mentioned in interface
   getCoupon: (gautam10: string, noname: 5) => 10,
};

//Inheritence in interface

interface Admin extends NewUser {
   role: "Admin" | "User" | "Super-Admin";
}
