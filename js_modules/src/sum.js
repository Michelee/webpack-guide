const sum = (a, b) => a + b;


//module.exports = sum;  Permitir que sum sea accesible para todos sin importar que es (variable, funcion) CommonJs
export default sum; // Permitir que sum sea accesible para todos sin importar que es (variable, funcion) ES2015