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