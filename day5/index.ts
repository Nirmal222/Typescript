//Objects

const User = {
    name: "Nirmal",
    email: "nirmal@gmail.com",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }){

}

createUser({name:"Nirmal", isPaid:false}); 

function createCourse():{name:string,price: number}{
    return {name:"reactjs", price: 20} 
}

// type aliases 


export {}