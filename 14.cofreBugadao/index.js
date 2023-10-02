function verificarCofre(senha, digitado) {
    let digitos = 0;  
    for (let letra of digitado) {
        if (digitos < senha.length && letra === senha[digitos]) {
            digitos++;  
        }
        if (digitos === senha.length) {
            return "SIM";  
        }
    }
    return "NAO";
}

function processData(input) {
    const lines = input.trim().split('\n');
    const senha = lines[0];
    const digitado = lines[1];
    
    const resultado = verificarCofre(senha, digitado);
    console.log(resultado);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});