import ihtml from "./index.html";
import icss from "../styles.css";
import thtml from "./template.html"
import { hello, mytabela } from "./template.js"
import { animate } from "./animation.js";
import ajson from './data.json'

const socket = new WebSocket('ws://localhost:3000');
let lastLi = null;

// Quando a conexão é estabelecida
socket.onopen = function (event) {
    console.log('Conexão WebSocket estabelecida.');
};

let lastNumber = null;

let minhasCartelas

let sorteados

var ultimo_sorteado
var meus_sorteados = [];
var meus_indexes = []

// Quando uma mensagem é recebida do servidor
socket.onmessage = function (event) {



    if (minhasCartelas == null || minhasCartelas == undefined) {
        minhasCartelas = JSON.parse(event.data).cartela

        const tcartela = Handlebars.compile(mytabela());

        // Obter dados das cartelas
        const data = { nome: JSON.parse(minhasCartelas)[0].nome_cartela };

        // Renderizar as cartelas
        const cartelinha = tcartela(data);
        $("#cartelas").append(cartelinha);

        let numeros = JSON.parse(minhasCartelas)[0].numeros_cartela;

        if (numeros.length > 0) {
            numeros.forEach((item) => {
                // Cria um novo elemento <div> para cada número
                var novoDiv = $('<div>', {
                    text: item // Define o texto do <div> como o número atual do loop
                });

                novoDiv.addClass('bg-white rounded-full text-zinc-400 flex items-center justify-center aspect-square text-sm');

                // Adiciona o novo <div> ao elemento com id #minha_cartela
                $("#minha_cartela").append(novoDiv);
            });
        }

        

    }

    const lista = JSON.parse(event.data).lista;

    if (lista == 0) {
        meus_sorteados = []
        meus_indexes = []
    }

    $(sorteados).append(lista[lista.length - 1])
    
    const last3 = lista.slice(-4)

    // Verifica se algum número sorteado está na sua lista de 1 a 15
    const selecionados = [];
    const numerosSorteados = lista.filter(numero => selecionados.includes(numero));

    // Muda o fundo dos números sorteados para roxo (purple)
    

    // Limpa a lista atual de números
    const listaElement = document.getElementById('lista-numeros');

    // Mapeia os números recebidos para elementos li
    last3.forEach(function (numero) {

        

        // Verifica se o número já existe na lista
        if (!$(listaElement).find('li[data-value="' + numero + '"]').length) {
            const tbola = Handlebars.compile(hello());
            const ebola = tbola(setBall(last3[last3.length - 4]));
            const ebola2 = tbola(setBall(last3[last3.length - 3]));
            const ebola3 = tbola(setBall(last3[last3.length - 2]));
            const ebola4 = tbola(setBall(last3[last3.length - 1]));
            
            $("#app").empty()

            $("#app").append($(ebola))
            $("#app").append($(ebola2))
            $("#app").append($(ebola3))
            $("#app").append($(ebola4))

            const li = $(ebola);
            $(li).attr('data-value', numero);

            // Aplica a classe de animação apenas para o novo elemento li
            animate()
        }
    });


    //Pintar as bolas
    const elementosTodosNumeros = $('#todos_numeros').children();
    const elementosMinhaCartela = $('#minha_cartela').children();

    if (lista.length === 0) {
        $('#todos_numeros div').css('background-color', '');
        $('#todos_numeros div').css('color', '');
        $('#minha_cartela div').css('background-color', '');
        $('#minha_cartela div').css('color', '');
        $("#quina-01").css('display', 'none')
        $("#quina-02").css('display', 'none')
        $("#quina-03").css('display', 'none')

        $("#quadra-01").css('display', 'none')
        $("#quadra-02").css('display', 'none')
        $("#quadra-03").css('display', 'none')
        $("#quadra-04").css('display', 'none')
        $("#quadra-05").css('display', 'none')
        $("#quadra-06").css('display', 'none')
    }

    if (elementosTodosNumeros.length > 0) {
        const elementosASortear = elementosTodosNumeros.filter(function () {
            const numeroSorteado = parseInt($(this).text());
            return lista.includes(numeroSorteado) && !numerosSorteados.includes(numeroSorteado);
        });

        elementosASortear.each(function () {
            const numeroSorteado = parseInt($(this).text());
            // Define a cor de fundo do elemento atual para  apenas se estiver na lista
            if (lista.includes(numeroSorteado)) {
                
                $(this).css('background-color', 'rgb(32, 54, 124)');
                $(this).css('color', '#FDFFFC');
                if (numeroSorteado == lista[lista.length - 1]) {
                    $(this).css('background-color', 'rgb(200, 4, 14)');
                }
            }
        });
    } else {
        console.log("Erro: não há elementos para sortear");
    }

    lista.forEach(function (numero) {
        // Verificando se o número está presente em algum elemento da cartela
        elementosMinhaCartela.each(function (index) {
            // Convertendo o texto dentro da div para número
            var numeroDaCartela = parseInt($(this).text().trim());
            // Verificando se o número da cartela é igual ao número da lista
            if (numeroDaCartela === numero) {
                // Verificando se o número já foi adicionado à lista de sorteados
                if (meus_sorteados.indexOf(numero) === -1) {
                    // Se não foi adicionado ainda, adicionamos o número à lista de sorteados
                    meus_sorteados.push(numero);
                    meus_indexes.push(index);
                }
                // Podemos interromper o loop pois já encontramos uma correspondência
                return false;
            }
        });
    });

    var num_quina01 = [0, 1, 2, 3, 4];
    var num_quina02 = [5, 6, 7, 8, 9];
    var num_quina03 = [10, 11, 12, 13, 14];

    var num_quadra01 = [0, 1, 2, 3];
    var num_quadra02 = [1, 2, 3, 4];
    var num_quadra03 = [5, 6, 7, 8];
    var num_quadra04 = [6, 7, 8, 9];
    var num_quadra05 = [10, 11, 12, 13];
    var num_quadra06 = [11, 12, 13, 14];

    var quina01 = num_quina01.every(function (numero) {
        return meus_indexes.includes(numero);
    });
    var quina02 = num_quina02.every(function (numero) {
        return meus_indexes.includes(numero);
    });
    var quina03 = num_quina03.every(function (numero) {
        return meus_indexes.includes(numero);
    });

    var quadra01 = num_quadra01.every(function (numero) {
        return meus_indexes.includes(numero);
    });
    var quadra02 = num_quadra02.every(function (numero) {
        return meus_indexes.includes(numero);
    });
    var quadra03 = num_quadra03.every(function (numero) {
        return meus_indexes.includes(numero);
    });
    var quadra04 = num_quadra04.every(function (numero) {
        return meus_indexes.includes(numero);
    });
    var quadra05 = num_quadra05.every(function (numero) {
        return meus_indexes.includes(numero);
    });
    var quadra06 = num_quadra05.every(function (numero) {
        return meus_indexes.includes(numero);
    });

    
    if (quina01) {
        console.log("quina 01");
        $("#quina-01").css('display', '')
    } else if (quina02) {
        console.log("quina 02");
        $("#quina-02").css('display', '')
    } else if (quina03) {
        console.log("quina 03");
        $("#quina-03").css('display', '')
    } else if (quadra01) {
        console.log("quadra 01");
        $("#quadra-01").css('display', '')
    } else if (quadra02) {
        console.log("quadra 02");
        $("#quadra-02").css('display', '')
    } else if (quadra03) {
        console.log("quadra 03");
        $("#quadra-03").css('display', '')
    } else if (quadra04) {
        console.log("quadra 04");
        $("#quadra-04").css('display', '')
    } else if (quadra05) {
        console.log("quadra 05");
        $("#quadra-05").css('display', '')
    } else if (quadra06) {
        console.log("quadra 06");
        $("#quadra-06").css('display', '')
    }

    


    if (elementosMinhaCartela.length > 0) {
        const elementosASortearMinhaCartela = elementosMinhaCartela.filter(function () {
            const numeroSorteado = parseInt($(this).text());
            return lista.includes(numeroSorteado) && !numerosSorteados.includes(numeroSorteado);
        });


        elementosASortearMinhaCartela.each(function (index) {
            const numeroSorteado = parseInt($(this).text());
            
            // Define a cor de fundo do elemento atual para apenas se estiver na lista
            if (lista.includes(numeroSorteado)) {
                
                $(this).css('background-color', 'rgb(64, 177, 41)');
                
                $(this).css('color', '#FDFFFC');

                // Agora vamos encontrar e colorir o mesmo número em #todos_numeros
                elementosTodosNumeros.filter(function () {
                    return (parseInt($(this).text()) === numeroSorteado && numeroSorteado != lista[lista.length - 1]);
                }).css('background-color', 'rgb(64, 177, 41)').css('color', '#FDFFFC');

                if (meus_sorteados[meus_sorteados.length - 1] == numeroSorteado) {
                    $(this).css('background-color', 'rgb(200, 4, 14)');
                }
            }
        });

    } else {
        console.log("Erro: não há elementos para sortear");
    }


    
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
    window.location.href = "/servers";
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
        x = "135.12039"
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

async function getTabelas() {
    const minhasCartelas = await fetchMinhasCartelas();
    return {
        numeros: minhasCartelas[0].numeros_cartela
    };
}

$(document).ready(async function () {
    // Compilar o template Handlebars
    var tbola = Handlebars.compile(hello());

    

    // Itera sobre cada elemento
    
    

    // Atualizar ranking
    atualizarRanking();

    // Verificar se existem cartelas
    if (minhasCartelas) {
        // Compilar o template Handlebars para as cartelas
        const tcartela = Handlebars.compile(mytabela());

        // Obter dados das cartelas
        const data = await getTabelas();

        // Renderizar as cartelas
        const cartelinha = tcartela(data);
        $("#cartelas").append(cartelinha);
    }
    const numColunas = 30;
    var todosNumerosDiv = $('#todos_numeros');
    $('#todos_numeros').css("grid-template-columns", `repeat(${numColunas}, 1fr)`);

    for (var i = 1; i <= 90; i++) {
        // Cria um novo elemento <div> para cada número
        var novoDiv = $('<div>', {
            text: i // Define o texto do <div> como o número atual do loop
        });

        novoDiv.addClass('bg-white rounded-full text-zinc-400 flex items-center justify-center aspect-square')
        novoDiv.addClass('todos_numeros')

        // Adiciona o novo <div> ao elemento com id #todos_numeros
        todosNumerosDiv.append(novoDiv);
    }

});

// Função para buscar as cartelas (simulada)
async function fetchMinhasCartelas() {
    // Simulação de uma requisição assíncrona
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { numeros_cartela: [1, 2, 3, 4, 5] }
                // Supondo que minhasCartelas seja um array de objetos com a chave 'numeros_cartela'
            ]);
        }, 1000); // Simula um tempo de resposta de 1 segundo
    });
}