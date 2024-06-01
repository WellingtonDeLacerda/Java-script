let num = [4,7,2,9,8]
num[5] = 7
num.push(1)
num.sort()
num.push(3)
console.log(num)
console.log(`o código tem ${num.length} números`)
console.log(`pegando o ${num[6]}`)

for (i = 0; i < num.length; i++) {
    console.log(num[i])
}
