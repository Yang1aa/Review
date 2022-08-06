var combinationSum = function (candidates, target) {
    let res = [];
    const dfs = (path, sum, index) => {
        if (sum >= target) {
            if (sum === target) {
                res.push(path.slice())
            }
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            path.push(candidates[i]);
            dfs(path, sum + candidates[i], i);
            path.pop();
        }
    }
    dfs([], 0, 0)
    return res;
};