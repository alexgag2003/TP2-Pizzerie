class Cercle{
    constructor(point, rayon){
        this.point=point;
        this.rayon=rayon;
    }


        perimetre(){
            return 2 * Math.PI *this.rayon;
        }
}