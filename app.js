const {sumar, restar, multiplicar, dividir} = require('./modulos/calculadora')
switch (comando) {
    case "sumar":
        console.log(sumar(2,3))
        break;
    case "restar":
        console.log(restar(2,3))

    break;
    case "multiplicar":
        console.log(multiplicar(2,3))

        break;
     case "dividir":
        console.log(dividir(2,3))

        break;

    default:
        break;
}
