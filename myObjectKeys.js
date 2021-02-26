/*
    “grabKeys” that will take in an object and return all of the 
    keys of the key:value pairs of that object.
*/

function grabKeys(anObject)
{
    //object1 = {a: 'somestring', b:42, c:false}
    //if call keys -> output: Array ["a","b",c]
    
    //loop through anObject making and adding each key to an array
    //to loop over all properties of obj - use for in

    let output = []; //empty array to start
    let index = 0; //index of output
    for(everyItem in anObject)
    {
        output[index] = everyItem;
        index++;
    }

    //return array
    return output;
}

/* TESTING - from Object.keys() mozilla developer docs
    const object1 = {a: 'somestring', b:42, c:false};
    console.log(grabKeys(object1));
*/