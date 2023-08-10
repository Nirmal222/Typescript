//Union
// It helps to avoid "any" in ts

let score: number | string | boolean = 33;

// Union uses pipe operator helping to use multiple datypes 
type User = {
    name: string;
    id: number | string
}
type Admin = {}

let hitesh: User | Admin = { name: "Nirmal", id:"232" };

function getDbId(id: number | string){
    if(typeof id ==="string") id.toUpperCase()
}

// Mixed datatypes in an array 
const data3: (string|number)[] = ["1",2];

// More strict check
let pi:3.14 = 3.14; // pi = 3.145 -> this is not allowed as the value is always 3.14
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = crew //crew is not defined so it is not allowed
