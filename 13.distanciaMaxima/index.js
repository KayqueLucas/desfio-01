function distancia(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function processData(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const funcionarios = [];

    for (let i = 1; i <= n; i++) {
        const [x, y] = lines[i].split(' ').map(Number);
        funcionarios.push([x, y]);
    }

    let distanciaMax = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const dist = distancia(funcionarios[i][0], funcionarios[i][1], funcionarios[j][0], funcionarios[j][1]);
            distanciaMax = Math.max(distanciaMax, dist);
        }
    }

    console.log(distanciaMax.toFixed(12)); 
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