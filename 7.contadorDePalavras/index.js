

function solucao(texto) {
    // Seu codigo aqui
     let contarPalavras = texto.trim().split(" ")
    let contador = 0;
    for (const contadorDePalavras of contarPalavras) {
        if(contadorDePalavras){
            contador++
        }
    }
    console.log(contador);
}

function processData(input) {
	solucao(input)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});