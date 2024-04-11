import ihtml from "./index.html";
import icss from "../styles.css";
import thtml from "./template.html"
import { hello } from "./template.js"
import { animate } from "./animation.js";
import ajson from './data.json'

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
    const selecionados = [1, 2, 30, 4, 5, 6, 7, 8, 45, 10, 11, 12, 13, 14, 15];
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
    last3.forEach(function (numero) {
        // Verifica se o número já existe na lista
        if (!$(listaElement).find('li[data-value="' + numero + '"]').length) {
            const tbola = Handlebars.compile(hello());
            const ebola = tbola(setBall(last3[last3.length - 3]));
            const ebola2 = tbola(setBall(last3[last3.length - 2]));
            const ebola3 = tbola(setBall(last3[last3.length - 1])); 
            
            $("#app").empty()

            $("#app").append($(ebola))
            $("#app").append($(ebola2))
            $("#app").append($(ebola3))

            const li = $(ebola);
            $(li).attr('data-value', numero);

            // Aplica a classe de animação apenas para o novo elemento li
            animate()
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
    } else if (number < 91) {
        color = '#520854'
    } else {
        color = '#c6c6c6'
    }

    var x

    if (number>9) {
        x = "136.12039"
    } else {
        x = '120'
    }



    return{
        color: color,
        number: number,
        x: x
    };
}

import { clients } from "./dados.js";

function atualizarRanking() {
    // Chama a função clients() para obter os dados
    var dados = clients();

    // Verifica se há dados
    if (dados.length > 0) {
        // Cria uma tabela HTML
        var tabelaHTML = `
        <div class="w-full">
            <div class="py-2">
                <div class="flex flex-row gap-2">
                    <div class="border w-1/5 px-2 py-[.2rem] rounded-md">ID</div>
                    <div class="border w-2/5 px-2 py-[.2rem] rounded-md">Nome</div>
                </div>
            </div>
            <div class="w-full flex flex-col gap-2">`;

        // Itera sobre os dados e cria as linhas da tabela
        $.each(dados, function (index, item) {
            tabelaHTML += `<div class="w-full flex flex-row gap-2"><div class="w-1/5 text-ellipsis truncate bg-white/10 rounded-md p-2"> ${item.hash}</div><div class="w-2/5 text-ellipsis truncate bg-white/10 rounded-md p-2"> ${item.nome} </div></div>`;
        });

        // Fecha a tabela
        tabelaHTML += "</div></div>";

        // Insere a tabela dentro do elemento com id "ranking"
        $("#ranking").html(tabelaHTML);
    } else {
        // Se não houver dados, exibe uma mensagem de aviso
        $("#ranking").html("Nenhum cliente encontrado.");
    }
}

$(document).ready(function () {

    var tbola = Handlebars.compile(hello())



    atualizarRanking()

    
    console.log(JSON.stringify(clients()))

    
})