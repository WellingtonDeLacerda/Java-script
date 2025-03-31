function gerar(){
    let txt = document.getElementById('txt')
    if (txt.value.length == 0){
        window.alert("digite um numero para gerar tabuada")
    }else{
        
        let numero = Number(txt.value)
        let res = document.getElementById("sel")
        let c = 0
        res.innerText = " "
        while (c <= 10){
            let op = document.createElement("option")
            op.innerHTML += `${numero} × ${c} = ${numero * c} `
            op.value = `tab${c}`
            res.appendChild(op)
            c++
        }
    }
}