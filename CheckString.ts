function checkString(statement : string[]):boolean
{
    let count : number =0;
    let flag : boolean = false;
    for(count = 0; count<statement.length;count++)
    {
        if(statement[count]==="marvellous")
        {
            flag = true;
            break;
        }
    }
    return flag;
}

var statement : string = "Pune kothrud marvellous infosystem";
var arrayString: string[] = statement.split(' ')

if(checkString(arrayString))
{
    console.log("Present");
}
else
{
    console.log("Not present")
}
