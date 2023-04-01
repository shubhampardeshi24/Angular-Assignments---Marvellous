class Arithmatic{

    Number1 : number;
    Number2 : number;

    constructor(Number1 : number , Number2 : number){
        this.Number1 = Number1;
        this.Number2 = Number2;
    }

    Addition(): number{
        return this.Number1 + this.Number2;
    }

    Subtraction(): number{
        return this.Number1 - this.Number2;
    }

    Multiplication(): number{
        return this.Number1 * this.Number2;
    }

    Division(): number{
        return this.Number1 / this.Number2;
    }
}

var InputVal1 : number = 10;
var InputVal2 : number = 5;

var Object1 = new Arithmatic(InputVal1, InputVal2);
InputVal1 = 20;
InputVal2 = 10;

var Object2 = new Arithmatic(InputVal1, InputVal2);

console.log("calling by Object1");
console.log("Addition is :"+Object1.Addition());
console.log("Subtraction is :"+Object1.Subtraction());
console.log("Multiplication is :"+Object1.Multiplication());
console.log("Division is :"+Object1.Division());
console.log("\ncalling by Object2");
console.log("Addition is :"+Object2.Addition());
console.log("Subtraction is :"+Object2.Subtraction());
console.log("Multiplication is :"+Object2.Multiplication());
console.log("Division is :"+Object2.Division());