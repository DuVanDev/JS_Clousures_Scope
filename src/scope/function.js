const fuits = () => {
    let fruit = 'apple'
    console.log(fruit);
}

fuits()
console.log(fruit); /* Not Exist  */

const another = () => {
    var x = 1 
    var x = 2 /* Var rewritte var X */
    let y = 1
    let y = 2 /* Error "y" has already been declared */
    console.log(x);
    console.log(y);
}

another()
