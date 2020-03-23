// server
const mix = require('./mixer')
const decodeWav = require('./wavDecoder')
const fs = require('fs')
const wavefile = require('wavefile').WaveFile

// This is the main file that runs in this module.
// Use $ npm run dev
// to start the server.

// Decode wav files into raw PCM audio streams
var inputStream1 = decodeWav('./sounds/C5-97-110.wav');
var inputStream2 = decodeWav('./sounds/E5-97-110.wav');
var inputStream3 = decodeWav('./sounds/G5-97-110.wav');
var inputStream4 = decodeWav('./sounds/C6-97-110.wav');

var streams = [inputStream1, inputStream2, inputStream3, inputStream4]

// Mix the audio streams together
var outputStream = mix(streams);

// Write the output stream to a new .wav file
let wav = new wavefile();
wav.fromScratch(1, 44100, '16', outputStream);
fs.writeFileSync('./sounds/mix.wav', wav.toBuffer());
console.log(outputStream);