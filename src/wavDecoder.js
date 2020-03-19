// wavDecoder
const fs = require('fs')
const wavefile = require('wavefile')

// This function takes the path and filename of a 16-bit 44.1 KHz
// PCM WAV file and returns an array of the 16-bit PCM audio data.
const decodeWav = function(filename) {
    // Open the file as a wave file
    let wav = new wavefile.WaveFile(fs.readFileSync(filename))
    // Extract the samples from the file
    let samples = wav.getSamples()
    return samples
}

module.exports = decodeWav