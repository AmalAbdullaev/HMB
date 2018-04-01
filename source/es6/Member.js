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
}

export class Woman{
    sing(song_gif, song_file){
        this.song_gif = song_gif;
        this.song_file = song_file;
    }

    dance(dance_gif_file){
        this.dance_gif_file = dance_gif_file;
    }
}