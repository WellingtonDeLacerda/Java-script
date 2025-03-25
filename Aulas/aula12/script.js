/* var idade = 80
if (idade < 16){
    console.log("Não vota")
}else if(idade < 18 || idade >= 67){
    console.log("voto opcional")
}else{
    console.log("voto obrigatório")
} */
/*
var tempo = new Date()
var horas = tempo.getHours()
if (horas < 12){
    console.log(`bom dia ja são ${horas} horas`)
}else if(horas < 18){
    console.log(`boa tarde ja são ${horas} horas `)
}else {
    console.log(`boa noite ja são ${horas} horas`)
}
*/

var dia = new Date()
var diasen = dia.getDay()
var cdata = document.querySelector("h2#Cdata")

switch(diasen){
    case 0:
        console.log("Domingo")
        cdata.innerText = "Domingo"
        break
    case 1:
        console.log("Segunda")
        cdata.innerText = "Segunda"
        break
    case 2:
        console.log("Terça")
        cdata.innerText = "Terça"
        break
    case 3:
        console.log("quarta")
        cdata.innerText = "Quarta"
        break
    case 4:
        console.log("quinta")
        cdata.innerText = "Quinta"
        break
    case 5:
        console.log('sexta')
        cdata.innerText = "Sexta"
        break
    case 6:
        console.log("sabado")
        cdata.innerText = "Sabado"
        break
    default:
        console.log("[ERRO]")
        cdata.innerText = "[ERRO]"
        break
}

var saida = document.querySelector("p#p")
var idade = document.querySelector("input#inum")

function enviar(){
    if(idade.value == " " || idade.value <= 0){
        alert("digite uma idade")
        saida.innerHTML = "ERRO..."
    }
   else if (idade.value < 16){
        saida.innerHTML = `Com <strong>${idade.value} anos</strong>, não vota`
    }else if(idade.value < 18 || idade.value > 67 && idade.value <= 150){
        saida.innerHTML = `Com <strong>${idade.value} anos</strong>, voto opcional`
    }else if(idade.value >= 18 && idade.value <= 67){
        saida.innerHTML = `Com <strong>${idade.value} anos</strong>, voto obrigatório`
    }else if(idade.value > 150){
        saida.innerHTML = `<strong>Digite uma idade abaixo de 150 anos! sua mumia</strong>`
    }
    
}
var agora = new Date()
var tempo = agora.getHours()
var caixa = document.querySelector("div#caixa")
var clima = " "
function ver(){
    caixa.style.display = "block"
    if (tempo < 12){
        clima = "manhã"
    }else if (tempo < 18){
        clima = "tarde"
    }else{
        clima = "noite"
    }
    caixa.innerHTML = `<h2>São exatamente ${tempo} horas da ${clima}</h2>`

}

