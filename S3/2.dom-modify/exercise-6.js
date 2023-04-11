//Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


let ul$$ = document.createElement("ul");

document.body.appendChild(ul$$);


for (const program of programs) {

    let li$$ = document.createElement("li");
    li$$.innerText = program;

    ul$$.appendChild(li$$);
 
}
