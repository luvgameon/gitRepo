


// call by query selector
var a =document.querySelector('.list-group-item:nth-child(2)');
a.style.backgroundColor="green";
var c =document.querySelector('.list-group-item:nth-child(3)');
c.style.color="white";

// query selector all 

var second =document.querySelectorAll('.list-group-item');
second[1].style.backgroundColor="#f4f4f4";
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<even.length;i++)
{
    even[i].style.backgroundColor="#ccc";
}




               