let nums = [2, 2, 5, 4, 7, 8, 1]
let target = 4
function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (temp === nums[j])
                return [i, j];
        }
    }
    return [];
}
console.log(search(nums, target))
