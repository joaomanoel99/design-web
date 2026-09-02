let nasc = prompt("Digite o ano do seu nascimento: ");
nasc = parseInt(nasc);

let viva = confirm("Você está vivo? , clique em ok.");

if (viva) {
    alert(`´Você tem ${2026 - nasc} anos.`);    
} else {
    alert("você morreu");
}