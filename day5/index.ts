//Objects

const User = {
    name: "Nirmal",
    email: "nirmal@gmail.com",
    isActive: true
}

// function createUser({ name: string, isPaid: boolean }){

// }

// createUser({name:"Nirmal", isPaid:false}); 

function createCourse(name: string, price: number):{name:string,price: number}{
    return {name:name, price: price} 
}

// type aliases 

type User = {
    readonly name:string;
    email: string;
    isActive: boolean;
    creditCard?: number
}

// type Mystring = string; This is just like a new string dataType.

function createUser(user:User):User{
    return { name: user.name, email: user.email, isActive: user.isActive }
}

createUser({ name:"Nirmal", email:"nirmal@gmail", isActive:false })

let MyUser: User = {
    name: "Nirmal",
    email:"nirmal@gmail.com",
    isActive: false
}

MyUser.email = "n@gmail.com"
// MyUser.name = "sa"; This is not possible as it is a readonly



type cardNumber = {
    cardnumber: number
}

type cardDate = {
    carddate: string
}

// Intersections 
type cardDetails = cardNumber & cardDate & {
    cvv: string
}

let card1: cardDetails = {
    cardnumber: 123,
    carddate: "12",
    cvv: "12121"
}

export {}