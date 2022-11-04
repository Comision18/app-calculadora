const {sumar, restar} = require('./modulos/calculadora')
switch (comando) {
    case "sumar":
        console.log(sumar(2,3))
        break;
    case "restar":
        console.log(restar(2,3))

        break;
    

    default:
        break;
}