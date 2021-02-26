/*
    “grabValues” that will take in an object and return all of 
    the values of the key:value pairs of that object.
*/

function grabValues(anObject)
{
    //const object1 = {a: 'somestring', b:42, c:false}
    //if call keys -> output: Array ["somestring", 42, false]
    
    //loop through anObject making and adding each key to an array
    //to loop over all properties of obj - use for in
    //to add items to an array - use push
    let output = [];
    let index = 0;
    for(everyItem in anObject)
    {
        output[index] = anObject[i];
        index++;
    }

    //return array
    return output;
}

const object1 = {a: 'somestring', b:42, c:false};
console.log(grabValues(object1));