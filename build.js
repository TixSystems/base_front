const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

function getFilesRecursively(directory, fileList = []) {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFilesRecursively(filePath, fileList);
        } else {
            if (path.extname(filePath) === '.js') {
                fileList.push(filePath);
            }
        }
    });

    return fileList;
}

async function build() {
    // Executa o comando do TailwindCSS antes de cada compilação.

    await Bun.build({
        entrypoints: getFilesRecursively('./pages'),
        outdir: './out',
        naming: {
            entry: '[dir]/[name].[ext]',
            asset: '[dir]/[name].[ext]'
        },
        target: 'browser'
    });
}

// Função para executar o comando do TailwindCSS.

// Função para observar mudanças nos arquivos do diretório "./pages" e executar a compilação.
function watch() {
    const watcher = chokidar.watch('./pages', {
        ignored: /(^|[\/\\])\../, // Ignora arquivos ocultos.
        persistent: true
    });

    watcher
        .on('add', () => build())
        .on('change', () => build())
        .on('unlink', () => build());
}

// Inicia a observação dos arquivos.
watch();