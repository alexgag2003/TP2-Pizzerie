var noms = ["Mathieu", "Nicole", "Anne", "Gérard", "Christian", "André"];

function tirage(tableau){
    if(tableau.length>0){
    var index = Math.floor(Math.random() * tableau.length);
    console.log("Le nom gagnant est: " + tableau[index]);
    } else{
        console.log("Le tableau est vide");
    }
}

tirage(noms);
tirage(noms);
tirage(noms);
