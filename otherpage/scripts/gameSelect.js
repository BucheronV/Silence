import { rigthNumber } from "./rightNumber.js";
export function gameSelect(){
    /*recupération d'élèments*/
    const select = document.querySelector('#game-select');
    const gameZone = document.querySelector('.game-zone');

    //actions/functions

    function gameChoice(){
        let choiceNumber = select.value;
        
    switch(choiceNumber){
        case '2':
            rigthNumber(gameZone);
            break;
            default:
                reset()
            break;
    }
    }
    function reset() {
        gameZone.innerHTML = "";
        gameZone.classList.remove("selectZone");
    }
    //déclencheur

    select.addEventListener('change', gameChoice);
}

