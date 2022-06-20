let arr = [1, 2, 3, 4, 5]

/*let soma = arr.reduce(function(acumulador, atual){//pode receber 4 parametros
    return acumulador + atual
})

console.log(soma)
console.log(arr)
*/

let j = 0

let soma = arr.reduce(function(acumulador, atual, i, array){//(primeiro valor, segundo valor, indice, array original)
    console.log("i: ", i)
    console.log("j: ", j)
    console.log("acumulador: ", acumulador, "----- atual: ", atual)
    return acumulador + atual
}, 0)
//quando passodo um segundo parametro o acumulador começa por ele e o atual começa pelo primeiro valor
//caso colocar uma string vazia"" ele vai concatenar os valores
//sempre ira retornar da mesma classe que o segundo parametro, string, obj, array
console.log(soma)
console.log(arr)