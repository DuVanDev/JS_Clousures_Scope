const fruits = () => {
    if (true) {
        var fruit1 = 'apple'
        var fruit2 = 'banana'
        var fruit3 = 'kiwi'
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits() /* Print all fruits */

const fruits = () => {
    if (true) {
        var fruit1 = 'apple'
        let fruit2 = 'banana'
        const fruit3 = 'kiwi'
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits() /* Error fruit 2 and 3 is not defined */

/* Good ####################################### */
let x = 1 
{
    let x = 2
    console.log(x);
}
console.log(x);


/* BAD ####################################### */
var x = 1 
{
    var x = 2
    console.log(x);
}
console.log(x);

