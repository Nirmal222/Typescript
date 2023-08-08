//Objects

const User = {
    name: "Nirmal",
    email: "nirmal@gmail.com",
    isActive: true
}

// function createUser({ name: string, isPaid: boolean }){

// }

// createUser({name:"Nirmal", isPaid:false}); 

function createCourse():{name:string,price: number}{
    return {name:"reactjs", price: 20} 
}

// type aliases 

type User = {
    name:string;
    email: string;
    isActive: boolean
}

// type Mystring = string; This is just like a new string dataType 

function createUser(user:User):User{
    return { name: user.name, email: user.email, isActive: user.isActive }
}

createUser({ name:"Nirmal", email:"nirmal@gmail", isActive:false })

export {}