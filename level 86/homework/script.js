class MathHelper {
    constructor(number,masivi){
        this.number = number
        this.masivi = masivi
        }
    static isEven(number){
        return number % 2 == 0
    }
    static average(masivi){
        let sum = 0
        for(let i of masivi){
            sum+=i
        }
        let len = 0
        for(let x of masivi){
            len += 1
        }
        return sum / len
    }
}

const number1 = MathHelper.number = 16

console.log(MathHelper.isEven(number1))


const massTest = MathHelper.masivi = [67,10,41]

console.log(MathHelper.average(massTest))