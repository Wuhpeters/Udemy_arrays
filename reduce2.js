let nomes = ["Will" , "Maria", "Claudio", "Carlauberto"]

let nomesPO = nomes.reduce(function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){//se não existe a primeira letra entao
        nomes[primeiraLetra]++
    } else {//se existir ainda soma 1
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {} )//vai retornar objeto{}

console.log(nomesPO)