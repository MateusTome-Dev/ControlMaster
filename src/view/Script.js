// Script para manipular dados do formulário e armazená-los em um array

const CATEGORY = document.getElementById("category");
const NAME = document.getElementById("name");
const DESC = document.getElementById("desc");
const PRICE = document.getElementById("price");
const QUANTITY = document.getElementById("quant");
const ROW = document.getElementById("row");
const COLUMN = document.getElementById("column");
const BTN_SUBMIT = document.getElementById("btnSubmit");
const DATA = [];

// Adiciona um listener de evento ao botão de envio do formulário
BTN_SUBMIT.addEventListener("click", function (event) {
    event.preventDefault();

    // Cria um objeto 'produtos' com os valores dos campos do formulário
    const produtos = {
        categoria: CATEGORY.value,
        nome: NAME.value,
        desc: DESC.value,
        preço: PRICE.value,
        qtd: QUANTITY.value,
        row: ROW.value,
        column: COLUMN.value
    };

    // Adiciona o objeto 'produtos' ao array 'data' e exibe 'data' no console
    DATA.push(produtos);
    console.log(DATA);
});
