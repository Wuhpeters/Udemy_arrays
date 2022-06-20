//numeros 1, 3unicos

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]//valores
//const numerosUnicos = [1, 3, 4, 5, 8, 9]

const numerosUnicos = numeros.reduce(function(natual, nproxim){
    if(natual.indexOf(nproxim) < 0){//indexOf -1, não encontrou valor igual, entao
        natual.push(nproxim)
    }
    return natual
}, [] )//essa array é natual(acumulador)
    
console.log(numerosUnicos)
