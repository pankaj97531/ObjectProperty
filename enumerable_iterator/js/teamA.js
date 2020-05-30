var commonObj = commonObj || {};
//console.log('teamA ',commonObj);
commonObj.teamA = commonObj.teamA || {};
commonObj.teamA.testExample =function(val1,val2){
	this.val1=val1;
	this.val2 = val2;
	this.getDeteails = function(){
		return "Val1 : "+ this.val1+" Val2 : "+this.val2;
	}
	return this;
}
