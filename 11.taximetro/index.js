function solucao(min, km) {
    const precoBasePorMinuto = 50;
    const precoBasePorKm = 70;
    const precoPorKm = 50;
    const precoPorMinuto = 30;
    const kmLimiteSemDesconto = 10;
    const minLimiteSemDesconto = 20;

    let valor = 0;

    if (km > kmLimiteSemDesconto) {
        valor += kmLimiteSemDesconto * precoBasePorKm;  
        valor += (km - kmLimiteSemDesconto) * precoPorKm;  
    } else {
        valor += km * precoBasePorKm;
    }

    if (min > minLimiteSemDesconto) {
        valor += minLimiteSemDesconto * precoBasePorMinuto;  
        valor += (min - minLimiteSemDesconto) * precoPorMinuto;  
    } else {
        valor += min * precoBasePorMinuto;
    }

    valor = Math.floor(valor);

    console.log(valor);
}

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
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