function mode(event){
    const day = event.currentTarget.querySelector('.Hi-day');
    day.textContent('GOOD NIGHT');
}
const button = document.querySelector('body');
button.addEventListener('click',mode);