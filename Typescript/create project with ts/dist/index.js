"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, token, gender, cart = []) {
        this.name = name;
        this.email = email;
        this.token = token;
        this.gender = gender;
        this.cart = cart;
        //Here Below variable is private and only accessible to inside class, not even in sub-classes
        this._courseCount = 1;
        //Below variable is also private but we can access it in sub-classes as well but
        this._courseNames = [];
    }
    get getCartItems() {
        return this.cart;
    }
    get getCartNumber() {
        return this.cart.length;
    }
    deleteToken() {
        this.token = "";
    }
    updateToken(newToken) {
        this.token = newToken;
    }
    setUserToken(token) {
        this.deleteToken();
        this.updateToken(token);
    }
    addItemIntoCart(item) {
        this.cart.push(item);
    }
}
let gautam = new User("Gautam", "g@gmail.com", "t101", "male");
gautam.addItemIntoCart("firstItem");
gautam.setUserToken("C101");
console.log(gautam.getCartItems);
console.log(gautam.getCartNumber);
console.log(gautam);
class SubUser extends User {
    // get getCourseCounts(): number {
    //    return this._courseCount; //Throws an error as in parent class this property is private
    // }
    get getCourseNames() {
        return this._courseNames; //  Works fine as its protected propery and bacause of that we can access it in sub-classes as well
    }
}
const subUser = new SubUser("sub-user", "sub-user@gmail.com", "s101", "male");
console.log(subUser);
