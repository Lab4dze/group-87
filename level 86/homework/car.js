export class Car {
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }
    static compare = (car1 , car2) => {
        if(car1.brand === car2.brand){
            return "this cars are same brand"
        } else{
            return "this cars are not same brand"
        }
    }
}