// 链接：https://leetcode.cn/problems/jian-sheng-zi-lcof
// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。


// 示例 1：
// 输入: 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1

// 示例 2:
// 输入: 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36

var cuttingRope = function (n) {
    if (n <= 3)
        return n - 1;
    let arr = [1, 1, 2, 3]
    const f = (n) => {
        let max = -1;
        for (let j = 4; j <= n; j++) {
            for (let i = 2; i <= Math.floor(j / 2); i++) {
                max = Math.max(j, arr[i] * arr[j - i], max)
            }
            arr.push(max);
        }
    }
    f(n);
    return arr[arr.length - 1];
};