"use strict";
//string
let nome = 'Diogo';
console.log(nome);
// number
let idade;
idade = 18;
console.log(idade);
// idade = '2'  dessa forma vai acusar erro
console.log(typeof idade);
//array
/*se eu mudar o tipo do valor do array, posso mudar o tipo do array para any
    ex: let hobbies: any[] = [<values>]
*/
let hobbies = ['cozinhar', 'correr'];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies[2]);
/** esse consceito não se aplica no exemplo abaixo
 * hobbies = 300
 * Dessa forma está sendo quebrada a estrutura da declaração da variavel
 */
// tuplas
/**para definir tuplas é necessario especificar os tipos dos valores no array
 * ex: let array: [<tipo>, <tipo>] = [<value>, <value>]
 */
let endereco = ['Rua logo ali', 99];
console.log(endereco);
// endereco = ['Rua logo ali', 99, 'PERTO DE BIL DA AGUA'] /*acusará erro*/
// enum
/**
 * Posso selecionar itens num objeto que represetarão valores chaves numa lista.
 * Esses valores podem ter as chaves modificadas.
 */
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Azul"] = 1] = "Azul";
    Cor[Cor["Preto"] = 200] = "Preto";
    Cor[Cor["Amarelo"] = 201] = "Amarelo";
})(Cor || (Cor = {}));
const cor1 = Cor.Azul;
const cor2 = Cor.Preto;
const cor3 = Cor.Amarelo;
console.log(cor1);
console.log(cor2);
console.log(cor3);
