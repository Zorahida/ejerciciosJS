//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

const get = async () => {
    let response = await fetch("https://api.agify.io?name=michael");
    let res = await response.json();
    console.log(res);
}

let button = document.getElementById(`searchBtn`);
button.addEventListener(`click`, searchBtn);