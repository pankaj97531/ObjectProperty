//reference link : https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript#:~:text=constructor%20%3D%20sub%3B%20%7D%20%2F%2F%20parent,(this%2C%20name)%3B%20this.
function TestConstructor1(item1,item2){
   this.item1 = item1;
   this.item2 = item2;
   this.getProperty = function(){
      return "TestConstructor1 getProperty : "+ this.item1 + " , " + this.item2;
   }
}
TestConstructor1.prototype.getAllProperty1 = function(){
   return "TestConstructor1.prototype.getAllProperty :  " + this.item1 + " , "+ this.item2
}

TestConstructor1.prototype.commonMethod = function(){
   return "TestConstructor1.prototype.commonMethod";
} 

function TestConstructor2(item1,item2,itme3){
   this.item1 = item1;
   this.item2 = item2;
   this.itme3 = itme3;
   this.getProperty = function(){
      return "TestConstructor2 getProperty : "+ this.item1 + " , " + this.item2+ " , "+ this.item3;
   }
}

TestConstructor2.prototype.getAllProperty2 = function(){
   return "TestConstructor2.prototype.getAllProperty :  " + this.item1 + " , "+ this.item2 + " , " + this.itme3;
}

TestConstructor2.prototype.commonMethod = function(){
   return "TestConstructor2.prototype.commonMethod";
} 

function childConstructor(item1,item2,item3,item4){
   TestConstructor1.call(this,item1,item2);
   TestConstructor2.call(this,item1,item2,item3);
   this.item4 = item4;

   //this.parentGetProperty = Object.getPrototypeOf(Object.getPrototypeOf(this)).getProperty.call(this,"xxxx","yyy");
   this.getProperty = function(){
      return "childConstructor getProperty : " + this.item1 + " , " + this.item2+ " , "+ this.item3+ " , "+ this.item4;
   }
}

childConstructor.prototype = Object.create(TestConstructor1.prototype);
//childConstructor.prototype = Object.create(TestConstructor2.prototype);

childConstructor.prototype.constructor = childConstructor;

childConstructor.prototype.getAllProperty = function(){
   return "childConstructor.prototype.getAllProperty :  " + this.item1 + " , "+ this.item2 + " , " + this.itme3 + " , " + this.item4;
}
childConstructor.prototype.commonMethod = function(){
   return "childConstructor.prototype.commonMethod";
} 

var childObj1 = new childConstructor("item1","item2","item3","item4");
var parentObj1 = Object.getPrototypeOf(childObj1);

console.log(childObj1);
console.log(childObj1.getAllProperty());
console.log(childObj1.getProperty());
console.log(childObj1.getAllProperty1());
//console.log(childObj1.getAllProperty2());
console.log(childObj1.commonMethod());
console.log(Object.getPrototypeOf(parentObj1).commonMethod());
console.log(Object.getPrototypeOf(parentObj1).constructor);