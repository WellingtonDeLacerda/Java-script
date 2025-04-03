function carregar(){
    var corpo = document.body
    var msg = document.querySelector("div#msg")
    var img = document.querySelector("img#imagem")
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `São extamente ${hora} horas Bom dia`
        img.src = "img/Manhã.png"
        corpo.style.backgroundColor = "#ff9340"
        // bom dia 
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML = `São extamente ${hora} horas Boa tarde`
        img.src = "img/Tarde.png"
        corpo.style.backgroundColor = "#2bffff"
        document.querySelector("header").style.color = "black"
        document.querySelector("footer").style.color = "black"
        // boa tarde
    }else {
        msg.innerHTML = `São extamente ${hora} horas Boa noite`
        img.src = "img/Noite.png"
        corpo.style.backgroundColor = "#2f3c8c"
        // boa noite
    }
}