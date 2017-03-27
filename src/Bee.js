var Bee = function() {
  // Grub.call(this)

  // this.age = 5;
  this.color = 'yellow';
  // this.food = inherited;
  this.eat; //= function inherited;
  this.job; // = set to keep growing

  return this;
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
Bee.prototype.age = 5;

// Bee.prototype.
// Create a Bee class, in pseudoclassical style, with:
// call the Grub superclass
// set the prototype
// set the constructor
// an age property that is set to 5
// a color property that is set to yellow
// a food property that is inherited from grub
// an eat method that is inherited from grub
// a job property that is set to keep on growing
