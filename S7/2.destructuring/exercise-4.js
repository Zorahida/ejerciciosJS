//En base al siguiente javascript, usa destructuring para crear las variables name e itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.


const car = {name: "Mazda 6", itv: [2015, 2011, 2020] }

let {name, itv} = car

console.log(name, itv);

let [a, b, c] = itv;

console.log(a, b, c);