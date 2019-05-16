function pin(n){
    for(var i=1; i<=n; i+=0.0000001)
    {
        if((i*i)>=n) return i;
    }
}
var n=3;
i=pin(n);
console.log("%d的平方根=%d", n, i);
console.log(n+ "的平方根為" + pin(n));