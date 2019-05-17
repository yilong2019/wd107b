function isPrime(a){
    var count=0;
    for(var i=1; i<=a; i++)
    {
        if(a%i==0) count++;
    }
    if(count==2) return a+"是一個質數";
    else return a+"不是一個質數";
}
for(a=1; a<=20; a++)
{
    console.log(isPrime(a));
}