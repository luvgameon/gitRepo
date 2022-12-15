let btn=document.querySelector('#btn').addEventListener('click',()=>{
    let amount=document.querySelector('#rs').value;
    let des=document.querySelector('#des').value;
    let cat=document.querySelector('#cat').value;

    const parentNode = document.getElementById('myul');
                const childHTML = `<li id=${amount}> ${des} - ${cat}
                                        <button onclick=deleteUser('${}')> Delete User </button>
                                        <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                                     </li>`

                parentNode.innerHTML = parentNode.innerHTML + childHTML;
            }



    


})
