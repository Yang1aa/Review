let Rand = (max) => {
    let arr = [];
    let N = Math.floor(Math.random() * max);
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}
let f = (arr) => {
    console.log(arr);
    if (arr.length < 2) {
        return arr;
    }
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(f(Rand(10)));