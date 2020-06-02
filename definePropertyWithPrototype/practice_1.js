function myclass1(){

}
var value;
Object.defineProperty(myclass1.prototype,'prop1',{
    get(){
        return value;
    },
    set(x){
        value=x;
    }
});
var a1 = new myclass1();
var b1 = new myclass1();
a1.prop1 = 100;
console.log(b1.prop1);
function myclass2(){}
Object.defineProperty(myclass2.prototype,"prop2",{
    get(){
        return this.storedValue;
    },
    set(value){
        this.storedValue = value;
    }
});
var a2 = new myclass2();
var b2 = new myclass2();
a2.x = 100;
console.log(b2.x);
console.log(a2);

function myclass3(){

}
myclass3.prototype.prop3=100;
Object.defineProperty(myclass3.prototype,"prop4",{
    value:200,
    writable : false
});
var a3 = new myclass3();
console.log(a3);
a3.prop3 = 23;
console.log(a3.prop3);
console.log(myclass3.prototype.prop3);
a3.prop4=45;
console.log(a3.prop4);
console.log(myclass3.prototype.prop4);

/****************************/
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
console.log(obj);