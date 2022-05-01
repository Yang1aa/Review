var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let ans = Math.min(height[l], height[r]) * (r - l);
    while (l < r) {
        console.log('1', (height[l + 1] / height[l]))
        console.log('2', (1 + (1 / (r - l + 1))))
        if ((height[l + 1] / height[l]) > (1 + (1 / (r - l + 1)))) {
            ans = Math.max(Math.min(height[l + 1], height[r]) * (r - l - 1), ans);
            console.log('ans1', ans);
        }
        else {
            ans = Math.max(Math.min(height[l], height[r]) * (r - l), ans);
            console.log('ans2', ans);
        }
        l++;
    }
    return ans;
};
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]))