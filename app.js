var nasc = 1991;
let nome = "João";
const viva = true;

function calcIdade(ano) {
    let idade = ano - nasc;
    alert(`Dentro de Função - Idade: ${idade}`);
    return idade;
}       

calcIdade();
/* 
alert(`Fora da Função - Idade: ${idade}`);
Erro pois a variavel let nao existe fora do escopo dela
*/
alert(`Fora da Função - Idade: ${calcIdade(2027)}`);

