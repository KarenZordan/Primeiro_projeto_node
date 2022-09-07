var readline = require('readline-sync');

function receberNumero (){
    console.log('Bem Vindo! \n');

    do {
        var numero  = Number(readline.question('Entre com um numero e descubra seus divisores:  '));

        if (isNaN(numero)){
            console.log('O valor informado não é válido! Tente novamente! \n');
        }
    } while (isNaN(numero));
    return numero;
}

function descobrirDivisores (valor) {
    let count = 0;

    for (let i = 1; i <= valor; i++) {
        if (valor % i == 0) {
            count++;
            console.log(`Os divisores de ${valor} são: ${i}`);
        }
    }    
    if (count ==2) {
        console.log('Este numero e primo, ele so pode ser dividido por 1 por ele mesmo!');
    }
}

function descobrirDivisores2 (valor){
    let divisores = [];

    for (let i = 1; i <= valor; i++) {
        if (valor % i == 0) {
            divisores.push(i);
        }
    }
    console.log(`Os divisores de ${valor} são: ${divisores}`);

    if (divisores.length == 2) {
        console.log('Este numero e primo, ele so pode ser dividido por 1 por ele mesmo!');
    }
}

function rodarAplicativo(){
    do {
        let valor = receberNumero();
        descobrirDivisores2(valor);

        var continuar = String(readline.question('\n Voce deseja verificar outro numero? Responda S para sim ou N para nao: '));

    } while (continuar == 'S');
    console.log('\n Obrigada! Ate logo.');
}

rodarAplicativo();

//var valor = receberNumero();
//descobrirDivisores(valor);