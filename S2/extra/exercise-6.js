//Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
//intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
//resultante.

//Sugerencia de array:
//````js
const nombres = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']; 

function swap(array,index1, index2) {
const mess = array[index1];
array[index1] = array[index2];
array[index2] = mess;
return(mess)
}
//swap (nombres, 2,3);
//console.log(nombres);

swap(nombres, 0,2);
console.log(nombres)