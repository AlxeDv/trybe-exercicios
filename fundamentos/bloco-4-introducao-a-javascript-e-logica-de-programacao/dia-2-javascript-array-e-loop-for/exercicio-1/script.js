let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// console.log(numbers) Exercício 1

//exercicio 2
/*let soma = 0
for (let contador = 0; contador < numbers.length; contador+=1){
     soma = soma + numbers[contador]
}
console.log(soma)*/

//exercicio 3
/*let soma = 0;
let media;
for (let contador = 0; contador < numbers.length; contador+=1){
     soma = soma + numbers[contador];
     media = soma / numbers.length
}
console.log(media)*/

//exercicio 4
/*let soma = 0;
let media;
for (let contador = 0; contador < numbers.length; contador+=1){
     soma = soma + numbers[contador];
     media = soma / numbers.length
}
if(media > 20){
    console.log("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20");
}*/

//exercicio 5
/*let numeroMaior = 0;
for (let contador = 0; contador < numbers.length; contador+=1){
    if (numeroMaior < numbers[contador]){
        numeroMaior = numbers[contador]
    }
}
console.log("O maior número deste array é:", numeroMaior)*/

//exercicio 6
/*let numeroImpar = 0;
for (contador = 0; contador < numbers.length; contador+=1){
    if(numbers[contador] % 2 != 0){
        numeroImpar = numeroImpar + 1;
    }
}
console.log("A quantidade de numeros Impares é:", numeroImpar)*/

//exercicio 7
/*let numeroMenor = numbers[0];
for (let contador = 0; contador < numbers.length; contador+=1){
    if (numeroMenor > numbers[contador]){
        numeroMenor = numbers[contador]
    }
}
console.log("O menor numero é:", numeroMenor)*/

//exercicio 8
/*let meusNumeros = [];
for (let contador = 1; contador < 26; contador+=1){
    meusNumeros.push(contador)
}
console.log(meusNumeros)*/

//exercicio 9
let meusNumeros = [];
let contador;
for (contador = 0; contador < 26; contador+=1){
    meusNumeros.push(contador/2);
    console.log(meusNumeros); 
}

