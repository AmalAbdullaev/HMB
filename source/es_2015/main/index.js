(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dance = exports.Dance = function Dance(dance_file) {
    _classCallCheck(this, Dance);

    this.dance_file = dance_file;
};
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WindInstrument = exports.WindInstrument = function WindInstrument(gif_file, instument_mp3_file) {
    _classCallCheck(this, WindInstrument);

    this.gif_file = gif_file;
    this.instument_mp3_file = new Audio();
    this.instument_mp3_file.src = instument_mp3_file;
};

var StringInstrumet = exports.StringInstrumet = function StringInstrumet(gif_file, instument_mp3_file) {
    _classCallCheck(this, StringInstrumet);

    this.gif_file = gif_file;
    this.instument_mp3_file = new Audio();
    this.instument_mp3_file.src = instument_mp3_file;
};

var PercussionInstrument = exports.PercussionInstrument = function PercussionInstrument(gif_file, instument_mp3_file) {
    _classCallCheck(this, PercussionInstrument);

    this.gif_file = gif_file;
    this.instument_mp3_file = new Audio();
    this.instument_mp3_file.src = instument_mp3_file;
};

var BowInstrument = exports.BowInstrument = function BowInstrument(gif_file, instument_mp3_file) {
    _classCallCheck(this, BowInstrument);

    this.gif_file = gif_file;
    this.instument_mp3_file = new Audio();
    this.instument_mp3_file.src = instument_mp3_file;
};

var KeyboardInstrument = exports.KeyboardInstrument = function KeyboardInstrument(gif_file, instument_mp3_file) {
    _classCallCheck(this, KeyboardInstrument);

    this.gif_file = gif_file;
    this.instument_mp3_file = new Audio();
    this.instument_mp3_file.src = instument_mp3_file;
};
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Man = exports.Man = function () {
    function Man() {
        _classCallCheck(this, Man);
    }

    _createClass(Man, [{
        key: "sing",
        value: function sing(song_gif, song_file) {
            this.song_gif = song_gif;
            this.song_file = song_file;
        }
    }, {
        key: "dance",
        value: function dance(dance_gif_file) {
            this.dance_gif_file = dance_gif_file;
        }
    }, {
        key: "playOnInstrument",
        value: function playOnInstrument(instrument_gif, instrument_mp3_file) {
            this.instrument_gif = instrument_gif;
            this.instrument_mp3_file = instrument_mp3_file;
        }
    }, {
        key: "play",
        value: function play() {
            this.instrument_mp3_file.play();
            this.instrument_mp3_file.loop = true;
        }
    }, {
        key: "pause",
        value: function pause() {
            this.instrument_mp3_file.pause();
        }
    }, {
        key: "playSong",
        value: function playSong() {
            this.song_file.play();
            this.song_file.loop = true;
        }
    }, {
        key: "pausePlaySong",
        value: function pausePlaySong() {
            this.song_file.pause();
        }
    }]);

    return Man;
}();

var Woman = exports.Woman = function () {
    function Woman() {
        _classCallCheck(this, Woman);
    }

    _createClass(Woman, [{
        key: "sing",
        value: function sing(song_gif, song_file) {
            this.song_gif = song_gif;
            this.song_file = song_file;
        }
    }, {
        key: "dance",
        value: function dance(dance_gif_file) {
            this.dance_gif_file = dance_gif_file;
        }
    }, {
        key: "playSong",
        value: function playSong() {
            this.song_file.play();
            this.song_file.loop = true;
        }
    }, {
        key: "pausePlaySong",
        value: function pausePlaySong() {
            this.song_file.pause();
        }
    }]);

    return Woman;
}();
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Song = exports.Song = function Song(song_gif_file, song_mp3_file) {
   _classCallCheck(this, Song);

   this.song_gif_file = song_gif_file;
   this.song_mp3_file = new Audio();
   this.song_mp3_file.src = song_mp3_file;
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

var manSong = new _Song.Song('url(' + "gif/1.gif" + ')', 'music/boom.wav', 'url(' + "stopGif/1.jpg" + ')');
var womanSong = new _Song.Song('url(' + "gif/10.gif" + ')', 'music/womsong.wav', 'url(' + "stopGif/1.jpg" + ')'); // созданы песни

//сменить музыку 
var accordeon = new _Instrument.KeyboardInstrument('url(' + "gif/2.gif" + ')', 'music/boom.wav', 'url(' + "stopGif/1.jpg" + ')');
var synthesizer = new _Instrument.KeyboardInstrument('url(' + "gif/3.gif" + ')', 'music/clap.wav', 'url(' + "stopGif/1.jpg" + ')');
var bass = new _Instrument.PercussionInstrument('url(' + "gif/4.gif" + ')', 'music/hihat.wav', 'url(' + "stopGif/1.jpg" + ')');
var davul = new _Instrument.PercussionInstrument('url(' + "gif/6.gif" + ')', 'music/clap.wav', 'url(' + "stopGif/1.jpg" + ')');
var guitar = new _Instrument.StringInstrumet('url(' + "gif/7.gif" + ')', 'music/kick.wav', 'url(' + "stopGif/1.jpg" + ')');
var saz = new _Instrument.StringInstrumet('url(' + "gif/8.gif" + ')', 'music/tom.wav', 'url(' + "stopGif/1.jpg" + ')');
var pipe = new _Instrument.WindInstrument('url(' + "gif/9.gif" + ')', 'music/kick.wav', 'url(' + "stopGif/1.jpg" + ')');
var sax = new _Instrument.WindInstrument('url(' + "gif/11.gif" + ')', 'music/clap.wav', 'url(' + "stopGif/1.jpg" + ')');
var violin = new _Instrument.BowInstrument('url(' + "gif/13.gif" + ')', 'music/boom.wav', 'url(' + "stopGif/1.jpg" + ')'); // созданы инструменты


var accordeonPlayer = new _Member.Man();
var synthesizerPlayer = new _Member.Man();
var bassPlayer = new _Member.Man();
var davulPlayer = new _Member.Man();
var guitarPlayer = new _Member.Man();
var sazPlayer = new _Member.Man();
var pipePlayer = new _Member.Man();
var saxPlayer = new _Member.Man();
var violinPlayer = new _Member.Man(); // созданы люди играющие на инструментах

var womanDancer = new _Member.Woman();
var manDancer = new _Member.Man(); //созданые танцоры

var womanSinger = new _Member.Woman();
var manSinger = new _Member.Man(); // созданы певцы


womanDancer.dance(womanDance.dance_file, womanDance.stopDanceGifFile);
manDancer.dance(manDance.dance_file, manDance.stopDanceGifFile); //заданы танцы для танцоров

womanSinger.sing(womanSong.song_gif_file, womanSong.song_mp3_file, womanSong.stopSongGifFile);
manSinger.sing(manSong.song_gif_file, manSong.song_mp3_file, manSong.stopSongGifFile); //заданы песни для певцов

accordeonPlayer.playOnInstrument(accordeon.gif_file, accordeon.instument_mp3_file, accordeon.stopGif);
synthesizerPlayer.playOnInstrument(synthesizer.gif_file, synthesizer.instument_mp3_file, synthesizer.stopGif);
bassPlayer.playOnInstrument(bass.gif_file, bass.instument_mp3_file, bass.stopGif);
davulPlayer.playOnInstrument(davul.gif_file, davul.instument_mp3_file, davul.stopGif);
guitarPlayer.playOnInstrument(guitar.gif_file, guitar.instument_mp3_file, guitar.stopGif);
sazPlayer.playOnInstrument(saz.gif_file, saz.instument_mp3_file, saz.stopGif);
pipePlayer.playOnInstrument(pipe.gif_file, pipe.instument_mp3_file, pipe.stopGif);
saxPlayer.playOnInstrument(sax.gif_file, sax.instument_mp3_file, sax.stopGif);
violinPlayer.playOnInstrument(violin.gif_file, violin.instument_mp3_file, violin.stopGif); // заданы инструменты для музыкантов


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

//активации участника
function activation(draggedId) {
    if ('box1' == draggedId) {
        return manDancer.dance_gif_file;
    }
    if ('box2' == draggedId) {
        return womanDancer.dance_gif_file;
    }
    if ('box3' == draggedId) {
        manSinger.playSong();
        return manSinger.song_gif;
    }
    if ('box4' == draggedId) {
        womanSinger.playSong();
        return womanSinger.song_gif;
    }
    if ('box5' == draggedId) {
        accordeonPlayer.play();
        return accordeonPlayer.instrument_gif;
    }
    if ('box6' == draggedId) {
        bassPlayer.play();
        return bassPlayer.instrument_gif;
    }
    if ('box7' == draggedId) {
        davulPlayer.play();
        return davulPlayer.instrument_gif;
    }
    if ('box8' == draggedId) {
        guitarPlayer.play();
        return guitarPlayer.instrument_gif;
    }
    if ('box9' == draggedId) {
        violinPlayer.play();
        return violinPlayer.instrument_gif;
    }
    if ('box10' == draggedId) {
        pipePlayer.play();
        return pipePlayer.instrument_gif;
    }
    if ('box11' == draggedId) {
        saxPlayer.play();
        return saxPlayer.instrument_gif;
    }
    if ('box12' == draggedId) {
        sazPlayer.play();
        return sazPlayer.instrument_gif;
    }
    if ('box13' == draggedId) {
        synthesizerPlayer.play();
        return synthesizerPlayer.instrument_gif;
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
                    pause(arr2[_index]);
                } else {
                    activation(arr2[_index]);
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
                activation(arr2[_index2]);
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
            pause(arr2[elemIndex]);
        });
    };

    for (var index = 1; index <= 13; index++) {
        _loop3(index);
    }

    var _loop4 = function _loop4(index) {
        document.querySelector('#btnPlay' + index).addEventListener('click', function (e) {
            var arr2 = arr.slice(0, arr.length);

            var elemIndex = arr2.indexOf('box' + index);
            activation(arr2[elemIndex]);
        });
    };

    for (var index = 1; index <= 13; index++) {
        _loop4(index);
    }
})();

