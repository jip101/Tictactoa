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
    let spaces = document.getElementsByClassName('box')
    console.log(spaces)


    let createPlayer = (name, symbol) => {
        if (!name) {
            name = 'Player'
        }
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


    let start = () => {
        console.log('Game Started')
        players.splice(0, 2)
        let user1 = createPlayer(player1.value, '<svg height="100%" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-46.08 -46.08 552.93 552.93"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path></svg>')
        let user2 = createPlayer(player2.value, '<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 24 24" stroke-width="3" stroke="black" fill="none"> <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6" /> </svg>')
        console.log(user1.name)
        players.push(user1, user2)
 //       let randomizeMove = (() => {
            let selector = Math.floor(Math.random() * 2)
            players[selector].turn = true
            display.innerText = `${players[selector].name}'s turn`
 //       })();
        for (let i = 0; i < spaces.length; i++){
            spaces[i].addEventListener('click', () => {
                players.forEach(user => {
                    selectBox(i, user)
                })
            })
        }
    }
    
    let swapActivePlyr = () => {
        let display = document.querySelector('#display')
        players.forEach(plyr => {
            if (plyr.turn === false) {
                plyr.turn = true
                display.innerText = `${plyr.name}'s turn`
            }
            else {
                plyr.turn = false
            }
        })
    }

    let selectBox = (i, player) => {
        if (!spaces[i].owner && player.turn === true) {
            spaces[i].owner = player.name
            spaces[i].innerHTML = `${player.symbol}`
            console.log(player.groups)
            swapActivePlyr()
            spaces[i].groups.forEach(group => {
                player.groups[group]++
            })
        }
    }

    


    let clearBoard = () => {
        players.splice(0, 2)
        for (let i = 0; i < spaces.length; i++){
            spaces[i].parentNode.replaceChild(spaces[i].cloneNode(true), spaces[i])
            while(spaces[i].firstChild) {
                spaces[i].removeChild(spaces[i].lastChild)
                spaces[i].owner = ''
            }
        }
        spaces[0].groups = ['left', 'top', 'bSlash']
        spaces[1].groups = ['vMid', 'top']
        spaces[2].groups = ['right', 'top', 'fSlash']
        spaces[3].groups = ['left', 'hMid']
        spaces[4].groups = ['vMid', 'hMid', 'bSlash', 'fSlash']
        spaces[5].groups = ['right', 'hMid']
        spaces[6].groups = ['left', 'bot', 'fSlash']
        spaces[7].groups = ['vMid', 'bot']
        spaces[8].groups = ['right', 'bot', 'bSlash']
        console.log('Board Cleared')
        start()
    }
    //console.log(spaces)





    let newGameBut = document.querySelector('#newGame')
    newGameBut.addEventListener('click', clearBoard)

    return {createPlayer, start, spaces, players}
})();

//gameBoard.start()
//player1 = start.player('jeremy', 'x', true)
//start.newGame()

/*
let randomNum = () => {
    return Math.floor(Math.random() * 2)
}
*/