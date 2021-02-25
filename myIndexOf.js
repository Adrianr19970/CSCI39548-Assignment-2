

//returns index once target is found
Array.prototype.myIndexOf=function(myTarget, fromIndex=0){
	for(i=fromIndex; i<this.length; i++){
		if(this[i]==myTarget)
			return i;
	}
	return -1;
}