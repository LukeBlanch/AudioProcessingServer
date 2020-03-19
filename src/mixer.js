// This function takes an arbitrary number of audio streams and 
// mixes them together into a single output stream by adding all 
// the samples in each stream at the same indicies together.
// The audio streams will be in the form of a list of
// integer shorts to represent 16-bit PCM audio.
// The lists may be of arbitrary length as long as they are
// all the same length as each other.
const mix = function() {
    // Pull the audio streams from the function arguments object
    var streams = arguments

    // Create the output stream of the same length as the inputs
    var outputStream = new Int16Array(streams[0].length)

    for (i = 0; i < streams[0].length; i++) {
        for (j = 0; j < streams.length; j++) {
            // Sum the samples together in the output stream
            outputStream[i] += streams[j][i]
        }
    }
    console.log(outputStream)
    return outputStream
}

// 2 audio streams with 2 samples each
var stream1 = new Int16Array([1, 2, 3, 4])
var stream2 = new Int16Array([1, 2, 3, 4])
var stream3 = new Int16Array([1, 2, 3, 4])

mix(stream1, stream2, stream3)