//vai percorrer a array
//forEach substitui um for ou while
//itera o array

const arr = [1, 5, 10, "ola", true]
let arr1 = []

arr.forEach(function(elem, ind, array){//pode receber 3 parametros(elemento, indice, array)
    if(typeof elem === "number"){
        arr1.push(elem)
    }
})

console.log(arr)
console.log(arr1)
