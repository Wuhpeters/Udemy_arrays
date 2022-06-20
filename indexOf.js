//indexOf vai procurar em uma array e mostrar o indice do primeiro elemento encontrado
//lastIndexOf vai procurar em uma array e mostrar o indice do ultimo elemento encontrado

let arr = [4, 5, 10, 20, 35, 4, 5]
console.log(arr.indexOf(5))
console.log(arr.lastIndexOf(5))
console.log(arr.lastIndexOf(5) > -1)//para retornar boolean

//caso não seja encontrado irá retornar -1