//отключает участников
function pause(draggedId) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FNQUwtQ09NUFVURVIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRGFuY2luZy5qcyIsIkluc3RydW1lbnQuanMiLCJNZW1iZXIuanMiLCJTb25nLmpzIiwiYnV0dG9ucy5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEYW5jZSA9IGV4cG9ydHMuRGFuY2UgPSBmdW5jdGlvbiBEYW5jZShkYW5jZV9maWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhbmNlKTtcblxuICAgIHRoaXMuZGFuY2VfZmlsZSA9IGRhbmNlX2ZpbGU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBXaW5kSW5zdHJ1bWVudCA9IGV4cG9ydHMuV2luZEluc3RydW1lbnQgPSBmdW5jdGlvbiBXaW5kSW5zdHJ1bWVudChnaWZfZmlsZSwgaW5zdHVtZW50X21wM19maWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpbmRJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuZ2lmX2ZpbGUgPSBnaWZfZmlsZTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZSA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlLnNyYyA9IGluc3R1bWVudF9tcDNfZmlsZTtcbn07XG5cbnZhciBTdHJpbmdJbnN0cnVtZXQgPSBleHBvcnRzLlN0cmluZ0luc3RydW1ldCA9IGZ1bmN0aW9uIFN0cmluZ0luc3RydW1ldChnaWZfZmlsZSwgaW5zdHVtZW50X21wM19maWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0cmluZ0luc3RydW1ldCk7XG5cbiAgICB0aGlzLmdpZl9maWxlID0gZ2lmX2ZpbGU7XG4gICAgdGhpcy5pbnN0dW1lbnRfbXAzX2ZpbGUgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZS5zcmMgPSBpbnN0dW1lbnRfbXAzX2ZpbGU7XG59O1xuXG52YXIgUGVyY3Vzc2lvbkluc3RydW1lbnQgPSBleHBvcnRzLlBlcmN1c3Npb25JbnN0cnVtZW50ID0gZnVuY3Rpb24gUGVyY3Vzc2lvbkluc3RydW1lbnQoZ2lmX2ZpbGUsIGluc3R1bWVudF9tcDNfZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQZXJjdXNzaW9uSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLmdpZl9maWxlID0gZ2lmX2ZpbGU7XG4gICAgdGhpcy5pbnN0dW1lbnRfbXAzX2ZpbGUgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZS5zcmMgPSBpbnN0dW1lbnRfbXAzX2ZpbGU7XG59O1xuXG52YXIgQm93SW5zdHJ1bWVudCA9IGV4cG9ydHMuQm93SW5zdHJ1bWVudCA9IGZ1bmN0aW9uIEJvd0luc3RydW1lbnQoZ2lmX2ZpbGUsIGluc3R1bWVudF9tcDNfZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb3dJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuZ2lmX2ZpbGUgPSBnaWZfZmlsZTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZSA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlLnNyYyA9IGluc3R1bWVudF9tcDNfZmlsZTtcbn07XG5cbnZhciBLZXlib2FyZEluc3RydW1lbnQgPSBleHBvcnRzLktleWJvYXJkSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIEtleWJvYXJkSW5zdHJ1bWVudChnaWZfZmlsZSwgaW5zdHVtZW50X21wM19maWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleWJvYXJkSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLmdpZl9maWxlID0gZ2lmX2ZpbGU7XG4gICAgdGhpcy5pbnN0dW1lbnRfbXAzX2ZpbGUgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZS5zcmMgPSBpbnN0dW1lbnRfbXAzX2ZpbGU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNYW4gPSBleHBvcnRzLk1hbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW4pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNYW4sIFt7XG4gICAgICAgIGtleTogXCJzaW5nXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaW5nKHNvbmdfZ2lmLCBzb25nX2ZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZ19naWYgPSBzb25nX2dpZjtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlID0gc29uZ19maWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZGFuY2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRhbmNlKGRhbmNlX2dpZl9maWxlKSB7XG4gICAgICAgICAgICB0aGlzLmRhbmNlX2dpZl9maWxlID0gZGFuY2VfZ2lmX2ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwbGF5T25JbnN0cnVtZW50XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5T25JbnN0cnVtZW50KGluc3RydW1lbnRfZ2lmLCBpbnN0cnVtZW50X21wM19maWxlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRfZ2lmID0gaW5zdHJ1bWVudF9naWY7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRfbXAzX2ZpbGUgPSBpbnN0cnVtZW50X21wM19maWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudF9tcDNfZmlsZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRfbXAzX2ZpbGUubG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRfbXAzX2ZpbGUucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBsYXlTb25nXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5U29uZygpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLmxvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VQbGF5U29uZ1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2VQbGF5U29uZygpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWFuO1xufSgpO1xuXG52YXIgV29tYW4gPSBleHBvcnRzLldvbWFuID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvbWFuKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV29tYW4pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXb21hbiwgW3tcbiAgICAgICAga2V5OiBcInNpbmdcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNpbmcoc29uZ19naWYsIHNvbmdfZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5zb25nX2dpZiA9IHNvbmdfZ2lmO1xuICAgICAgICAgICAgdGhpcy5zb25nX2ZpbGUgPSBzb25nX2ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJkYW5jZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGFuY2UoZGFuY2VfZ2lmX2ZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGFuY2VfZ2lmX2ZpbGUgPSBkYW5jZV9naWZfZmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBsYXlTb25nXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5U29uZygpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLmxvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VQbGF5U29uZ1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2VQbGF5U29uZygpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV29tYW47XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU29uZyA9IGV4cG9ydHMuU29uZyA9IGZ1bmN0aW9uIFNvbmcoc29uZ19naWZfZmlsZSwgc29uZ19tcDNfZmlsZSkge1xuICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvbmcpO1xuXG4gICB0aGlzLnNvbmdfZ2lmX2ZpbGUgPSBzb25nX2dpZl9maWxlO1xuICAgdGhpcy5zb25nX21wM19maWxlID0gbmV3IEF1ZGlvKCk7XG4gICB0aGlzLnNvbmdfbXAzX2ZpbGUuc3JjID0gc29uZ19tcDNfZmlsZTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm9wZW5CdXR0b25zID0gb3BlbkJ1dHRvbnM7XG5leHBvcnRzLmNsb3NlQnV0dG9ucyA9IGNsb3NlQnV0dG9ucztcbi8vc29sbyBhbmQgcGxheSDQutC90L7Qv9C60Lgg0YfRgtC+0LEg0L/QvtGP0LLQu9GP0LvQuNGB0Ywg0Lgg0LjRgdGH0LXQt9Cw0LvQuCDQv9GA0Lgg0LTRgNC+0L/QsNGFXG5mdW5jdGlvbiBvcGVuQnV0dG9ucyhkcmFnZ2VkSWQpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIGlmICgnYm94JyArIGluZGV4ID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkJsb2NrJyArIGluZGV4KS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VCdXR0b25zKGRyYWdnZWRJZCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCdib3gnICsgaW5kZXggPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQmxvY2snICsgaW5kZXgpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1dHRvbnMgPSByZXF1aXJlKCcuL2J1dHRvbnMuanMnKTtcblxudmFyIF9EYW5jaW5nID0gcmVxdWlyZSgnLi9EYW5jaW5nLmpzJyk7XG5cbnZhciBfSW5zdHJ1bWVudCA9IHJlcXVpcmUoJy4vSW5zdHJ1bWVudC5qcycpO1xuXG52YXIgX01lbWJlciA9IHJlcXVpcmUoJy4vTWVtYmVyLmpzJyk7XG5cbnZhciBfU29uZyA9IHJlcXVpcmUoJy4vU29uZy5qcycpO1xuXG52YXIgbWFuRGFuY2UgPSBuZXcgX0RhbmNpbmcuRGFuY2UoJ3VybCgnICsgXCJnaWYvNS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIHdvbWFuRGFuY2UgPSBuZXcgX0RhbmNpbmcuRGFuY2UoJ3VybCgnICsgXCJnaWYvMTIuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTsgLy/RgdC+0LfQtNCw0L3RiyDRgtCw0L3RhtGLXG5cbnZhciBtYW5Tb25nID0gbmV3IF9Tb25nLlNvbmcoJ3VybCgnICsgXCJnaWYvMS5naWZcIiArICcpJywgJ211c2ljL2Jvb20ud2F2JywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIHdvbWFuU29uZyA9IG5ldyBfU29uZy5Tb25nKCd1cmwoJyArIFwiZ2lmLzEwLmdpZlwiICsgJyknLCAnbXVzaWMvd29tc29uZy53YXYnLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7IC8vINGB0L7Qt9C00LDQvdGLINC/0LXRgdC90LhcblxuLy/RgdC80LXQvdC40YLRjCDQvNGD0LfRi9C60YMgXG52YXIgYWNjb3JkZW9uID0gbmV3IF9JbnN0cnVtZW50LktleWJvYXJkSW5zdHJ1bWVudCgndXJsKCcgKyBcImdpZi8yLmdpZlwiICsgJyknLCAnbXVzaWMvYm9vbS53YXYnLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgc3ludGhlc2l6ZXIgPSBuZXcgX0luc3RydW1lbnQuS2V5Ym9hcmRJbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzMuZ2lmXCIgKyAnKScsICdtdXNpYy9jbGFwLndhdicsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciBiYXNzID0gbmV3IF9JbnN0cnVtZW50LlBlcmN1c3Npb25JbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzQuZ2lmXCIgKyAnKScsICdtdXNpYy9oaWhhdC53YXYnLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgZGF2dWwgPSBuZXcgX0luc3RydW1lbnQuUGVyY3Vzc2lvbkluc3RydW1lbnQoJ3VybCgnICsgXCJnaWYvNi5naWZcIiArICcpJywgJ211c2ljL2NsYXAud2F2JywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIGd1aXRhciA9IG5ldyBfSW5zdHJ1bWVudC5TdHJpbmdJbnN0cnVtZXQoJ3VybCgnICsgXCJnaWYvNy5naWZcIiArICcpJywgJ211c2ljL2tpY2sud2F2JywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIHNheiA9IG5ldyBfSW5zdHJ1bWVudC5TdHJpbmdJbnN0cnVtZXQoJ3VybCgnICsgXCJnaWYvOC5naWZcIiArICcpJywgJ211c2ljL3RvbS53YXYnLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgcGlwZSA9IG5ldyBfSW5zdHJ1bWVudC5XaW5kSW5zdHJ1bWVudCgndXJsKCcgKyBcImdpZi85LmdpZlwiICsgJyknLCAnbXVzaWMva2ljay53YXYnLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgc2F4ID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzExLmdpZlwiICsgJyknLCAnbXVzaWMvY2xhcC53YXYnLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgdmlvbGluID0gbmV3IF9JbnN0cnVtZW50LkJvd0luc3RydW1lbnQoJ3VybCgnICsgXCJnaWYvMTMuZ2lmXCIgKyAnKScsICdtdXNpYy9ib29tLndhdicsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTsgLy8g0YHQvtC30LTQsNC90Ysg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1xuXG5cbnZhciBhY2NvcmRlb25QbGF5ZXIgPSBuZXcgX01lbWJlci5NYW4oKTtcbnZhciBzeW50aGVzaXplclBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIGJhc3NQbGF5ZXIgPSBuZXcgX01lbWJlci5NYW4oKTtcbnZhciBkYXZ1bFBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIGd1aXRhclBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIHNhelBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIHBpcGVQbGF5ZXIgPSBuZXcgX01lbWJlci5NYW4oKTtcbnZhciBzYXhQbGF5ZXIgPSBuZXcgX01lbWJlci5NYW4oKTtcbnZhciB2aW9saW5QbGF5ZXIgPSBuZXcgX01lbWJlci5NYW4oKTsgLy8g0YHQvtC30LTQsNC90Ysg0LvRjtC00Lgg0LjQs9GA0LDRjtGJ0LjQtSDQvdCwINC40L3RgdGC0YDRg9C80LXQvdGC0LDRhVxuXG52YXIgd29tYW5EYW5jZXIgPSBuZXcgX01lbWJlci5Xb21hbigpO1xudmFyIG1hbkRhbmNlciA9IG5ldyBfTWVtYmVyLk1hbigpOyAvL9GB0L7Qt9C00LDQvdGL0LUg0YLQsNC90YbQvtGA0YtcblxudmFyIHdvbWFuU2luZ2VyID0gbmV3IF9NZW1iZXIuV29tYW4oKTtcbnZhciBtYW5TaW5nZXIgPSBuZXcgX01lbWJlci5NYW4oKTsgLy8g0YHQvtC30LTQsNC90Ysg0L/QtdCy0YbRi1xuXG5cbndvbWFuRGFuY2VyLmRhbmNlKHdvbWFuRGFuY2UuZGFuY2VfZmlsZSwgd29tYW5EYW5jZS5zdG9wRGFuY2VHaWZGaWxlKTtcbm1hbkRhbmNlci5kYW5jZShtYW5EYW5jZS5kYW5jZV9maWxlLCBtYW5EYW5jZS5zdG9wRGFuY2VHaWZGaWxlKTsgLy/Qt9Cw0LTQsNC90Ysg0YLQsNC90YbRiyDQtNC70Y8g0YLQsNC90YbQvtGA0L7QslxuXG53b21hblNpbmdlci5zaW5nKHdvbWFuU29uZy5zb25nX2dpZl9maWxlLCB3b21hblNvbmcuc29uZ19tcDNfZmlsZSwgd29tYW5Tb25nLnN0b3BTb25nR2lmRmlsZSk7XG5tYW5TaW5nZXIuc2luZyhtYW5Tb25nLnNvbmdfZ2lmX2ZpbGUsIG1hblNvbmcuc29uZ19tcDNfZmlsZSwgbWFuU29uZy5zdG9wU29uZ0dpZkZpbGUpOyAvL9C30LDQtNCw0L3RiyDQv9C10YHQvdC4INC00LvRjyDQv9C10LLRhtC+0LJcblxuYWNjb3JkZW9uUGxheWVyLnBsYXlPbkluc3RydW1lbnQoYWNjb3JkZW9uLmdpZl9maWxlLCBhY2NvcmRlb24uaW5zdHVtZW50X21wM19maWxlLCBhY2NvcmRlb24uc3RvcEdpZik7XG5zeW50aGVzaXplclBsYXllci5wbGF5T25JbnN0cnVtZW50KHN5bnRoZXNpemVyLmdpZl9maWxlLCBzeW50aGVzaXplci5pbnN0dW1lbnRfbXAzX2ZpbGUsIHN5bnRoZXNpemVyLnN0b3BHaWYpO1xuYmFzc1BsYXllci5wbGF5T25JbnN0cnVtZW50KGJhc3MuZ2lmX2ZpbGUsIGJhc3MuaW5zdHVtZW50X21wM19maWxlLCBiYXNzLnN0b3BHaWYpO1xuZGF2dWxQbGF5ZXIucGxheU9uSW5zdHJ1bWVudChkYXZ1bC5naWZfZmlsZSwgZGF2dWwuaW5zdHVtZW50X21wM19maWxlLCBkYXZ1bC5zdG9wR2lmKTtcbmd1aXRhclBsYXllci5wbGF5T25JbnN0cnVtZW50KGd1aXRhci5naWZfZmlsZSwgZ3VpdGFyLmluc3R1bWVudF9tcDNfZmlsZSwgZ3VpdGFyLnN0b3BHaWYpO1xuc2F6UGxheWVyLnBsYXlPbkluc3RydW1lbnQoc2F6LmdpZl9maWxlLCBzYXouaW5zdHVtZW50X21wM19maWxlLCBzYXouc3RvcEdpZik7XG5waXBlUGxheWVyLnBsYXlPbkluc3RydW1lbnQocGlwZS5naWZfZmlsZSwgcGlwZS5pbnN0dW1lbnRfbXAzX2ZpbGUsIHBpcGUuc3RvcEdpZik7XG5zYXhQbGF5ZXIucGxheU9uSW5zdHJ1bWVudChzYXguZ2lmX2ZpbGUsIHNheC5pbnN0dW1lbnRfbXAzX2ZpbGUsIHNheC5zdG9wR2lmKTtcbnZpb2xpblBsYXllci5wbGF5T25JbnN0cnVtZW50KHZpb2xpbi5naWZfZmlsZSwgdmlvbGluLmluc3R1bWVudF9tcDNfZmlsZSwgdmlvbGluLnN0b3BHaWYpOyAvLyDQt9Cw0LTQsNC90Ysg0LjQvdGB0YLRgNGD0LzQtdC90YLRiyDQtNC70Y8g0LzRg9C30YvQutCw0L3RgtC+0LJcblxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnRW50ZXJMZWF2ZShlKSB7XG4gICAgaWYgKGUudHlwZSA9PSBcImRyYWdlbnRlclwiKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJkcmFnLWVudGVyXCI7XG4gICAgICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG4gICAgICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICcxMHB4JztcbiAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICcxMHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgfVxufVxuXG52YXIgYXJyID0gW107XG5cbmZ1bmN0aW9uIGhhbmRsZU92ZXJEcm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZS50eXBlICE9IFwiZHJvcFwiKSB7XG4gICAgICAgIHJldHVybjsgLy9NZWFucyBmdW5jdGlvbiB3aWxsIGV4aXQgaWYgbm8gXCJkcm9wXCIgZXZlbnQgaXMgZmlyZWQuXG4gICAgfVxuXG4gICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuXG4gICAgaWYgKGRyYWdnZWRFbC5wYXJlbnROb2RlID09IHRoaXMpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICByZXR1cm47IC8vbm90ZTogd2hlbiBhIHJldHVybiBpcyByZWFjaGVkIGEgZnVuY3Rpb24gZXhpdHMuXG4gICAgfVxuXG4gICAgZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRyYWdnZWRFbCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gd2lkdGgyKGRyYWdnZWRJZCk7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICc0MDBweCc7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmZsb2F0ID0gJ2luaGVyaXQnO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBnZXRJY29uKGRyYWdnZWRJZCk7XG5cbiAgICAoMCwgX2J1dHRvbnMuY2xvc2VCdXR0b25zKShkcmFnZ2VkSWQpO1xuXG4gICAgYXJyLnBvcCgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVPdmVyRHJvcDIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChhcnIubGVuZ3RoID4gNSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUudHlwZSAhPSBcImRyb3BcIikge1xuICAgICAgICByZXR1cm47IC8vTWVhbnMgZnVuY3Rpb24gd2lsbCBleGl0IGlmIG5vIFwiZHJvcFwiIGV2ZW50IGlzIGZpcmVkLlxuICAgIH1cblxuICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICB2YXIgZHJhZ2dlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dlZElkKTtcblxuICAgIGlmIChkcmFnZ2VkRWwucGFyZW50Tm9kZSA9PSB0aGlzKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgcmV0dXJuOyAvL25vdGU6IHdoZW4gYSByZXR1cm4gaXMgcmVhY2hlZCBhIGZ1bmN0aW9uIGV4aXRzLlxuICAgIH1cblxuICAgIGRyYWdnZWRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWRFbCk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChkcmFnZ2VkRWwpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcblxuICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICc0NTBweCc7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICc0NTBweCc7XG5cbiAgICBkcmFnZ2VkRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYWN0aXZhdGlvbihkcmFnZ2VkSWQpO1xuXG4gICAgKDAsIF9idXR0b25zLm9wZW5CdXR0b25zKShkcmFnZ2VkSWQpO1xuXG4gICAgYXJyLnB1c2goZHJhZ2dlZElkKTtcbn1cbnZhciBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZHJhZ2dhYmxlXScpO1xudmFyIHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wLXRhcmdldF0nKTtcbnZhciB0YXJnZXRzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRyb3AtdGFyZ2V0Ml0nKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBkcmFnZ2FibGUubGVuZ3RoOyBpKyspIHtcbiAgICBkcmFnZ2FibGVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBoYW5kbGVEcmFnU3RhcnQpO1xufVxuXG5mb3IgKHZhciBfaSA9IDA7IF9pIDwgdGFyZ2V0cy5sZW5ndGg7IF9pKyspIHtcbiAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgaGFuZGxlT3ZlckRyb3ApO1xuICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGhhbmRsZU92ZXJEcm9wKTtcbiAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGhhbmRsZURyYWdFbnRlckxlYXZlKTtcbiAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIGhhbmRsZURyYWdFbnRlckxlYXZlKTtcbn1cbmZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHRhcmdldHMubGVuZ3RoOyBfaTIrKykge1xuICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGhhbmRsZU92ZXJEcm9wMik7XG4gICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBoYW5kbGVPdmVyRHJvcDIpO1xuICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBoYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIGhhbmRsZURyYWdFbnRlckxlYXZlKTtcbn1cblxuLy/QsNC60YLQuNCy0LDRhtC40Lgg0YPRh9Cw0YHRgtC90LjQutCwXG5mdW5jdGlvbiBhY3RpdmF0aW9uKGRyYWdnZWRJZCkge1xuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5EYW5jZXIuZGFuY2VfZ2lmX2ZpbGU7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiB3b21hbkRhbmNlci5kYW5jZV9naWZfZmlsZTtcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgbWFuU2luZ2VyLnBsYXlTb25nKCk7XG4gICAgICAgIHJldHVybiBtYW5TaW5nZXIuc29uZ19naWY7XG4gICAgfVxuICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHdvbWFuU2luZ2VyLnBsYXlTb25nKCk7XG4gICAgICAgIHJldHVybiB3b21hblNpbmdlci5zb25nX2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgYWNjb3JkZW9uUGxheWVyLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIGFjY29yZGVvblBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g2JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgYmFzc1BsYXllci5wbGF5KCk7XG4gICAgICAgIHJldHVybiBiYXNzUGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBkYXZ1bFBsYXllci5wbGF5KCk7XG4gICAgICAgIHJldHVybiBkYXZ1bFBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgZ3VpdGFyUGxheWVyLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIGd1aXRhclBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g5JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgdmlvbGluUGxheWVyLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIHZpb2xpblBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHBpcGVQbGF5ZXIucGxheSgpO1xuICAgICAgICByZXR1cm4gcGlwZVBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHNheFBsYXllci5wbGF5KCk7XG4gICAgICAgIHJldHVybiBzYXhQbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxuICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICBzYXpQbGF5ZXIucGxheSgpO1xuICAgICAgICByZXR1cm4gc2F6UGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc3ludGhlc2l6ZXJQbGF5ZXIucGxheSgpO1xuICAgICAgICByZXR1cm4gc3ludGhlc2l6ZXJQbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRJY29uKGRyYWdnZWRJZCkge1xuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb0hhbHBhaC5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvRmVzLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBtYW5TaW5nZXIucGF1c2VQbGF5U29uZygpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NaWNyb0gucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHdvbWFuU2luZ2VyLnBhdXNlUGxheVNvbmcoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTWljcm9GLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNBY2NvcmRlb24ucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNCYXNzLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBkYXZ1bFBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY0RhdnVsLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNHdWl0YXIucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1Zpb2xpbi5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNQaXBlLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F4UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F4LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F6UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F6LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc3ludGhlc2l6ZXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNTeW50aGVzaXplci5wbmdcIiArICcpJztcbiAgICB9XG59XG5cbi8v0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQutC90L7Qv9C+0Logc29sbyhvbi1vZmYpIGFuZCBwbGF5KG9uLW9mZilcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaW5kZXgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNvbG9PbicgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGFycjIgPSBhcnIuc2xpY2UoMCwgYXJyLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIyLmluZGV4T2YoJ2JveCcgKyBpbmRleCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaW5kZXggPSAwOyBfaW5kZXggPCBhcnIyLmxlbmd0aDsgX2luZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoX2luZGV4ICE9IGVsZW1JbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBwYXVzZShhcnIyW19pbmRleF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb24oYXJyMltfaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyDQktC10YjQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsCDQvdCwIHNvbG8gINC60LDQttC00L7Qs9C+INGD0YfQsNGB0YLQvdC40LrQsFxuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgX2xvb3AoaW5kZXgpO1xuICAgIH1cblxuICAgIHZhciBfbG9vcDIgPSBmdW5jdGlvbiBfbG9vcDIoaW5kZXgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNvbG9PZmYnICsgaW5kZXgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBhcnIyID0gYXJyLnNsaWNlKDAsIGFyci5sZW5ndGgpO1xuXG4gICAgICAgICAgICB2YXIgZWxlbUluZGV4ID0gYXJyMi5pbmRleE9mKCdib3gnICsgaW5kZXgpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2luZGV4MiA9IDA7IF9pbmRleDIgPCBhcnIyLmxlbmd0aDsgX2luZGV4MisrKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZhdGlvbihhcnIyW19pbmRleDJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgX2xvb3AyKGluZGV4KTtcbiAgICB9XG4gICAgLy8g0JLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0L3QsCBvZmYgINC60LDQttC00L7Qs9C+INGD0YfQsNGB0YLQvdC40LrQsFxuXG4gICAgdmFyIF9sb29wMyA9IGZ1bmN0aW9uIF9sb29wMyhpbmRleCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGF1c2UnICsgaW5kZXgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBhcnIyID0gYXJyLnNsaWNlKDAsIGFyci5sZW5ndGgpO1xuXG4gICAgICAgICAgICB2YXIgZWxlbUluZGV4ID0gYXJyMi5pbmRleE9mKCdib3gnICsgaW5kZXgpO1xuICAgICAgICAgICAgcGF1c2UoYXJyMltlbGVtSW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgX2xvb3AzKGluZGV4KTtcbiAgICB9XG5cbiAgICB2YXIgX2xvb3A0ID0gZnVuY3Rpb24gX2xvb3A0KGluZGV4KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5QbGF5JyArIGluZGV4KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgYXJyMiA9IGFyci5zbGljZSgwLCBhcnIubGVuZ3RoKTtcblxuICAgICAgICAgICAgdmFyIGVsZW1JbmRleCA9IGFycjIuaW5kZXhPZignYm94JyArIGluZGV4KTtcbiAgICAgICAgICAgIGFjdGl2YXRpb24oYXJyMltlbGVtSW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgX2xvb3A0KGluZGV4KTtcbiAgICB9XG59KSgpO1xuXG4vL9C+0YLQutC70Y7Rh9Cw0LXRgiDRg9GH0LDRgdGC0L3QuNC60L7QslxuZnVuY3Rpb24gcGF1c2UoZHJhZ2dlZElkKSB7XG4gICAgaWYgKCdib3gxJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIG1hbkRhbmNlci5zdG9wX2RhbmNlX2dpZl9maWxlO1xuICAgIH1cbiAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gd29tYW5EYW5jZXIuc3RvcF9kYW5jZV9naWZfZmlsZTtcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgbWFuU2luZ2VyLnBhdXNlUGxheVNvbmcoKTtcbiAgICAgICAgcmV0dXJuIG1hblNpbmdlci5zdG9wX3NvbmdfZ2lmX2ZpbGU7XG4gICAgfVxuICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHdvbWFuU2luZ2VyLnBhdXNlUGxheVNvbmcoKTtcbiAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnN0b3Bfc29uZ19naWZfZmlsZTtcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgYWNjb3JkZW9uUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiBhY2NvcmRlb25QbGF5ZXIuc3RvcFBsYXlPbkluc3RydW1lbnRHaWZGaWxlO1xuICAgIH1cbiAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBiYXNzUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiBiYXNzUGxheWVyLnN0b3BQbGF5T25JbnN0cnVtZW50R2lmRmlsZTtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgZGF2dWxQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnN0b3BQbGF5T25JbnN0cnVtZW50R2lmRmlsZTtcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgZ3VpdGFyUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiBndWl0YXJQbGF5ZXIuc3RvcFBsYXlPbkluc3RydW1lbnRHaWZGaWxlO1xuICAgIH1cbiAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICB2aW9saW5QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuIHZpb2xpblBsYXllci5zdG9wUGxheU9uSW5zdHJ1bWVudEdpZkZpbGU7XG4gICAgfVxuICAgIGlmICgnYm94MTAnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBwaXBlUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiBwaXBlUGxheWVyLnN0b3BQbGF5T25JbnN0cnVtZW50R2lmRmlsZTtcbiAgICB9XG4gICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHNheFBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gc2F4UGxheWVyLnN0b3BQbGF5T25JbnN0cnVtZW50R2lmRmlsZTtcbiAgICB9XG4gICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHNhelBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gc2F6UGxheWVyLnN0b3BQbGF5T25JbnN0cnVtZW50R2lmRmlsZTtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHN5bnRoZXNpemVyUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5zdG9wUGxheU9uSW5zdHJ1bWVudEdpZkZpbGU7XG4gICAgfVxufVxuXG4vLyDQvNC10YLQvtC0INCy0L7Qt9Cy0YDRidCw0LXRgiDQuNC60L7QvdC60Lgg0LIg0LjRgdGF0L7QtNC90L7QvCDRgNCw0LfQvNC10YDQtSAo0LTRgNC+0L8g0LLQvdC40LcpLCBcbi8vINC60L7Qs9C00LAg0LjQutC+0L3QutC4INCy0YHQtSDQsdGD0LTRg9GCINC+0LTQvdC+0LPQviDRgNCw0LfQvNC10YDQsCDQvdGD0LbQvdC+INGD0LHRgNCw0YLRjCDRjdGC0L7RgiDQvNC10YLQvtC0XG5mdW5jdGlvbiB3aWR0aDIoZHJhZ2dlZElkKSB7XG4gICAgaWYgKCdib3gxJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICczMDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMjUwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzMwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICcyMTNweCc7XG4gICAgfVxuICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNTAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzIxM3B4JztcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICczNTBweCc7XG4gICAgfVxuICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDEzcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzQwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzUwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDAwcHgnO1xuICAgIH1cbn0iXX0=
