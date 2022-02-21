class EmployeUniversite{
    constructor(nom, prenom, numeroEmploye , anneesExperience){
        this.nom = nom;
        this.prenom = prenom;
        this.numeroEmploye = numeroEmploye;
        this.anneesExperience = anneesExperience;
    }
    augmenterAnciennete(nombreAnnee){
        this.anneesExperience += nombreAnnee;
    }
    nomComplet(){
        return this.prenom + ", " + this.nom;
    }
}

class EmployeUniversiteProfesseur extends EmployeUniversite{
     constructor(nom, prenom, numeroEmploye, anneesExperience, salaire, cours){
        super(nom, prenom, numeroEmploye, anneesExperience)
        this.salaire = salaire;
        this.cours = cours;
    }
    ajouterUnCours(nouveauCours){
        this.cours[this.cours.lenght] = nouveauCours;
    }
}

//test
var eu1 = new EmployeUniversite("Tremblay", "Jean", " E0001", 5);
console.log(eu1);
console.log(eu1.nomComplet());
eu1.augmenterAnciennete(3);
console.log(eu1);

var eup1 = new EmployeUniversiteProfesseur("Tremblay jr.", "Louis", "E005", 1, 75, ["Math", "physique"]);

console.log(eup1);
eup1.augmenterAnciennete(1);
console.log(eup1);
eup1.ajouterUnCours("2RP");
console.log(eup1);

