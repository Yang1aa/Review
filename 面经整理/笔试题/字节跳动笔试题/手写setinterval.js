function MySetInterval(fn, delay, ...args) {
    let flag = true;
    let f = () => {
        if (flag) {
            fn(...args);
            setTimeout(() => {
                f()
            }, delay)
        }
    }
    flag = setTimeout(() => {
        f()
    }, delay);
    return flag;
}
let n = 10;
let f = MySetInterval(() => {
    console.log("n", n--)
}, 1000, n)
const Clear = (f) => {
    f = false;
}

// function mySetInterval(fn, delay, ...args) {
//     let config = { flag: true }        //声明一个对象config来控制，
//     //来作为跳出递归的条件
//     function myInterval() {
//         if (config.flag) {
//             fn(...args)
//             setTimeout(() => {
//                 myInterval()
//             }, delay)
//         }
//     }

//     setTimeout(() => {
//         myInterval()     //这段代码有什么作用呢，
//         //我们声明了myInterval()函数，需要调用该函数，
//         //这段代码起到调用作用
//     }, delay)

//     return config //将声明的对象config返回，
//     //是为了清除轮询
// }

// // 调用mySetInterval()函数
// let n = 10
// mySetInterval(() => {
//     console.log(n--)
// }, 1000)

// //清除轮询
// function myClearInterval(obj) {  //myClearInterval函数接受的是一个对象
//     obj.flag = false            //利用引用类型指向同一个地址，
//     //来改变原来config对象属性flag的值，
//     //达到关闭轮询的作用
// }