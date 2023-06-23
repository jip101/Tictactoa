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
    const players = []
    players.push('player1')
    console.log(players)
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
        players.push(player2)
        for (let i = 0; i < spaces.length; i++){
            spaces[i].addEventListener('click', () => {

            })
        }
        return players
    }
    
    let swapActivePlyr = playerList => {
        playerList.forEach(plyr => {
            if (plyr.turn === false) {
                plyr.turn = true
            }
            else {
                plyr.turn = false
            }
        })
    }

    let changethisfn = player => {
        if (!spaces[i].owner && player.turn === true) {
            spaces[i].owner = player.name
            spaces[i].innerHTML = `<h1>${player.symbol}</h1>`
            swapActivePlyr()
            spaces[i].groups.forEach(group => {
                player.groups[group]++
            })
            console.log(player.groups)
        }
    }

    



    let newGame = () => {
        players.splice(0, 2)
        for (let i = 0; i < spaces.length; i++){
            while(spaces[i].firstChild) {
                spaces[i].removeChild(spaces[i].lastChild)
                spaces[i].owner = ''
            }
        }
        return players
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

/*
let randomNum = () => {
    return Math.floor(Math.random() * 2)
}
*/