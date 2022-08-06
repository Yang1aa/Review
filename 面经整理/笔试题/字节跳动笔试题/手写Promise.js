const PEDDING = "pedding";
const RESOLVED = "resolved";
const REJECTED = "rejected";

class iPromsie {
    constructor(fn) {
        this.state = PEDDING;
        this.messsge = undefined;
        this.callbackList = [];
        const resolve = (val) => {
            if (this.state === PEDDING) {
                this.state = RESOLVED;
                this.messsge = val;
                setTimeout(() => {
                    this.callbackList.forEach(item => item.onResolved(val))
                })
            }
        }
        const reject = (val) => {
            if (this.state === PEDDING) {
                this.state = REJECTED;
                this.messsge = val;
                setTimeout(() => {
                    this.callbackList.forEach(item => item.onRejected(val))
                })
            }
        }
        fn(resolve, reject);
    }
    then = (onResolved, onRejected) => {
        return new iPromsie((resolve, reject) => {
            const handleCallback = (callback) => {
                try {
                    let res = callback(this.messsge);
                    if (res instanceof Promise) {
                        res.then(val => resolve(val), err => reject(err))
                    } else
                    resolve(res);
                } catch (err) {
                    reject(err)
                }
            }
            if (this.state === RESOLVED) {
                setTimeout(() => {
                    handleCallback(onResolved)
                })
            }
            if (this.state === REJECTED) {
                setTimeout(() => {
                    handleCallback(onRejected)
                })
            }
            if (this.state === PEDDING) {
                this.callbackList.push({
                    onResolved: () => handleCallback(onResolved),
                    onRejected: () => handleCallback(onRejected)
                })
            }
        })
    }
    static resolve(val) {
        return new iPromsie((resolve, reject) => {
            if (val instanceof Promise)
                val.then((val) => resolve(val), err => reject(err))
            else
                resolve(val);
        })
    }
    static reject(val) {
        return new iPromsie((resolve, reject) => {
            reject(val)
        })
    }
}
new iPromsie((resolve, reject) => {
    resolve('111')
}).then((res) => {
    console.log(res)
    return "222"
}).then((res) => {
    console.log(res)
    return "333"
}).then((res) => {
    console.log(res)
    return "444"
}).then((res) => {
    console.log(res)
})
console.log("--------------------------------------------")
iPromsie.resolve("123").then((Res) => console.log("Res", Res))