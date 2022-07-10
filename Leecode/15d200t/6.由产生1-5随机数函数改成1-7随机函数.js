let Rand = () => {
    return Math.floor(Math.random() * 5) + 1;
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

let f = () => {
    let ans;
    do {
        ans = Rand();
    } while (ans === 3);
    return ans = ans < 3 ? 0 : 1;
}
let F = () => {
    let ans;
    do {
        ans = (f() << 2) + (f() << 1) + (f());
    } while (ans === 7)
    return ans + 1;
}

test(F);
