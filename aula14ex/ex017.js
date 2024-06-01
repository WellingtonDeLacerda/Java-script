function clicar () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('[ERRO] revise seus dados e tente novamente')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ' '
        var c = 1
        while (c <= 10) {
            var item = document.createElement('option')
            item.innerText = `${n} × ${c} = ${n*c}`
            item.value = `tab${c}`
            c++
            tab.appendChild(item)
        }
    }
}