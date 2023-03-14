function fibonaccai(no : number) :void
{
    let a : number = 0
    let b : number = 1
    let sum : number = 0

    let count : number  = 1

    for(count = 1; sum<no; count++)
    {
        a = b
        b = sum
        sum = a+b
        console.log(sum)

    }
}
fibonaccai(21)
