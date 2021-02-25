

//returns true once target is found 
Array.prototype.myIncludes=function(myTarget, fromIndex=0){
	for(i=fromIndex; i<this.length; i++){
		if (this[i]==myTarget)
			return true;
	}
	return false;
}