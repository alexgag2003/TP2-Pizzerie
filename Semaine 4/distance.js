class Point{
    constructor(coordX,coordY){
        this.coordX = coordX;
        this.coordY = coordY;
    }

    distance(autrePoint){
        return Math.sqrt((autrePoint.coordX - this.coordY)**2 + (autrePoint.coordY - this.coordY)**2);
    }
}

var point1 = new Point(2,2);
var point2 = new Point(5,6);
 

console.log("distance entre 2 points: " + point1.distance(point2));
console.log(point2);
//console.log(point1);