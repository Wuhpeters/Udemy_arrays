//find vai retornar o primeiro valor verdadeiro

let arr = [4, 5, 10, 20, 35, 4, 5]
console.log(arr.find(function(elem){
    return elem > 10
}))

//findIndex vai retornar o primeiro indice 

console.log(arr.findIndex(function(elem){
    return elem > 10
}))