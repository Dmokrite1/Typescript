/*let w: unknown = 1;

w = "string"; // no error

w = { 
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  } 
} as { runANonExistentMethod: () => void }

// How can we avoid the error for the code commented out below when we don't know the type? 
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'. 


if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod(); 
} 
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
*/

let lastName: unknown = 'Cardon';
let firstName: unknown = 'Sébastien';
// On peut réattribuer une valeur à une variable et donc changer le type du contenu de ma variable. Cependant son type "typescript" reste inchangé.

lastName = { prefixe: 'M.', name: 'Cardon' }

// Ici ça ne marchera pas car son type "Typescript" est toujours unknown donc pour lui .prefixe, .name n'existe pas.
// console.log(lastName.prefixe);
// console.log(lastName.name);

// On est obligé ici de faire un cast afin de lui forcer la main sur le type "Typescript" de mon lastName
console.log((lastName as { prefixe: string }).prefixe);

// CEPENDANT, dans la réalité, si on doit faire une manipulation qui implique une modification de contenu et du type "Typescript", on recrée une nouvelle variable avec le typage adapté


interface ClothesBase {
    sweat: string;
    shoes: string;
}

interface ClothesAll extends ClothesBase {
    pant: string
}

let colorClothes: ClothesBase = { sweat: 'green', shoes: 'white' };

let colorClothesAll: ClothesBase & { pant: string } = { ...colorClothes, pant: 'blue' };
let colorClothesAll2: ClothesAll = { ...colorClothes, pant: 'blue' };

console.log(colorClothesAll);
console.log(colorClothesAll2);