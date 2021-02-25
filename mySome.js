Array.prototype.mySome = function (funct, argument) {

    let tempArr = this;
    let length = this.length;

    if (typeof funct !== "function") {
        throw new TypeError ("Not a function");
    }

    for (index_Count = 0; index_Count < length; index_Count++) {
        if (index_Count in tempArr && funct.call(argument, tempArr[index_Count], index_Count, tempArr)) {
            return true;
        }
    }

    return false;
};


/* Array Definitions */
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [-4, 0, 2, 4, 8];
const numbers3 = [1, ];
const numbers4 = [];

// ---Test Cases--- 

/*
const even = (array) => array % 2 === 0;
const odd = (array) => array % 2 === 1;
*/

// ---Output---
//console.log(numbers.mySome()); // Outputs Error "Not a function" 

/*
console.log(numbers.mySome(even)); // outputs true
console.log(numbers2.mySome(odd)); // outputs false
console.log(numbers3.mySome(odd)); // outputs true
console.log(numbers3.mySome(even)); // outputs false
console.log(numbers4.mySome(even)); // outputs false
console.log(numbers4.mySome(odd)); // outputs false
*/