/*
    “myLastIndexOf” that will take in an array of elements
    and returns the index of the last encounter of a target element (if it is found) 
    or -1 if that element does not exist within the input array.
*/

function myLastIndexOf(arr,myTarget)
{
    for(i=arr.length-1; i>=0; i--) //start from the back to the front
    {
		if(arr[i]==myTarget)
			return i;
	}
	return -1; //if here, element does not exist within input
}

/* TESTING - from Array.lastIndexOf() mozilla developer docs
    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
    console.log(myLastIndexOf(animals,'Dodo'));
    console.log(myLastIndexOf(animals,'Tiger'));
*/