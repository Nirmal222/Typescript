"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//number
var userId = 334455;
//boolean
var isLoggedIn = false;
//any 
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
//functions
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("okGoogle");
function signupUser(name, email, isPaid) { }
signupUser("Nirmal", "nirmal@gmail.com", false);
//default check
var loginUser = function (email, name, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("Nirmal", "nanu");
