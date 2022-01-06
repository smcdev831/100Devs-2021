//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixTvShow{
  constructor(genre,title,esrb,rating){
    this.genre = genre
    this.title = title
    this.esrb = esrb
    this.rating = rating}

  addToList(){
    alert('Added to list')
  }

  play(){
    alert('Show is starting')
  }

  pause(){
    alert('Show is paused')
  }
}

let areYouAfraidOfTheDark = new NetflixTvShow('Spoopy', 'Are you afraid of the dark', 'G', 'Awesome')
