//vai retornar uma nova array com os dados transformados


const arr = [1, 5, 10, 3]

const arr1 = arr.map(function(elem, ind, array){//pode receber 3 parametros(elemento, indice, array)
    return elem * elem
})

console.log(arr)
console.log(arr1)