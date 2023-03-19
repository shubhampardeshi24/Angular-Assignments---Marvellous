function summationOfArrayElement(numArray:number[]) : number
{

    let sum :number = 0;
    let count : number;

    for(count = 0; count<numArray.length;count++)
    {
        sum = sum + numArray[count];
    }
    return sum;
}

var numArray : number[] = [50,10,20,30];
console.log("Addition of all the element is:: "+summationOfArrayElement(numArray));