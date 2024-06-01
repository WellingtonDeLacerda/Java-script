function clicar () {
    var ini = window.document.querySelector('input#ini')
    var fim = window.document.querySelector('input#fim')
    var pas = window.document.querySelector('input#pas')
    var res = window.document.querySelector('div#res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] revise seus dados e tente novamente')
    }else if(ini.value == 0 && fim.value == 0 && pas.value == 0){
        alert('[ERRO] impossivel de contar')
        
    }else if(pas.value == 0){
       
        pas.value = 1
        alert('não tem como o passo ser 0')
        var i = Number.parseInt(ini.value)
        var f = Number.parseInt(fim.value)
        var p = Number.parseInt(pas.value)
        if(i <= f || i == f) {
            while (i <= f) {
                i += p
            
            res.innerHTML += `<span style='border:1px solid black;border-radius:50%;padding:1px;margin-right:5px;background-color:#8098ff;color:white;'>${i-p}</span> `
        }
        }else if(i >= f){
            while (i >= f || i == f) {
                i -= p 
            res.innerHTML += `<span style='border:1px solid black;border-radius:50%;padding:1px;margin-right:5px;background-color:#8098ff;color:white;'>${i+p}</span> `
            }
        }
    }else{
        var i = Number.parseInt(ini.value)
        var f = Number.parseInt(fim.value)
        var p = Number.parseInt(pas.value)
        if(i <= f || i == f) {
            while (i <= f) {
                i += p
            
            res.innerHTML += `<span style='border:1px solid black;border-radius:50%;padding:1px;margin-right:5px;background-color:#8098ff;color:white;'>${i-p}</span> `
           
        }
        }else if(i >= f){
            while (i >= f || i == f) {
                i -= p 
            res.innerHTML += `<span style='border:1px solid black;border-radius:50%;padding:1px;margin-right:5px;background-color:#8098ff;color:white;'>${ip}</span> `
            }
        }
       
    }
}