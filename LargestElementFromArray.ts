function largestElement(noArray : number[]):number
{

    let largestElement : number = noArray[0]

    let i : number = 0;
    for(i = 0; i<noArray.length ; i++)
    {
        if(largestElement<noArray[i])
        {
            largestElement = noArray[i]
        }
    }
    
    return largestElement;
}

var noArray : number[] = [54,87,54,21,87,12] 

console.log("largest element in the array is:: "+largestElement(noArray))