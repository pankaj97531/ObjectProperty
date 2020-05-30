
let names = ["Pankaj","Ajay","Kunal"];
names.prop1 ="add data";
Object.defineProperty(names,"prop2",{
    value : "add data 2",
    enumerable : false
})
Object.defineProperty(names,"prop3",{
    value : "add data 3",
    enumerable : true
})
console.log(names);
for(var val of names){
    console.log(val);
}
for(var attr in names){
    console.log("key are : ",attr);
}

let testObject={
    items1 : ["items1","items2","items3"],
    items2 : ["arr item1","arr item2","arr item3"]
}
testObject.addProp1="add data test object";
Object.defineProperty(testObject,"addProp2",{
    value:"add data 2",
    enumerable :false
})
console.log("****************");
console.log(testObject);
console.log('addProp2 : ',testObject.addProp2);
for(var attr in testObject){
    console.log("key are : ",attr);
}
for(var val of testObject){
    console.log(val);
}

