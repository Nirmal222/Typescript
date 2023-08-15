interface Database {
    connection: string,
    username: string,
    password: string
}
function anotherFunction<T, U extends Database|number|string>(valOne: T, valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, "3"); // Since the generic type U extends to number the second argument can't be a string

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    aubject: string
}

class Sellable<T>{
    public cart: T[] = []
    addToCart(product:T){
        this.cart.push(product)
    }
}