var salario, novoSalario

salario = Number(prompt("Digite o seu salário"));
novoSalario = prompt("Digite seu plano de salário: a, b ou c");

switch (novoSalario) {
    case 'a': console.log("Seu novo salário é R$ " + (salario * 1.10));
        break;
    case 'b': console.log("Seu novo salário é R$ " + (salario * 1.20));
        break;
    case 'c': console.log("Seu novo salário é R$ " + (salario * 1.30));
        break;
    default:
        alert("Informacões digitadas incorretamente.");

}