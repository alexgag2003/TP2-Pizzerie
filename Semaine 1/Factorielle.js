var nombre = 5;
var factorielle = 1;

while(nombre > 1){
    //factorielle = factorielle * nombre;
    //nombre = nombre - 1;
    factorielle *= nombre;
    nombre--;
}
console.log(factorielle);


