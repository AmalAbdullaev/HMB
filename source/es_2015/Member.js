"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ManDancer = exports.ManDancer = function () {
    function ManDancer(dance) {
        _classCallCheck(this, ManDancer);

        this.dance = dance;
    }

    _createClass(ManDancer, [{
        key: "play",
        value: function play() {
            return this.dance.startDanceFile;
        }
    }, {
        key: "pause",
        value: function pause() {
            return this.dance.stopDanceFile;
        }
    }]);

    return ManDancer;
}();

var WomanDancer = exports.WomanDancer = function () {
    function WomanDancer(dance) {
        _classCallCheck(this, WomanDancer);

        this.dance = dance;
    }

    _createClass(WomanDancer, [{
        key: "play",
        value: function play() {
            return this.dance.startDanceFile;
        }
    }, {
        key: "pause",
        value: function pause() {
            return this.dance.stopDanceFile;
        }
    }]);

    return WomanDancer;
}();

var ManSinger = exports.ManSinger = function () {
    function ManSinger(song, startSingingFile, stopSingingFile) {
        _classCallCheck(this, ManSinger);

        this.song = song;
        this.startSingingFile = startSingingFile;
        this.stopSingingFile = stopSingingFile;
    }

    _createClass(ManSinger, [{
        key: "play",
        value: function play() {
            this.song.songFile.play();
            this.song.songFile.loop = true;
            return this.startSingingFile;
        }
    }, {
        key: "pause",
        value: function pause() {
            this.song.songFile.pause();
            return this.stopSingingFile;
        }
    }]);

    return ManSinger;
}();

var WomanSinger = exports.WomanSinger = function () {
    function WomanSinger(song, startSingingFile, stopSingingFile) {
        _classCallCheck(this, WomanSinger);

        this.song = song;
        this.startSingingFile = startSingingFile;
        this.stopSingingFile = stopSingingFile;
    }

    _createClass(WomanSinger, [{
        key: "play",
        value: function play() {
            this.song.songFile.play();
            this.song.songFile.loop = true;
            return this.startSingingFile;
        }
    }, {
        key: "pause",
        value: function pause() {
            this.song.songFile.pause();
            return this.stopSingingFile;
        }
    }]);

    return WomanSinger;
}();

var Musician = exports.Musician = function () {
    function Musician(instrument, startPlayFile, stopPlayFile) {
        _classCallCheck(this, Musician);

        this.instrument = instrument;
        this.startPlayFile = startPlayFile;
        this.stopPlayFile = stopPlayFile;
    }

    _createClass(Musician, [{
        key: "play",
        value: function play() {
            this.instrument.sound.play();
            this.instrument.sound.loop = true;
            return this.startPlayFile;
        }
    }, {
        key: "pause",
        value: function pause() {
            this.instrument.sound.pause();
            return this.stopPlayFile;
        }
    }]);

    return Musician;
}();

// export  class Man {
//     sing(song_gif,song_file){
//         this.song_gif = song_gif;
//         this.song_file = song_file;
//     }

//     dance(dance_gif_file){
//         this.dance_gif_file = dance_gif_file;
//     }

//     playOnInstrument(instrument_gif, instrument_mp3_file){
//         this.instrument_gif = instrument_gif;
//         this.instrument_mp3_file = instrument_mp3_file;
//     }
//     play(){
//         this.instrument_mp3_file.play();
//         this.instrument_mp3_file.loop = true;
//     }
//     pause(){
//         this.instrument_mp3_file.pause();
//     }
//     playSong(){
//         this.song_file.play();
//         this.song_file.loop = true;
//     }
//     pausePlaySong(){
//         this.song_file.pause();
//     }
// }

// export class Woman{
//     sing(song_gif, song_file){
//         this.song_gif = song_gif;
//         this.song_file = song_file;
//     }

//     dance(dance_gif_file){
//         this.dance_gif_file = dance_gif_file;
//     }
//     playSong(){
//         this.song_file.play();
//         this.song_file.loop = true;
//     }
//     pausePlaySong(){
//         this.song_file.pause();
//     }
// }