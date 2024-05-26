var idade = 18
if(idade < 16){
    console.log('não vota')
}else if (idade < 18 || idade >= 75) {
    console.log('voto opcional')
}else{
    console.log('voto obrigatório')
}