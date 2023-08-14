// Generics 
const score:Array<number> = []
const names: string[] = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any{
    return val
}


//The Generic type accepts anything and returns the same type
function identityThree<Type>(val: Type): Type{
    return val
}

function identityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: string
    type: number
}

function identityFive<Bottle>(){
    
}