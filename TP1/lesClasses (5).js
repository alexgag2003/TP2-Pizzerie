t//Travail de Jordan Noël et Alexandre Gagnon
//TP1 Java script

//Dans un fichier lesClasses.js, créer les classes suivantes
//Chaque classe doit inclure :
//Un constructeur.
//Une méthode lireAttribut pour chacun de ses attributs qui permettront de retourner leurs valeurs.
//Une méthode modifierAttribut pour chacun de ses attributs qui permettront de saisir leurs valeurs.

//création de la classe artiste et ses méthodes
class Artiste{
    constructor(nom, prenom, nationalite) {
        this.nom = nom;
        this.prenom = prenom;
        this.nationalite = nationalite;
    }
    modifierNom(nouveauNom) {
        this.nom = nouveauNom;
    }
    modifierPrenom(nouveauPrenom) {
        this.prenom = nouveauPrenom;
    }
    modifierNationalite(nouveauNationalite) {
        this.nationalite = nouveauNationalite;
    }
    lireNom() {
        return this.nom  
    }
    lirePrenom() {
        return this.prenom
    }
    lireNationalite() {
        return this.nationalite
    }
}
//création de la classe acteur et ses méthodes
class Acteur extends Artiste{
    constructor(nom, prenom, nationalite, role, langue){
        super(nom, prenom, nationalite)
        this.role = role;
        this.langue = langue;
    }
    modifierRole(nouveauRole) {
        this.role = nouveauRole;
    }
    modifierLangue(nouveauLangue) {
        this.langue = nouveauLangue;
    }

    lireRole() {
        return this.role
    }
    lireLangue() {
        return this.langue
    }
}
//création de la classe realisateur et ses méthodes
class Realisateur extends Artiste{
    constructor(nom, prenom, nationalite, profession, anneesExperience){
        super(nom, prenom, nationalite)
        this.profession = profession
        this.anneesExperience = anneesExperience
    }
    modifierProfession(nouveauProfession) {
        this.profession = nouveauProfession;
    }
    modifierAnneesExperience(nouveauAnneesExperience) {
        this.anneesExperience = nouveauAnneesExperience;
    }

    lireProfession() {
        return this.profession
    }
    lireAnneesExperience() {
        return this.anneesExperience
    }
}
//création de la classe film et ses méthodes
class Film{
    constructor(code, titre, duration, resume, genre, categorie, pays, annee, dateDeSortie, producteur, acteurs, Realisateur, langue, tarifDeBase){
        this.code = code
        this.titre = titre
        this.duration = duration
        this.resume = resume
        this.genre = genre
        this.categorie = categorie
        this.pays = pays
        this.annee = annee
        this.dateDeSortie = dateDeSortie
        this.producteur = producteur
        this.acteurs = acteurs
        this.Realisateur = Realisateur
        this.langue = langue
        this.tarifDeBase = tarifDeBase
    }
    modifierCode(nouveauCode) {
        this.code = nouveauCode;
    }
    modifierTitre(nouveauTitre) {
        this.titre = nouveauTitre;
    }
    modifierDuration(nouveauDuration) {
        this.duration = nouveauDuration;
    }
    modifierResume(nouveauResume) {
        this.resume = nouveauResume;
    }
    modifierGenre(nouveauGenre) {
        this.genre = nouveauGenre;
    }
    modifierCategorie(nouvelleCategorie) {
        this.categorie = nouvelleCategorie;
    }
    modifierPays(nouveauPays) {
        this.pays = nouveauPays;
    }
    modifierAnnee(nouvelleAnnee) {
        this.annee = nouvelleAnnee;
    }
    modifierDateDeSortie(nouveauDateDeSortie) {
        this.dateDeSortie = nouveauDateDeSortie;
    }
    modifierProducteur(nouveauProducteur) {
        this.producteur = nouveauProducteur;
    }
    modifierActeurs(nouveauActeurs) {
        this.acteurs = nouveauActeurs;
    }
    modifierRealisateur(nouveauRealisateur) {
        this.realisateur = nouveauRealisateur;
    }
    modifierLangue(nouvelleLangue) {
        this.langue = nouvelleLangue;
    }
    modifierTarifDeBase(nouveauTarifDeBase) {
        this.tarifDeBase = nouveauTarifDeBase;
    }
    lireCode() {
        return this.code 
    }
    lireTitre() {
        return this.titre
    }
    lireDuration() {
        return this.duration
    }
    lireResume() {
        return this.resume 
    }
    lireGenre() {
        return this.genre
    }
    lireCategorie() {
        return this.categorie
    }
    lirePays() {
        return this.pays
    }
    lireAnnee() {
        return this.annee
    }
    lireDateDeSortie() {
        return this.dateDeSortie
    }
    lireProducteur() {
        return this.producteur
    }
    lireActeurs() {
        return this.acteurs
    }
    lireRealisateur() {
        return this.realisateur
    }
    lireLangue() {
        return this.langue
    }
    lireTarifDeBase() {
        return this.tarifDeBase
    }
}
//création de la classe salle et ses méthodes
class Salle{
    constructor(code, nom, type, capacite, facteurTarif){
        this.code = code
        this.nom = nom
        this.type = type
        this.capacite = capacite
        this.facteurTarif = facteurTarif
    }
    modifierCode(nouveauCode) {
        this.code = nouveauCode;
    }
    modifierNom(nouveauNom) {
        this.nom = nouveauNom;
    }
    modifierType(nouveauType) {
        this.type = nouveauType;
    }
    modifierCapacite(nouveauCapacite) {
        this.Capacite = nouveauCapacite;
    }
    modifierFacteurTarif(nouveauFacteurTarif) {
        this.FacteurTarif = nouveauFacteurTarif;
    }
   
