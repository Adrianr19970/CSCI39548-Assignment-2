

//returns "accumulator" which is changed by reducer function for each element
Array.prototype.myReduce=function(myCallBack, accumulator){
	if (accumulator==undefined)
		accumulator=0;
	for(i=0; i<this.length; i++)
		accumulator=myCallBack(accumulator, this[i]);
	return accumulator;
}



 