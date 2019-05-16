var a, b, i;
function m357(a, b){
    for(i=a; i<=b; i++)
    {
       if(i%3 == 0 || i%5 == 0 || i%7 == 0)console.log(i+", ");
    }
}
a=10, b=100;
console.log(m357(a,b));