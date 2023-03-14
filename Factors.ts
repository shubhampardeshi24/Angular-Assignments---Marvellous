function displayFactors(no : number) : void
{
    let count = 1;
    for(count = 1; count<=no/2; count++)
    {
        if(no%count == 0)
        {
            console.log(count)
        }
    }
}
displayFactors(28)