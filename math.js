function add(x1, x2) {
    return x1+x2;
}

function substrat(x1, x2) {
    return x1-x2;
}

function multiply(x1, x2) {
    return x1*x2;
}

function divide(x1, x2) {
    if(x2 == 0){
        console.log('No se puede dividir por 0');
        return 0;
    }
    return x1 / x2;
}

function convertBytes(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  
    if (bytes == 0) {
      return "n/a"
    }
  
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  
    if (i == 0) {
      return bytes + " " + sizes[i]
    }
  
    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
  }

exports.add = add;
exports.substrat = substrat;
exports.multiply = multiply;
exports.divide = divide;
exports.convertBytes=convertBytes;

