//config
const total_numeros = 90;
const delay = 1000; //1segundos
//

// import express from 'express';
// import cors from 'cors';
// import http from 'http';
// import WebSocket from 'ws';
const express = require('express');
const app = express();
const dir = express();
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');

app.use(cors());





const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Importar o pacote mysql
const mysql = require('mysql');

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bingo'
});

// Conectar-se ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem sucedida com o banco de dados.');

    // Inserir uma nova linha com JSON vazio ao iniciar o sorteio
    inserirNovoSorteio();
});

// Função para inserir um novo sorteio na tabela
function inserirNovoSorteio() {
    const insertQuery = `INSERT INTO sorteios (numbers) VALUES (?)`;
    const values = [JSON.stringify([])];
    connection.query(insertQuery, values, (err, result) => {
        if (err) {
            console.error('Erro ao inserir novo sorteio:', err);
        } else {
            console.log('Novo sorteio inserido na tabela sorteios.');
        }
    });
}

// Função para atualizar o último sorteio na tabela com os números sorteados
function atualizarSorteio(numeros) {
    const updateQuery = `UPDATE sorteios SET numbers = ? ORDER BY id DESC LIMIT 1`;
    const values = [JSON.stringify(numeros)];
    connection.query(updateQuery, values, (err, result) => {
        if (err) {
            console.error('Erro ao atualizar sorteio:', err);
        } else {
            console.log('Sorteio atualizado na tabela sorteios.');
        }
    });
}

function getCartela(callback) {
    const query = `SELECT cartelas FROM bd_cartelas`;

    connection.query(query, (err, result) => {
        if (err) {
            console.error(err);
            callback(err, null);
        } else {
            const cartelas = result.map(row => row.cartelas);
            console.log(JSON.stringify(cartelas));
            callback(null, cartelas);
        }
    });
}

// Lista para armazenar os números
let lista = [];
let cartela

getCartela((err, cartelas) => {
    if (err) {
        console.log('err')
    } else {
        cartela = cartelas
    }
});

// Função para adicionar números únicos à lista a cada 2 segundos
function adicionarNumero() {
    let novoNumero;
    do {
        novoNumero = Math.floor(Math.random() * total_numeros) + 1; // Gera um número aleatório de 1 a 30
    } while (lista.includes(novoNumero)); // Verifica se o número já está na lista

    lista.push(novoNumero); // Adiciona o número à lista
    console.log('Novo número adicionado:', novoNumero);

    atualizarSorteio(lista);

    if (lista.length === total_numeros) {
        // Quando a lista atingir 30 elementos, finaliza o sorteio
        console.log('Lista atingiu o total de elementos. Último número:', lista[total_numeros - 1]);
        // Atualizar o último sorteio na tabela sorteios
        
        lista = [];
        // Insere um novo sorteio na tabela para o próximo sorteio
        inserirNovoSorteio();
    }

    // Envia a lista atualizada para todos os clientes WebSocket conectados
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({lista: lista, cartela: cartela}));
        }
    });
}

// Inicia a função para adicionar números a cada 2 segundos
setInterval(adicionarNumero, delay);

// Rota para servir a página HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor está rodando em http://localhost:3000');
});

dir.use(express.static('../out'));

http.createServer(dir).listen(2506, () => {
    console.log('Servidor está rodando em http://localhost:2506');
});