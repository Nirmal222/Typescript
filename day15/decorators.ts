// Decorator: It's a function that can hook into our source code and either extend the functionality or annotate the meta data. An they are simple functions
// There are five different things we can decorate:
// 1. class definitions
// 2. properties
// 3. methods
// 4. accessors
// 5. parameters
// syntax: @decorator


// Class Decorators 

function Component(target: Function):void{
    target.prototype.id = 100
}

@Component
export class TestClass {
    static elementId: string;
    id: number;
    printId(prefix: string = ""): string{
        return prefix + this.id
    }
}``