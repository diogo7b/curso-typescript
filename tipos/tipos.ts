//string
let nome = 'Diogo'
console.log(nome)

// number
let idade: number
idade = 18
console.log(idade)
// idade = '2'  dessa forma vai acusar erro
console.log(typeof idade)


//array
/*se eu mudar o tipo do valor do array, posso mudar o tipo do array para any
    ex: let hobbies: any[] = [<values>]
*/
let hobbies: any[] = ['cozinhar', 'correr']

console.log(hobbies)
console.log(typeof hobbies)
hobbies = [100, 200, 300]
console.log(hobbies[2])
/** esse consceito não se aplica no exemplo abaixo
 * hobbies = 300
 * Dessa forma está sendo quebrada a estrutura da declaração da variavel
 */

// tuplas
/**para definir tuplas é necessario especificar os tipos dos valores no array
 * ex: let array: [<tipo>, <tipo>] = [<value>, <value>]
 */

let endereco: [string, number] = ['Rua logo ali', 99]
console.log(endereco)
// endereco = ['Rua logo ali', 99, 'PERTO DE BIL DA AGUA'] /*acusará erro*/


// enum
/**
 * Posso selecionar itens num objeto que represetarão valores chaves numa lista.
 * Esses valores podem ter as chaves modificadas.
 */

enum Cor {
    Cinza,
    Azul,
    Preto = 200,
    Amarelo
}

const cor1: Cor = Cor.Azul
const cor2: Cor = Cor.Preto
const cor3: Cor = Cor.Amarelo
console.log(cor1)
console.log(cor2)
console.log(cor3)

let carro: any = "BMW" //declaração de variável
console.log(carro)
carro = { marca: "Bmw", modelo: "m3" } //atribuição de valor
console.log(carro)