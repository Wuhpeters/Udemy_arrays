//every vai retornar boolean
//se pelo menos uma das verificações for false, vai retornar false

/*const arr = [1, 5, 10, "ola", true]

let sonumeros = arr.every(function(elem){
    console.log(elem)
    return typeof elem === "number"
})

console.log(sonumeros)
*/

//some vai retornar boolean
//se pelo menos uma das verificações for true, vai retornar true

const arr = [1, 5, 10, "ola", true]

let sonumeros = arr.some(function(elem){
    console.log(elem)
    return typeof elem === "number"
})

console.log(sonumeros)