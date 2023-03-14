function checkPrime(no : number) : boolean
{
    let count : number= 0
    let count2 : number= 0
   for(count = 0; count<=no;count++)
   {
     if(no%count == 0)
     {
        count2++;
     }
   }
   if(count2==2)
   {
     return true
   }
    return false
}

if(checkPrime(11))
{
    console.log("Prime number")
}else{
    console.log("Not a prime number")
}