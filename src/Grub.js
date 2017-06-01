var Grub = function() {
  // this = Object.create(Grub.prototype);
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly'; //could move all these down to be in the prototype
  // this.eat = function(){};
};

  Grub.prototype.eat = function(){}; 


// Create a Grub class, in pseudoclassical style, with:
// an age property that is set to 0
// a color property that is set to pink
// a food property that is set to jelly
// an eat method
