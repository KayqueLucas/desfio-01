// Cada jogador escolhe um número X.
// A soma de todos esses números é calculada para obter o valor S.
// Começando com o capitão na posição 1, você conta em voz alta de 1 até S, apontando para os jogadores consecutivamente.
// Quando você chegar a S, o jogador que estiver sendo apontado é o goleiro.



function solucao(numeros) {
    // seu codigo aqui
    let qtdJogadores = numeros.length
    let S = 0
    for (let i = 0; i < qtdJogadores; i++) {;
         S += numeros[i]
      
    } 
    let posicaoGoleiro = (S % qtdJogadores === 0) ? qtdJogadores : S % qtdJogadores
    return posicaoGoleiro
}

function processData(input) {
   const strings = input.split(" ");
   const numeros = [];
   for(let i = 0; i < strings.length; i++) {
         numeros.push(parseInt(strings[i] ,10))
     }
   console.log(solucao(numeros))
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