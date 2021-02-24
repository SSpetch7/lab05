function mode(event){
    const greeting = event.currentTarget.querySelector(".Hi-day");
    const day =  event.currentTarget.querySelector(".daytime");
    const textcolor = event.currentTarget.querySelectorAll(".atDay");
    const word = event.currentTarget.querySelector("#text-day");
    event.currentTarget.classList.remove('day');
    event.currentTarget.classList.add('night');

    greeting.innerHTML = "GOOD NIGHT";
    day.innerHTML="This is night time!";

    for(var i=0;i<textcolor.length;i++){
        textcolor[i].classList.remove('atDay');
        textcolor[i].classList.add('atNight');    
    }
    word.classList.remove('text-day');
    word.classList.add('text-night');

    


    console.log(day);
    
}
const button = document.querySelector("#time");
button.addEventListener('click',mode);