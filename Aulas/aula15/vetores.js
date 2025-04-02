let valores = [9,7,4,8,5,1,0]

console.log(valores)
valores.sort()

for(let num = 0;num < valores.length;num++){
    console.log(`em ${num}° lugar temos o ${valores[num]}`)
}

console.log("____")

for(let pos in valores){
    console.log(`na posição ${pos} temos o ${valores[pos]}`)
}

console.log(`temos um total de ${valores.length} valores`)