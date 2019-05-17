function commonFactor(a,b){
    var i, m, s, cf;
    if(a>b) {
        m=a;
        s=b;
    }
    else{
        m=b;
        s=a;
    }
    for(i=1; i<=s; i++)
    {
        if(m%i == 0)
        {
            if(s%i == 0) cf=i;
        }
    }
    return cf;
}
var a=12, b=15;
console.log(commonFactor(a, b));