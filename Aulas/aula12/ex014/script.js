function verificar () {
    let txtano = document.querySelector("input#txtano")
    let data = new Date()
    let ano = data.getFullYear()
    if (txtano.value.length == 0 || Number(txtano.value) > ano){
        alert("![ERRO]! VERIFIQUE NOVAMENTE SEUS DADOS E PREENCHA CORRETAMENTE!!")
    }
    else {
        let sex = document.getElementsByName("radsex")
        let res = document.querySelector("div#res")
        let idade = ano - Number(txtano.value)
        res.style.textAlign = "center"
        res.style.padding = "10px"
        
        let genero = ''
        let img = document.createElement("img")
        img.setAttribute("id","foto")
        img.style.padding = "10px"
        if (sex[0].checked){
            genero = `masculino` 
            if (idade >= 0 && idade <= 10){
                // criança 
                img.src = "img/Homem_criança.png"
                
                res.innerHTML = `garoto criança com ${idade} anos`
            }
            else if(idade <= 24){
                // jovem
                img.src = "img/Homem_jovem.png"
                res.innerHTML = `rapaz jovem com ${idade} anos`
            }
            else if(idade <= 50){
                // adulto
                img.src = "img/Homem_adulto.png"
                res.innerHTML = `homem adulto com ${idade} anos`
            }else{
                // idoso
                img.src = "img/Homem_idoso.png"
                res.innerHTML = `senhor idoso com ${idade} anos`
            }
        }else if(sex[1].checked){
            genero = `feminino`
            if (idade >= 0 && idade <= 10){
                // criança
                img.src = "img/Mulher_criança.png"
                res.innerHTML = `garota criança com ${idade} anos`
            }
            else if(idade <= 24){
                // jovem
                img.src = "img/Mulher_jovem.png"
                res.innerHTML = `moça jovem com ${idade} anos`
            }
            else if(idade <= 50){
                // adulto
                img.src = "img/Mulher_adulta.png"
                res.innerHTML = `mulher adulta com ${idade} anos`
            }else{
                // idoso
                img.src = "img/Mulher_idosa.png"
                res.innerHTML = `senhora idosa com ${idade} anos`
            }
        }
        res.appendChild(img)
    }
}