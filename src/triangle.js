// The business logic

function Triangle(side1, side2, side3){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
}

// first method for triangle to only just return a simple message for user.... Later on we will be updating this method 
// when we start using jest

Triangle.prototype.checkType = function(){
    return "I can't answer that yet!"
};

// yay!..... Our first method for the triangle application has been written