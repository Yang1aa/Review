let Rand = (max) => {
    let arr = [];
    let N = Math.floor(Math.random() * max);
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}
let f = (arr, l, r) => {
    if (l >= r)
        return;
    let left = l;
    let right = r;
    let key = l;
    while (l < r) {
        while (arr[r] >= arr[key] && r > l) {
            r--;
        }
        while (arr[l] <= arr[key] && r > l) {
            l++;
        }
        let temp = arr[r];
        arr[r] = arr[l];
        arr[l] = temp;
    }
    let temp = arr[key];
    arr[key] = arr[l];
    arr[l] = temp;
    f(arr, left, l - 1);
    f(arr, l + 1, right);
}
let arr = Rand(10);
console.log("arr", arr)
f(arr, 0, arr.length - 1);
console.log(arr)