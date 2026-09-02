let num = Number(prompt("Digite um número: "));

if (num % 2 == 0) {
    alert(`O número ${num} é impar.`);
}else if (num == 0) {
    alert(`O número ${num} é zero.`);
}else{
    alert(`O número ${num} é par.`);
}