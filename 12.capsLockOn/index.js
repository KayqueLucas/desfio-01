function processData(input) {
    if (input[0] === input[0].toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
        return input[0].toUpperCase() + input.slice(1).toLowerCase();
    }
    return input;
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    const correctedInput = processData(_input);
    console.log(correctedInput); 
});