function f(string) {
    let obj = {};
    let result = [];
    for (let i = 0; i < string.length; i++) {
        if (!obj[string[i]]) {
            obj[string[i]] = string[i];
        } else {
            result.push(string[i]);
        }
    }
    return result;
}
console.log(f('aaaabccde'))