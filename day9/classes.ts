class User {
    
    readonly city: string = "Kakinada"
    // private city: string = "Kakinada" The (private/#) modifier does not allow the city to be accessible outside the class definition
    // readonly city: string = "Kakinada"
    constructor(
        
        public email: string, 
        public name: string,
        private userId: string
        ){ // This is one way to define class properties without using this. keyword
    }
}

