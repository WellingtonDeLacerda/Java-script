var res = document.querySelector("div#caixa")
var n1 = document.querySelector("input#n1")


function enviar (){
    var num1 = Number(n1.value)
    res.innerHTML = `Voce está dirigindo a <strong>${num1}Km/h</strong>`
    if (num1 > 60) {
       res.innerHTML += `<p>Voce passou dos 60KM/H <strong>MULTADO</strong></p>`
    }
    if(num1 == " "){
        alert("digite uma velocidade em KM")
        res.innerHTML = " "
    }
}
var saida = document.querySelector("p#saida")
var botao = document.getElementsByName("botao")[0]
function enviar2(){
    var pais = document.querySelector("input#txt")
    
    //var pais = pais.toReplaceAll(' ',"")
    var pais = pais.value
    if (pais.toUpperCase().replaceAll(" ", "") == "BRASIL" || pais.toUpperCase().replaceAll(" ", "") == "BR"){
        saida.innerHTML = `Voce é do <strong>${pais}</strong>, logo é Brasileiro.`
    }else{
        saida.innerHTML = `Voce é do(a) <strong>${pais}</strong>, logo é estrangeiro`
    }
    
}

    
    

