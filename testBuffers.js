edit(['hi.bin', 'lol.bin', 'haha.bin', 'meme.bin'], buffers => {
    let newBuffers = []
    buffers.forEach((buffer) => {
        newBuffers.push(new Buffer(buffers[0])[2] = 7);
    })
    return newBuffers
})