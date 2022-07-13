let deepClone = (arr) => {
    let newArr;
    if (Array.isArray(arr)) {
        newArr = [];
        arr.map((item) => {
            if (item || typeof (item) !== Object) {
                newArr.push(item);
            }
            else {
                newArr.push(deepClone([], item));
            }
        })
    } else {
        newArr = {};
        for (const key in arr) {
            if (arr[key] || typeof (arr[key]) !== Object) {
                newArr[key] = arr[key];
            }
            else {
                newArr[key] = deepClone({}, item);
            }
        }
    }
    return newArr;
}
let date = new Date();
let arr = [1, "2", undefined, [1, 2, () => { console.log("first") }], { name: 'yjf' }, () => { console.log("hi") }, date, NaN, Infinity]
let Arr = deepClone(arr);
Arr[0] = "9";
console.log("arr", arr)
console.log("newArr", Arr)