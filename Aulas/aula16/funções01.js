function somar(n1=0,n2=0) {
    return n1 + n2
}
console.log(somar(7,7))
function parimp(n) {
    if (n % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

function msg() {
    console.log("Olá Mundo!")
}
console.log(parimp(11))
console.log(parimp(8))
msg()