/*  
Es la combinación de una función  y el ámbito léxico 
en la cual a sido creado la función
*/ 

/* THis is not a Closure */
const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins += coins
    console.log(`Money Box : $${saveCoins}`);
}

moneyBox(5)
moneyBox(10)


const moneyBox = (coins) => {
    var saveCoins = 0

    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`Money Box : $${saveCoins}`);
    }
    return countCoins
}

let myMoneyBox = moneyBox()
myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)