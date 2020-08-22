const fs = require('fs');

const writeFile = async (path, src) => {
    try {
        console.log(process.cwd())
        const fileHandle = await fs.promises.open(`${process.cwd()}/chunkSrc/${path}`, 'w+');
        if (fileHandle) {
            await fs.promises.writeFile(fileHandle, src);
        }
    } catch (e) {
        console.error(e)
    }
}

module.exports = {
    writeFile: writeFile
}