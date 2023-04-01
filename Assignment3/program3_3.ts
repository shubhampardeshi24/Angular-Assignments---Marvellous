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


    class CircleX extends Circle{
        constructor(InputVal : number){
        super(InputVal);
    }


    circum():number{
        return 2 * this.PI * this.Redius;
        }
    }


    var ob1 = new CircleX(5);
    var ob2 = new CircleX(10);

    console.log("by obj1 : circumference is: "+ob1.circum());
    console.log("by obj2 : circumference is: "+ob2.circum());