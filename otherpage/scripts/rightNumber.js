/**
 * jeu qui s'affiche sur un page web et qui consiste à trouver un numéro
 * @param {*div/element html dans laquelle nous trouverons le jeu} zone zone dans laquelle s'affiche le jeu
 */

export function rigthNumber(zone){

    let propositionZone
    let validateButton

    function numberInit(){
        zone.classList.add('selectZone', 'number-zone');
        zone.innerHTML = '<div class="numberChoice"><label for="userProposition">Choose a number between 1 and 100</label><input type="number" id="userProposition"><input type="submit" value="Check" id="validate"></div>'

        propositionZone = document.querySelector("userPropostion")
        validateButton = document.querySelector("validate")

        validateButton.addEventListener('click', verifyNumber)
    }
    numberInit();
}