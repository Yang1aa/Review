let Rand = () => {
    return (Math.floor(Math.random() * 5) + 1) <= 2 ? 0 : 1;
}
// test
let test = (f) => {
    let obj = {};
    for (let i = 1; i <= 100000; i++) {
        let t = f();
        if (obj[t]) {
            obj[t]++;
        } else
            obj[t] = 1;
    }
    console.log(obj)
}
// 暴力方法
// let F = () => {
//     let zero = 0;
//     let one = 0;
//     for (let i = 1; i <= 500; i++) {
//         if (i % 2 === 0) 
//             Rand() === 0 ? zero++ : one++;
//         else 
//             Rand() === 0 ? one++ : zero++;
//     }
//     return zero >= one ? 0 : 1;
// }

// 位运算思想
let F = () => {
    let ans;
    do {
        ans = Rand();
    } while (ans === Rand())
    return ans;
}
test(Rand);
test(F);