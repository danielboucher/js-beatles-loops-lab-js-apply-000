// add solution here
// * Create a variable with an empty array.
// var solution = [];
// let musicians = [John, Paul, George, Ringo];
// let instuments = [Guitar, Piano, Bass, Drums];
//
// function
// for (var musicians = 0; i <= length.musicians - 1; musicians++);
// console.log(musicians);

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Star"];
var instruments = ["rhythm guitar", "bass guitar", "lead guitar", "drums"];
var combined = musicians.concat(instruments);
var solution = [];


function theBeatlesPlay() {
  for (var i = 0; i < combined.length; i++) {
    console.log(theBeatlesPlay(0) + " plays " + theBeatlesPlay(4) + "."]);
  }
}

// * Use a `for loop`, which iterates over the array of musicians. Be careful
//   about what value you set your `counter` variable to store. (Hint: Think
//   about what the first index of an array is).
// * The first time through the loop, it should create a string using the _first_
//   index of the musicians array **and** the first index of the instruments
//   array: `"John Lennon plays guitar"`.
// * Add this string to the empty array you created. The loop should make the
//   same sentence for every member of the musicians array.
// * The function should return the array of new strings containing what
//   instruments each musician plays.
