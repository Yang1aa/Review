function myNew(construct, ...arg) {
  let obj = {}
  obj.__proto__ = construct.prototype;
  let res = construct.call(obj, arg);
  return res && typeof (res) === 'object' ? res : obj;
}
function Person(name) {
  this.name = name
}
let p1 = myNew(Person, '小明')
console.log(p1)