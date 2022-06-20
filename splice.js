let arr = [1, 2, 3, 4, 5, 6, 7, 'opa']

let modarr = arr.splice(0, " x")

console.log(arr)//valores restantes
console.log(modarr)//valores removidos

//splice modifica a array original e retorna os valores removidos dos indices selecionados