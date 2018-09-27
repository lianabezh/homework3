const a=function(x,y,z) {
return (x+y+z)/3;
};
console.log(a(7, 7, 7));

const b=function () {
	return "function";
};
console.log(b())

const c=function(num1,num2) {
const sum= num1 + num2;
};
console.log(c());

const d=function(string1, string2, string3){
if (string1.length>string2.length && string1.length>string3.length)
	return string1;
else if (string2.length>string1.length && string2.length>string3.length)
return string2;
else if (string3.length>string1.length && string3.length>string2.length)
	return string3;
else 
	{return "at least two strings are equal"};
};
console.log(d("Martha","joe","Jakob"));


const e=function(num1,num2) {
	if (num1===num2)
		return 0;
	else if (num1>num2)
		return 1;
	else 
		{return -1};
}
console.log(e(40,70));


const multiply=function(a,b) {
	return a*b;
}
console.log(multiply(1,4));


const divide=function(c,d) {
	return c/d;
} 
console.log(divide(70,10));


const triangleArea=function(base,height) {
	let m = multiply(base,height);
return divide(m,2);

} 
console.log(triangleArea(10,5));


const num=function(number) {
let num= number+"";
return num.length;
}
console.log(num(1256700));



const h=function(string1, string2 , number)   {
	let h=string1+string2;
if (h.length>number )
return 1;
else {
return -1};
}
 console.log(h("hello","world",77));

 const runStuff= function(num1,num2,string)  {
 	let m= multiply(num1,num2);
if (string==="rectangle")
	return m;
else if (string==="triangle")
	return  divide(m,2);
else
	{return -1};
 }
 console.log(runStuff(4,8,"rectangle"));