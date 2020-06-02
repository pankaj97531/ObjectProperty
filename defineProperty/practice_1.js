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

/***********************/
var testobj5={
    a : 10,
    b : 20,
    x : 77,
    c : function(x,y){
        this.x=x;
        this.y=y;
    },
    d : function(){
        return this.x+this.y;
    }
}
console.log(testobj5.c(30,40));
console.log(testobj5);
console.log(testobj5.d());
/**************************/
var testobj4 = {};
var descriptor = Object.create(null);
descriptor.value = 'static';
console.log(descriptor);
Object.defineProperty(testobj4,'key',descriptor);
Object.defineProperty(testobj4, 'key2', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'static2'
  });
console.log(testobj4);
console.log(testobj4.key);
testobj4.key="change value";
testobj4.key2="change value";
console.log(testobj4);
// recycling same object
function withValue(value){
    var d = withValue.d || {
        writable : false,
        configurable :false,
        enumerable : false,
        value : value
    }
    if(d.value !==value){
        d.value = value;
    }
    return d;
}
Object.defineProperty(testobj4,"key3",withValue('static3'));
Object.defineProperty(testobj4,"key4",{
    value:"static4",
    enumerable : false,
    configurable : true,
    writable : false
});
console.log(testobj4);
console.log(testobj4.key3)
console.log(testobj4);
console.log(testobj4.key4)
Object.defineProperty(testobj4,"key4",{
    value : "new value",
    enumerable : false,
    writable : false,
    configurable : false
});
testobj4.key4 = "change value";
console.log(testobj4);
console.log(testobj4.key4);
Object.defineProperty(testobj4,"key5",{
    value : "static5",
    enumerable : false,
    writable : true,
    configurable : false
});
console.log(testobj4);
console.log(testobj4.key5);
testobj4.key5 = "change value";
console.log(testobj4);
console.log(testobj4.key5);
Object.defineProperty(testobj4,"key6",{
    value : "static6",
    enumerable : true,
    writable : false,
    configurable : false
});
console.log(testobj4);
console.log(testobj4.key6);
console.log(testobj4.propertyIsEnumerable('key'));
console.log(testobj4.propertyIsEnumerable('key2'));
console.log(testobj4.propertyIsEnumerable('key3'));
console.log(testobj4.propertyIsEnumerable('key4'));
console.log(testobj4.propertyIsEnumerable('key5'));
console.log(testobj4.propertyIsEnumerable('key6'));
console.log(testobj4.propertyIsEnumerable('key7'));
for(let key in testobj4){
    console.log("key ",key);
}