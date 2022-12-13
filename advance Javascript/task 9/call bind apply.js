
var student = {age:20,
    sum:1
};
var print = function(){
    return this.age;
}

var sum1=function(a,b,c){
    return this.sum +a+b+c;
}
var arr=[1,2,3];

console.log(print.call(student));
console.log(sum1.apply(student,arr));
 var bound=sum1.bind(student);
console.log(bound(1,2,3));

// sencond task 
let multiply = function(x,y)
{
    console.log(x * y);
}
let multiplyBytwo = multiply.bind(this,2);
multiplyBytwo(9);


