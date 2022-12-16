
let btn=document.getElementById('btn').addEventListener('click',()=>{


    let amount=document.getElementById('rs').value;
    let des=document.getElementById('des').value;
    let cat=document.getElementById('cat').value;
    const parentNode = document.getElementById('ul');
    const childHTML = `<li id=${amount} ><strong>Amount is</strong>  : ${amount} <strong>Description is </strong>: ${des}  <strong>Category is</strong> : ${cat}
                            <button onclick=deleteUser('${amount}')> Delete User </button>
                            <button onclick=editUserDetails('${amount}','${des}','${cat}')>Edit User </button>
                         </li>
                         `
                         

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
})

function deleteUser(desId){
    console.log(desId)
    const parentNode = document.getElementById('ul');
                const childNodeToBeDeleted = document.getElementById(desId);
                if(childNodeToBeDeleted) {
                    parentNode.removeChild(childNodeToBeDeleted)
                }
}

function editUserDetails(desId, name, cat){

    document.getElementById('rs').value = desId;
    document.getElementById('des').value = name;
    document.getElementById('cat').value =cat;

    deleteUser(desId)
 }
