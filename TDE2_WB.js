// 1 -> Escreva na tela todos os números pares de 0 a 100 

function pares() {
    let array = [];
    var posicao = 0;
    
    for (let x=0; x<100; x++) {
        if (x % 2 == 0) {
            array[posicao] = x;
            posicao++;
        }
    }
    return array;
}

console.log("Numeros pares de 0 e 100: ["+ pares() +"].\n");

// 2 -> Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números
// ex: [2, 4, 6, 8] -> Soma: 2 + 4 + 6 + 8 = 20

function somar() {
    let array = [2, 4, 6, 8];
    var valSomados = 0;

    for (let x=0; x<array.length; x++) {
        valSomados = ( valSomados + array[x] );
    }
    return valSomados;
}

console.log("A soma dos valores no array resulta em: " + somar()+ ".\n");

 

// 3 -> Crie uma função que remova todos os números negativos de um array
// ex: [-1, 1, -2, 2, -3, 3] -> [1, 2, 3]

function remover() {
    let array = [-1, 1, -2, 2, -3, 3];
    let arrayRemovido = [];
    var posicao = 0;

    for (let x=0; x<array.length; x++) {
        if (array[x] >= 0) {
            arrayRemovido[posicao] = array[x];
            posicao ++;
        }
    }
    return arrayRemovido;
}

console.log("Array sem os valores negativos: ["+remover()+"].\n");

// 4 -> Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2
// ex: [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]

function multiplicar() {
    let array = [1, 2, 3, 4, 5];
    let arrayMultiplicado = [];
    
    for (let x=0; x<array.length; x++) {
        arrayMultiplicado[x] = (array[x] * 2);
    }
    
    return arrayMultiplicado;
}

console.log("Valores do segundo array: ["+ multiplicar()+"].\n");
 

// [[Bonus]] -> Crie uma função que soma dois numeros e devolve uma Promise. Caso a soma seja Par o valor deve ser resolvido 
// e caso seja Impar deve ser rejeitado.
// ex:
// 
//  soma(1, 2).then(res => {
// 
//      console.log("Valor é par")
// 
//  }).catch(err => {
// 
//      console.log("Valor é impar")
// 
//  })
// 
// Entregar link para um repositorio no github