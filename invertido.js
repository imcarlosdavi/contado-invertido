//Array contado e invertido

let lista = []
let invertida = []
let quantidade = parseInt(prompt("Coloque a quantidade de números que deseja inserir: "))

for(i = 0; i < quantidade; i++){
    let sequencia = parseInt(prompt("Coloque uma contagem "+ (i + 1) ))
    lista[i] = sequencia
}

document.body.innerHTML+=`Array contado: ${lista}`;


let contador = quantidade - 1
for(i = 0; i < quantidade; i++){
    invertida[i] = lista[contador]
    contador--
}

document.body.innerHTML+=`<br>Array invertido: ${invertida}`