// This function takes an arbitrary number of audio streams and 
// mixes them together into a single output stream.
// The audio streams will be in the form of a list of
// integer shorts to represent 16-bit PCM audio.
// The lists may be of arbitrary length as long as they are
// all the same length as each other.
const mix = function() {
    // Pull the audio streams from the function arguments object
    var streams = arguments
    // Loop through the streams and print them
    for (i = 0; i < streams.length; i++) {
        console.log(streams[i])
    }
}

// 2 audio streams with 2 samples each
var stream1 = new Int16Array([1, 2])
var stream2 = new Int16Array([3, 4])
mix(stream1,stream2)