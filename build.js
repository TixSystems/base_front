const fs = require('fs');
const path = require('path');

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

await Bun.build({
    entrypoints: getFilesRecursively('./pages'),
    outdir: './out',
    naming: {
        entry: '[dir]/[name].[ext]',
        asset: '[dir]/[name].[ext]'
    },
    target: 'browser'
});