console.log("Bonjour");

var auto = "Toyota";

console.log(typeof(auto));
//string

auto = 2019;

console.log(typeof(auto));
//number

var Auto = true;
console.log(typeof(Auto));
//boolean

console.log(1<2>1);


var Tableau = [4, 2, 3];
console.log(typeof(Tableau));
console.log(Tableau[0]);
console.log(Tableau[1]);
console.log(Tableau[2]);
Tableau[0]=true;
console.log(Tableau[0]);
console.log("taille tableau: " + Tableau.length);

Tableau[3]=4.5;
console.log(Tableau[3]);
//taille tableau: 4.5
console.log("taille tableau: " + Tableau.length);
//[ true, 2, 3, 4.5 ]

console.log(Tableau);
//[ true, 2, 3, 4.5 ]


var valeur;
console.log(typeof(valeur));
//undefined

valeur = undefined; //valeur undefined
console.log(valeur);

valeur = null; //valeur null
console.log(valeur);

//undefined espace dans la memoire, mais il y a contenant, mais pas d'étiquette
//null, etiquette, mais pas de contenant

//Type
//Primitif= string, number, boolean, undefined, null
//complex= object(tableau liste, objet, null), function


var etudiant = {nom: "Vigouroux", prenom: "Christian", programme: "informatique"};
console.log(etudiant);
//console.log(etudiant["nom"]);
console.log(etudiant.nom);// Meme chose que console.log(etudiant["nom"]); sauf plus pratique

// = comparer
// == comparer 
// === comparer avec meme type et valeur
// !=   différent
// !==  différent valeur
// &    ET
// ||   OU
// 2**4 = 2 exposant 4

console.log(5 + 2 + "salut"); //7salut
console.log("salut" + 5 + 2); //salut52
console.log("5+2+salut"); //5+2+salut

//JS fait des contatétations de droite à gauche


