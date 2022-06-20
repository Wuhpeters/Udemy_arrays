//vai filtrar a array
//filter não altera a array original, vai retornar uma nova array com os valores filtrados

const arr = [1, 5, 10, "ola", true]

const arr1 = arr.filter(function(elem, ind, array){//pode receber 3 parametros(elemento, indice, array)
    return typeof elem === "number"
})

console.log(arr)
console.log(arr1)