let dia = prompt("Digite o dia da semana: ");
dia = Number(dia);

if (dia <=0 || dia > 8) {
    alert("Dia inválido.");
}else if (dia == 1) {
    alert("Hoje é domingo.");
}else if (dia == 2) {
    alert("Hoje é segunda-feira.");
}else if (dia == 3) {
    alert("Hoje é terça-feira.");
}else if (dia == 4) {
    alert("Hoje é quarta-feira.");
}else if (dia == 5) {
    alert("Hoje é quinta-feira.");
}else if (dia == 6) {
    alert("Hoje é sexta-feira.");
}else if (dia == 7) {
    alert("Hoje é sábado.");
}else{
    alert("Hoje é quarta-feira.");
}
