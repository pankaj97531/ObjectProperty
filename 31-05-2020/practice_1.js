var testobj2 = {
    prop1 : "propterty 1",
    prop2 : "propterty 2",
    prop3 : "propterty 3"
}
console.log(Object.keys(testobj2));
console.log(Object.values(testobj2));
console.log(Object.entries(testobj2));
/*********************************/
var testObj={
    a : 10,
    b : 20,
    c : [10,20]
}
console.log(testObj.hasOwnProperty('c'));
console.log('toString' in testObj);
console.log(testObj.hasOwnProperty('toString'));
/*************************** */
var obj1 = {
    name : "obj1",
    sayName : function(){
        return this.name;
    }
}
var obj2 = {
    name : "obj2",
    sayName : function(){
        return this.name;
    }
}
//console.log(obj1.sayName.apply(obj2));