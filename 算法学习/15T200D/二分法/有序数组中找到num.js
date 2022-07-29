let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const search = (arr, target) => {
    if (arr.length < 1) {
        return false;
    }
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        if (target > arr[Math.floor((l + r) / 2)]) {
            l = Math.floor((l + r) / 2) + 1;
        } else if (target < arr[Math.floor((l + r) / 2)]) {
            r = Math.floor((l + r) / 2) - 1;
        } else {
            return true;
        }
    }
    return false;
}
console.log(search(arr, 1))