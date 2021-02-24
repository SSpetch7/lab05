function mode(){
    const Onclick = document.querySelector("#time");
    const greeting = Onclick.querySelector("#Hi-day");
    const day =  Onclick.querySelector("#thistime");
    const textcolor = Onclick.querySelectorAll(".p");
    const textcolor2 = Onclick.querySelector("#Hi-day");
    const textcolor3 = Onclick.querySelector("#thistime");
    const word = Onclick.querySelector("#text");
    const Active = Onclick.querySelector("#button");
    const text2 = Onclick.querySelector(".text2");
    if(onClick === true){
        Onclick.classList.remove('day');
        Onclick.classList.add('night');
        greeting.innerHTML = "GOOD NIGHT";
        day.innerHTML="This is night time!";

        for(var i=0;i<textcolor.length;i++){
            textcolor[i].classList.remove('atDay');
            textcolor[i].classList.add('atNight');    
        }

        textcolor2.classList.remove('atDay');
        textcolor2.classList.add('atNight');

        textcolor3.classList.remove('atDay');
        textcolor3.classList.add('atNight');
        
        Active.innerHTML="Active the day mode";

        word.classList.remove('text-day');
        word.classList.add('text-night');

        text2.innerHTML = 'day';
        onClick = false;

    }

    else{

        Active.innerHTML="Active the night mode";

        Onclick.classList.remove('night');
        Onclick.classList.add('day');

        greeting.innerHTML = "GOOD MORNING";
        day.innerHTML="This is day time!";

        for(var i=0;i<textcolor.length;i++){
            textcolor[i].classList.remove('atNight');    
            textcolor[i].classList.add('atDay');
        }
        word.classList.remove('text-night');
        word.classList.add('text-day');

        textcolor2.classList.remove('atNight');
        textcolor2.classList.add('atDay');

        textcolor3.classList.remove('atNight');
        textcolor3.classList.add('atDay');
        text2.innerHTML = 'night';
        onClick = true;
    }
}
var onClick = true ;
const button = document.querySelector("#time");
button.addEventListener('click',mode);