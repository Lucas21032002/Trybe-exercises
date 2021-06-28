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

function verificaPalindrome(palavra){
    let reverse = palavra.split('').reverse().join('');
    if(reverse === palavra){
        console.log('A palavra ' + palavra + " é um palindromo.");
    }else{
        console.log('A palavra ' + palavra + ' não é um palindromo.');
    }
}

verificaPalindrome('ovo');
