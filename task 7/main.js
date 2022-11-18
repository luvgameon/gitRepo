// call by parent NOde

// var a =document.querySelector('#items');
// // console.log(a);
// a.parentNode.style.backgroundColor="#f4f4f4";
// console.log(a.parentNode.parentNode.parentNode);

// call by parentElement

 var a =document.querySelector('#items');

//  a.parentElement.style.backgroundColor="#f4f4f4";
//  console.log(a.parentElement.parentElement.parentElement);


 // child node;
 //console.log(a.childNodes);
// console.log(a.children);
 //a.children[1].style.backgroundColor="green";

 // first element child
 //a.firstElementChild.style.backgroundColor="yellow";

 // last child

 //a.lastElementChild.textContent="hello4";


 // nextsibling
 
 //console.log(a.nextElementSibling); // its is null here but if i add a span after list then it show span

 // previous sibling

 a.previousElementSibling.style.color="green";



 // create a div

 var newDiv=document.createElement('div');

 // add class

 newDiv.className='Hello';

 // add id
 newDiv.id='hello1';

 // add attr

 newDiv.setAttribute('title','Hello');

 // add text to div


 var text1=document.createTextNode('HEllo word');
 newDiv.appendChild(text1);

 var container=document.querySelector('header .container');
 var h1= document.querySelector('header h1');


container.insertBefore(newDiv, h1);
var list =document.querySelector('.list-group');
list.innerHTML= 'HEllo word'+ list.innerHTML;


