let Rand = (max) => {
    let arr = [];
    let N = Math.floor(Math.random() * max);
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}
let f = (arr) => {
    console.log(arr)
    if (!arr.length || arr.length < 2) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            minIndex = arr[minIndex] < arr[j] ? minIndex : j;
        }
        let tmp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = tmp;
    }
    return arr;
}
console.log(f(Rand(10)))