let n1 = Number(prompt("Digite o um número: "));
let n2 = Number(prompt("Digite outro número: "));
let op ;
do {
    let msg = "Escolha uma operação: \n";
    msg = msg + "1 - Somar \n";
    msg = msg + "2 - Subtrair \n";
    msg = msg + "3 - Multiplicar \n";
    msg = msg + "4 - Dividir \n";
    msg = msg + "5 - Sair \n";
    op = (prompt(msg));
    switch (op) {
        case "1": alert(` ${n1 + n2} = ${n1 + n2}`); break;
        case "2": alert(` ${n1 - n2} = ${n1 - n2}`); break;
        case "3": alert(` ${n1 * n2} = ${n1 * n2}`); break;
        case "4": alert(` ${n1 / n2} = ${n1 / n2}`); break;
        case "5": alert("até logo!"); break;
        default:  alert("Operação inválida!");
    }
}while(op != "5") 