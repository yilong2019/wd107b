function degree(scor){
    if(scor>= 90) return "'A'";
    else if(scor>= 80) return "'B'";
    else if(scor>= 70) return "'C'";
    else return "'D'";
}
var scor = 80;
console.log("degree("+scor+")=> "+degree(scor));