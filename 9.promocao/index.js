function solucao(precos) {
    //seu codigo aqui
    let somaTotal = 0
    let valorCarrinho = 0
    let valorAPagar = 0
    let itemMaisBarato = Infinity
    for (let valor of precos) {
        valorCarrinho += valor
        if(valor < itemMaisBarato){
            itemMaisBarato = valor
        }
    }
    if(precos.length > 2){
        valorAPagar = valorCarrinho - (itemMaisBarato * 0.5) 
        
    }else{
        valorAPagar = valorCarrinho
    }
    console.log(valorAPagar)
  }
  
  function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
    solucao(lista);
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