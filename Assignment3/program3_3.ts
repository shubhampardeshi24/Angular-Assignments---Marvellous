class Circle{

        Redius : number;
        PI : number;
        
        constructor(Redius : number){
            this.Redius = Redius;
            this.PI = 3.14;
        }


        Area(): number{
            return this.PI * this.Redius * this.Redius;
        }

    }


    class Circum extends Circle{

        constructor(number : number)
        {
            super(number);
        }

        circum() : number
        {
            return 2 * this.PI * this.Redius  * this.Redius;
        }
    }

var circleObj1 = new Circum(10);

console.log("Circum ference is :: "+circleObj1.circum());


