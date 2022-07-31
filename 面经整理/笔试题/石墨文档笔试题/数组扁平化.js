let flatten = (arr) => {
    let len = arr.length;
    let result = [];
    for (let i = 0; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flatten(arr[i]))
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flatten([1, 2, [3, 4], 5]))//[ 1, 2, 3, 4, 5 ]
console.log(flatten([1, [2, [3, 4, [1]]], 5]))//[ 1, 2, 3, 4, 1, 5 ]