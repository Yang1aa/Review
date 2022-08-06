let num = 5;
let f = (num) => {
    let result = "";
    for (let i = 31; i >= 0; i--) {
        result += (num & (1 << i)) === 0 ? "0" : "1"
    }
    return result;
}
console.log(f(num));
// console.log(Infinity);
// console.log(f(Infinity));
// Infinity > num ? console.log("y") : console.log("n");
// Math.min()> num ? console.log("y") : console.log("n");
// console.log(Math.min())
// console.log(Math.max())
console.log(f(num >> 1))//用符号位去补位
console.log(f(num >>> 1))//用0去补位
console.log(f(num << 1))//用0去补位
console.log(f(num << 1))//用0去补位
console.log((~num + 1))