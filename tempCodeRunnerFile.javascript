var restoreIpAddresses = function (s) {
    let res = [];
    let pre = 0;
    function dfs(current, str, point) {
        if (str.length === s.length + 3 && point === 3) {
            res.push(str);
            return;
        }
        console.log("pre", pre)
        console.log("current", current)
        console.log("str", str)
        console.log("str.substring(pre, current)", str.substring(pre, current))
        if (str.substring(pre, current) > 255 || (current > pre && str.charAt(pre + 1) === '0') || (point === 3 && current != s.length + 3)) {
            return;
        }
        for (let i = current; i < s.length; i++) {
            pre = current;
            str += s[i] + '.';
            dfs(i + 1, str, ++point);
            str = str.substring(0, str.length - 1);
        }
    }
    dfs(0, "", 0)
    return res;
};
s = "25525511135"
restoreIpAddresses(s)