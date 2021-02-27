//var delete = document.querySelector("");
function newNode(){
    //const list = document.querySelector('#Mylist');
    var li = document.createElement('li');
    var inputValue = document.querySelector("input").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if(inputValue === ''){
        
    }
    else{
        document.querySelector('Mylist').appendChild(li);
        console.log("FFFFF");
    }
    document.querySelector('input').value = "";
}

const Enter = document.querySelector('#input');
Enter.addEventListener('keyup',function(event){
    if(event.key === "Enter"){
       newNode();
    }
});