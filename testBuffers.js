edit(['hi.bin', 'lol.bin', 'haha.bin', 'meme.bin'], (buffers, args) => {
    let newBuffers = [];
    for (let i = 0; i < buffers.length; i++) {
        newBuffers.push(Buffer.alloc(10));
    }
    return newBuffers;
})