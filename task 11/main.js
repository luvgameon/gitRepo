let obj ={
name:"luv",
age: 21
};
localStorage.setItem(obj,JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem(obj)));