// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    // Diameter = radius • 2
    set diameter(diameter){
        this.radius = diameter / 2
    }

    get diameter(){
        return this.radius * 2;
    }

    // Circumference = π • diameter
    set circumference(circumference){
        this.radius = circumference / (2 * Math.PI)
    }

    get circumference(){
        return (this.radius * 2) * Math.PI;
    }

    // Area = π • radius2
    set area(area){
        this.radius = Math.sqrt(area / Math.PI)
    }

    get area(){
        return (Math.PI * (this.radius * this.radius))
    }
}