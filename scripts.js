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
/*
 var Animal = function() {
    var type = "cat";
    var breed = "Maine Coon";
    var color = "black";
    var height = "14 in";
    var length = "20 in";
    this.checkType = function() {   // not happy with this since it is privileged not private
        if (type == "dog") {
            return "dog";
        } else {
            return "cat";
        }
    }
}
Animal.prototype.speak = function() {
    window.console.log("The " + this.checkType() + " has made a noise!")
}
var kuber = new Animal();
kuber.speak();
*/
// STEP 10
/*
String.prototype.findWords = function() {
    this.text = text.toString().toLowerCase();
    window.console.log(this.text);
    var word = prompt("What word are you looking for?").toLowerCase();
    var patt1 = new RegExp(word, "g");
    var matches = this.text.match(patt1);
    if (matches === null) {
        window.console.log("The word \'" + word + "\' is not in this paragraph.")
    } else {
        window.console.log("The word \'" + word + "\' is in this paragraph " + matches.length + " times.");
    }
}

var text = "My dog is better than all of the other dogs at the Fiesta Island Dog Park.";
text.findWords();
*/
// THE RECIPE CARD
/*
var Recipe = function() {
    this._title = arguments[0];
    this._servings = arguments[1];
    this._ingredients = [];
    var i = 2;
    for (i; i < arguments.length; i++) {
        this._ingredients[i - 2] = arguments[i];
    }
    window.console.log(this._ingredients);
};
Recipe.prototype.displayInfo = function() {
    window.console.log(this._title + "\nServes: " + this._servings + "\nIngredients:\n");
    for (var item in this._ingredients) {
        window.console.log("- " + this._ingredients[item] + "\n");
    }
}
var gaucamole = new Recipe("Guacamole", 4, "3 Avocados", "1 Lime", "1 tsp Salt", "1/2 cup Onion", "3 Tbls Cilantro", "2 Diced Tomatoes", "1 tsp Garlic", "1 pinch Ground Pepper")
gaucamole.displayInfo();
*/
// THE READING LIST
/*
var Book = function(title, author, alreadyRead) {
    this._title = title;
    this._author = author;
    this._alreadyRead = alreadyRead;
}
var book1 = new Book("Finding Your Way in a Wild New World", "Martha Beck", false);
var book2 = new Book("Spiritually Incorrect Enlightenment", "Jed McKenna", true);
var book3 = new Book("Spiritual Warfare", "Jed McKenna", true);
var book4 = new Book("Zen and the Art of Falling in Love", "Brenda Shoshanna", true);
var book5 = new Book("A Thousand Names for Joy", "Byron Katie", true);
var bookLog = [book1, book2, book3, book4, book5];
for (i in bookLog) {
    window.console.log(bookLog[i]._title + " by " + bookLog[i]._author);
    if (bookLog[i]._alreadyRead === true) {
        window.console.log("You already read " + bookLog[i]._title + " by " + bookLog[i]._author);
    } else {
        window.console.log("You still need to read " + bookLog[i]._title + " by " + bookLog[i]._author);
    }
}
*/










