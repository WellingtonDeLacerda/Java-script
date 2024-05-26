function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] verifique os seus dados e tente novamente')
    }else{
        var fsex1 = document.getElementById('mas')
        var fsex2 = document.getElementById('fem')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex1.checked) {
            genero = 'homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src','img/luffy-criança.png')
            }else if(idade < 21){
                img.setAttribute('src','img/luffy-jovem.png')
            }else if(idade < 51){
                img.setAttribute('src','img/luffy-adulto.png')
            }else{
                img.setAttribute('src','img/luffy-velho.png')
            }
        }else if (fsex2.checked) {
            genero = 'mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src','img/nami-criança.png')
            }else if(idade < 21){
                img.setAttribute('src','img/nami-jovem.png')
            }else if(idade < 51){
                img.setAttribute('src','img/nami-adulta.png')
            }else{
                img.setAttribute('src','img/nami-velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img).style.width = '40%'
        
        }
}