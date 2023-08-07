//number
let userId: number = 334455;

//boolean
let isLoggedIn:  boolean = false

//any 
let hero: string;

function getHero(){
    return "thor" 
}

hero = getHero()

//functions
function addTwo(num:number):number{
    return num+2
}

let myVal = addTwo(5)
 
function getUpper(val:string): string{
    return val.toUpperCase()
}
getUpper("okGoogle")

function signupUser(name:string, email: string, isPaid:boolean){}
signupUser("Nirmal","nirmal@gmail.com",false)

//default check
let loginUser = (email: string, name: string, isPaid: boolean=false)=>{}
loginUser("Nirmal", "nanu")

// function getValue(myval: number): {
//     if(myVal>5) return true;
//     return "200 ok"
// }

const getHello = (s: string): string=>{
    return ""
}

const heros = ["thor", "spidy",'Ironman'];
heros.map((hero:string):string=>{
    return `hero is ${hero}`;
})

function consoleErro(errmsg: string): void{
    console.log(errmsg);
}

function handleErro(errmsg: string): never{
    throw new Error(errmsg);
}
export {}