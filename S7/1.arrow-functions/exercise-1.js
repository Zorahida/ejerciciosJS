//Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 


let suma = (a = 10, b = 5) => {
    console.log (a+b);
}

//- Ejecuta esta función sin pasar ningún parametro

suma ();


//- Ejecuta esta función pasando un solo parametro

suma (8);

//- Ejecuta esta función pasando dos parametros
suma (5, 7);

//console.log(suma);
