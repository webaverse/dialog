const fs = require('fs');

const writeFile = (path, src) => {
    return new Promise(async (resolve, reject) => {
        const fileHandle = await fs.promises.open(`${process.cwd()}/chunkSrc/${path}`, 'w+');
        if (fileHandle) {
            await fs.promises.writeFile(fileHandle, src);
            await fileHandle.close();
            resolve();
        } else {
            console.error('failed to write to file')
            reject()
        }
    })
}

const getAllKeys = async () => {
    const keys = await fs.promises.readdir('./bin');
    return keys.length > 0 ? keys : [];
}

const getFile = (key) => {
    return new Promise(async (resolve, reject) => {
        const fileHandle = await fs.promises.open(`${process.cwd()}/chunkSrc/${key}`, 'r');
        if (fileHandle) {
            const buffer = await fs.promises.readFile(fileHandle);
            if (buffer) {
                resolve(buffer);
            }
            resolve('');
            await fileHandle.close();
        } else {
            console.error('cant get file')
            reject()
        }      
    })
}

module.exports = {
    writeFile: writeFile,
    getFile: getFile,
    getAllKeys: getAllKeys
}