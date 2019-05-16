var i, sum, j;
for(i=1 ; i<=10 ; i++)
{
    sum=1;
    for(j=1; j<=i; j++)
    {
        sum = sum*j;
    }
    console.log("%d!=%d", i, sum);
}