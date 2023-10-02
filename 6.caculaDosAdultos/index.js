
function solucao(lista) {
    // seu codigo aqui
   let idade = Infinity
   let menorMaiorIdade = false

   for(let i = 0; i < lista.length; i++){
    if(lista[i] >= 18 ){
        menorMaiorIdade = true
        if(lista[i] < idade){
            idade = lista[i]
        }
    }
   }
   if(menorMaiorIdade){
    return idade

   }else{
    return "CRESCA E APARECA"
   }
}

  
  
  
  function processData(input) {
      //Enter your code here
        const strings = input.split(" ");
      const numeros = [];
      for(let i = 0; i < strings.length; i++) {
            numeros.push(parseInt(strings[i] ,10));
        }
      solucao(numeros);
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
  