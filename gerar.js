const nomes = [
    "Bernardo da Silva",
    "Ana Clara Oliveira",
    "Carlos Eduardo Santos",
    "Daniela Costa",
    "Eduardo Fernandes",
    "Fernanda Gomes",
    "Gabriel Souza",
    "Helena Martins",
    "Igor Pereira",
    "Julia Rodrigues",
    "Leonardo Barbosa",
    "Mariana Silva",
    "Matheus Oliveira",
    "Gabriela Costa",
    "Pedro Souza",
    "Rafael Fernandes",
    "Sofia Gomes",
    "Tomás Rodrigues",
    "Vanessa Barbosa",
];

// Função para gerar números aleatórios sem repetição
function gerarNumerosAleatorios(quantidade) {
    const numeros = [];
    while (numeros.length < quantidade) {
        const numero = Math.floor(Math.random() * 90) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    return numeros;
}

// Função para gerar hash MD5
function gerarHash(texto) {
    const md5 = require("md5");
    return md5(texto);
}

// Gerando lista de objetos
const listaObjetos = nomes.map((nome) => {
    const numeros = gerarNumerosAleatorios(15);
    const hash = gerarHash(nome);
    return {
        nome,
        hash,
        lista: numeros,
    };
});

// Convertendo lista de objetos para JSON
const jsonData = JSON.stringify(listaObjetos, null, 2);

// Gravando JSON em arquivo
const fs = require("fs");
fs.writeFile("data.json", jsonData, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Arquivo JSON gerado com sucesso!");
    }
});
