var jeunescout= {
    nom: "Christian vigouroux",
    age: 8,
    sexe: "M",
    groupeMixte: false, 
    unite: ""
    
}

// console.log(jeunescout);
// console.log(jeunescout.age);
if(isNaN(jeunescout.age)){
    console.log("age invalide");
}else{

if(7 <= jeunescout.age <= 8 && jeunescout.sexe == "M") {
    if(jeunescout.sexe == "F" && !jeunescout.groupeMixte)
     jeunescout.unite = "Hirondelle";

    else 
    jeunescout.unite = "castor";
}


     
         if (9 < jeunescout.age < 11 && jeunescout.sexe == "M" ){
        jeunescout.unite = "Louveteaux";}
    
        else
        jeunescout.unite = "exploratrice";
      

    
    
    
        if (12 <= jeunescout.age <= 14 && jeunescout.sexe == "M" ){
        jeunescout.unite="Éclaireur";}
        else
        jeunescout.unite = "intrépide";

    
     
      if (15 <= jeunescout.age <= 16 && jeunescout.sexe == "M" ){
        jeunescout.unite="pionniers";}

     else
     console.log ("Pas si jeune!");
             

    }   
    console.log(jeunescout.unite);