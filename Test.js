
var combinationSum2 = function (candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b);
    console.log("candidates", candidates)
    const dfs = (path, sumPath, index) => {
        if (sumPath === target) {
            result.push(path.slice());
            return;
        }
        if (sumPath > target)
            return;

        for (let i = index; i < candidates.length; i++) {
            if ((i > index && candidates[i] === candidates[i - 1])) {
                continue;
            }
            console.log("candidates[i]", candidates[i])
            path.push(candidates[i]);
            dfs(path, sumPath + candidates[i], i + 1)
            path.pop();
        }
    }
    dfs([], 0, 0);
    return result;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))













var combinationSum2 = function (candidates, target) {
    let res = [];
    /**
     *
     * @param {*} index 当前开始的索引
     * @param {*} path 回溯的路径
     * @param {*} sum 当前路径中所有元素的和
     */
    const backtrack = (index, path, sum) => {
        // 和已超目标值  不符合退出
        if (sum > target) return;
        // 找到目标和 将路径加入结果集中
        if (sum == target) return res.push(path.slice());
        for (let i = index; i < candidates.length; i++) {
            // 当前元素跟上一个元素相同且上一个元素在索引选择范围内则当前元素就不需要加入
            if (i - 1 >= index && candidates[i - 1] == candidates[i]) continue;
            // 选择 candidates[i]
            path.push(candidates[i]);
            sum += candidates[i];
            // 递归遍历下一层回溯树 注意这里是i+1 因为同一个元素不能重复使用
            backtrack(i + 1, path, sum);
            // 撤销选择 candidates[i]
            sum -= candidates[i];
            path.pop();
        }
    };
    // 先将数组升序排列
    candidates.sort((a, b) => a - b);
    backtrack(0, [], 0);
    return res;
};