// form
var form=document.getElementById('addForm');

// des
var des=document.getElementById('addForm');

// itmes
var itemlist=document.getElementById('items');
// filter
var filter=document.getElementById('filter');

form.addEventListener('submit',additem);
itemlist.addEventListener('click', del);
filter.addEventListener('keyup',filteritem);

//add

function additem(e){
    e.preventDefault();
    // new item
    var newitem =document.getElementById('item').value;
    var newdes =document.getElementById('des').value;
    //create new list
    var li=document.createElement('li');

    // add class

    li.className='list-group-item';

    li.appendChild(document.createTextNode(newitem+' '));
    li.appendChild(document.createTextNode(newdes));


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
// delete

function del(e){
    
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure'))
        {
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }

}

// filter
function filteritem(e){
    var text=e.target.value.toLowerCase();
    var items=itemlist.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item){
        var itemName =item.firstChild.textContent;
        var dess =item.childNodes[1].textContent;
        
        
        if(itemName.toLocaleLowerCase().indexOf(text)!=-1 || dess.toLocaleLowerCase().indexOf(text)!=-1 )
        {
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    

    });
}