import {Car} from "./car.js"


const car1 = new Car("Toyota", "Camry")
const car2 = new  Car ("Toyota" , "Corolla")

console.log(Car.compare(car1,car2))