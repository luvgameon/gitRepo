var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
form.addEventListener('submit',additem);
itemlist.addEventListener('click', del);
function additem(e){
    e.preventDefault();
    // new item
    var newitem =document.getElementById('item').value;
    //create new list
    var li=document.createElement('li');

    // add class

    li.className='list-group-item';

    li.appendChild(document.createTextNode(newitem));


    itemlist.appendChild(li);


    var deletebtn =document.createElement('button');
    var editbtn = document.createElement('button');
    editbtn.className='btn btn-info btn-sm float-right';
    editbtn.appendChild(document.createTextNode('Edit'));
    
    li.appendChild(editbtn);
    itemlist.appendChild(li);

    deletebtn.className='btn btn-danger btn-sm float-right delete';

    deletebtn.appendChild(document.createTextNode('X'));

    li.appendChild(deletebtn);
    itemlist.appendChild(li);



}
function del(e){
    
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure'))
        {
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }

}
