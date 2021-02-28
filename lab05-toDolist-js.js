var mylist = document.getElementById('li');
var i; 
for (i=0;i < mylist.length;i++){
    var trash = document.createElement('i');
    var text = document.createTextNode('\u007D');
    trash.className ='fas fa-trash delete';
    trash.appendChild(text);
    mylist[i].appendChild(trash);
}
var remove = document.getElementsByClassName('delete');
var i;
for(i=0;i<remove.length;i++){
    remove[i].onclick =function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('#list');
list.addEventListener('click',function(event){
    if(event.target.tagName === 'li'){
        event.target.classList.toggle('checked');
    }
},false)

function newNode(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('input')
}
const list = document.getElementById('list');
const todo = document.getElementById('input');
todo.addEventListener('keyup',function(event){
    if(event.keyCode == 13){
        const toDo = input.value;
        
    }
})