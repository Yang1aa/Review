//实现在1s之后打印'done'
function wait(time) {
    //todo
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}
wait(1000).then(() => console.log('done'))