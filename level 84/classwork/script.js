class Book {
    constructor(title,author){
        this.title = title
        this.author = author
    }
}
const myObj = new Book("ვეფხისტყაოსანი","შოთა რუსთაველი")
console.log(myObj)

///////////////

class Vehicle {
    constructor(brand) {
        this._brand = brand;
        this._speed = 0;
    }
    get brand() { return this._brand; }
    get speed() { return this._speed; }

    accelerate() {
        this._speed += 10;
    }
}

class car extends Vehicle {
    constructor(brand,model,_fuel){
        super(brand)
        this.model = model
    }
    
}

const car1 = new car("bmw","m3")
car1.accelerate()
car1.accelerate()
console.log(car1)


class User {
    constructor(username,email,_password){

    }
}