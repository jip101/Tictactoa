/*
function playerFactory(name, symbol) {
    const displayInfo = () => {
        return `Player is named ${name}, playing as ${symbol}`
    }
    return {name, symbol, displayInfo}
}

const player1 = playerFactory('jeremy', 'x')
*/


/*
numbering for board spaces
    0|1|2
    3|4|5
    6|7|8
*/

const gameBoard = (() => {
    let spaces = document.getElementsByClassName('box')
    let newGame = () => {
        for (let i = 0; i < spaces.length; i++){
            while(spaces[i].firstChild) {
                spaces[i].removeChild(spaces[i].lastChild)
            }
        }
    }
    //console.log(spaces)
    let player = (name, symbol) => {

        return {name, symbol}
    }


    const space1 = document.getElementById('5')
    let change = (text) => space1.innerHTML = text
    let space2 = document.getElementById('2')
    
    return {change, player, newGame}
})();

let test = gameBoard
player1 = test.player('jeremy', 'x')
console.log(player1)
test.newGame()