// How to set typescript for real projects
class User {
    email: string //this will be refered to this.email
    name: string //this will be refered to this.name
    city: string = "Kakinada"
    // readonly city: string = "Kakinada"
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

const nirmal = new User ("nirmal@gmail.com","nirmal" )
// nirmal.city = 1  - Cannot assign number to string type
nirmal.city = "Banglore"
export {}