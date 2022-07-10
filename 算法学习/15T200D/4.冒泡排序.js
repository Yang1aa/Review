let Rand = (max) => {
    let arr = [];
    let N = Math.floor(Math.random() * max);
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}
let f = (arr) => {
    if (!arr.length || arr.length < 2) {
        return arr;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let tmp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = tmp;
            }
        }

    }
    return arr;
}
console.log(f(Rand(10)))