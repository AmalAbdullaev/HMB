export  class Song{
    constructor(song_gif_file,song_mp3_file){
       this.song_gif_file = song_gif_file;
       this.song_mp3_file = new Audio();
       this.song_mp3_file.src = song_mp3_file;
    }
}