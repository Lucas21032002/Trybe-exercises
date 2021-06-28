let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
}


//Exercicio 3//
for(let key in info){
 console.log(key);
}

//Exercicio 4//
for(let key in info){
    console.log(info[key]);
}

// PARTE 2 FUNCOES//
//Exercicio 1//
function verificaPalindrome(palavra){
    let reverse = palavra.split('').reverse().join('');
    if(reverse === palavra){
        console.log('A palavra ' + palavra + " é um palindromo.");
    }else{
        console.log('A palavra ' + palavra + ' não é um palindromo.');
    }
}

verificaPalindrome('ovo');


//Exercicio 2//

function indiceDoMaior(numeros){
    let indiceMaior = 0;
    for(let indice in numeros){
        if(numeros[indiceMaior] < numeros[indice]){
            indiceMaior = indice
        }
    }
    return indiceMaior;
}

console.log(indiceDoMaior([2, 4, 5, 7, 10]));


//Exercicio 3//

function indiceDoMenor(numeros){
    let indiceMenor = 0;
    for(let indice in numeros){
        if(numeros[indiceMenor] > numeros[indice]){
            indiceMenor = indice
        }
    }
    return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 5, 7, 10]));

