let nums = [-1, 0, 1, 2, -1, -4];
var threeSum = function (nums) {
    if (nums.length < 3)
        return [];
    let ans = [];
    nums = nums.sort((a, b) => {
        return a - b;
    })
    for (let i = 0; i < nums.length - 2; i++) {
        let temp = -nums[i];
        if (i > 0 && nums[i] === nums[i - 1])
            continue;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            if (l > i + 1 && nums[l] === nums[l - 1]) {
                l++;
                continue;
            }
            if (r < nums.length - 1 && nums[r] === nums[r + 1]) {
                r--;
                continue;
            }
            if (nums[l] + nums[r] > temp) {
                r--;
            } else if (nums[l] + nums[r] < temp) {
                l++;
            } else {
                ans.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
            }
        }
    }
    return ans;
};
console.log(threeSum(nums))