edit(['hi.bin', 'lol.bin', 'haha.bin', 'meme.bin'], buffers => {
    let newBuffers = [];
    for (let i = 0; i < buffers.length; i++) {
        const buffer = buffers[i];
        if (buffer) {
            newBuffers.push(new Buffer(buffer)[2] = 7);
        } else {
            newBuffers.push(new Buffer.alloc(10));
        }
    }
    return newBuffers;
})