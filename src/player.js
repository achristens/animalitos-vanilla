class Player{
  constructor(){
    this.audio = new Audio(); //this is the JS equivalent to an HTML audio tag
  }

  play(songUrl){
    this.audio.setAttribute('src', songUrl); //the audios source URL will be passed to the function, songURL
    this.audio.play(); //this actually plays the audio you are trying to play
  }
}


// This is how you would normally call and create the class instance:
// const song = new Player();
// song.play('http://somewebsite.com/song.mp3');
