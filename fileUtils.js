const fs = require('fs');

const writeFile = async (path, src) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fileHandle = await fs.promises.open(`${process.cwd()}/chunkSrc/${path}`, 'w+');
            if (fileHandle) {
                await fs.promises.writeFile(fileHandle, src);
                resolve();
            }
        } catch (e) {
            console.error(e);
            reject();
        }
    })
}

const getFile = async (key) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fileHandle = await fs.promises.open(`${process.cwd()}/chunkSrc/${key}`, 'r');
            if (fileHandle) {
                const buffer = await fs.promises.readFile(fileHandle);
                if (buffer) {
                    resolve(buffer.toString());
                }
                resolve('');
            }
        } catch (e) {
            console.error(e);
            reject();
        }
    })
}

module.exports = {
    writeFile: writeFile,
    getFile: getFile
}