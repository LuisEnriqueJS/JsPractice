
calculadora (146,840,"multiplicacion")
function operaciones (number1,number2, operacion ){
    switch (operacion) {
        case "suma" :
            return number1 + number2
        case "resta":
            return number1 - number2
        case "multiplicacion" :
            return number1 * number2
        case "division":
            return number1 / number2
        case "potencia":
            return Math.pow (number1, number2)
        default:
            console.log(`Operacion ${operacion} no implementada.`)
            break
    }
}
function calculadora (numberA,numberB,Operacion){
    var resultado = operaciones(numberA,numberB,Operacion)
    if (resultado == undefined) {
        console.log(`La funcion calculadora no es valida`)
    }
    else {
        console.log(`El resultado es ${resultado}`)
    }
}