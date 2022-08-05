const PEDDING = "pedding";
const RESOLVED = "resolved";
const REJECTED = "rejected";
class myPromise {
    state = PEDDING;
    message = undefined;
    constructor(fn) {
        const myresolve = (message) => {
            this.state = RESOLVED;
            this.message = message;
        }
        const myrejecte = (message) => {
            this.state = REJECTED;
            this.message = message;
        }
        fn(myresolve, myrejecte);
    }
    then = (resolved, rejected) => {
        if (this.state === RESOLVED) {
            resolved(this.message);
        }
        if (this.state === REJECTED) {
            rejected(this.message);
        }
    }
}
new Promise((resolve, reject) => {
    reject("yjf")
}).then(
    (res) => {
        console.log("res_success1", res)
    },
    (res) => {
        console.log("res_error1", res)
    }
)
new myPromise((resolve, rejected) => {
    rejected("yjf")
}).then(
    (res) => {
        console.log("res_success2", res)
    },
    (res) => {
        console.log("res_error2", res)
    }
)