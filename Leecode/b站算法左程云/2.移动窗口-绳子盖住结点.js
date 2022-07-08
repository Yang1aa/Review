// 给定一个有序数组arr，代表坐落在X轴上的点给定一个正数K,代表绳子的长度
// 返回绳子最多压中几个点?
// 即使绳子边缘处盖住点也算盖住
let arr = [1, 4, 7, 9, 10, 11, 13, 18, 19];
let len = 4;
let f = (arr, len) => {
    if (len < 1) {
        return 0;
    }
    let l = 0, r = 0;
    let result = 0;
    while (r < arr.length) {
        //小于等于len
        if (arr[r + 1] - arr[l] <= len)
            r++;
        // 大于len
        else {
            result = Math.max(result, r - l + 1);
            if (l === r) {
                l++;
                r++;
            } else
                l++;
        }
    }
    return result;
}
console.log(f(arr, len));