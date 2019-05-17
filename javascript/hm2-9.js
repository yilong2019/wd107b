function countPrime(a,b){
    var count=0, min, max;
    if(a<b) {
        min=a;
        max=b;
    }
    else{
        min=b;
        max=a;
    }
    for(; min<=max; min++)
    {
        var time=0
        for(var i=1; i<=min; i++){
            if(min%i==0) time++;
        }
        if(time==2) count++;
    }
    return count;
}
var a=1, b=100;
console.log(a+"到"+b+"共有"+countPrime(a,b)+"個質數");