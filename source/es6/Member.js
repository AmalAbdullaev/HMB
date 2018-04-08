export  class Man {
    sing(song_gif,song_file){
        this.song_gif = song_gif;
        this.song_file = song_file;
    }

    dance(dance_gif_file){
        this.dance_gif_file = dance_gif_file;
    }

    playOnInstrument(instrument_gif, instrument_mp3_file){
        this.instrument_gif = instrument_gif;
        this.instrument_mp3_file = instrument_mp3_file;
    }
    play(){
        this.instrument_mp3_file.play();
        this.instrument_mp3_file.loop = true;
    }
    pause(){
        this.instrument_mp3_file.pause();
    }
    playSong(){
        this.song_file.play();
        this.song_file.loop = true;
    }
    pausePlaySong(){
        this.song_file.pause();
    }
}

export class Woman{
    sing(song_gif, song_file){
        this.song_gif = song_gif;
        this.song_file = song_file;
    }

    dance(dance_gif_file){
        this.dance_gif_file = dance_gif_file;
    }
    playSong(){
        this.song_file.play();
        this.song_file.loop = true;
    }
    pausePlaySong(){
        this.song_file.pause();
    }
}