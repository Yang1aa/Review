let arr = [1, [2, 3], [3, [4, 5]], null, { "a": 6, b: { "c": () => { console.log("c") }, "d": "d" } }]
let f = (obj) => {
    let cloneObj = Array.isArray(obj) ? [] : {};
    if (obj && typeof (obj) === 'object') {
        if (Array.isArray(obj)) {
            obj.map((item) => {
                if (item && typeof (item) === 'object') {
                    cloneObj.push(f(item));
                } else
                    cloneObj.push(item)
            })
        } else {
            for (const key in obj) {
                if (key && typeof (key) === 'object') {
                    cloneObj[key] = f(obj[key])
                } else
                    cloneObj[key] = obj[key];
            }
        }
    }
    return cloneObj;
}
let newarr = f(arr);
newarr[4].b = 2;
console.log('arr', arr)
console.log('newarr', newarr)