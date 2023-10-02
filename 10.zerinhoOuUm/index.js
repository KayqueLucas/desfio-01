function solucao(jogadores) {
    //seu codigo aqui
       const jogadas = jogadores.map(jogador => jogador.jogada)
      const jogadaUnica = jogadas.find(jogada => jogadas.indexOf(jogada) === jogadas.lastIndexOf(jogada))
  
      if (jogadaUnica !== undefined) {
          const jogadorVencedor = jogadas.indexOf(jogadaUnica)
          console.log(jogadores[jogadorVencedor].nome)        
      }else{
          console.log("Ninguem Ganhou")
      }
  }
  
  function processData(input) {
      solucao(JSON.parse(input));
  
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