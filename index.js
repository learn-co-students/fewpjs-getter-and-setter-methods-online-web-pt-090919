// Add your Circle class here
let pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius;
      };

    get diameter() {
        return this.radius * 2;
      };
    
    get circumference() {
        return this.radius * 2 * pi;
      };   

    get area() {
        return pi * this.radius * this.radius;
      };    

    set diameter(newdiameter) {
        this.radius = newdiameter / 2;
      };
    
    set circumference(newcircumference) {
        this.radius = newcircumference / ( 2 * pi);
      }; 

}