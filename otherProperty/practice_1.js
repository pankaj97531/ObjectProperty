var obj1 = {
    prop1 : "property1",
    prop2 : "property2",
    prop3 : "property3"
}
obj1.foo="add data";
obj1.prop2="changed data";
delete obj1.prop3;
console.log(obj1);

var freezObj1 = Object.freeze(obj1);
console.log(freezObj1);
obj1.prop3 = "add propperty 3";
console.log(obj1);
console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(freezObj1));

var arr1 =[10,20,30];

var freezArr = Object.freeze(arr1);

//arr1.push(40);
console.log(arr1);
//Converting a Map to an Object
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj);
//Converting an Array to an Object
const arr2 = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj2 = Object.fromEntries(arr2);
console.log(obj2);

const object1 = {
    property1: 42
  };
  
  const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
  
  console.log(descriptor1.configurable);
  
  console.log(descriptor1.value);

  const object2 = {
    property1: 42
  };
  
  const descriptors2 = Object.getOwnPropertyDescriptors(object2);
  
  console.log(descriptors2.property1.writable);
  
  console.log(descriptors2.property1.value); 