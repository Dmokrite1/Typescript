// Définition d'une variable avec un type explicite
const fruit: string = 'banane';

// Définition d'une variable avec inférence de type
let couleur = "mauve";

// Méthodes disponibles sur les chaînes de caractères
console.log(fruit.toUpperCase()); // Affiche "BANANE"
console.log(couleur.charAt(2)); // Affiche le caractère à l'index 2, "u"

// Déclaration de variables avec différents types de données
let myFavoriteNumber: number = 42;
let isActive: boolean = true;

// Utilisation d'une union de types
let example: string | number = '42';
console.log(myFavoriteNumber, isActive, example); // Affiche 42 true "42"

// Déclaration d'un tableau de chaînes de caractères
const mesAlcools: string[] = ['Chartreuse', 'Rhum'];

// Déclaration d'un tableau avec des types variés
const monFourreTout: Array<string | number> = [42, 'banane', 45, 53];

// Déclaration d'un tuple
// Un tuple en TypeScript est une structure de données qui permet de stocker un nombre fixe d'éléments, dont les types peuvent être différents. Contrairement aux tableaux où vous accédez aux éléments en utilisant leur indice numérique, dans un tuple, vous accédez aux éléments en utilisant leur position dans le tuple.
const tuple: [number, string] = [42, 'H2G2'];

// Déclaration d'un objet JavaScript
const player: object = {
    name: 'Dramix',
    toString: () => "Player: Dramix",
};

// Déclaration d'un objet avec propriétés optionnelles
const couleurRGB: {
    rouge: number,
    vert: number,
    bleu: number,
    opacity?: number, // Propriété optionnelle
} = {
    rouge: 255,
    bleu: 255,
    vert: 0,
    opacity: 1 // Propriété optionnelle peut être omise
};

// Définition de l'énumération Roles
enum Roles {
    User = 'user',
    Admin = 'admin'
}
// Utilisation d'une énumération
const adminRole: Roles = Roles.Admin;
console.log(adminRole);

// Définition de fonctions
function sum(number1: number, number2: number): number {
    return number1 + number2;
}

// Définition d'une fonction qui ne retourne rien
function bark(): void {
    console.log('bark');
    return; // Facultatif car la fonction retourne void
}

// Utilisation d'une fonction avec union de types
function weirdSum(number1: string | number, number2: number): number {
    if (typeof number1 === 'string') {
        number1 = Number(number1);
    }
    return number1 + number2;
}

// Appels de fonctions
bark();
weirdSum(47, 64);

// Définition d'une fonction avec paramètres optionnels
function stringify(nbr: number, lastArg?: boolean, turnToSentence?: boolean) {
    if (turnToSentence) {
        return `${nbr} est un nombre`;
    }
    return nbr.toString();
}

// Appels de fonction avec paramètres optionnels
const nbrAsString = stringify(42);
const nbrAsSentence = stringify(42, undefined, true);
const nbrTest = stringify(42, true);

// Utilisation d'une fonction avec un nombre variable d'arguments
function infiniteSum(...numberList: number[]) {
    let result = 0;
    for (const nbr of numberList) {
        result += nbr;
    }
    return result;
}

// Appels de fonction avec un nombre variable d'arguments
infiniteSum(2, 2, 4);
infiniteSum(40, 2);
infiniteSum(40, 40, 160, 1097);

// Utilisation du type "any"
const manierePasTop: any = 'pas terrible';

// Utilisation du type "unknown"
let mieuxGerer: unknown = 'inconnu';

if (typeof mieuxGerer === 'string') {
    mieuxGerer = mieuxGerer.toUpperCase();
}
console.log(manierePasTop);

// Définition et utilisation d'une fonction avec une fonction de rappel
export function gift(age: number, openGift: (name: string, age: number) => void) {
    openGift('chatGpt', age);
}

gift(1, (name: string, age: number) => {
    console.log(`Joyeux anniversaire ${name}, tu as ${age} ans`);
    return;
});

// Utilisation des assertions de type
const variableInconnu: unknown = "banane";
const password: string = variableInconnu as string;

// Déclaration de types personnalisés avec "type"
type ViewMode = 'List' | 'Grid' | "Kanban";

type User = {
    firstName: string,
    lastName: string,
    age: number
};

// Utilisation des types personnalisés
const viewMode: ViewMode = 'Grid';
const nouvelleUtilisateur: User = {
    firstName: 'Romain',
    lastName: 'Verliefden',
    age: 25,
};

// Utilisation de "keyof" pour obtenir les clés d'un type
const userProperty: keyof User = 'firstName';

// Utilisation de "Partial" et "Record"
const partialUser: Partial<User> = { firstName: "Goooo" };
const record: Record<string, number> = { id: 4 };

// Affichage des résultats
console.log(viewMode, nouvelleUtilisateur, userProperty, partialUser, record);
