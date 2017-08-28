/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Spinal Tap Case

  instructions:

  Convert a string to spinal case. 
  Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
    
}
  
// some testing
console.log(spinalCase('This Is Spinal Tap')); // should return "this-is-spinal-tap".
console.log(spinalCase('thisIsSpinalTap')); // should return "this-is-spinal-tap".
console.log(spinalCase('The_Andy_Griffith_Show')); // should return "the-andy-griffith-show".
console.log(spinalCase('Teletubbies say Eh-oh')); // should return "teletubbies-say-eh-oh".
console.log(spinalCase('AllThe-small Things')); // should return "all-the-small-things".