/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMenor = numbers[0];
let newArray = [];

for(let index = 0; index < numbers.length +1; index+=1){
    if(numeroMenor > numbers[index]){
        numeroMenor = numbers[index]
    }
    if(index === numbers.length){
        index = 0;
        numbers.splice(numbers.indexOf(numeroMenor), 1);
        newArray.push(numeroMenor)
        numeroMenor = numbers[0]
    }
}console.log(newArray);*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
let index;
let numero;

for(index = 1; index < numbers.length; index+=1){
    numero = numbers[index - 1] * numbers[index]
    newArray.push(numero)
}
if(numbers.indexOf(numbers[index]) === -1){
    numero = numbers[index - 1] * 2
    newArray.push(numero)
}console.log(newArray);