    lireCode() {
        return this.code
    }
    lireNom() {
        return this.nom
    }
    lireType() {
        return this.type
    }
    lireCapacite() {
        return this.capacite
    }
    lireFacteurTarif() {
        return this.FacteurTarif
    }
}
//création de la classe horaire et ses méthodes
class Horaire{
    constructor(code, heureDebut, heureFin, facteurTarif){
        this.code = code
        this.heureDebut = heureDebut
        this.heureFin = heureFin
        this.facteurTarif = facteurTarif
    }
    modifierCode(nouveauCode) {
        this.code = nouveauCode;
    }
    modifierHeureDebut(nouveauHeureDebut) {
        this.heureDebut = nouveauHeureDebut;
    }
    modifierHeureFin(nouvelleHeureFin) {
        this.heureFin = nouvelleHeureFin;
    }
    modifierFacteurTarif(nouveauFacteurTarif) {
        this.facteurTarif = nouveauFacteurTarif;
    }
    lireCode() {
        return this.code
    }
    lireHeureDebut() {
        return this.heureDebut
    }
    lireHeureFin() {
        return this.heureFin
    }
    lireFacteurTarif() {
        return this.facteurTarif
    }
}
//création de la classe projection et ses méthodes
class Projection{
    constructor(salle, film, date, horaire, tarif){
        this.salle = salle
        this.film = film
        this.date = date
        this.horaire = horaire
        this.tarif = tarif
    }
    modifierSalle(nouvelleSalle) {
        this.salle = nouvelleSalle;
    }
    modifierFilm(nouveauFilm) {
        this.film = nouveauFilm;
    }
    modifierDate(nouvelleDate) {
        this.date = nouvelleDate;
    }
    modifierHoraire(nouveauHoraire) {
        this.horaire = nouveauHoraire;
    }
    modifierTarif(nouveauTarif) {
        this.tarif = nouveauTarif;
    }

    lireSalle() {
        return this.salle
    }
    lireFilm() {
        return this.film
    }
    lireDate() {
        return this.date
    }
    lireHoraire() {
        return this.horaire
    }
    lireTarif() {
        return this.tarif
    }
}
//création de la classe reservation et ses méthodes
class Reservation{
    constructor(numeroDeReservation, projection, codeDuBillet, nomDuClient, age, telephone, adresseCourriel, codePostal, montant){
     this.numeroDeReservation = numeroDeReservation
     this.projection = projection
     this.codeDuBillet = codeDuBillet
     this.nomDuClient = nomDuClient
     this.age = age
     this.telephone = telephone
     this.adresseCourriel = adresseCourriel
     this.codePostal = codePostal
     this.montant = montant   
    }
    modifierNumeroDeReservation(NouveauNumeroDeReservation) {
        this.numeroDeReservation = NouveauNumeroDeReservation;
    }
    modifierprojection(nouvelleProjection) {
        this.projection = nouvelleProjection;
    }
    modifierCodeDuBillet(nouveauCodeDuBillet) {
        this.codeDuBillet = nouveauCodeDuBillet;
    }
    modifierNomDuClient(nouveauNomDuClient) {
        this.nomDuClient = nouveauNomDuClient;
    }
    modifierAge(nouveauAge) {
        this.age = nouveauAge;
    }
    modifierTelephone(nouveauTelephone) {
        this.telephone = nouveauTelephone;
    }
    modifierAdresseCourriel(nouveauAdresseCourriel) {
        this.adresseCourriel = nouveauAdresseCourriel;
    }
    modifierCodePostal(nouveauCodePostal) {
        this.codePostal = nouveauCodePostal;
    }
    modifierMontant(nouveauMontant) {
        this.montant = nouveauMontant;
    }
    lireNumeroDeReservation() {
        return this.numeroDeReservation
    }
    lireProjection() {
        return this.projection
    }
    lireCodeDuBillet() {
        return this.codeDuBillet
    }
    lireNomDuClient() {
        return this.nomDuClient
    }
    lireAge() {
        return this.age
    }
    lireTelephone() {
        return this.telephone
    }
    lireAdresseCourriel() {
        return this.adresseCourriel
    }
    lireCodePostal() {
        return this.codePostal
    }
    lireMontant() {
        return this.montant
    }
}