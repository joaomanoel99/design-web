var nasc = 2010;
let nome = "João";
const viva = true;

function calcIdade(ano = 2026) {
    let idade = ano - nasc;
    
    if (idade < 18){
        menor = true;
    }else{
        menor = false;
    }  
    alert(`${nome} é menor de idade? ${menor} 
        \nIdade: ${idade} \nPode beber: ${podebeber}`);
    return idade;
}       

calcIdade();
alert(`Pode beber: ${podebeber}`);
/* 
alert(`Fora da Função - Idade: ${idade}`);
Erro pois a variavel let nao existe fora do escopo dela
*/
alert(`Fora da Função - Idade: ${calcIdade(2027)}`);

