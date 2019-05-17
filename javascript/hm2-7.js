function binary(a) {
    var rm=a, sum=0, i;
    for(i=1; rm>=0; i*=10)
    {
        if(rm==0) return sum;
        else if(rm%2!=0)
        {
            sum=sum+1*i;
            rm=(rm-1)/2;
        } 
        else  {
            sum=sum+0*i;
            rm=rm/2;
        } 
    }
}
var a=748;
console.log(binary(a));