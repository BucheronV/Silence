export function navFunction() {
    // recupérer les éléments HTML qui vont servir

const button = document.querySelector('#burgerbutton');
const menu = document.querySelector('nav');
let isDown = false;

// définir les fonctions/actions qui vont être utilisé

function navDown() {
    if(isDown) {
    menu.style.top = "-90vh";
    setTimeout(()=>{isDown = false}, 1200)
    }else{
    menu.style.top = "30vh";
    setTimeout(()=>{isDown = true}, 1200)
    }
}

// mettre en places les déclencheurs des actions

button.addEventListener('click', navDown);
}