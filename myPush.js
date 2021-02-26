
/*
“myPush” will take in an array of elements as well as an elementToAdd and 
append that element to the end of the array.
*/

function myPush(anArrayOfElements, elementToAdd)
{
    //add myElementToAdd to the end
    anArrayOfElements[anArrayOfElements.length] = elementToAdd;

    return anArrayOfElements.length;
}


/* TESTING - from Array.push() mozilla developer docs
    const animals = ['pigs', 'goats', 'sheep'];

    const count = myPush(animals,'cows');
    console.log(count);
    // expected output: 4
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows"]

    myPush(animals,'chickens', 'cats', 'dogs');
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
*/