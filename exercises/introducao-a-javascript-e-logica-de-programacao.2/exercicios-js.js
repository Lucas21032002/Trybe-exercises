//Exercicio 1,2,3//
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let total = 0;

for(let contador = 0; contador < numbers.length; contador += 1){
    total = total + numbers[contador];
    media = total / numbers.length;

    
}
    if(media < 20){
    console.log("Valor menor que 20");
    }else{
    console.log("valor maior que 20");
}

//Exercicio 5//
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > higherNumber){
        higherNumber = numbers[index];
    }
}

console.log(higherNumber);


//Exercicio 6//
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0){
        result += 1
    }
    
}
    if(result === 0){
    console.log("nenhum numero impar encontrado");
    }else{
    console.log("o array possui " + result + " numeros impares");
}
// Exercicio 8//
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < smallestNumber ){
        smallestNumber = numbers[index]
    }
}

console.log(smallestNumber);


