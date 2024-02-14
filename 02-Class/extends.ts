// Déclaration d'une classe abstraite Player
abstract class Player {
    // Propriété abstraite déclarée mais non définie dans cette classe
    abstract className: string;

    // Constructeur de la classe Player avec des propriétés privées et protégées
    constructor(private health: number, protected mana: number, private name: string) {
        console.log(this.name); // Affiche le nom du joueur lors de la création de l'instance
    }

    // Méthode d'attaque, réduit le mana du joueur
    attack() {
        console.log("L'attaque de base");
        this.mana -= 1; // Réduction du mana de 1 après l'attaque
    }

    // Méthode abstraite dance qui doit être implémentée dans les classes dérivées
    abstract dance: () => void;

    // Méthode abstraite wave qui doit être implémentée dans les classes dérivées
    abstract wave(): void;
}

// Déclaration d'une classe Warrior qui étend la classe Player
class Warrior extends Player {
    // Implémentation de la propriété className
    className = "Guerrier";

    // Redéfinition de la méthode attack de la classe Player
    attack() {
        // Appel de la méthode attack de la classe parent avec super
        super.attack();
        console.log('Je crie'); // Affiche un cri après l'attaque
        // Accès à la propriété protégée mana de la classe parent
        console.log(this.mana, this.className);
    }

    // Implémentation de la méthode dance
    dance = () => {
        console.log("Je danse le mia");
    }

    // Implémentation de la méthode wave
    wave() {
        console.log("Je fais coucou");
    }
}

// Création d'une instance de la classe Warrior
const garosh = new Warrior(42, 42, "Garosh");

// Appels de méthodes sur l'instance de Warrior
garosh.attack(); // Appel de la méthode d'attaque
garosh.dance(); // Appel de la méthode de danse
garosh.wave(); // Appel de la méthode de salutation
