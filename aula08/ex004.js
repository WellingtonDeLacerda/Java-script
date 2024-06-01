var item = Number.parseInt(window.prompt('insira um número PAR ou IMPAR'))
if(item % 2 === 0){
    document.write(`o número ${item} é PAR <br>`)
}if(item % 2 === 1){
    document.write(`o número ${item} é IMPAR <br>`)
}


/*TODOS OS NÚMEROS PARES RESTO DA DIVISÃO POR 2 É IGUAL A 0*/

/*JA TODOS OS NÚMEROS IMPARES RESTO DA DIVISÃO POR 2 É IGUAL A 1*/

var num = Number.parseInt(window.prompt('digite sua idade'))
if(num === NaN){
    document.write(`você não digitou sua idade `)
    
}

if(num >= 15 && num <= 18){
    document.write(`sua idade é de ${num} anos, esta entre 15 e 18. pode passar.<br>`)
}if(num <= 14 || num >= 19){
    document.write(`sua idade é de ${num} anos, não está entre 15 e 18. não pode passar.<br>`)
}

if(num  === 6){
    window.alert(`você digitou ${num}`)
}
if(num >= 0 && num <= 5 || num >= 80 && num <= 100){
    document.write(`ou você é criança ou é velho`)
}