let nums = [2, 2, 5, 4, 7, 8, 1];
let target = 15;
function search(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if (map.has(temp) && map.get(temp) !== i)
            return [i, map.get(temp)];
        map.set(nums[i], i);
    }
    return []
}
console.log(search(nums, target))