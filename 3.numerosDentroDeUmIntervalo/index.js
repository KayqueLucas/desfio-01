function solucao(numero, limiteInferior, limiteSuperior) {

    if(numero >= limiteInferior && numero <= limiteSuperior){
        return 'PERTENCE'
    }
    else{
        return 'NAO PERTENCE'
    }
}

function processData(input) {
const lista = input.split(" ");
   const resultado = solucao(parseInt(lista[0], 10), parseInt(lista[1], 10), parseInt(lista[2], 10));
    console.log(resultado)
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