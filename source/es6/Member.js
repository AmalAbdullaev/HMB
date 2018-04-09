export class ManDancer {
    constructor(dance){
        this.dance = dance;
    }
    play(){
        return this.dance.startDanceFile;
    }
    pause(){
        return this.dance.stopDanceFile;
    }
}
export class WomanDancer {
    constructor(dance){
        this.dance = dance;
    }
    play(){
        return this.dance.startDanceFile;
    }
    pause(){
        return this.dance.stopDanceFile;
    }
}
export class ManSinger {
    constructor(song,startSingingFile,stopSingingFile){
        this.song = song;
        this.startSingingFile = startSingingFile;
        this.stopSingingFile = stopSingingFile;
    }
    play(){
        this.song.songFile.play();
        this.song.songFile.loop = true;
        return this.startSingingFile;
    }
    pause(){
        this.song.songFile.pause();
        return this.stopSingingFile;
    }
}
export class WomanSinger {
    constructor(song,startSingingFile,stopSingingFile){
        this.song = song;
        this.startSingingFile = startSingingFile;
        this.stopSingingFile = stopSingingFile;
    }
    play(){
        this.song.songFile.play();
        this.song.songFile.loop = true;
        return this.startSingingFile;
    }
    pause(){
        this.song.songFile.pause();
        return this.stopSingingFile;
    }
}
export class Musician {
    constructor(instrument,startPlayFile,stopPlayFile){
        this.instrument = instrument;
        this.startPlayFile = startPlayFile;
        this.stopPlayFile = stopPlayFile;
    }
    play(){
        this.instrument.sound.play();
        this.instrument.sound.loop = true;
        return this.startPlayFile;
    }
    pause(){
        this.instrument.sound.pause();
        return this.stopPlayFile;
    }
}