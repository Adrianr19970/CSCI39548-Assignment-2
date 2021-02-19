Array.prototype.myFilter = function (funct, argument) {
    
    let length = this.length;
    let arr = new Array(length) // New array
    let tempArr = this;
    let x = 0;
    let index_Count = -1;
    
    let index_Value;
    if(argument === undefined) {
        while (index_Count++ !== length) {
            if (index_Count in this) {
                index_Value = tempArr[index_Count];
                if (funct(tempArr[index_Count], index_Count, tempArr)) {
                    arr[x++] = index_Value;
                }
            }
        }
    }

    else {
        while (index_Count++ !== length) {
            if (index_Count in this) {
                index_Value = tempArr[index_Count];
                if (funct.callback(argument, tempArr[index_Count], index_Count, tempArr)) {
                    arr[x++] = index_Value;
                }
            }
        }
    }

    arr.length = x;
    return arr;
};

/* Array Definition */
const things = ["books", "pen", "paper", "phone", "computer"];
const things2 = ["one", "1", "three", "3", "five", "5"];

// ---Test Case--- 
/*
const filter = things.myFilter(word => word.length > 4);
const filter2 = things2.myFilter(word => word.length <= 3);

// ---Output---

console.log(filter);
console.log(filter2);
*/