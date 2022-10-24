//esta es mi función que suma dos números

const sum = (a,b) =>{
    return a+b;
}
//solo un registro de consola para nosotros.
console.log(sum(14,9));

//exporta la función para usarla en otros archivos
//(similar a la palabra clave 'export' cuando se usa webpack)


//module.exports = {sum};


let oneEuroInYenIs = 127.9;
let oneEuroInDollarIs = 1.2;
let oneEuroInPoundIs = 0.8;

let fromDollarToEuro = 0.83;
let fromYenToEuro = 0.01;
let fromPoundToEuro = 1.25;

let montoDolares = 100;
let montoEuros = 150;
let montoYenes = 80;


const fromDollarToYen = (montoDolares,fromDollarToEuro,oneEuroInYenIs)=>{
    let p1 = (montoDolares*fromDollarToEuro)*oneEuroInYenIs;
    return p1;
}
console.log(fromDollarToYen(montoDolares,fromDollarToEuro,oneEuroInYenIs));

const fromEuroToDollar = (montoEuros,oneEuroInDollarIs)=>{
    return montoEuros*oneEuroInDollarIs;
}
console.log(fromEuroToDollar(montoEuros,oneEuroInDollarIs));

const fromYenToPound = (montoYenes,fromPoundToEuro,oneEuroInPoundIs)=>{
    let p2 = montoYenes*fromPoundToEuro;
    return p2*oneEuroInPoundIs;
}
console.log(fromYenToPound(montoYenes,fromPoundToEuro,oneEuroInPoundIs));

module.exports = {sum,fromDollarToYen, fromEuroToDollar,fromYenToPound};
