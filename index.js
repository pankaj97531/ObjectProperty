var obj = {
	a: 10,
	b : function(){
		return this.a;
	},
	c : this.b,
	d : this.c,
	e : this.a
}
console.log(obj.b())
console.log(obj.c);
console.log(obj.e);

var obj1 = {
  a : 10,
  b : function(){
    return this.a
  },
  c : function(){
    return ()=>{
      return this
    }
  },
  d : this.c
}

console.log(obj1.a);
console.log(obj1.b());
var innerObj = obj1.c(); 
console.log(innerObj());
console.log(obj1.d);

var obj2 = {
  a : 10,
  b : (function(){
		return function(){
			return Object.assign({},this)
     }
  }()),
  c : this.b
}

var originalObj = obj2.b(); 
obj2.d = "add new value";
console.log(originalObj);

function test(){
  console.log('aaaaa----',this)
  return [1,2,3]
}

var obj1 = new test();

console.log(test())

function test2(){
console.log('bbbb----',this)
  return 'Pankaj'
}

var obj2 = new test2();

console.log(obj2)