function enviar(){
    let string = document.querySelector("input#txt")
    let aqui = document.getElementById("here")
    let c = 1
    if (string.value == ""){
        alert("erro")
    }else{
        while (c <= 10){
        aqui.innerHTML += `Numero ${c}: ${string.value} <br>`
        c++
    }
    aqui.innerHTML += `<h2>Fim do programa</h2>`
    }
    
}
function verificar(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    let resultado = document.querySelector("div#res")
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    let s = 0
    do{
        resultado.innerHTML += `<strong>${n1} × ${s} = ${s * n1} </strong><br>`
        s++
    }while(s <= n2)
    resultado.innerHTML += "<h2>tabuda completa</h2>"
    resultado.style.textAlign = "center"
    resultado.style.background = "#80ffea91"
    resultado.style.padding = "20px"
    resultado.style.margin = "auto"
    resultado.style.minWidth = "250px"
    resultado.style.maxWidth = "500px"
}