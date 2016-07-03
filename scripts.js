// STEP 1
/*
var ANIMAL = ANIMAL || {};
ANIMAL.Cat = function() {};
ANIMAL.Dog = function() {};
*/
// STEP 2
/*
var Cat = {};
var Dog = function() {};
*/
// STEP 3
/*
var marley = new Dog();
*/
// STEP 4
/*
var Animal = function() {
    window.console.log("The Animal has been created");
}
var cat = new Animal();
*/
// STEP 5
/*
var Animal = function(species) {
    this._species = species;
    window.console.log(this._species);
}
var cat = new Animal("feline");
*/
// STEP 6
/*
var Animal = function(type, breed, color, height, length ) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}
var kuber = new Animal("cat", "Maine Coon", "black", "14 in", "20 in");

// STEP 7

var i = 0;
for (i in kuber) {
    window.console.log(kuber[i]);
}

// STEP 8

Animal.prototype.speak = function() {
    if (this._type == "dog") {
        alert("The " + this._color + " dog is barking!")
    } else if (this._type == "cat") {
        alert("The " + this._color + " cat is meowing!")
    }
}
window.console.log(kuber.speak());
*/
// STEP 9

 var Animal = function() {
    var type = "cat";
    var breed = "Maine Coon";
    var color = "black";
    var height = "14 in";
    var length = "20 in";
    this.checkType = function() {
        if (type == "dog") {
            var _type =  "dog";
        } else {
            var _type = "cat";
        }
    return _type;
    }
}
Animal.prototype.speak = function() {
    window.console.log("The " + this.checkType() + " has made a noise!")
}
var kuber = new Animal();
kuber.speak();









