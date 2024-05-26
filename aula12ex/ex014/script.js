function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementsByTagName('img')[0]
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `são exatamente ${hora} horas`
    if (hora >= 00 && hora <= 12) {
        img.src = 'img/p1.png'
     window.document.body.style.backgroundColor = '#ffbd6a9c'
        
    }else if (hora > 12 && hora < 18){
        img.src = 'img/p2.png'
        window.document.body.style.backgroundColor = '#9d7b34ca'
    } else{
        img.src = 'img/p3.png'
        window.document.body.style.backgroundColor = '#493918dc'
    }
}