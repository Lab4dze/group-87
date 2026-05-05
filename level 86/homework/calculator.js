const add = (a, b) => {
    return a + b
}
const subtract = (a, b ) => {
    return a - b
}

class Calculator {
    constructor(a,b){
        this.a = a 
        this.b = b
    }
    multiply = (a,b) => {
        return a * b 
    }
}

module.exports = {add, subtract, Calculator}