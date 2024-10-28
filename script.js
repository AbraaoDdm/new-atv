function somar(a,b){
    return a + b;
}
function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2) ) {
        document.getElementById('resultado').innerText = 'Insira Números Válidos';
    }else {
        const resultado = somar(num1,num2);
        document.getElementById('resultado').innerText = `Resultado da Soma: ${resultado}`;
    }
}

function multiplica(a,b){
    const resultado = a * b;
    document.getElementById('resultado').innerText=`Resultado da Multiplicação: ${resultado}` 
}

function calcularMultiplica() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2) ) {
        document.getElementById('resultado').innerText = 'Insira Números Válidos';
    }else {
        multiplica(num1,num2);
    }
}

function exibirMensagem() {
    document.getElementById('mensagem').innerText='Olá, essa é uma conta simples';
}