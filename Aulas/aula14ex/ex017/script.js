function contar(){
    let txt1 = document.getElementById("txt1")
    let txt2 = document.getElementById("txt2")
    let passo = document.getElementById("passo")
    let res = document.getElementById("res")
    if (txt1.value.length == 0 || txt2.value.length == 0 || passo.value.length == 0){
       // alert("[erro] complete as caixas vazia")
       res.innerHTML = "impossivel contar, Complete as caixas"
    }else{
        res.innerHTML = "contagem: <br>"
        let i = Number(txt1.value)
        let f = Number(txt2.value)
        let p = Number(passo.value)
        if (p == 0){
            alert('impossivel contar de 0 em 0, complementando 1')
            p = 1
            passo.value = 1
        }
        if (i < f){
            // numeros crescentes
            for(let c = i;c <= f;c += p){
                res.innerHTML += ` ${c}\u{1F449} `
            }
        }else{
            // numeros decrescentes
            for(let c = i;c >= f;c -= p){
                res.innerHTML += ` ${c}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}