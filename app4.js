let vezes = Number(prompt("Digite o numero de vezes: "));
for (let i = 1; i <= vezes; i++) {
    if (vezes > 100) {
        alert("Valor invalido, digite um número de 1 a 100!");
        break;
    }
    alert(`Contei ${i} vez`);
    if (i%2!=0) { // ´é ímpar?
        continue; // se for ímpar, volta para o início
    }
    alert(`${i} é par!`);
}