import ihtml from "./index.html";
import icss from "../styles.css";
import thtml from "./template.html"
import { hello } from "./template.js"
import { animate } from "./animation.js";

const socket = new WebSocket('ws://localhost:3000');
let lastLi = null;

// Quando a conexão é estabelecida
socket.onopen = function (event) {
    console.log('Conexão WebSocket estabelecida.');
};

let lastNumber = null;

// Quando uma mensagem é recebida do servidor
socket.onmessage = function (event) {

    const lista = JSON.parse(event.data);
    const last3 = lista.slice(-3)

    if (lista.length === 0) {
        $('.elemento').css('background-color', 'rgb(5, 72, 196)');
    }

    // Verifica se algum número sorteado está na sua lista de 1 a 15
    const selecionados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const numerosSorteados = lista.filter(numero => selecionados.includes(numero));

    // Muda o fundo dos números sorteados para roxo (purple)
    $('.elemento').each(function () {
        const numeroSorteado = parseInt($(this).text().trim());
        if (numerosSorteados.includes(numeroSorteado)) {
            $(this).css('background-color', 'rgb(218, 50, 233)');
        }
    });

    // Limpa a lista atual de números
    const listaElement = document.getElementById('lista-numeros');
    listaElement.innerHTML = '';

    // Mapeia os números recebidos para elementos li
    last3.forEach(numero => {
        // Verifica se o número já existe na lista
        if (!listaElement.querySelector(`li[data-value="${numero}"]`)) {
            // Cria um novo elemento li para o novo número
            const li = document.createElement('li');
            li.textContent = numero;
            li.setAttribute('data-value', numero); // Define um atributo para identificar o valor do número
            listaElement.appendChild(li);

            // Aplica a classe de animação apenas para o novo elemento li
            if (lastLi) {
                lastLi.classList.remove('animated');
            }
            li.classList.add('animated');
            lastLi = li;

            setTimeout(() => {
                li.classList.remove('animated');
            }, 1000);
        }
    });
};

// Em caso de erro na conexão
socket.onerror = function (error) {
    console.error('Erro na conexão WebSocket:', error);
};

// Em caso de fechamento da conexão
socket.onclose = function (event) {
    console.log('Conexão WebSocket fechada.');
    var currentPath = window.location.pathname;
    // Remove o nome do arquivo (index.html) do caminho
    var newPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
    // Redireciona para o diretório servers dentro do mesmo diretório
    window.location.href = newPath + "/servers";
};

function setBall(number) {
    let color

    if (number < 11) {
        color = '#FFC800'
    } else if (number < 21) {
        color = '#067BC2'
    } else if (number < 31) {
        color = '#A92222'
    } else if (number < 41) {
        color = '#15D125'
    } else if (number < 51) {
        color = '#DF0B9C'
    } else if (number < 61) {
        color = '#CE5E14'
    } else if (number < 71) {
        color = '#143CCE'
    } else if (number < 81) {
        color = '#0C5126'
    } else {
        color = '#520854'
    }

    return{
        color: color,
        number: number
    };
}

$(document).ready(function () {

    var tbola = Handlebars.compile(hello())
    
    var ebola = tbola(setBall(33))
    var ebola2 = tbola(setBall(47))

    $("#app").append($(ebola))
    $("#app").append($(ebola2))

    animate()

    
})