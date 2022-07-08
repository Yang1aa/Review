// 一个数组中只有两种字符'G'和'B’，
// 想让所有的G都放在某侧，所有的B都放在某侧但是只能在相邻字符之间进行交换操作，返回至少需要交换几次
let arr = ['G', 'B', 'B', 'B', 'G', 'B', 'G'];
let f = (arr) => {
    let r = 0;
    let result1 = 0;
    let result2 = 0;
    // B都放左侧
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 'B') {
            result1 += index - r;
            r++
        }
    }
    // G都放左侧
    r = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 'G') {
            result2 += index - r;
            r++;
        }
    }
    return Math.min(result1, result2);
}
console.log(f(arr))