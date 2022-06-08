const { Hash } = require("crypto");

let nums = [-1, 0, 1, 2, -1, -4];
var threeSum = function (nums) {
    let map = new Map();
    let arr = [];
    let length = nums.length;
    if (length < 3)
        return [];
    for (let i = 0; i < length; i++) {
        let target = -nums[i];
        for (let j = i + 1; j < length; j++) {
            let temp = target - nums[j];
            for (let k = j + 1; k < length; k++) {
                if (temp === nums[k]) {
                    if (!map.has([nums[i], nums[j], nums[k]].sort())) {
                        map.set([nums[i], nums[j], nums[k]].sort())
                        console.log(map)
                        arr.push([nums[i], nums[j], nums[k]])
                    }
                }
            }
        }
    }
    return arr;
};
console.log(threeSum(nums))