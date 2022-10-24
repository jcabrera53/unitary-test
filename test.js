// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("150 Euros deben ser 180 dólares", ()=>{
     //importo la funcion desde app.js
const { fromEuroToDollar } = require('./app.js');
   
    //hago mi comparación (la prueba)
    expect(fromEuroToDollar(150,1.2)).toBe(180);
})

test("80 Yenes deben ser 80 libras", ()=>{
    //importo la funcion desde app.js
const { fromYenToPound } = require('./app.js');
  
   //hago mi comparación (la prueba)
   expect(fromYenToPound(80,1.25,0.8)).toBe(80);
})

test("100 dólares deben ser 10615.7 yenes", ()=>{
    //importo la funcion desde app.js
const { fromDollarToYen } = require('./app.js');
  
   //hago mi comparación (la prueba)
   expect(fromDollarToYen(100,0.83,127.9)).toBe(10615.7);
})