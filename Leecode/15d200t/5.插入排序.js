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
    for (let i = 1; i < arr.length; i++) {
        let index = i;
        while (index - 1 >= 0 && arr[index - 1] > arr[index]) {
            let tmp = arr[index];
            arr[index] = arr[index - 1];
            arr[index - 1] = tmp;
            index--;
        }
    }
    return arr;
}
console.log(f(Rand(10)))