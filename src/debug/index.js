var a = 'Hello'

function hello() {  
    let b = 'Hello World'
    const c = 'Hello W'
    if (true) {
        let d = "World Si"
        debugger
    }
}

hello()

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