function pin(n) {
    for (var i = 1; i < n; i += 0.001) {
        if (n <= i * i) {
            return i;
            break;
        }
    }
}
var num = 4;
console.log(num + "的平方根為" + pin(num));