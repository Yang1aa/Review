let arr = [1, 2, 2, 2, 2, 3, 4, 7, 7, 10];
const f = (arr, target) => {
    const len = arr.length - 1;
    let l = 0;
    let r = len;
    let ans = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] >= target) {
            r = mid - 1;
            ans = mid;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}
console.log(f(arr, 11))