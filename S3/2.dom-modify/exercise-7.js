//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

//<!DOCTYPE html>
//<html lang="en">
//<head>
//    <meta charset="UTF-8">
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//    <title>Document</title>
//</head>
//<body>
//   <p class="fn-remove-me">Eliminame!</p>
//   <p>No me elimines!</p>
//   <p>No me elimines!</p>
//   <p class="fn-remove-me">Eliminame!</p>
//   <p>No me elimines!</p>
//   <p class="fn-remove-me">Eliminame!</p>
//   <p class="fn-remove-me">Eliminame!</p>
//   <p>No me elimines!</p>
//</body>
//</html>


let remove = document.querySelectorAll(".fn-remove-me")

for (const element of remove) {
    element.remove();
}