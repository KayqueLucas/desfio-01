function solucao(carta) {
    //seu codigo aqui
    if(carta === 'Q'){
        return 'J'
    }else if (carta === 'J'){
        return 'K'
    }else if(carta === 'K'){
        return 'A'
    }else if(carta === 'A'){
        return '2'
    }else if(carta === '2'){
        return '3'
    }else{
        return 'Q'
    }
}

function processData(input) {
    solucao(input);
    console.log(solucao(input))
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