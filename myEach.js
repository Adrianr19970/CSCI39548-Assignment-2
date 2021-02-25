Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
    return;
}

// --Testing--

/*
// ---Function Definiton---
function times2(num) {
    return num * 2;
}

const cb = (x) => {
    console.log(times2(x));
};

const print = (x) => console.log(x);

// --- Test Cases ---
let arr2 = [1, 2, 3, 4];

arr2.myEach(print);
// Outputs 
// 1
// 2
// 3
// 4

arr2.myEach(cb);
// Outputs 
// 2
// 4
// 6
// 8
*/
