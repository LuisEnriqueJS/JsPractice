var resultado = operaciones ( 5,6, "resta" )
var resultado2 = operaciones (10,2, "division")
var resultado3 = operaciones (2,3, "suma")
var resultado4 = operaciones (2,3, "potenciaaa")

if (resultado !== undefined) {
    console.log(resultado);}
if (resultado2 !== undefined) {
    console.log(resultado2);}
if (resultado3 !== undefined) {
    console.log(resultado3);}
if (resultado4 !== undefined) {
    console.log(resultado4);}
    

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