//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
//posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//Haz varios ejemplos y compruebalos.

//Sugerencia de función:
//function findArrayIndex(array, text) {}

//Ej array:

 const bichos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
 //const text = `Mosquito`


function findArrayIndex(array, text ) {
return array.indexOf(text); 
}

//const index = findArrayIndex(bichos, text);
//console.log(index);

//const text = `Salamandra`
//const index2 = findArrayIndex(bichos,text)
//console.log(index2)

const text = `Caracol`
const index3 = findArrayIndex(bichos, text);
    console.log(index3)
