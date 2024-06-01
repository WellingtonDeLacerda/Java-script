let n1 = window.document.querySelector('input#n1')
let seltab = window.document.querySelector('select#seltab')
let res = window.document.querySelector('div#res')
let num = []

function numero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function lista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}
function adicionar() {
    if(numero(n1.value) && !lista(n1.value,num)) {
    
        num.push(Number(n1.value))
        let opc = document.createElement('option')
        opc.innerHTML += n1.value
        seltab.appendChild(opc)
        res.innerHTML = ''
        
    }else {
        window.alert('Valor invalido ou ja inserido na lista')
    }
    n1.value = ''
    n1.focus()
}
function finalizar() {
    if(num.length == 0) {
        window.alert('adicione valores antes de finalizar')
    }else {
        let tot = num.length
        let maior = num[0]
        let menor = num[0]
        let soma = 0
        let media = 0
        for(let pos in num){
            soma += num[pos]
            if(num[pos] > maior){
                maior = num[pos]
            }
            if(num[pos] < menor){
                menor = num[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>temos ao todo ${tot} números cadastrados</p>`
        res.innerHTML += `<p>o maior número foi ${maior}</p>`
        res.innerHTML += `<p>o menor número foi ${menor}</p>`
        res.innerHTML += `<p>a soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>a média dos valores é ${media}</p>`
    }
}