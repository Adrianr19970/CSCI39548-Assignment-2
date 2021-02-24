

//returns false if any element in array fails callback check
Array.prototype.myEvery=function(myCallBack){
	for(i=0; i<this.length; i++){
		if(!myCallBack(this[i]))
			return false;
	}
	return true;
}




