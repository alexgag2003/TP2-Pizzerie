class Cercle{
    constructor(point, rayon){
        this.point=point;
        this.rayon=rayon;
    }


        perimetre(){
            return 2 * Math.PI *this.rayon;
        }

        aire(){
            return Math.PI * (this.rayon **2);
        }
}
var point1 = new Point(2,2)
var cercle = new  cercle(point1)