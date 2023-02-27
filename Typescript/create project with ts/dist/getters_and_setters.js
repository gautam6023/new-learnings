"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, token, gender, cart = []) {
        this.name = name;
        this.email = email;
        this.token = token;
        this.gender = gender;
        this.cart = cart;
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
    set setUserToken(token) {
        this.deleteToken();
        this.updateToken(token);
    }
    set addItemIntoCart(item) {
        this.cart.push(item);
    }
}
let gautam = new User("Gautam", "g@gmail.com", "t101", "male");
console.log(gautam);
