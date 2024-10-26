// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
function displayTriangle() {
    const maxRows = 4; // Logic to display a triangle to the console with the max rows set to 4
  
    for (let i = 1; i <= maxRows; i++) {
      console.log('#'.repeat(i));
    } // Increments i until it is less than or equal to maxRows, then repeats the "#" 4 times (represented by "i")
  
    for (let i = maxRows - 1; i >= 1; i--) {
      console.log('#'.repeat(i));
    }
} // Similar to the previous set of commands, but for descending the amount of "#" outputted to each row of the console
  
displayTriangle(); // Displays the hashtag triangle shape to the console