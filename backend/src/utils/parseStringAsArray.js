module.exports = function parseStringAsArray(arraystring){
    return arraystring.split(',').map(tech => tech.trim());
}