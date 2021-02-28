var mylist = document.getElementsByTagName('LI');
for (var i=0;i<mylist.length;i++){
    var trash = document.createElement('i');
    trash.className ='fas fa-trash delete';
    mylist[i].appendChild(trash);
}

function completelist(element){
    if(ONCLICK === true){
        element.classList.add('completed');
        ONCLICK = false;
    }
    else if (ONCLICK === false){
        element.classList.remove('completed');
        ONCLICK = true;
    }
}

function removelist(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
}

var ONCLICK = true;
const listA = document.querySelector('#list');
listA.addEventListener('click',function(event){
    console.log(event);
    const element = event.target;
    const elementw = event.target.className;
    if(elementw == 'fas fa-trash delete'){
        removelist(element);
    }
    else if(elementw == 'text'|| 'text completed'){
        completelist(element);
    }
});

function newNode(){
    var li = document.createElement('li');
    li.className = 'item';
    var inputValue = document.getElementById('input').value;
    var text = document.createTextNode(inputValue);
    if(inputValue===''){}
    else{
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('input').value='';
    var trash = document.createElement('i');
    var txt = document.createElement('p');
    txt.appendChild(text);
    trash.className = 'fas fa-trash delete';
    txt.className = 'text';
    li.appendChild(trash);
    li.appendChild(txt);
}
const todo = document.getElementById('input');
todo.addEventListener('keyup',function(event){
    if(event.keyCode == 13){
       newNode();

    }
})