// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
function Grid() {
    const size = 8; // Logic for displaying grid with the dimensions of the grid being 8x8
  
    for (let row = 0; row < size; row++) {
      let rowStr = ''; // For loop that iterates over each row of the grid, going up to a value of 7 (from 0 since there are 8 values)
  
      for (let col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
          rowStr += '#';
        } else {
          rowStr += ' ';
        } // For loop going from 0 to 7, putting even values and odd values in different spots to create the alternating pattern
      }
      
      console.log(rowStr);
    } // Associates "rowStr" to the console
}
Grid(); // Displays the patterned grid to the console