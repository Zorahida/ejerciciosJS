//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
//```js

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

const fruitsRandom = []

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan){
    let fruitsRandom = fruits[Math.floor(Math.random()* fruits.length)]



    //console.log(foodSchedule[i].splice[1,1, fruitsRandom])
 
    }
}


