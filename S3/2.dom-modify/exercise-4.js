//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let newP = document.createElement("p");
//console.log(newP);

let textContent = document.createTextNode("Soy dinámico!");
//console.log(textContent);

newP.appendChild(textContent);

console.log(newP);