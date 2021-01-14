let isAlive = true
let hp = 20
let checkStatus = null

checkStatus = confirm('Vault 111 is now open! You have 20 HP points.')

let orderChoice = prompt('Do you want to A. Find a weapon or B. Cry out for Shaun?')

if (orderChoice === 'A') {
    alert('You found a Pipe Pistol!')
    isAlive = true 
    
}
    
    else if (orderChoice === 'B') {
        alert('A nearby raider heard you and attacked. You have died and lost the game. Goodbye.')
        hp = 0
        isAlive = false
       
    }

if(isAlive == true) {
    orderChoice = prompt('Would you like to A. Search for survivors or B. Explore alone?')
    if (orderChoice === 'A') {
    alert('You have discovered Codsworth at home. You are safe and have won the game! Goodbye.')
    hp = 20
    isAlive = true
}
    else if (orderChoice === 'B') {
        alert('You walked a while and discovered Concord. +10 RADS.')
        hp = 10
        isAlive = true
    
        
    }
}

if ((isAlive == true) && (hp == 10)) {
    checkStatus = confirm('You have 10 HP points remaining. Find RadAway.')
    if (checkStatus = true) {
        orderChoice = prompt('Would you like to A. Find RadAway or B. Take your chances and keep exploring?')
        if (orderChoice === 'A'){
            hp = 15
            isAlive = true
            alert('Your RADS have decreased! HP is now 15.')
        }

        else if (orderChoice === 'B') {
            hp = 0
            isAlive = false
            checkStatus = confirm('You have died of radiation poisoning and lost the game. Goodbye.')
        }
    }
}

if (isAlive == true && (hp == 15)) {
    alert('You have found shelter for the night.')
    checkStatus = confirm('You are safe and have won the game! Goodbye.')
}







