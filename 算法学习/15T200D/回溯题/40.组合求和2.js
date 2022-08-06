var combinationSum2 = function (candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b);
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
            path.push(candidates[i]);
            dfs(path, sumPath + candidates[i], i + 1)
            path.pop();
        }
    }
    dfs([], 0, 0);
    return result;
};