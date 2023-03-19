function checkArmStrong(num1 : number):boolean{
    let temp = num1;
    let sum : number = 0;
    let countOfDigit = digitCount(num1)
    while(num1!=0)
    {
        let digit : number = num1%10;


        sum = sum + power(digit, countOfDigit)

        num1 = num1/10;

    }

    if(sum=temp)
    {
        return true;
    }
    return false;
}


function digitCount(num1 : number) : number
{
    let count : number = 0;

    while(num1!=0)
    {
        console.log(num1+"="+num1+"/"+"10")
        num1 = Math.round(num1/10);
        
        count++;
    }
    return count;
}

function power(num1 : number, power : number) : number
{
    var result : number = 1;
    var cnt : number = 1;
    for(cnt = 1; cnt<=power; cnt++)
    {
           result = result * num1;
    }
    return result;

}

console.log(checkArmStrong(153))