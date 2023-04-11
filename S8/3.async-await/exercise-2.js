//Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;


const getCharacters = async ()=> {
    let res = await fetch('https://rickandmortyapi.com/api/character');
    let characters =await res.json();
    console.log(characters);
}
getCharacters();