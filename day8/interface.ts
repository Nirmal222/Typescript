// Interfaces
// They seem exactly similar to type 

interface User {
    readonly dbId: number
    email: string;
    userId: number;
    googleId?: string;
    startTrail: ()=> string //startTrail(): string
    getCoupon(couponName: string): number
}

// interface vs type 
// 1. reopening 
interface User {
    githubToken: string
}

const nirmal: User  = {
    dbId: 1,
    email: "nirmal@gmail.com",
    userId: 123,
    startTrail: ()=>{
        return "string"
    },
    getCoupon: (name:"22")=> Number(name),
    githubToken: "sds"
}

// 2. Inheritence
interface Admin extends User{
    role: string
}

const Nanu: Admin = {
    dbId: 1,
    email: "nirmal@gmail.com",
    userId: 123,
    startTrail: ()=>{
        return "string"
    },
    getCoupon: (name:"22")=> Number(name),
    githubToken: "sds",
    role: "CEO"
}
export {}