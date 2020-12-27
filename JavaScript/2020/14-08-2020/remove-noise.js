// write a function which removes this noise from the message.
// Notice that noise can only be %$&/#·@|º\ª charaters, other characteres are not considered noise

function removeNoise(str) {
    return str.replace(/[%$&/#·@|º\ª]/g, '')
}