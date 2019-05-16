var i, j, sum;
for(i=1; i<=9; i++)
{
    console.log("%d*(1~9-----)", i);
    for(j=1; j<=9; j++)
    {
        sum=i*j;
        console.log("%d*%d=%d", i, j, sum);
    }
}