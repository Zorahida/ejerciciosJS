//Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

//<!DOCTYPE html>
//<html lang="en">
//<head>
//    <meta charset="UTF-8">
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//    <title>Document</title>
//</head>
//<body>
//   <div></div>
//   <div></div>
//</body>
//</html>```

let parraf = document.createElement("p");
//div$$ = document.querySelectorAll("div");
parraf.textContent =`Voy en medio!`

let div$$ = document.getElementsByTagName(div);
document.body.insertBefore(parraf,div$$);

document.body.insertBefore(parraf, div);