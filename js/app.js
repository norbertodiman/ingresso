function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso.value == 'pista') {
        comprarPista(quantidadeIngresso);
    } else if (tipoIngresso.value == 'inferior') {
        comprarInferior(quantidadeIngresso);
    } else {
        comprarSuperior(quantidadeIngresso);
    }
}

function comprarPista(quantidadeIngresso) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidadeIngresso > quantidadePista) {
        alert('Quantidade indisponível para o tipo pista!');
    } else {
        quantidadePista = quantidadePista - quantidadeIngresso;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidadeIngresso) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidadeIngresso > quantidadeInferior) {
        alert('Quantidade indisponível para o tipo cadeira inferior!');
    } else {
        quantidadeInferior = quantidadeInferior - quantidadeIngresso;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidadeIngresso) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidadeIngresso > quantidadeSuperior) {
        alert('Quantidade indisponível para o tipo cadeira superior!');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidadeIngresso;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso!');
    }
}