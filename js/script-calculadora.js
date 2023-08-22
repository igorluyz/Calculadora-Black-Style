// Adicionando números no display
function adicionarCaracter(caracter){

    // Pegando os valores do meu display
    const valorDisplay = document.querySelector('.display').value

    document.querySelector('.display').value = valorDisplay + caracter
}


// Criando uma função para limpar a tela da calculadora
function limpaTela(){
    document.querySelector(".display").value = ""
}

// Criando uma função para calcular
function calcular(){
    const valorDisplay = document.querySelector('.display').value
    
    document.querySelector('.display').value = eval(valorDisplay);
}


// Criando uma função para inverter o sinal
function inverterNumero(){
    const valorDisplay = document.querySelector('.display').value

    document.querySelector('.display').value = valorDisplay * -1
}