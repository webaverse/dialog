const fs = require('fs');

const writeFile = async (path, src) => {
    const fileHandle = await fs.promises.open(`${process.cwd()}/chunkSrc/${path}`, 'w+');
    if (fileHandle) {
        await fs.promises.writeFile(fileHandle, src);
        await fileHandle.close();
        return;
    } else {
        console.error('failed to write to file')
        return;
    }
}

const getAllKeys = async () => {
    const keys = await fs.promises.readdir('./bin');
    return keys.length > 0 ? keys : [];
}

const getFile = async (key) => {
    const fileHandle = await fs.promises.open(`${process.cwd()}/chunkSrc/${key}`, 'r');
    if (fileHandle) {
        const buffer = await fs.promises.readFile(fileHandle);
        if (buffer) {
            await fileHandle.close();
            return buffer;
        }
        await fileHandle.close();
        return null;
    } else {
        await fileHandle.close();
        console.error('cant get file')
        return null;
    }      
}

module.exports = {
    writeFile: writeFile,
    getFile: getFile,
    getAllKeys: getAllKeys
}