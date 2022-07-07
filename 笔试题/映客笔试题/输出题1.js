var MAP = {
    onclick: function () {
    },
    curry: function (val) {
        return function (z) {
            return val++ + z;
        }
    }
}

var getInfo = function (val) {
    return MAP[val]
}
var fn = getInfo('curry')

var a = fn(100)

console.log(a(200)) //300
console.log(a(300)) //401
console.log(fn(100)(200)) //300
console.log(getInfo('curry')(100)(300)) //400