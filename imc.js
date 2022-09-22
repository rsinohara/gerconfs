const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


readline.question("Digite o seu peso em kg: ", function(peso){
  readline.question("Digite o sua altura em metros: ", function(altura){
    console.log(`Com peso ${peso} e altura ${altura}, o IMC é ${peso/(altura * altura)}`)
  });
});