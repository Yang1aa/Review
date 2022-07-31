function MySetInterval(fn, delay, ...args) {
    let flag = true;
    let f = () => {
        if (flag) {
            fn(...args);
            setTimeout(() => {
                f()
            }, delay)
        }
    }
    setTimeout(() => {
        f()
    }, delay);
    return flag;
}
let n = 10;
let f = MySetInterval(() => {
    console.log("n", n--)
}, 1000, n)
const Clear = (f) => {
    f = false;
}
setTimeout(() => {
    Clear(f);
},5000)