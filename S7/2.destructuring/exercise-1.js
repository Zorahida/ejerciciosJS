//En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.


const game = {title: 'The last of us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

let {title,gender} = game;


console.log (`${title}, ${gender}`)