var commonObj = commonObj || {};
//console.log('teamA ',commonObj);
commonObj.teamB = commonObj.teamB || {};
commonObj.teamB.testExample=function(val1,val2,val3){
	this.val1=val1;
    this.val2 = val2;
    this.val3 = val3;
	this.getDeteails = function(){
		return "Val1 : "+ this.val1+" Val2 : "+this.val2 +" val3 : "+this.val3;
    }
    return this
}
