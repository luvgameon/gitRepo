const uname=document.querySelector('#uname');
const email=document.querySelector('#uemail');

var form=document.querySelector('#my-form');
var mylist=document.querySelector('#myli');
form.addEventListener('submit',myfun);
function myfun(e){
    e.preventDefault();
    let user_details={
        username:uname.value,
        useremail:email.value
    }
    var edit_btn=document.createElement('button');
    edit_btn.appendChild(document.createTextNode('Edit'));

    var del_btn=document.createElement('button');
    del_btn.appendChild(document.createTextNode('Delete'));

  var newuser=document.createElement('li');
  newuser.appendChild(document.createTextNode(uname.value +' '+ email.value));
  mylist.appendChild(newuser);
  newuser.appendChild(edit_btn);
  newuser.appendChild(del_btn);

  
 var users=JSON.stringify(user_details);
 localStorage.setItem('User'+email.value,users);

    
}