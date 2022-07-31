// let obj = { 1: "!" }
let obj = new Object()

// for in 方法
// let flag = false;
// for (let item in obj) {
//     console.log(item)
//     if (item) {
//         flag = true;
//     }
// }
// console.log(flag);

// JSON方法
// let t = JSON.stringify(obj);
// console.log(t === '{}')

// es6的Object.keys
console.log(Object.keys(obj).length === 0)
