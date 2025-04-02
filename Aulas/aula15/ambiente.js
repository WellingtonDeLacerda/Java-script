let num = []
num.push(9,8,9,6,)
num[4] = 77
num.sort((a,b) => a - b)
console.log(`${num}`)
let pos = num.indexOf(9)
if (pos == -1){
    console.log("valor não encontrado")
}else{
    console.log(`o valor 9 esta na posição ${pos}`)
}