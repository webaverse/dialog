const fs = require('fs');

const lockMap = new Map();

const writeFile = async (path, src) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (lockMap.get(key) && !lockMap.get(key).locked) {
                const fileHandle = await fs.promises.open(`${process.cwd()}/chunkSrc/${path}`, 'w+');
                if (fileHandle) {
                    await fs.promises.writeFile(fileHandle, src);
                    resolve();
                }
            } else {
                console.error('request for writeFile is touching a locked file, denied.')
                reject()
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
            if (lockMap.get(key) && !lockMap.get(key).locked) {
                const fileHandle = await fs.promises.open(`${process.cwd()}/chunkSrc/${key}`, 'r');
                if (fileHandle) {
                    const buffer = await fs.promises.readFile(fileHandle);
                    if (buffer) {
                        resolve(buffer.toString());
                    }
                    resolve('');
                }
            } else {
                console.error('request for getFile is touching a locked file, denied.')
                reject()
            }      
        } catch (e) {
            console.error(e);
            reject();
        }
    })
}

const lockFiles = (keys) => {
    return new Promise(async (resolve, reject) => {
        try {
            keys.forEach(key => {
                lockMap.set(key, { locked: true });
            })
            resolve(true);
        } catch (e) {
            console.error(e);
            reject(false);
        }
    })
}

const unlockFiles = (keys) => {
    return new Promise(async (resolve, reject) => {
        try {
            keys.forEach(key => {
                lockMap.set(key, { locked: false });
            })
            resolve(true);
        } catch (e) {
            console.error(e);
            reject(false);
        }
    })
}

const evalSrc = (src) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(src)
            eval(src)
            resolve();
        } catch (e) {
            console.error(e);
            reject();
        }
    })
}

module.exports = {
    writeFile: writeFile,
    getFile: getFile,
    evalSrc: evalSrc,
    lockFiles: lockFiles,
    unlockFiles: unlockFiles
}