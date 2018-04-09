(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dance = exports.Dance = function Dance(startDanceFile, stopDanceFile) {
    _classCallCheck(this, Dance);

    this.startDanceFile = startDanceFile;
    this.stopDanceFile = stopDanceFile;
};
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WindInstrument = exports.WindInstrument = function WindInstrument(sound) {
    _classCallCheck(this, WindInstrument);

    this.sound = new Audio();
    this.sound.src = sound;
};

var StringInstrumet = exports.StringInstrumet = function StringInstrumet(sound) {
    _classCallCheck(this, StringInstrumet);

    this.sound = new Audio();
    this.sound.src = sound;
};

var PercussionInstrument = exports.PercussionInstrument = function PercussionInstrument(sound) {
    _classCallCheck(this, PercussionInstrument);

    this.sound = new Audio();
    this.sound.src = sound;
};

var BowInstrument = exports.BowInstrument = function BowInstrument(sound) {
    _classCallCheck(this, BowInstrument);

    this.sound = new Audio();
    this.sound.src = sound;
};

var KeyboardInstrument = exports.KeyboardInstrument = function KeyboardInstrument(sound) {
    _classCallCheck(this, KeyboardInstrument);

    this.sound = new Audio();
    this.sound.src = sound;
};
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Song = exports.Song = function Song(songFile) {
   _classCallCheck(this, Song);

   this.songFile = new Audio();
   this.songFile.src = songFile;
};
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.openButtons = openButtons;
exports.closeButtons = closeButtons;
//solo and play кнопки чтоб появлялись и исчезали при дропах
function openButtons(draggedId) {
    for (var index = 1; index <= 13; index++) {
        if ('box' + index == draggedId) {
            document.getElementById('btnBlock' + index).style.display = 'inline-flex';
        }
    }
}

function closeButtons(draggedId) {
    for (var index = 1; index <= 13; index++) {
        if ('box' + index == draggedId) {
            document.getElementById('btnBlock' + index).style.display = 'none';
        }
    }
}
},{}],6:[function(require,module,exports){
'use strict';

var _buttons = require('./buttons.js');

var _Dancing = require('./Dancing.js');

var _Instrument = require('./Instrument.js');

var _Member = require('./Member.js');

var _Song = require('./Song.js');

var manDance = new _Dancing.Dance('url(' + "gif/5.gif" + ')', 'url(' + "stopGif/1.jpg" + ')');
var womanDance = new _Dancing.Dance('url(' + "gif/12.gif" + ')', 'url(' + "stopGif/1.jpg" + ')'); //созданы танцы

var manSong = new _Song.Song('music/boom.wav');
var womanSong = new _Song.Song('music/womsong.wav'); // созданы песни

//сменить музыку 
var accordeon = new _Instrument.KeyboardInstrument('music/boom.wav');
var synthesizer = new _Instrument.KeyboardInstrument('music/clap.wav');
var bass = new _Instrument.PercussionInstrument('music/hihat.wav');
var davul = new _Instrument.PercussionInstrument('music/clap.wav');
var guitar = new _Instrument.StringInstrumet('music/kick.wav');
var saz = new _Instrument.StringInstrumet('music/tom.wav');
var pipe = new _Instrument.WindInstrument('music/kick.wav');
var sax = new _Instrument.WindInstrument('music/clap.wav');
var violin = new _Instrument.BowInstrument('music/boom.wav'); // созданы инструменты

var womanDancer = new _Member.WomanDancer(womanDance);
var manDancer = new _Member.ManDancer(manDance); //созданые танцоры

var womanSinger = new _Member.WomanSinger(womanSong, 'url(' + "gif/1.gif" + ')', 'url(' + "stopGif/1.jpg" + ')');
var manSinger = new _Member.ManSinger(manSong, 'url(' + "gif/2.gif" + ')', 'url(' + "stopGif/1.jpg" + ')'); // созданы певцы

var accordeonPlayer = new _Member.Musician(accordeon, 'url(' + "gif/3.gif" + ')', 'url(' + "stopGif/1.jpg" + ')');
var synthesizerPlayer = new _Member.Musician(synthesizer, 'url(' + "gif/4.gif" + ')', 'url(' + "stopGif/1.jpg" + ')');
var bassPlayer = new _Member.Musician(bass, 'url(' + "gif/13.gif" + ')', 'url(' + "stopGif/1.jpg" + ')');
var davulPlayer = new _Member.Musician(davul, 'url(' + "gif/6.gif" + ')', 'url(' + "stopGif/1.jpg" + ')');
var guitarPlayer = new _Member.Musician(guitar, 'url(' + "gif/7.gif" + ')', 'url(' + "stopGif/1.jpg" + ')');
var sazPlayer = new _Member.Musician(saz, 'url(' + "gif/8.gif" + ')', 'url(' + "stopGif/1.jpg" + ')');
var pipePlayer = new _Member.Musician(pipe, 'url(' + "gif/9.gif" + ')', 'url(' + "stopGif/1.jpg" + ')');
var saxPlayer = new _Member.Musician(sax, 'url(' + "gif/10.gif" + ')', 'url(' + "stopGif/1.jpg" + ')');
var violinPlayer = new _Member.Musician(violin, 'url(' + "gif/11.gif" + ')', 'url(' + "stopGif/1.jpg" + ')'); // созданы люди играющие на инструментах


function handleDragStart(e) {
    e.dataTransfer.setData("text", this.id);
}

function handleDragEnterLeave(e) {
    if (e.type == "dragenter") {
        this.className = "drag-enter";
        var draggedId = e.dataTransfer.getData("text");
        var draggedEl = document.getElementById(draggedId);
        draggedEl.style.width = '10px';
        draggedEl.style.height = '10px';
    } else {
        this.className = "";
    }
}

var arr = [];

function handleOverDrop(e) {
    e.preventDefault();

    if (e.type != "drop") {
        return;
    }

    var draggedId = e.dataTransfer.getData("text");
    var draggedEl = document.getElementById(draggedId);

    if (draggedEl.parentNode == this) {
        this.className = "";
        return;
    }

    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl);
    this.className = "";

    //убрать потом  width and height
    draggedEl.style.width = width2(draggedId);
    draggedEl.style.height = '400px';
    draggedEl.style.float = 'inherit';
    draggedEl.style.backgroundImage = getIcon(draggedId);

    (0, _buttons.closeButtons)(draggedId);

    arr.pop();
}

function handleOverDrop2(e) {
    e.preventDefault();

    if (arr.length > 5) {
        return;
    }

    if (e.type != "drop") {
        return; //Means function will exit if no "drop" event is fired.
    }

    var draggedId = e.dataTransfer.getData("text");
    var draggedEl = document.getElementById(draggedId);

    if (draggedEl.parentNode == this) {
        this.className = "";
        return; //note: when a return is reached a function exits.
    }

    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl);
    this.className = "";

    draggedEl.style.width = '450px';
    draggedEl.style.height = '450px';

    draggedEl.style.backgroundImage = activation(draggedId);

    (0, _buttons.openButtons)(draggedId);

    arr.push(draggedId);
}
var draggable = document.querySelectorAll('[draggable]');
var targets = document.querySelectorAll('[data-drop-target]');
var targets2 = document.querySelectorAll('[data-drop-target2]');

