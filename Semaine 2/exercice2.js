class Personne {
constructor(nom, prenom, age){
    this.nom = nom
    this.prenom = prenom
    this.age = age
}


biographie (){
    return this.prenom + ", "+  this.nom + ", " + this.age;
} 
vieillir(){
    this.age += 1;
    }
}
personne1 = new Personne("Bélanger", "Sandra", 21 );
personne2 = new Personne("Denis", "Karine", 28)


console.log(personne1.biographie());
personne1.vieillir();
console.log("un an plus tard: " + personne1.age);

console.log(personne2.biographie());
personne2.vieillir();
console.log("un an plus tard: " + personne2.age);



class Rectangle {
constructor (largeur, longueur, aire, perimetre) {
    this.largeur = largeur;
    this.longueur = longueur;
    this.aire= largeur*longueur;
    this.perimetre= (largeur + longueur) * 2;
}
}

//Mesure des 2 rectangles
premierRectangle= new Rectangle (3, 30)
deuxiemeRectangle= new Rectangle (1, 8)

//afficher aire et prérimetre

console.log("aire du premier Rectangle: " + premierRectangle.aire);
console.log("aire du deuxième Rectangle: " + deuxiemeRectangle.aire);

console.log("perimetre du premier Rectangle: " + premierRectangle.perimetre);
console.log("perimetre du deuxième Rectangle: " + deuxiemeRectangle.perimetre);



//version prof

class Rectangle1{
    constructor(longueur1, largeur1){
        this.longueur1 = longueur1;
        this.largeur1 = largeur1;
    }
     perimetre1(){
        return (this.largeur1 + this.longueur1)*2;
    }
     aire1(){
        return this.largeur1 * this.longueur1;
    }
}
//Code de test
//var rectangles1 = new Rectangle1();
//rectangles1.longueur1 = 8;
//rectangles1.largeur1 = 8;
//console.log(rectangles1.longueur1 * rectangles1.largeur1);

var rectangle1 = new Rectangle1(8,8)
console.log("Perimètre: " + rectangle1.perimetre1());
console.log("Aire: " + rectangle1.aire1());




//Exercise 5 : livre

class Auteur{

    constructor(nom, prenom, email){
        this.nom = nom;
        this.prenom = prenom;
        this.email= email;
    }

    nomComplet(){
        return this.prenom + ", " + this.nom;
    }
}

class livre{
    constructor(auteur, titre, annee, maisonEdition, quantiteInventaire, prix){
        this.auteur= auteur;
        this.titre= titre;
        this.annee= annee;
        this.maisonEdition= maisonEdition;
        this.quantiteInventaire= quantiteInventaire;
        this.prix= prix;
    }
    
    information(){
        return this.auteur.nomComplet() + 
        " '" + this.titre + "'" +
         " Qté: " + this.quantiteInventaire +
         " prix: " + this.prix + "$" ;
    }

    augmenterQuantite(nombreSupplementaire){
        this.quantiteInventaire += nombreSupplementaire;

    }

    diminuerQuantite(nombreEnMoins){
        this.quantiteInventaire -= nombreEnMoins;

    }

    changerprix(nouveauPrix){
        this.prix= nouveauPrix;

    }
}
//test

var auteur1 = new Auteur("Smith", "Charles", "cs@gmail.com");
console.log(auteur1.nomComplet()); 

var livre1 = new livre(auteur1, "Les enfants", 2017, "Les petits soleils", 4, 10);

//console.log(livre1.auteur1.nomComplet());
console.log(livre1.information());
livre1.augmenterQuantite(5);
console.log(livre1.information());
livre1.diminuerQuantite(2);
console.log(livre1.information());
livre1.changerprix(17);
console.log(livre1.information());

console.log(auteur1);
console.log(livre1);

