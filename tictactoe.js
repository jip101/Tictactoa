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
[
    [0,1,2]
    [3,4,5]
    [6,7,8]
]
*/

const gameBoard = (() => {
    let spaces = document.getElementsByClassName('box')
    console.log(spaces)
    spaces[0].groups = ['left', 'top', 'bSlash']
    spaces[1].groups = ['vMiddle', 'top']
    spaces[2].groups = ['right', 'top', 'fSlash']
    spaces[3].groups = ['left', 'hMiddle']
    spaces[4].groups = ['vMiddle', 'hMiddle', 'bSlash', 'fSlash']
    spaces[5].groups = ['right', 'hMiddle']
    spaces[6].groups = ['left', 'bottom', 'fSlash']
    spaces[7].groups = ['vMiddle', 'bottom']
    spaces[8].groups = ['right', 'bottom', 'bSlash']






    let newGame = () => {
        let player1 = player('jeremy', 'x', true)
        for (let i = 0; i < spaces.length; i++){
            while(spaces[i].firstChild) {
                spaces[i].removeChild(spaces[i].lastChild)
                spaces[i].owner = ''
            }
            spaces[i].addEventListener('click', () => {
                console.log(player1)
                if (!spaces[i].owner && player1.turn === true) {
                    spaces[i].owner = player1.name
                    spaces[i].innerHTML = '<h1>X</h1>'
                    player1.turn = false
                    console.log(spaces[i].owner)
                }
            })
        }
    }
    //console.log(spaces)
    let player = (name, symbol, turn) => {
        return {name, symbol, turn}
    }

    

    const space1 = document.getElementById('5')
    let change = (text) => space1.innerHTML = text
    let space2 = document.getElementById('2')

    newGame()

    return {change, player, newGame}
})();

let start = gameBoard
let end = gameBoard
//player1 = start.player('jeremy', 'x', true)
//start.newGame()