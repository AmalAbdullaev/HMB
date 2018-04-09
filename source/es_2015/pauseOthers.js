'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pauseOthers = pauseOthers;
//отключает участников

function pauseOthers(draggedId) {
    if ('box1' == draggedId) {
        return manDancer.stop_dance_gif_file;
    }
    if ('box2' == draggedId) {
        return womanDancer.stop_dance_gif_file;
    }
    if ('box3' == draggedId) {
        manSinger.pausePlaySong();
        return manSinger.stop_song_gif_file;
    }
    if ('box4' == draggedId) {
        womanSinger.pausePlaySong();
        return womanSinger.stop_song_gif_file;
    }
    if ('box5' == draggedId) {
        accordeonPlayer.pause();
        return accordeonPlayer.stopPlayOnInstrumentGifFile;
    }
    if ('box6' == draggedId) {
        bassPlayer.pause();
        return bassPlayer.stopPlayOnInstrumentGifFile;
    }
    if ('box7' == draggedId) {
        davulPlayer.pause();
        return davulPlayer.stopPlayOnInstrumentGifFile;
    }
    if ('box8' == draggedId) {
        guitarPlayer.pause();
        return guitarPlayer.stopPlayOnInstrumentGifFile;
    }
    if ('box9' == draggedId) {
        violinPlayer.pause();
        return violinPlayer.stopPlayOnInstrumentGifFile;
    }
    if ('box10' == draggedId) {
        pipePlayer.pause();
        return pipePlayer.stopPlayOnInstrumentGifFile;
    }
    if ('box11' == draggedId) {
        saxPlayer.pause();
        return saxPlayer.stopPlayOnInstrumentGifFile;
    }
    if ('box12' == draggedId) {
        sazPlayer.pause();
        return sazPlayer.stopPlayOnInstrumentGifFile;
    }
    if ('box13' == draggedId) {
        synthesizerPlayer.pause();
        return synthesizerPlayer.stopPlayOnInstrumentGifFile;
    }
}