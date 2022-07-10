// 给定一个arr，里面的数字都是0~9，你可以随意使用arr中的数字，哪怕打乱顺序也行请拼出一个能被3整除的,最大的数字，用str形式返回
let arr = [1, 1]
let f = (arr) => {
    let sum = 0;
    let result = "";
    let arr1 = [];
    let arr2 = [];
    arr.sort();
    for (let iterator of arr) {
        sum += iterator;
        if (iterator % 3 === 1) {
            arr1.push(iterator);
        } if (iterator % 3 === 2) {
            arr2.push(iterator);
        }
    }
    if (sum % 3 === 0) {
        result = arr.reverse().join('');
    }
    else if (sum % 3 === 1) {
        if (arr1.length) {
            arr.splice(arr.indexOf(arr1[0]), 1);
        } else {
            arr.splice(arr.indexOf(arr2[0]), 1);
            arr.splice(arr.indexOf(arr2[1]), 1);
        }
        result = arr.reverse().join('');
    } else {
        if (arr2.length) {
            arr.splice(arr.indexOf(arr2[0]), 1);

        } else {
            arr.splice(arr.indexOf(arr1[0]), 1);
            arr.splice(arr.indexOf(arr1[1]), 1);
        }
        result = arr.reverse().join('');
    }
    return result;
}
console.log(f(arr));