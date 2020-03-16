var fs = require('fs')
const wavefile = require('wavefile');

filename = 'sounds/C.wav'
let wav = new wavefile.WaveFile(fs.readFileSync(filename));
let samples = wav.getSamples()

// Print out the first n samples in the .wav file
n = 5000
for (i = 0; i < n; i++) {
    console.log(samples[i])
}
