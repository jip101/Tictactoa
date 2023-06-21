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
DELETE WHEN COMPLETED
numbering for board spaces
[
           8
    [0,1,2]4
    [3,4,5]5
    [6,7,8]6
     1 2 3 7
]
*/

const gameBoard = (() => {
    let spaces = document.getElementsByClassName('box')
    console.log(spaces)
    spaces[0].groups = ['left', 'top', 'bSlash']
    spaces[1].groups = ['vMid', 'top']
    spaces[2].groups = ['right', 'top', 'fSlash']
    spaces[3].groups = ['left', 'hMid']
    spaces[4].groups = ['vMid', 'hMid', 'bSlash', 'fSlash']
    spaces[5].groups = ['right', 'hMid']
    spaces[6].groups = ['left', 'bot', 'fSlash']
    spaces[7].groups = ['vMid', 'bot']
    spaces[8].groups = ['right', 'bot', 'bSlash']

    let player = (name, symbol) => {
        let groups = {
            left: 0,
            top: 0,
            right: 0,
            bot: 0,
            vMid: 0,
            hMid: 0,
            fSlash: 0,
            bSlash:0
        }
        return {name, symbol, turn: false, groups}
    }

    //TODO - initialize players from <input>
    let start = () => {
        
        let player1 = player('tony', 'x')
        let player2 = player('george', 'o')
        for (let i = 0; i < spaces.length; i++){
            spaces[i].addEventListener('click', () => {
                if (!spaces[i].owner && player1.turn === true) {
                    spaces[i].owner = player1.name
                    spaces[i].innerHTML = `<h1>${player1.symbol}</h1>`
                    player1.turn = false
                    player2.turn = true
                    spaces[i].groups.forEach(group => {
                        player1.groups[group]++
                    })
                    console.log(player1.groups)

                }
                else if (!spaces[i].owner && player2.turn === true) {
                    spaces[i].owner = player2.name
                    spaces[i].innerHTML = `<h1>${player2.symbol}</h1>`
                    player1.turn = true
                    player2.turn = false
                    console.log(spaces[i].groups)
                }
            })
        }
    }

    let changethisfn = player => {
        if (!spaces[i].owner && player1.turn === true) {
            spaces[i].owner = player1.name
            spaces[i].innerHTML = `<h1>${player1.symbol}</h1>`
            player1.turn = false
            player2.turn = true
            spaces[i].groups.forEach(group => {
                player1.groups[group]++
            })
            console.log(player1.groups)
        }
    }
    



    let newGame = () => {
        for (let i = 0; i < spaces.length; i++){
            while(spaces[i].firstChild) {
                spaces[i].removeChild(spaces[i].lastChild)
                spaces[i].owner = ''
            }
        }
    }
    //console.log(spaces)




    const space1 = document.getElementById('5')
    let change = (text) => space1.innerHTML = text
    let space2 = document.getElementById('2')

    newGame()

    return {change, player, newGame, start}
})();

gameBoard.start()
//player1 = start.player('jeremy', 'x', true)
//start.newGame()