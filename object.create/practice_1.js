var obj1 = {
   name : "Pankaj",
   age : 36
}

var obj2 = {
   name : "Pankaj Kumar",
   dob : "16/10/1984",
   status : "single"
} 

var prototypeObj1 = Object.create(obj1, {
   addProp : {value:"First Prop"},
   age : {value : 38}
});
prototypeObj1.name = "Pankaj Kumar";

var prototype2Obj1 = Object.create(prototypeObj1,
   {addProp : {value : "Add prop2"}}
)

var firstUpperParent = Object.getPrototypeOf(prototype2Obj1);

var mostUpperParent = Object.getPrototypeOf(firstUpperParent);

var originalObj = Object.getPrototypeOf(prototypeObj1);

var prototypeObj2 = Object.create(obj2);

var mergeObj = Object.assign({},obj1,obj2);

console.log('grandChildobject----',prototype2Obj1);
console.log('firstUpperParent--- ',firstUpperParent);
console.log('mostUpperParent ----- ',mostUpperParent);
console.log('childobject---- ',prototypeObj1);
console.log('parentobject---',originalObj);
console.log('parentobjectmain---',obj1);
console.log('childobject22---- ',prototypeObj2);
console.log("merging of two obhect",mergeObj)

/************Multiple inheritance is not possible.Example given below.**************/

function TestConstructor1(item1,item2){
   this.item1 = item1;
   this.item2 = item2;
}

TestConstructor1.prototype.getAllProperty1 = function(){
   return "TestConstructor1.prototype.getAllProperty :  " + this.item1 + " , "+ this.item2
}

function TestConstructor2(item1,item2,itme3){
   this.item1 = item1;
   this.item2 = item2;
   this.itme3 = itme3;
}

TestConstructor2.prototype.getAllProperty2 = function(){
   return "TestConstructor2.prototype.getAllProperty :  " + this.item1 + " , "+ this.item2 + " , " + this.itme3;
}

function childConstructor(item1,item2,item3,item4){
   TestConstructor1.call(this,item1,item2);
   TestConstructor2.call(this,item1,item2,item3);
   this.item4 = item4;
}

childConstructor.prototype = Object.create(TestConstructor1.prototype);
//childConstructor.prototype = Object.create(TestConstructor2.prototype);

childConstructor.prototype.constructor = childConstructor;

childConstructor.prototype.getAllProperty = function(){
   return "childConstructor.prototype.getAllProperty :  " + this.item1 + " , "+ this.item2 + " , " + this.itme3 + " , " + this.item4;
}

var childObj1 = new childConstructor("item1","item2","item3","item4");

console.log(childObj1.getAllProperty());
console.log(childObj1.getAllProperty1());
console.log(childObj1.getAllProperty2());