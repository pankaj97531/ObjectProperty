let arr1=["one","two","three","four"];
arr1.prop1 ="add data 1";
console.log(arr1);
console.log(arr1.length);
for(let attr in arr1){
    console.log("key : ",attr);
}
for(let value of arr1){
    console.log("value : ",value);
}
arr1.forEach((element,index)=>{
    console.log("foreah index : ",index);
    console.log("foreach : ",element);
})
/**********************/
var object1={};
Object.defineProperty(object1,"add_property_1",{
    value : "add value"
})
Object.defineProperty(object1,'add_property_2',{
    value : "add value2",
    writable : true
});
Object.defineProperty(object1,'add_property_3',{
    value : "add value3",
    writable : true,
    enumerable : false
});
Object.defineProperty(object1,'add_property_4',{
    value : "add value4",
    writable : false,
    enumerable : true
});
Object.defineProperty(object1,'add_property_5',{
    configurable : true,
    enumerable : true,
    get : ()=>this.value,
    set : (_val)=>{this.value=_val} 
})
object1.add_property_1 ="change value";
object1.add_property_2 ="change value";
object1.add_property_5 ="add value 5";
object1.add_property_6 ="add value 6";
console.log('object1 :',object1);
for(var attr in object1){
    console.log(object1[attr]);
}

/******************Getter and Setter************************/
let test = "testdata";
let obj={
    id:1001,
    get id_method(){
        return this.id
    },
    set id_method(_val){
        this.id =_val
    },
    test,
    name : "Pankaj",
    method1(){
        console.log("method1");
    }
}
obj.method1();
obj.id_method = "1010";
console.log(obj.id_method);
console.log(obj.test);

/**************************getter and setter******************/
function TaxSystem() {
    let _taxReturns = "testdata";

    Object.defineProperty(this, 'taxReturns', {
        get: () => _taxReturns,
        set: (value) => {
            _taxReturns = value;
        }
    })
};

//create a new instance and log the value of taxReturns
let t = new TaxSystem();
console.log(t.taxReturns); // <-- NOTICE NO PARENS 

//update the value
t.taxReturns = "Data changed";
console.log(t.taxReturns);// <-- NOTICE NO PARENS 

//try to access the private variable - produces undefined
console.log(t._taxReturns);// <-- NOTICE NO PARENS 