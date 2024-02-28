// Définition d'une interface Fruit
interface Fruit {
    color: string; // Propriété représentant la couleur du fruit
    size: string; // Propriété représentant la taille du fruit
    getDescription: () => string; // Méthode qui renvoie une description du fruit
}

// Définition d'une classe Pomme qui implémente l'interface Fruit
class Pomme implements Fruit {
    color: string; // Propriété représentant la couleur de la pomme
    acidityLevel: string | undefined; // Niveau d'acidité de la pomme (optionnel)

    // Constructeur de la classe Pomme
    constructor(color: string, public size: string) {
        this.color = color;
    }

    // Méthode de l'interface Fruit pour obtenir la description de la pomme
    getDescription() {
        return `Je suis une pomme ${this.color}. Je mesure ${this.size}`;
    }
} 

// Instanciation d'objets de la classe Pomme
const pinkLady = new Pomme("jaune et rouge", "une demi-souris logitech de haut");
pinkLady.acidityLevel = undefined;

const pommeApple = new Pomme("grise","un quart de souris logitech");
pommeApple.acidityLevel = '0, ça ne se mange pas. C\'est un logo :/';

// Affichage des descriptions des pommes
console.log(pinkLady.getDescription());
console.log(pommeApple.getDescription());

// Définition d'une classe Poire qui implémente l'interface Fruit
class Poire implements Fruit {
    // Constructeur de la classe Poire
    constructor(public color: string, public size: string) {}

    // Méthode de l'interface Fruit pour obtenir la description de la poire
    getDescription() {
        return `Je suis une poire ${this.color} et de taille ${this.size}`;
    }
}

// Création d'un objet respectant l'interface Fruit
const Pêche: Fruit =  {
    color: 'pêche',
    size: '1/3 de souris logitech',
    getDescription: () => {
        return 'je suis une pêche';
    }
}

// Fonction prenant un objet respectant l'interface Fruit comme argument et affichant sa couleur
function logFruitColor(fruit: Fruit) {
    console.log('couleur :', fruit.color);
}

// Appels de la fonction avec différents objets (instances de classe et objet littéral)
logFruitColor(Pêche); // Affiche la couleur de la pêche
logFruitColor(pinkLady); // Affiche la couleur de la pomme de Bruno
