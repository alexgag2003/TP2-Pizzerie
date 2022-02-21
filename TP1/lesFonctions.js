function verifierEntier(entier) { 
    if (entier % 1 === 0){  //Vérifie que le nombre entré est un entier en faisant un modulo de 1 qui doit retourner 0
        return true
    } else {
        return false
    }
}

function verifierDate(date) {
    if(date.toString().length === 10){ // Vérifie que le code postal est d'une longueur de 10 caractères
        if(date.charAt(2) == '-' && date.charAt(5) == '-' ){ //Vérifie qu'au 3ième et au 6ième caractère sont des tirets.
            if((date.charAt(0) % 1 === 0 && date.charAt(1) % 1 === 0 && date.charAt(3) % 1 === 0 && date.charAt(4) % 1 === 0 //Vérifie que les autres caractères sont des nombres
                && date.charAt(6) % 1 === 0 && date.charAt(8) % 1 === 0 && date.charAt(9) % 1 === 0 )  ){ //Idem
                        
                return true

            } else {
                
            return false
        }
    } else {
        return false
    }
} 
} 


function verifierCodePostal(codePostal){
    if(codePostal.toString().length === 6){ // Vérifie que le code postal est d'une longueur de 6 caractères
        if(codePostal.charAt(1)% 1 === 0 && codePostal.charAt(3)%1 === 0 && codePostal.charAt(5) % 1 === 0){ // Vérifie si les 3 caractères qui doivent être des chiffres le sont.
            if(codePostal.charAt(0) % 1 !=0 && codePostal.charAt(2) % 1 !=0 && codePostal.charAt(4) % 1  !=0) { // Vérifie si les 3 caractères qui doivent être des lettres le sont.
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

function verifierNumeroDeTelephone(numero){
    if(numero.toString().length === 12){ // Vérifie que le numéro contient seulement 12 caractères
        if(numero.charAt(3) == '-' && numero.charAt(7) == '-' ){ //Vérifie qu'au 4ième et au 8ième caractère sont des tirets. 
            if((numero.charAt(0) % 1 === 0 && numero.charAt(1) % 1 === 0 && numero.charAt(2) % 1 === 0 && numero.charAt(4) % 1 === 0 &&  numero.charAt(5) % 1 === 0 //Vérifie que les autres caractères sont des nombres
                && numero.charAt(6) % 1 === 0 && numero.charAt(8) % 1 === 0 && numero.charAt(9) % 1 === 0 && numero.charAt(10) % 1 === 0 && numero.charAt(11) % 1 === 0 )  ){ //Idem
                        
                return true

            } else {
                
            return false
        }
    } else {
        return false
    }
} 
} 



function testTelephone(entree, attendu){

    console.log('');
    console.log('Entrée: '+ entree);
    console.log('Résultat attendu: ' + attendu);
    console.log('Résultat obtenu: ' + verifierNumeroDeTelephone(entree));
}

function testDate(entree, attendu){

    console.log('');
    console.log('Entrée: '+ entree);
    console.log('Résultat attendu: ' + attendu);
    console.log('Résultat obtenu: ' + verifierDate(entree));
}

function testCodePostal(entree, attendu){

    console.log('');
    console.log('Entrée: ' + entree);
    console.log('Résultat attendu: ' + attendu );
    console.log('Résultat obtenu: ' + verifierCodePostal(entree));
}

function testEntier(entree, attendu){
    console.log('');
    console.log('Entrée: ' + entree);
    console.log('Résultat attendu: ' + attendu);
    console.log('Résultat obtenu: ' + verifierEntier(entree));
}


testTelephone('123-456-7890', true); //Premier Test telephone
testDate('01-11-2021', true); // Premier Test Date
testCodePostal('A1B2C3', true); //Premier Test code Postal
testEntier('12', true); //Premier Test entier

testTelephone('A23-456-7890', false);// Deuxième Test Telephone
testDate('01-11-202A', false);// Deuxième Test Date
testCodePostal('11B2C3', false); // Deuxième Test code Postal 
testEntier('A', false); // Deuxième Test Entier