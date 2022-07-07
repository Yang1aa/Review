function findX(arr) {
    // 完善代码
    arr.sort();
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== 1) {
            return arr[i - 1] + 1;
        }
    }
}
var arr = [3, 8, 2, 6, 4, 5];
console.log(findX(arr))