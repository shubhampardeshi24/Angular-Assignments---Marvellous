class Cricle{
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
    var ob1 = new Cricle(5);
    var ob2 = new Cricle(10);


    console.log("by obj1 : Redius is: "+ob1.Area());
    console.log("by obj2 : Redius is: "+ob2.Area());