//задаем дропы на элементы
(function () {
    for (var i = 0; i < draggable.length; i++) {
        draggable[i].addEventListener("dragstart", handleDragStart);
    }

    for (var _i = 0; _i < targets.length; _i++) {
        targets[_i].addEventListener("dragover", handleOverDrop);
        targets[_i].addEventListener("drop", handleOverDrop);
        targets[_i].addEventListener("dragenter", handleDragEnterLeave);
        targets[_i].addEventListener("dragleave", handleDragEnterLeave);
    }
    for (var _i2 = 0; _i2 < targets.length; _i2++) {
        targets2[_i2].addEventListener("dragover", handleOverDrop2);
        targets2[_i2].addEventListener("drop", handleOverDrop2);
        targets2[_i2].addEventListener("dragenter", handleDragEnterLeave);
        targets2[_i2].addEventListener("dragleave", handleDragEnterLeave);
    }
})();

//активации участника
function activation(draggedId) {

    if ('box1' == draggedId) {
        return manDancer.play();
    }
    if ('box2' == draggedId) {
        return womanDancer.play();
    }
    if ('box3' == draggedId) {
        return manSinger.play();
    }
    if ('box4' == draggedId) {
        return womanSinger.play();
    }
    if ('box5' == draggedId) {
        return accordeonPlayer.play();
    }
    if ('box6' == draggedId) {
        return bassPlayer.play();
    }
    if ('box7' == draggedId) {
        return davulPlayer.play();
    }
    if ('box8' == draggedId) {
        return guitarPlayer.play();
    }
    if ('box9' == draggedId) {
        return violinPlayer.play();
    }
    if ('box10' == draggedId) {
        return pipePlayer.play();
    }
    if ('box11' == draggedId) {
        return saxPlayer.play();
    }
    if ('box12' == draggedId) {
        return sazPlayer.play();
    }
    if ('box13' == draggedId) {
        return synthesizerPlayer.play();
    }
}

//отключает участника
function pause(draggedId) {
    if ('box1' == draggedId) {
        return manDancer.pause();
    }
    if ('box2' == draggedId) {
        return womanDancer.pause();
    }
    if ('box3' == draggedId) {
        return manSinger.pause();
    }
    if ('box4' == draggedId) {
        return womanSinger.pause();
    }
    if ('box5' == draggedId) {
        return accordeonPlayer.pause();
    }
    if ('box6' == draggedId) {
        return bassPlayer.pause();
    }
    if ('box7' == draggedId) {
        return davulPlayer.pause();
    }
    if ('box8' == draggedId) {
        return guitarPlayer.pause();
    }
    if ('box9' == draggedId) {
        return violinPlayer.pause();
    }
    if ('box10' == draggedId) {
        return pipePlayer.pause();
    }
    if ('box11' == draggedId) {
        return saxPlayer.pause();
    }
    if ('box12' == draggedId) {
        return sazPlayer.pause();
    }
    if ('box13' == draggedId) {
        return synthesizerPlayer.pause();
    }
}

