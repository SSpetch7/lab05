function clickme(event){
    var id = event.target.id;
    var text = document.getElementById(id);
    alert(text.innerHTML+": It's just one of those days." );
    if (confirm) {
        text.classList.add('color');
    }
}

function newText(){
   document.querySelector('#top').innerHTML = "NOBODY CAN SAVE ME!!";
   document.querySelector('#under').innerHTML = "I woke with this fear";
}


const Clicked =document.querySelectorAll(".toClick");
    for(var i = 0; i < Clicked.length;i++){
        Clicked[i].addEventListener('click',clickme);
        removeEventListener;
    }
const ClickedText = document.querySelector('#text')
ClickedText.addEventListener('click',newText);