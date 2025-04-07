let num = document.querySelector('input#fnum')
let sele = document.querySelector('select#sele')
let dados = document.querySelector('div#dados')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function isLista(n,l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !isLista(num.value, valores)){
        let n1 = Number(num.value)
        valores.push(n1)
        let op = document.createElement('option')
        op.innerText += `valor ${n1} foi adicionado`
        sele.appendChild(op)
        
        dados.innerHTML = ""
    }else{
        alert('valor ivalido ou ja encontrado na lista')
        
    }
    num.value = ""
    num.focus()
}
function verificar() {
    if (valores.length == 0){
        alert('preencha os dados primeiro')
    }else{
    let total = valores.length
    let soma = 0
    for(let pos in valores){
        soma += valores[pos]
    }
    let maior = Math.max(...valores)
    let menor = Math.min(...valores)
    let media = soma / valores.length 
    dados.innerHTML += `ao todo temos ${total} numeros <br>`
    dados.innerHTML += `o maior número digitado é ${maior} <br>`
    dados.innerHTML += `o menor número digitado é o ${menor} <br>`
    dados.innerHTML += `a soma de todos os números são de ${soma} <br>`
    dados.innerHTML += `a média dos valores são de ${media} <br>`
    }
    
}