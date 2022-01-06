//Create an array of movies with at least three movies.
let movies = ["Gone With The Wind", "Driving Miss Daisy", "Shawshank Redepmtion", "Big Fish"];
//Using the array from above, store the first movie in a variable
let movieOne = movies[0];
//Get the length of the original array and store it in a new variable
let numOfMovies = movies.length;
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let movieLast = movies[numOfMovies - 1];

console.log(numOfMovies)
console.log(movieLast)
