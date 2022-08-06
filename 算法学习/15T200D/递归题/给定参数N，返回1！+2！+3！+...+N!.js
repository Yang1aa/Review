let N = 2;
let f = (N) => {
    let result = 0;
    let temp = 1;
    for (let i = 1; i <= N; i++) {
        temp = temp * i;
        result += temp;
    }
    return result;
}
console.log(f(N));