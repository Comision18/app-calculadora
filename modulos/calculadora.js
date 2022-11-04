module.exports = {
    sumar : (a,b) => {
        return !a || !b ? "faltan datos" : a + b
    },
    restar : (a,b) => a - b,
    multiplicar : (a,b) => a * b
}