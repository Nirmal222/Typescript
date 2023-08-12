class User {
    // private _courseCount = 1
    protected _courseCount = 1
    readonly city: string = "Kakinada"
    // private city: string = "Kakinada" The (private/#) modifier does not allow the city to be accessible outside the class definition
    // readonly city: string = "Kakinada"
    constructor(
        
        public email: string, 
        public name: string,
        private userId: string
        ){ // This is one way to define class properties without using this. keyword
    }

    // getter method is designed to give access to private properties
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }
    // setter 
    set courseCount(courseNumber){ //whenever using setter always ther should be no return value
        if(courseNumber<=1) throw new Error("Course count should be more than 1");
        this._courseCount = courseNumber;
    }
    // privateMethods
    private deleteToken(){
        console.log("Token deleted");
    }
}

// Public, Protected and Private are called access modifiers

// Inhertitance 
class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4 //As the _courseCount is a private variable we cannot get that variable inside inherited class to solve this we can use protected to make it accesible in inherited classes
    }
}