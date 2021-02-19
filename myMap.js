Array.prototype.myMap = function (callback) {
    let element;
    let arr;
    let index_Count;

    let tempArr = this;
    let len = tempArr.length;

    arr = new Array(len);
    index_Count = 0;
    
    let index_Value;
    let mapped_Value;

    while (index_Count < len) {
        index_Value = tempArr[index_Count];
        mapped_Value = callback.call(element, index_Value, index_Count, tempArr);            
        arr[index_Count] = mapped_Value;
        index_Count++;
    };
    return arr;
};

/* ---Testing--- */
let numbers = [2, 4, 6, 9];

function times2(num) {
    return num * 2;
}

function squareroot(num) {
    return num % 2;
}

const cb = (x) => {
    console.log(times2(x));
};

const cb2 = (y) => {
    console.log(squareroot(y));
}

const print = (x) => console.log(x);

// let arr2 = [1, 2, 3, 4];
// arr2.myMap(print);
///arr2.myMap(cb);

numbers.myMap(print);
numbers.myMap(cb);
numbers.myMap(cb2);
console.log(numbers);
