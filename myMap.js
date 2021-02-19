Array.prototype.myMap = function (callback) {
    let element;
    let arr;
    let index_Count;

    let tempArr = this;
    let length = tempArr.length;

    arr = new Array(length);
    index_Count = 0;
    
    let index_Value;
    let mapped_Value;

    for (index_Count = 0; index_Count < length; index_Count++)
    {
        index_Value = tempArr[index_Count];
        mapped_Value = callback.call(element, index_Value, index_Count, tempArr);            
        arr[index_Count] = mapped_Value;
    };
    return arr;
};

/* ---Testing--- */

/* Array */
let numbers = [2, 4, 6, 9];
let numbers2 = [5, 10, 15, 20];

/* Function Definitons */
function times2(num) {
    return num * 2;
}

function modulo(num) {
    return num % 2;
}

// ---Test Cases---
/*
const map1 = numbers.myMap(x => x * 2);
const map2 = numbers2.myMap(times2);
const map3 = numbers.myMap(modulo);

console.log(map1);
console.log(map2);
console.log(map3);
*/