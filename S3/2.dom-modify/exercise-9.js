//Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

//<!DOCTYPE html>
//<html lang="en">
//<head>
//    <meta charset="UTF-8">
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//    <title>Document</title>
//</head>
//<body>
//   <div class="fn-insert-here"></div>
//   <div></div>
//   <div class="fn-insert-here"></div>
//   <div>Aqui no va un p</div>
//</body>
//</html>```

const dentro = document.querySelectorAll(".fn-insert-here")

for (const p of dentro) {
    const parraf = document.createElement("p")
    parraf.innerText = "Voy dentro"

    p.appendChild(myP1$$)