// Fonction returnArg qui prend n'importe quel type d'argument et le retourne tel quel
function returnArg(arg: unknown) {
    return arg;
}

// Interface Formation représentant une formation avec un sujet et une liste de chapitres
interface Formation {
    subject: string;
    chapters: string[];
}

// Définition d'une formation TypeScript
const formationTypescript: Formation = {
    subject: 'typescript',
    chapters: ['Types', 'Class', 'Generic']
}

// Appel de la fonction returnArg avec la formation TypeScript et affichage de son sujet
const newVar = returnArg(formationTypescript);
console.log(formationTypescript.subject);

// Fonction returnArgGeneric utilisant un type générique pour garantir le type de retour
function returnArgGeneric<T>(arg: unknown) {
    return arg as T;
}

// Appel de returnArgGeneric avec la formation TypeScript et affichage de son sujet
const copyOfTypescriptFormation = returnArgGeneric<Formation>(formationTypescript);
console.log(copyOfTypescriptFormation.subject);

// Fonction returnArgGenericMagic qui utilise directement un type générique comme argument
function returnArgGenericMagic<T>(arg: T) {
    return arg;
}

// Appel de returnArgGenericMagic avec la formation TypeScript
const copyOfFormationAgain = returnArgGenericMagic(formationTypescript);

// Interface JsonApiResponse avec un type générique pour les attributs
interface JsonApiResponse<TypeGeneric extends Object>{
    id: string;
    type: string;
    attributes: TypeGeneric;
}

// Interface représentant la réponse d'un utilisateur
interface UserResponse {
    firstName: string;
    email: string;
    password: string;
}

// Exemple de réponse d'API JSON pour un utilisateur
const apiResponseForUser: JsonApiResponse<UserResponse> = {
    id: '4',
    type: "users",
    attributes: {
        firstName: "marc",
        email: "marc@zuc.facebook",
        password: "monMotDePasse"
    }
}

// Accès à l'attribut firstName de la réponse API utilisateur et affichage
console.log(apiResponseForUser.attributes.firstName);

// Interface BaseResponse représentant une réponse de base avec un statut et une valeur inconnue
interface BaseResponse {
    status: number;
    value: unknown;
}

// Fonction logResponse qui prend une réponse générique et l'affiche
function logResponse<T extends BaseResponse>(response: T) {
    console.log(response);
}

// Interface bananaResponse étendant BaseResponse avec une valeur spécifique "banana"
interface BananaResponse extends BaseResponse {
    value: "banana";
}

// Exemple d'appel à logResponse avec une réponse de type bananaResponse
logResponse<BananaResponse>({
    status: 200,
    value: "banana"
})

// Classe générique Stack représentant une pile
class Stack<T> {
    values: T[] = [];

    // Méthode pour ajouter un nouvel objet à la pile
    add(newObject: T) {
        this.values.push(newObject);
    }

    // Méthode pour obtenir la pile sous forme de tableau
    getArray(): T[] {
        return this.values;
    }
}

// Création d'une pile de mots et ajout d'un mot
const wordStack = new Stack<string>();
wordStack.add("bye");

// Création d'une pile de nombres et ajout d'un nombre
const lottoNumbers = new Stack<number>();
lottoNumbers.add(42);

// Obtention d'une copie de la pile de mots sous forme de tableau de chaînes de caractères
const copyOfWordStack: string[] = wordStack.getArray();
