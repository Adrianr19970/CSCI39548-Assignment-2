Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
    return;
}

/* ---Testing--- */

function times2(num) {
    return num * 2;
}

const cb = (x) => {
    console.log(times2(x));
};

const print = (x) => console.log(x);

let arr2 = [1, 2, 3, 4];

arr2.myEach(print);
arr2.myEach(cb);