function getIcon(draggedId) {
    if ('box1' == draggedId) {
        return 'url(' + "icons/icoHalpah.png" + ')';
    }
    if ('box2' == draggedId) {
        return 'url(' + "icons/icoFes.png" + ')';
    }
    if ('box3' == draggedId) {
        manSinger.pausePlaySong();
        return 'url(' + "icons/icoMicroH.png" + ')';
    }
    if ('box4' == draggedId) {
        womanSinger.pausePlaySong();
        return 'url(' + "icons/icoMicroF.png" + ')';
    }
    if ('box5' == draggedId) {
        accordeonPlayer.pause();
        return 'url(' + "icons/icoMusicAccordeon.png" + ')';
    }
    if ('box6' == draggedId) {
        bassPlayer.pause();
        return 'url(' + "icons/icoMusicBass.png" + ')';
    }
    if ('box7' == draggedId) {
        davulPlayer.pause();
        return 'url(' + "icons/icoMusicDavul.png" + ')';
    }
    if ('box8' == draggedId) {
        guitarPlayer.pause();
        return 'url(' + "icons/icoMusicGuitar.png" + ')';
    }
    if ('box9' == draggedId) {
        violinPlayer.pause();
        return 'url(' + "icons/icoMusicViolin.png" + ')';
    }
    if ('box10' == draggedId) {
        pipePlayer.pause();
        return 'url(' + "icons/icoMusicPipe.png" + ')';
    }
    if ('box11' == draggedId) {
        saxPlayer.pause();
        return 'url(' + "icons/icoMusicSax.png" + ')';
    }
    if ('box12' == draggedId) {
        sazPlayer.pause();
        return 'url(' + "icons/icoMusicSaz.png" + ')';
    }
    if ('box13' == draggedId) {
        synthesizerPlayer.pause();
        return 'url(' + "icons/icoMusicSynthesizer.png" + ')';
    }
}

//обработчики кнопок solo(on-off) and play(on-off)
(function () {
    var _loop = function _loop(index) {
        document.querySelector('#btnSoloOn' + index).addEventListener('click', function (e) {
            var arr2 = arr.slice(0, arr.length);

            var elemIndex = arr2.indexOf('box' + index);
            for (var _index = 0; _index < arr2.length; _index++) {
                if (_index != elemIndex) {
                    var elem = document.getElementById(arr2[_index]);
                    elem.style.backgroundImage = pause(arr2[_index]);
                } else {
                    var _elem = document.getElementById(arr2[_index]);
                    _elem.style.backgroundImage = activation(arr2[_index]);
                }
            }
        });
    };

    // Вешаем обработчик клика на solo  каждого участника
    for (var index = 1; index <= 13; index++) {
        _loop(index);
    }

    var _loop2 = function _loop2(index) {
        document.querySelector('#btnSoloOff' + index).addEventListener('click', function (e) {
            var arr2 = arr.slice(0, arr.length);

            var elemIndex = arr2.indexOf('box' + index);
            for (var _index2 = 0; _index2 < arr2.length; _index2++) {
                var elem = document.getElementById(arr2[_index2]);
                elem.style.backgroundImage = activation(arr2[_index2]);
            }
        });
    };

    for (var index = 1; index <= 13; index++) {
        _loop2(index);
    }
    // Вешаем обработчик клика на off  каждого участника

    var _loop3 = function _loop3(index) {
        document.querySelector('#btnPause' + index).addEventListener('click', function (e) {
            var arr2 = arr.slice(0, arr.length);

            var elemIndex = arr2.indexOf('box' + index);
            var elem = document.getElementById(arr2[elemIndex]);
            elem.style.backgroundImage = pause(arr2[elemIndex]);
        });
    };

    for (var index = 1; index <= 13; index++) {
        _loop3(index);
    }

    var _loop4 = function _loop4(index) {
        document.querySelector('#btnPlay' + index).addEventListener('click', function (e) {
            var arr2 = arr.slice(0, arr.length);

            var elemIndex = arr2.indexOf('box' + index);
            var elem = document.getElementById(arr2[elemIndex]);
            elem.style.backgroundImage = activation(arr2[elemIndex]);
        });
    };

    for (var index = 1; index <= 13; index++) {
        _loop4(index);
    }
})();

