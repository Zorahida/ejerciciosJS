//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDiv = document.createElement("div");

let newP = document.createElement("p")
for (let i = 1; i <=6; i++) {
    
    console.log(newP)
}


newDiv.appendChild(newP);

console.log(newDiv);