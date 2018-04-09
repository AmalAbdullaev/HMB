export  class Song{
    constructor(songFile){
       this.songFile = new Audio();
       this.songFile.src = songFile;
    }
}