// метод возврщает иконки в исходном размере (дроп вниз), 
// когда иконки все будут одного размера нужно убрать этот метод
function width2(draggedId) {
    if ('box1' == draggedId) {
        return '300px';
    }
    if ('box2' == draggedId) {
        return '250px';
    }
    if ('box3' == draggedId) {
        return '300px';
    }
    if ('box4' == draggedId) {
        return '213px';
    }
    if ('box5' == draggedId) {
        return '500px';
    }
    if ('box6' == draggedId) {
        return '213px';
    }
    if ('box7' == draggedId) {
        return '350px';
    }
    if ('box8' == draggedId) {
        return '413px';
    }
    if ('box9' == draggedId) {
        return '400px';
    }
    if ('box10' == draggedId) {
        return '400px';
    }
    if ('box11' == draggedId) {
        return '400px';
    }
    if ('box12' == draggedId) {
        return '500px';
    }
    if ('box13' == draggedId) {
        return '400px';
    }
}
},{"./Dancing.js":1,"./Instrument.js":2,"./Member.js":3,"./Song.js":4,"./buttons.js":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FNQUwtQ09NUFVURVIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRGFuY2luZy5qcyIsIkluc3RydW1lbnQuanMiLCJNZW1iZXIuanMiLCJTb25nLmpzIiwiYnV0dG9ucy5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEYW5jZSA9IGV4cG9ydHMuRGFuY2UgPSBmdW5jdGlvbiBEYW5jZShzdGFydERhbmNlRmlsZSwgc3RvcERhbmNlRmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYW5jZSk7XG5cbiAgICB0aGlzLnN0YXJ0RGFuY2VGaWxlID0gc3RhcnREYW5jZUZpbGU7XG4gICAgdGhpcy5zdG9wRGFuY2VGaWxlID0gc3RvcERhbmNlRmlsZTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFdpbmRJbnN0cnVtZW50ID0gZXhwb3J0cy5XaW5kSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIFdpbmRJbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpbmRJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIFN0cmluZ0luc3RydW1ldCA9IGV4cG9ydHMuU3RyaW5nSW5zdHJ1bWV0ID0gZnVuY3Rpb24gU3RyaW5nSW5zdHJ1bWV0KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0cmluZ0luc3RydW1ldCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07XG5cbnZhciBQZXJjdXNzaW9uSW5zdHJ1bWVudCA9IGV4cG9ydHMuUGVyY3Vzc2lvbkluc3RydW1lbnQgPSBmdW5jdGlvbiBQZXJjdXNzaW9uSW5zdHJ1bWVudChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQZXJjdXNzaW9uSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07XG5cbnZhciBCb3dJbnN0cnVtZW50ID0gZXhwb3J0cy5Cb3dJbnN0cnVtZW50ID0gZnVuY3Rpb24gQm93SW5zdHJ1bWVudChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb3dJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIEtleWJvYXJkSW5zdHJ1bWVudCA9IGV4cG9ydHMuS2V5Ym9hcmRJbnN0cnVtZW50ID0gZnVuY3Rpb24gS2V5Ym9hcmRJbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleWJvYXJkSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE1hbkRhbmNlciA9IGV4cG9ydHMuTWFuRGFuY2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hbkRhbmNlcihkYW5jZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFuRGFuY2VyKTtcblxuICAgICAgICB0aGlzLmRhbmNlID0gZGFuY2U7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hbkRhbmNlciwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYW5jZS5zdGFydERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0b3BEYW5jZUZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWFuRGFuY2VyO1xufSgpO1xuXG52YXIgV29tYW5EYW5jZXIgPSBleHBvcnRzLldvbWFuRGFuY2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvbWFuRGFuY2VyKGRhbmNlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXb21hbkRhbmNlcik7XG5cbiAgICAgICAgdGhpcy5kYW5jZSA9IGRhbmNlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXb21hbkRhbmNlciwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYW5jZS5zdGFydERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0b3BEYW5jZUZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV29tYW5EYW5jZXI7XG59KCk7XG5cbnZhciBNYW5TaW5nZXIgPSBleHBvcnRzLk1hblNpbmdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYW5TaW5nZXIoc29uZywgc3RhcnRTaW5naW5nRmlsZSwgc3RvcFNpbmdpbmdGaWxlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW5TaW5nZXIpO1xuXG4gICAgICAgIHRoaXMuc29uZyA9IHNvbmc7XG4gICAgICAgIHRoaXMuc3RhcnRTaW5naW5nRmlsZSA9IHN0YXJ0U2luZ2luZ0ZpbGU7XG4gICAgICAgIHRoaXMuc3RvcFNpbmdpbmdGaWxlID0gc3RvcFNpbmdpbmdGaWxlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNYW5TaW5nZXIsIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0U2luZ2luZ0ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUucGF1c2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BTaW5naW5nRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYW5TaW5nZXI7XG59KCk7XG5cbnZhciBXb21hblNpbmdlciA9IGV4cG9ydHMuV29tYW5TaW5nZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29tYW5TaW5nZXIoc29uZywgc3RhcnRTaW5naW5nRmlsZSwgc3RvcFNpbmdpbmdGaWxlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXb21hblNpbmdlcik7XG5cbiAgICAgICAgdGhpcy5zb25nID0gc29uZztcbiAgICAgICAgdGhpcy5zdGFydFNpbmdpbmdGaWxlID0gc3RhcnRTaW5naW5nRmlsZTtcbiAgICAgICAgdGhpcy5zdG9wU2luZ2luZ0ZpbGUgPSBzdG9wU2luZ2luZ0ZpbGU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdvbWFuU2luZ2VyLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUubG9vcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydFNpbmdpbmdGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLnBhdXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wU2luZ2luZ0ZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV29tYW5TaW5nZXI7XG59KCk7XG5cbnZhciBNdXNpY2lhbiA9IGV4cG9ydHMuTXVzaWNpYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXVzaWNpYW4oaW5zdHJ1bWVudCwgc3RhcnRQbGF5RmlsZSwgc3RvcFBsYXlGaWxlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNdXNpY2lhbik7XG5cbiAgICAgICAgdGhpcy5pbnN0cnVtZW50ID0gaW5zdHJ1bWVudDtcbiAgICAgICAgdGhpcy5zdGFydFBsYXlGaWxlID0gc3RhcnRQbGF5RmlsZTtcbiAgICAgICAgdGhpcy5zdG9wUGxheUZpbGUgPSBzdG9wUGxheUZpbGU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE11c2ljaWFuLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudC5zb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnQuc291bmQubG9vcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydFBsYXlGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50LnNvdW5kLnBhdXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wUGxheUZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTXVzaWNpYW47XG59KCk7XG5cbi8vIGV4cG9ydCAgY2xhc3MgTWFuIHtcbi8vICAgICBzaW5nKHNvbmdfZ2lmLHNvbmdfZmlsZSl7XG4vLyAgICAgICAgIHRoaXMuc29uZ19naWYgPSBzb25nX2dpZjtcbi8vICAgICAgICAgdGhpcy5zb25nX2ZpbGUgPSBzb25nX2ZpbGU7XG4vLyAgICAgfVxuXG4vLyAgICAgZGFuY2UoZGFuY2VfZ2lmX2ZpbGUpe1xuLy8gICAgICAgICB0aGlzLmRhbmNlX2dpZl9maWxlID0gZGFuY2VfZ2lmX2ZpbGU7XG4vLyAgICAgfVxuXG4vLyAgICAgcGxheU9uSW5zdHJ1bWVudChpbnN0cnVtZW50X2dpZiwgaW5zdHJ1bWVudF9tcDNfZmlsZSl7XG4vLyAgICAgICAgIHRoaXMuaW5zdHJ1bWVudF9naWYgPSBpbnN0cnVtZW50X2dpZjtcbi8vICAgICAgICAgdGhpcy5pbnN0cnVtZW50X21wM19maWxlID0gaW5zdHJ1bWVudF9tcDNfZmlsZTtcbi8vICAgICB9XG4vLyAgICAgcGxheSgpe1xuLy8gICAgICAgICB0aGlzLmluc3RydW1lbnRfbXAzX2ZpbGUucGxheSgpO1xuLy8gICAgICAgICB0aGlzLmluc3RydW1lbnRfbXAzX2ZpbGUubG9vcCA9IHRydWU7XG4vLyAgICAgfVxuLy8gICAgIHBhdXNlKCl7XG4vLyAgICAgICAgIHRoaXMuaW5zdHJ1bWVudF9tcDNfZmlsZS5wYXVzZSgpO1xuLy8gICAgIH1cbi8vICAgICBwbGF5U29uZygpe1xuLy8gICAgICAgICB0aGlzLnNvbmdfZmlsZS5wbGF5KCk7XG4vLyAgICAgICAgIHRoaXMuc29uZ19maWxlLmxvb3AgPSB0cnVlO1xuLy8gICAgIH1cbi8vICAgICBwYXVzZVBsYXlTb25nKCl7XG4vLyAgICAgICAgIHRoaXMuc29uZ19maWxlLnBhdXNlKCk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgY2xhc3MgV29tYW57XG4vLyAgICAgc2luZyhzb25nX2dpZiwgc29uZ19maWxlKXtcbi8vICAgICAgICAgdGhpcy5zb25nX2dpZiA9IHNvbmdfZ2lmO1xuLy8gICAgICAgICB0aGlzLnNvbmdfZmlsZSA9IHNvbmdfZmlsZTtcbi8vICAgICB9XG5cbi8vICAgICBkYW5jZShkYW5jZV9naWZfZmlsZSl7XG4vLyAgICAgICAgIHRoaXMuZGFuY2VfZ2lmX2ZpbGUgPSBkYW5jZV9naWZfZmlsZTtcbi8vICAgICB9XG4vLyAgICAgcGxheVNvbmcoKXtcbi8vICAgICAgICAgdGhpcy5zb25nX2ZpbGUucGxheSgpO1xuLy8gICAgICAgICB0aGlzLnNvbmdfZmlsZS5sb29wID0gdHJ1ZTtcbi8vICAgICB9XG4vLyAgICAgcGF1c2VQbGF5U29uZygpe1xuLy8gICAgICAgICB0aGlzLnNvbmdfZmlsZS5wYXVzZSgpO1xuLy8gICAgIH1cbi8vIH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTb25nID0gZXhwb3J0cy5Tb25nID0gZnVuY3Rpb24gU29uZyhzb25nRmlsZSkge1xuICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvbmcpO1xuXG4gICB0aGlzLnNvbmdGaWxlID0gbmV3IEF1ZGlvKCk7XG4gICB0aGlzLnNvbmdGaWxlLnNyYyA9IHNvbmdGaWxlO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMub3BlbkJ1dHRvbnMgPSBvcGVuQnV0dG9ucztcbmV4cG9ydHMuY2xvc2VCdXR0b25zID0gY2xvc2VCdXR0b25zO1xuLy9zb2xvIGFuZCBwbGF5INC60L3QvtC/0LrQuCDRh9GC0L7QsSDQv9C+0Y/QstC70Y/Qu9C40YHRjCDQuCDQuNGB0YfQtdC30LDQu9C4INC/0YDQuCDQtNGA0L7Qv9Cw0YVcbmZ1bmN0aW9uIG9wZW5CdXR0b25zKGRyYWdnZWRJZCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCdib3gnICsgaW5kZXggPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQmxvY2snICsgaW5kZXgpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZUJ1dHRvbnMoZHJhZ2dlZElkKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBpZiAoJ2JveCcgKyBpbmRleCA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5CbG9jaycgKyBpbmRleCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYnV0dG9ucyA9IHJlcXVpcmUoJy4vYnV0dG9ucy5qcycpO1xuXG52YXIgX0RhbmNpbmcgPSByZXF1aXJlKCcuL0RhbmNpbmcuanMnKTtcblxudmFyIF9JbnN0cnVtZW50ID0gcmVxdWlyZSgnLi9JbnN0cnVtZW50LmpzJyk7XG5cbnZhciBfTWVtYmVyID0gcmVxdWlyZSgnLi9NZW1iZXIuanMnKTtcblxudmFyIF9Tb25nID0gcmVxdWlyZSgnLi9Tb25nLmpzJyk7XG5cbnZhciBtYW5EYW5jZSA9IG5ldyBfRGFuY2luZy5EYW5jZSgndXJsKCcgKyBcImdpZi81LmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgd29tYW5EYW5jZSA9IG5ldyBfRGFuY2luZy5EYW5jZSgndXJsKCcgKyBcImdpZi8xMi5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpOyAvL9GB0L7Qt9C00LDQvdGLINGC0LDQvdGG0YtcblxudmFyIG1hblNvbmcgPSBuZXcgX1NvbmcuU29uZygnbXVzaWMvYm9vbS53YXYnKTtcbnZhciB3b21hblNvbmcgPSBuZXcgX1NvbmcuU29uZygnbXVzaWMvd29tc29uZy53YXYnKTsgLy8g0YHQvtC30LTQsNC90Ysg0L/QtdGB0L3QuFxuXG4vL9GB0LzQtdC90LjRgtGMINC80YPQt9GL0LrRgyBcbnZhciBhY2NvcmRlb24gPSBuZXcgX0luc3RydW1lbnQuS2V5Ym9hcmRJbnN0cnVtZW50KCdtdXNpYy9ib29tLndhdicpO1xudmFyIHN5bnRoZXNpemVyID0gbmV3IF9JbnN0cnVtZW50LktleWJvYXJkSW5zdHJ1bWVudCgnbXVzaWMvY2xhcC53YXYnKTtcbnZhciBiYXNzID0gbmV3IF9JbnN0cnVtZW50LlBlcmN1c3Npb25JbnN0cnVtZW50KCdtdXNpYy9oaWhhdC53YXYnKTtcbnZhciBkYXZ1bCA9IG5ldyBfSW5zdHJ1bWVudC5QZXJjdXNzaW9uSW5zdHJ1bWVudCgnbXVzaWMvY2xhcC53YXYnKTtcbnZhciBndWl0YXIgPSBuZXcgX0luc3RydW1lbnQuU3RyaW5nSW5zdHJ1bWV0KCdtdXNpYy9raWNrLndhdicpO1xudmFyIHNheiA9IG5ldyBfSW5zdHJ1bWVudC5TdHJpbmdJbnN0cnVtZXQoJ211c2ljL3RvbS53YXYnKTtcbnZhciBwaXBlID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCdtdXNpYy9raWNrLndhdicpO1xudmFyIHNheCA9IG5ldyBfSW5zdHJ1bWVudC5XaW5kSW5zdHJ1bWVudCgnbXVzaWMvY2xhcC53YXYnKTtcbnZhciB2aW9saW4gPSBuZXcgX0luc3RydW1lbnQuQm93SW5zdHJ1bWVudCgnbXVzaWMvYm9vbS53YXYnKTsgLy8g0YHQvtC30LTQsNC90Ysg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1xuXG52YXIgd29tYW5EYW5jZXIgPSBuZXcgX01lbWJlci5Xb21hbkRhbmNlcih3b21hbkRhbmNlKTtcbnZhciBtYW5EYW5jZXIgPSBuZXcgX01lbWJlci5NYW5EYW5jZXIobWFuRGFuY2UpOyAvL9GB0L7Qt9C00LDQvdGL0LUg0YLQsNC90YbQvtGA0YtcblxudmFyIHdvbWFuU2luZ2VyID0gbmV3IF9NZW1iZXIuV29tYW5TaW5nZXIod29tYW5Tb25nLCAndXJsKCcgKyBcImdpZi8xLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgbWFuU2luZ2VyID0gbmV3IF9NZW1iZXIuTWFuU2luZ2VyKG1hblNvbmcsICd1cmwoJyArIFwiZ2lmLzIuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTsgLy8g0YHQvtC30LTQsNC90Ysg0L/QtdCy0YbRi1xuXG52YXIgYWNjb3JkZW9uUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oYWNjb3JkZW9uLCAndXJsKCcgKyBcImdpZi8zLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgc3ludGhlc2l6ZXJQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihzeW50aGVzaXplciwgJ3VybCgnICsgXCJnaWYvNC5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIGJhc3NQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihiYXNzLCAndXJsKCcgKyBcImdpZi8xMy5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIGRhdnVsUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oZGF2dWwsICd1cmwoJyArIFwiZ2lmLzYuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciBndWl0YXJQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihndWl0YXIsICd1cmwoJyArIFwiZ2lmLzcuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciBzYXpQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihzYXosICd1cmwoJyArIFwiZ2lmLzguZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciBwaXBlUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4ocGlwZSwgJ3VybCgnICsgXCJnaWYvOS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIHNheFBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHNheCwgJ3VybCgnICsgXCJnaWYvMTAuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciB2aW9saW5QbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbih2aW9saW4sICd1cmwoJyArIFwiZ2lmLzExLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7IC8vINGB0L7Qt9C00LDQvdGLINC70Y7QtNC4INC40LPRgNCw0Y7RidC40LUg0L3QsCDQuNC90YHRgtGA0YPQvNC10L3RgtCw0YVcblxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnRW50ZXJMZWF2ZShlKSB7XG4gICAgaWYgKGUudHlwZSA9PSBcImRyYWdlbnRlclwiKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJkcmFnLWVudGVyXCI7XG4gICAgICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG4gICAgICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICcxMHB4JztcbiAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICcxMHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgfVxufVxuXG52YXIgYXJyID0gW107XG5cbmZ1bmN0aW9uIGhhbmRsZU92ZXJEcm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZS50eXBlICE9IFwiZHJvcFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZHJhZ2dlZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG5cbiAgICBpZiAoZHJhZ2dlZEVsLnBhcmVudE5vZGUgPT0gdGhpcykge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkcmFnZ2VkRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkRWwpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICAvL9GD0LHRgNCw0YLRjCDQv9C+0YLQvtC8ICB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gd2lkdGgyKGRyYWdnZWRJZCk7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICc0MDBweCc7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmZsb2F0ID0gJ2luaGVyaXQnO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBnZXRJY29uKGRyYWdnZWRJZCk7XG5cbiAgICAoMCwgX2J1dHRvbnMuY2xvc2VCdXR0b25zKShkcmFnZ2VkSWQpO1xuXG4gICAgYXJyLnBvcCgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVPdmVyRHJvcDIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChhcnIubGVuZ3RoID4gNSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUudHlwZSAhPSBcImRyb3BcIikge1xuICAgICAgICByZXR1cm47IC8vTWVhbnMgZnVuY3Rpb24gd2lsbCBleGl0IGlmIG5vIFwiZHJvcFwiIGV2ZW50IGlzIGZpcmVkLlxuICAgIH1cblxuICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICB2YXIgZHJhZ2dlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dlZElkKTtcblxuICAgIGlmIChkcmFnZ2VkRWwucGFyZW50Tm9kZSA9PSB0aGlzKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgcmV0dXJuOyAvL25vdGU6IHdoZW4gYSByZXR1cm4gaXMgcmVhY2hlZCBhIGZ1bmN0aW9uIGV4aXRzLlxuICAgIH1cblxuICAgIGRyYWdnZWRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWRFbCk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChkcmFnZ2VkRWwpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcblxuICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICc0NTBweCc7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICc0NTBweCc7XG5cbiAgICBkcmFnZ2VkRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYWN0aXZhdGlvbihkcmFnZ2VkSWQpO1xuXG4gICAgKDAsIF9idXR0b25zLm9wZW5CdXR0b25zKShkcmFnZ2VkSWQpO1xuXG4gICAgYXJyLnB1c2goZHJhZ2dlZElkKTtcbn1cbnZhciBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZHJhZ2dhYmxlXScpO1xudmFyIHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wLXRhcmdldF0nKTtcbnZhciB0YXJnZXRzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRyb3AtdGFyZ2V0Ml0nKTtcblxuLy/Qt9Cw0LTQsNC10Lwg0LTRgNC+0L/RiyDQvdCwINGN0LvQtdC80LXQvdGC0YtcbihmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkcmFnZ2FibGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZHJhZ2dhYmxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGFyZ2V0cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGhhbmRsZU92ZXJEcm9wKTtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgaGFuZGxlT3ZlckRyb3ApO1xuICAgICAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGhhbmRsZURyYWdFbnRlckxlYXZlKTtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBoYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgfVxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHRhcmdldHMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBoYW5kbGVPdmVyRHJvcDIpO1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGhhbmRsZU92ZXJEcm9wMik7XG4gICAgICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBoYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBoYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgfVxufSkoKTtcblxuLy/QsNC60YLQuNCy0LDRhtC40Lgg0YPRh9Cw0YHRgtC90LjQutCwXG5mdW5jdGlvbiBhY3RpdmF0aW9uKGRyYWdnZWRJZCkge1xuXG4gICAgaWYgKCdib3gxJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIG1hbkRhbmNlci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiB3b21hbkRhbmNlci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5TaW5nZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDQnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gd29tYW5TaW5nZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gYWNjb3JkZW9uUGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g2JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGJhc3NQbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gZGF2dWxQbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gZ3VpdGFyUGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g5JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHZpb2xpblBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94MTAnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gcGlwZVBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94MTEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gc2F4UGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzYXpQbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHN5bnRoZXNpemVyUGxheWVyLnBsYXkoKTtcbiAgICB9XG59XG5cbi8v0L7RgtC60LvRjtGH0LDQtdGCINGD0YfQsNGB0YLQvdC40LrQsFxuZnVuY3Rpb24gcGF1c2UoZHJhZ2dlZElkKSB7XG4gICAgaWYgKCdib3gxJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIG1hbkRhbmNlci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gd29tYW5EYW5jZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIG1hblNpbmdlci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDQnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gd29tYW5TaW5nZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGFjY29yZGVvblBsYXllci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gYmFzc1BsYXllci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gZGF2dWxQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGd1aXRhclBsYXllci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gdmlvbGluUGxheWVyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94MTAnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gcGlwZVBsYXllci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHNheFBsYXllci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHNhelBsYXllci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHN5bnRoZXNpemVyUGxheWVyLnBhdXNlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRJY29uKGRyYWdnZWRJZCkge1xuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb0hhbHBhaC5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvRmVzLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBtYW5TaW5nZXIucGF1c2VQbGF5U29uZygpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NaWNyb0gucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHdvbWFuU2luZ2VyLnBhdXNlUGxheVNvbmcoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTWljcm9GLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNBY2NvcmRlb24ucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNCYXNzLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBkYXZ1bFBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY0RhdnVsLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNHdWl0YXIucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1Zpb2xpbi5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNQaXBlLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F4UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F4LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F6UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F6LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc3ludGhlc2l6ZXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNTeW50aGVzaXplci5wbmdcIiArICcpJztcbiAgICB9XG59XG5cbi8v0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQutC90L7Qv9C+0Logc29sbyhvbi1vZmYpIGFuZCBwbGF5KG9uLW9mZilcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaW5kZXgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNvbG9PbicgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGFycjIgPSBhcnIuc2xpY2UoMCwgYXJyLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIyLmluZGV4T2YoJ2JveCcgKyBpbmRleCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaW5kZXggPSAwOyBfaW5kZXggPCBhcnIyLmxlbmd0aDsgX2luZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoX2luZGV4ICE9IGVsZW1JbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycjJbX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gcGF1c2UoYXJyMltfaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcnIyW19pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBfZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhY3RpdmF0aW9uKGFycjJbX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8g0JLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0L3QsCBzb2xvICDQutCw0LbQtNC+0LPQviDRg9GH0LDRgdGC0L3QuNC60LBcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIF9sb29wKGluZGV4KTtcbiAgICB9XG5cbiAgICB2YXIgX2xvb3AyID0gZnVuY3Rpb24gX2xvb3AyKGluZGV4KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Tb2xvT2ZmJyArIGluZGV4KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgYXJyMiA9IGFyci5zbGljZSgwLCBhcnIubGVuZ3RoKTtcblxuICAgICAgICAgICAgdmFyIGVsZW1JbmRleCA9IGFycjIuaW5kZXhPZignYm94JyArIGluZGV4KTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pbmRleDIgPSAwOyBfaW5kZXgyIDwgYXJyMi5sZW5ndGg7IF9pbmRleDIrKykge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyMltfaW5kZXgyXSk7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhY3RpdmF0aW9uKGFycjJbX2luZGV4Ml0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBfbG9vcDIoaW5kZXgpO1xuICAgIH1cbiAgICAvLyDQktC10YjQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsCDQvdCwIG9mZiAg0LrQsNC20LTQvtCz0L4g0YPRh9Cw0YHRgtC90LjQutCwXG5cbiAgICB2YXIgX2xvb3AzID0gZnVuY3Rpb24gX2xvb3AzKGluZGV4KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5QYXVzZScgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGFycjIgPSBhcnIuc2xpY2UoMCwgYXJyLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIyLmluZGV4T2YoJ2JveCcgKyBpbmRleCk7XG4gICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycjJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHBhdXNlKGFycjJbZWxlbUluZGV4XSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIF9sb29wMyhpbmRleCk7XG4gICAgfVxuXG4gICAgdmFyIF9sb29wNCA9IGZ1bmN0aW9uIF9sb29wNChpbmRleCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGxheScgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGFycjIgPSBhcnIuc2xpY2UoMCwgYXJyLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIyLmluZGV4T2YoJ2JveCcgKyBpbmRleCk7XG4gICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycjJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFjdGl2YXRpb24oYXJyMltlbGVtSW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgX2xvb3A0KGluZGV4KTtcbiAgICB9XG59KSgpO1xuXG4vLyDQvNC10YLQvtC0INCy0L7Qt9Cy0YDRidCw0LXRgiDQuNC60L7QvdC60Lgg0LIg0LjRgdGF0L7QtNC90L7QvCDRgNCw0LfQvNC10YDQtSAo0LTRgNC+0L8g0LLQvdC40LcpLCBcbi8vINC60L7Qs9C00LAg0LjQutC+0L3QutC4INCy0YHQtSDQsdGD0LTRg9GCINC+0LTQvdC+0LPQviDRgNCw0LfQvNC10YDQsCDQvdGD0LbQvdC+INGD0LHRgNCw0YLRjCDRjdGC0L7RgiDQvNC10YLQvtC0XG5mdW5jdGlvbiB3aWR0aDIoZHJhZ2dlZElkKSB7XG4gICAgaWYgKCdib3gxJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICczMDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMjUwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzMwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICcyMTNweCc7XG4gICAgfVxuICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNTAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzIxM3B4JztcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICczNTBweCc7XG4gICAgfVxuICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDEzcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzQwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzUwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDAwcHgnO1xuICAgIH1cbn0iXX0=
