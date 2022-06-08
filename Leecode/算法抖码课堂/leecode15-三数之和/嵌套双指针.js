let nums = [-1, 0, 1, 2, -1, -4];
var threeSum = function (nums) {
    let arr = [];
    let result = [];
    function twoSum(arr, target) {
        arr.sort((a, b) => {
            return a - b;
        })
        let i = 0,
            j = 0,
            result = [];
        while (i < j) {
            if (arr[i] + arr[j] < target) {
                i++;
            } else if (arr[i] + arr[j] > target) {
                j++;
            } else {
                result.push(arr[i], arr[j]);
            }
        }
        return result.length > 0 ? result : false;
    }
    for (let i = 0; i < nums.length; i++) {
        let target = -nums[i];
        arr = { ...nums };
        arr.splice(i, 1)
        if (twoSum(arr, target)) {
            result.push(nums[i]);
        }
    }
};
console.log(threeSum(nums))