function threeSum(nums) {
    let res = [];
    if (nums.length < 3) return res;
    nums.sort((a, b) => a - b);
    // 查找
    for (let i = 0; i < nums.length - 2; i++) {
        //  避免重复元素
        if (nums[i] == nums[i - 1]) continue;

        const target = -nums[i];
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            //  避免重复元素(为什么要j > i+1,因为下标i跟j可以相同)
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                j++; continue;
            };
            if (nums[k] == nums[k + 1]) {
                k--; continue;
            };
            // 查找
            if (nums[j] + nums[k] == target) {
                res.push([nums[i], nums[j], nums[k]]);
                j++; k--;
            } else if (nums[j] + nums[k] < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));