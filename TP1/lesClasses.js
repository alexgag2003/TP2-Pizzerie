class Artiste{
    constructor(nom, prénom, nationalité) {
        this.nom = nom;
        this.prénom = prénom;
        this.nationalité = nationalité;
    }
}

class acteur extends Artiste{
    constructor(rôle, langue){
        this.rôle = rôle;
        this.langue = langue;
    }
}

class Réalisateur extends Artiste{
    constructor(profession, annéesExpérience){
        this.profession = profession
        this.annéesExpérience = annéesExpérience
    }
}

class film{
    constructor(code, titre, duration, résumé, genre, catégorie, pays, année, dateDeSortie, producteur, acteurs, Réalisateur, langue, tarifDeBase){
        this.code = code
        this.titre = titre
        this.duration = duration
        this.résumé = résumé
        this.genre = genre
        this.catégorie = catégorie
        this.pays = pays
        this.année = année
        this.dateDeSortie = dateDeSortie
        this.producteur = producteur
        this.acteurs = acteurs
        this.Réalisateur = Réalisateur
        this.langue = langue
        this.tarifDeBase = tarifDeBase
    }
}

class salle{
    constructor(code, nom, type, capacité, facteurTarif){
        this.code = code
        this.nom = nom
        this.type = type
        this.capacité = capacité
        this.facteurTarif = facteurTarif
    }
}

class horaire{
    constructor(code, heureDébut, heureFin, facteurTarif){
        this.code = code
        this.heureDébut = heureDébut
        this.heureFin = heureFin
        this.facteurTarif = facteurTarif
    }
}

class Projection{
    constructor(salle, film, date, horaire, tarif){
        this.salle = salle
        this.film = film
        this.date = date
        this.horaire = horaire
        this.tarif = tarif
    }
}

class Réservation{
    constructor(numeroDeRéservation, projection, codeDuBillet, nomDuClient, âge, téléphone, adresseCourriel, codePostal, montant){
     this.numeroDeRéservation = numeroDeRéservation
     this.projection = projection
     this.codeDuBillet = codeDuBillet
     this.nomDuClient = nomDuClient
     this.âge = âge
     this.téléphone = téléphone
     this.adresseCourriel = adresseCourriel
     this.codePostal = codePostal
     this.montant = montant   
    }
}