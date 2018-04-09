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
"use strict";

var _Dancing = require("./Dancing.js");

var _Instrument = require("./Instrument.js");

var _Member = require("./Member.js");

var _Song = require("./Song.js");

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
    draggedEl.style.backgroundImage = comparator2(draggedId);

    buttonOutComparator(draggedId);

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

    draggedEl.style.backgroundImage = comparator(draggedId);
    buttonInComparator(draggedId);

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

function buttonInComparator(draggedId) {
    for (var index = 1; index <= 13; index++) {
        if ('box' + index == draggedId) {
            document.getElementById('btnBlock' + index).style.display = 'inline-flex';
        }
    }
}

function buttonOutComparator(draggedId) {
    for (var index = 1; index <= 13; index++) {
        if ('box' + index == draggedId) {
            document.getElementById('btnBlock' + index).style.display = 'none';
        }
    }
}

function comparator(draggedId) {
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

function comparator2(draggedId) {
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

var manDance = new _Dancing.Dance('url(' + "gif/5.gif" + ')');
var womanDance = new _Dancing.Dance('url(' + "gif/12.gif" + ')'); //созданы танцы

var manSong = new _Song.Song('url(' + "gif/1.gif" + ')', 'music/boom.wav');
var womanSong = new _Song.Song('url(' + "gif/10.gif" + ')', 'music/womsong.wav'); // созданы песни

//сменить музыку 
var accordeon = new _Instrument.KeyboardInstrument('url(' + "gif/2.gif" + ')', 'music/boom.wav');
var synthesizer = new _Instrument.KeyboardInstrument('url(' + "gif/3.gif" + ')', 'music/clap.wav');
var bass = new _Instrument.PercussionInstrument('url(' + "gif/4.gif" + ')', 'music/hihat.wav');
var davul = new _Instrument.PercussionInstrument('url(' + "gif/6.gif" + ')', 'music/clap.wav');
var guitar = new _Instrument.StringInstrumet('url(' + "gif/7.gif" + ')', 'music/kick.wav');
var saz = new _Instrument.StringInstrumet('url(' + "gif/8.gif" + ')', 'music/tom.wav');
var pipe = new _Instrument.WindInstrument('url(' + "gif/9.gif" + ')', 'music/kick.wav');
var sax = new _Instrument.WindInstrument('url(' + "gif/11.gif" + ')', 'music/clap.wav');
var violin = new _Instrument.BowInstrument('url(' + "gif/13.gif" + ')', 'music/boom.wav'); // созданы инструменты


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


womanDancer.dance(womanDance.dance_file);
manDancer.dance(manDance.dance_file); //заданы танцы для танцоров


womanSinger.sing(womanSong.song_gif_file, womanSong.song_mp3_file);
manSinger.sing(manSong.song_gif_file, manSong.song_mp3_file); //заданы песни для певцов

accordeonPlayer.playOnInstrument(accordeon.gif_file, accordeon.instument_mp3_file);
synthesizerPlayer.playOnInstrument(synthesizer.gif_file, synthesizer.instument_mp3_file);
bassPlayer.playOnInstrument(bass.gif_file, bass.instument_mp3_file);
davulPlayer.playOnInstrument(davul.gif_file, davul.instument_mp3_file);
guitarPlayer.playOnInstrument(guitar.gif_file, guitar.instument_mp3_file);
sazPlayer.playOnInstrument(saz.gif_file, saz.instument_mp3_file);
pipePlayer.playOnInstrument(pipe.gif_file, pipe.instument_mp3_file);
saxPlayer.playOnInstrument(sax.gif_file, sax.instument_mp3_file);
violinPlayer.playOnInstrument(violin.gif_file, violin.instument_mp3_file); // заданы инструменты для музыкантов


// Вешаем обработчик клика на solo  каждого участника

var _loop = function _loop(index) {
    document.querySelector('#btnSoloOn' + index).addEventListener('click', function (e) {
        var arr2 = arr.slice(0, arr.length);

        var elemIndex = arr2.indexOf('box' + index);
        for (var _index = 0; _index < arr2.length; _index++) {
            if (_index != elemIndex) {
                comparatorForOffOthers(arr2[_index]);
            } else {
                comparator(arr2[_index]);
            }
        }
    });
};

for (var index = 1; index <= 13; index++) {
    _loop(index);
}

var _loop2 = function _loop2(index) {
    document.querySelector('#btnSoloOff' + index).addEventListener('click', function (e) {
        var arr2 = arr.slice(0, arr.length);

        var elemIndex = arr2.indexOf('box' + index);
        for (var _index2 = 0; _index2 < arr2.length; _index2++) {
            comparator(arr2[_index2]);
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
        comparatorForOffOthers(arr2[elemIndex]);
    });
};

for (var index = 1; index <= 13; index++) {
    _loop3(index);
}

var _loop4 = function _loop4(index) {
    document.querySelector('#btnPlay' + index).addEventListener('click', function (e) {
        var arr2 = arr.slice(0, arr.length);

        var elemIndex = arr2.indexOf('box' + index);
        comparator(arr2[elemIndex]);
    });
};

for (var index = 1; index <= 13; index++) {
    _loop4(index);
}

function comparatorForOffOthers(draggedId) {
    if ('box1' == draggedId) {
        return manDancer.dance_gif_file;
    }
    if ('box2' == draggedId) {
        return womanDancer.dance_gif_file;
    }
    if ('box3' == draggedId) {
        manSinger.pausePlaySong();
        return manSinger.song_gif;
    }
    if ('box4' == draggedId) {
        womanSinger.pausePlaySong();
        return womanSinger.song_gif;
    }
    if ('box5' == draggedId) {
        accordeonPlayer.pause();
        return accordeonPlayer.instrument_gif;
    }
    if ('box6' == draggedId) {
        bassPlayer.pause();
        return bassPlayer.instrument_gif;
    }
    if ('box7' == draggedId) {
        davulPlayer.pause();
        return davulPlayer.instrument_gif;
    }
    if ('box8' == draggedId) {
        guitarPlayer.pause();
        return guitarPlayer.instrument_gif;
    }
    if ('box9' == draggedId) {
        violinPlayer.pause();
        return violinPlayer.instrument_gif;
    }
    if ('box10' == draggedId) {
        pipePlayer.pause();
        return pipePlayer.instrument_gif;
    }
    if ('box11' == draggedId) {
        saxPlayer.pause();
        return saxPlayer.instrument_gif;
    }
    if ('box12' == draggedId) {
        sazPlayer.pause();
        return sazPlayer.instrument_gif;
    }
    if ('box13' == draggedId) {
        synthesizerPlayer.pause();
        return synthesizerPlayer.instrument_gif;
    }
}
},{"./Dancing.js":1,"./Instrument.js":2,"./Member.js":3,"./Song.js":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FNQUwtQ09NUFVURVIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRGFuY2luZy5qcyIsIkluc3RydW1lbnQuanMiLCJNZW1iZXIuanMiLCJTb25nLmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERhbmNlID0gZXhwb3J0cy5EYW5jZSA9IGZ1bmN0aW9uIERhbmNlKGRhbmNlX2ZpbGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGFuY2UpO1xuXG4gICAgdGhpcy5kYW5jZV9maWxlID0gZGFuY2VfZmlsZTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFdpbmRJbnN0cnVtZW50ID0gZXhwb3J0cy5XaW5kSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIFdpbmRJbnN0cnVtZW50KGdpZl9maWxlLCBpbnN0dW1lbnRfbXAzX2ZpbGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2luZEluc3RydW1lbnQpO1xuXG4gICAgdGhpcy5naWZfZmlsZSA9IGdpZl9maWxlO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5pbnN0dW1lbnRfbXAzX2ZpbGUuc3JjID0gaW5zdHVtZW50X21wM19maWxlO1xufTtcblxudmFyIFN0cmluZ0luc3RydW1ldCA9IGV4cG9ydHMuU3RyaW5nSW5zdHJ1bWV0ID0gZnVuY3Rpb24gU3RyaW5nSW5zdHJ1bWV0KGdpZl9maWxlLCBpbnN0dW1lbnRfbXAzX2ZpbGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RyaW5nSW5zdHJ1bWV0KTtcblxuICAgIHRoaXMuZ2lmX2ZpbGUgPSBnaWZfZmlsZTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZSA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlLnNyYyA9IGluc3R1bWVudF9tcDNfZmlsZTtcbn07XG5cbnZhciBQZXJjdXNzaW9uSW5zdHJ1bWVudCA9IGV4cG9ydHMuUGVyY3Vzc2lvbkluc3RydW1lbnQgPSBmdW5jdGlvbiBQZXJjdXNzaW9uSW5zdHJ1bWVudChnaWZfZmlsZSwgaW5zdHVtZW50X21wM19maWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBlcmN1c3Npb25JbnN0cnVtZW50KTtcblxuICAgIHRoaXMuZ2lmX2ZpbGUgPSBnaWZfZmlsZTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZSA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlLnNyYyA9IGluc3R1bWVudF9tcDNfZmlsZTtcbn07XG5cbnZhciBCb3dJbnN0cnVtZW50ID0gZXhwb3J0cy5Cb3dJbnN0cnVtZW50ID0gZnVuY3Rpb24gQm93SW5zdHJ1bWVudChnaWZfZmlsZSwgaW5zdHVtZW50X21wM19maWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvd0luc3RydW1lbnQpO1xuXG4gICAgdGhpcy5naWZfZmlsZSA9IGdpZl9maWxlO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5pbnN0dW1lbnRfbXAzX2ZpbGUuc3JjID0gaW5zdHVtZW50X21wM19maWxlO1xufTtcblxudmFyIEtleWJvYXJkSW5zdHJ1bWVudCA9IGV4cG9ydHMuS2V5Ym9hcmRJbnN0cnVtZW50ID0gZnVuY3Rpb24gS2V5Ym9hcmRJbnN0cnVtZW50KGdpZl9maWxlLCBpbnN0dW1lbnRfbXAzX2ZpbGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5Ym9hcmRJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuZ2lmX2ZpbGUgPSBnaWZfZmlsZTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZSA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlLnNyYyA9IGluc3R1bWVudF9tcDNfZmlsZTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE1hbiA9IGV4cG9ydHMuTWFuID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hbik7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hbiwgW3tcbiAgICAgICAga2V5OiBcInNpbmdcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNpbmcoc29uZ19naWYsIHNvbmdfZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5zb25nX2dpZiA9IHNvbmdfZ2lmO1xuICAgICAgICAgICAgdGhpcy5zb25nX2ZpbGUgPSBzb25nX2ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJkYW5jZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGFuY2UoZGFuY2VfZ2lmX2ZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGFuY2VfZ2lmX2ZpbGUgPSBkYW5jZV9naWZfZmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBsYXlPbkluc3RydW1lbnRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXlPbkluc3RydW1lbnQoaW5zdHJ1bWVudF9naWYsIGluc3RydW1lbnRfbXAzX2ZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudF9naWYgPSBpbnN0cnVtZW50X2dpZjtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudF9tcDNfZmlsZSA9IGluc3RydW1lbnRfbXAzX2ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50X21wM19maWxlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudF9tcDNfZmlsZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudF9tcDNfZmlsZS5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGxheVNvbmdcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXlTb25nKCkge1xuICAgICAgICAgICAgdGhpcy5zb25nX2ZpbGUucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5zb25nX2ZpbGUubG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVBsYXlTb25nXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZVBsYXlTb25nKCkge1xuICAgICAgICAgICAgdGhpcy5zb25nX2ZpbGUucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYW47XG59KCk7XG5cbnZhciBXb21hbiA9IGV4cG9ydHMuV29tYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29tYW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXb21hbik7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdvbWFuLCBbe1xuICAgICAgICBrZXk6IFwic2luZ1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2luZyhzb25nX2dpZiwgc29uZ19maWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmdfZ2lmID0gc29uZ19naWY7XG4gICAgICAgICAgICB0aGlzLnNvbmdfZmlsZSA9IHNvbmdfZmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImRhbmNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkYW5jZShkYW5jZV9naWZfZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5kYW5jZV9naWZfZmlsZSA9IGRhbmNlX2dpZl9maWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGxheVNvbmdcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXlTb25nKCkge1xuICAgICAgICAgICAgdGhpcy5zb25nX2ZpbGUucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5zb25nX2ZpbGUubG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVBsYXlTb25nXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZVBsYXlTb25nKCkge1xuICAgICAgICAgICAgdGhpcy5zb25nX2ZpbGUucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXb21hbjtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTb25nID0gZXhwb3J0cy5Tb25nID0gZnVuY3Rpb24gU29uZyhzb25nX2dpZl9maWxlLCBzb25nX21wM19maWxlKSB7XG4gICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29uZyk7XG5cbiAgIHRoaXMuc29uZ19naWZfZmlsZSA9IHNvbmdfZ2lmX2ZpbGU7XG4gICB0aGlzLnNvbmdfbXAzX2ZpbGUgPSBuZXcgQXVkaW8oKTtcbiAgIHRoaXMuc29uZ19tcDNfZmlsZS5zcmMgPSBzb25nX21wM19maWxlO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9EYW5jaW5nID0gcmVxdWlyZShcIi4vRGFuY2luZy5qc1wiKTtcblxudmFyIF9JbnN0cnVtZW50ID0gcmVxdWlyZShcIi4vSW5zdHJ1bWVudC5qc1wiKTtcblxudmFyIF9NZW1iZXIgPSByZXF1aXJlKFwiLi9NZW1iZXIuanNcIik7XG5cbnZhciBfU29uZyA9IHJlcXVpcmUoXCIuL1NvbmcuanNcIik7XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydChlKSB7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgdGhpcy5pZCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdFbnRlckxlYXZlKGUpIHtcbiAgICBpZiAoZS50eXBlID09IFwiZHJhZ2VudGVyXCIpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcImRyYWctZW50ZXJcIjtcbiAgICAgICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICB2YXIgZHJhZ2dlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dlZElkKTtcbiAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gJzEwcHgnO1xuICAgICAgICBkcmFnZ2VkRWwuc3R5bGUuaGVpZ2h0ID0gJzEwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcbiAgICB9XG59XG5cbnZhciBhcnIgPSBbXTtcblxuZnVuY3Rpb24gaGFuZGxlT3ZlckRyb3AoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChlLnR5cGUgIT0gXCJkcm9wXCIpIHtcbiAgICAgICAgcmV0dXJuOyAvL01lYW5zIGZ1bmN0aW9uIHdpbGwgZXhpdCBpZiBubyBcImRyb3BcIiBldmVudCBpcyBmaXJlZC5cbiAgICB9XG5cbiAgICB2YXIgZHJhZ2dlZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG5cbiAgICBpZiAoZHJhZ2dlZEVsLnBhcmVudE5vZGUgPT0gdGhpcykge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgIHJldHVybjsgLy9ub3RlOiB3aGVuIGEgcmV0dXJuIGlzIHJlYWNoZWQgYSBmdW5jdGlvbiBleGl0cy5cbiAgICB9XG5cbiAgICBkcmFnZ2VkRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkRWwpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICBkcmFnZ2VkRWwuc3R5bGUud2lkdGggPSB3aWR0aDIoZHJhZ2dlZElkKTtcbiAgICBkcmFnZ2VkRWwuc3R5bGUuaGVpZ2h0ID0gJzQwMHB4JztcbiAgICBkcmFnZ2VkRWwuc3R5bGUuZmxvYXQgPSAnaW5oZXJpdCc7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGNvbXBhcmF0b3IyKGRyYWdnZWRJZCk7XG5cbiAgICBidXR0b25PdXRDb21wYXJhdG9yKGRyYWdnZWRJZCk7XG5cbiAgICBhcnIucG9wKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU92ZXJEcm9wMihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGFyci5sZW5ndGggPiA1KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZS50eXBlICE9IFwiZHJvcFwiKSB7XG4gICAgICAgIHJldHVybjsgLy9NZWFucyBmdW5jdGlvbiB3aWxsIGV4aXQgaWYgbm8gXCJkcm9wXCIgZXZlbnQgaXMgZmlyZWQuXG4gICAgfVxuXG4gICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuXG4gICAgaWYgKGRyYWdnZWRFbC5wYXJlbnROb2RlID09IHRoaXMpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICByZXR1cm47IC8vbm90ZTogd2hlbiBhIHJldHVybiBpcyByZWFjaGVkIGEgZnVuY3Rpb24gZXhpdHMuXG4gICAgfVxuXG4gICAgZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRyYWdnZWRFbCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gJzQ1MHB4JztcbiAgICBkcmFnZ2VkRWwuc3R5bGUuaGVpZ2h0ID0gJzQ1MHB4JztcblxuICAgIGRyYWdnZWRFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBjb21wYXJhdG9yKGRyYWdnZWRJZCk7XG4gICAgYnV0dG9uSW5Db21wYXJhdG9yKGRyYWdnZWRJZCk7XG5cbiAgICBhcnIucHVzaChkcmFnZ2VkSWQpO1xufVxudmFyIGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkcmFnZ2FibGVdJyk7XG52YXIgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRyb3AtdGFyZ2V0XScpO1xudmFyIHRhcmdldHMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcC10YXJnZXQyXScpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IGRyYWdnYWJsZS5sZW5ndGg7IGkrKykge1xuICAgIGRyYWdnYWJsZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGhhbmRsZURyYWdTdGFydCk7XG59XG5cbmZvciAodmFyIF9pID0gMDsgX2kgPCB0YXJnZXRzLmxlbmd0aDsgX2krKykge1xuICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBoYW5kbGVPdmVyRHJvcCk7XG4gICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgaGFuZGxlT3ZlckRyb3ApO1xuICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xufVxuZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgdGFyZ2V0cy5sZW5ndGg7IF9pMisrKSB7XG4gICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgaGFuZGxlT3ZlckRyb3AyKTtcbiAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGhhbmRsZU92ZXJEcm9wMik7XG4gICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGhhbmRsZURyYWdFbnRlckxlYXZlKTtcbiAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xufVxuXG5mdW5jdGlvbiBidXR0b25JbkNvbXBhcmF0b3IoZHJhZ2dlZElkKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBpZiAoJ2JveCcgKyBpbmRleCA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5CbG9jaycgKyBpbmRleCkuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ1dHRvbk91dENvbXBhcmF0b3IoZHJhZ2dlZElkKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBpZiAoJ2JveCcgKyBpbmRleCA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5CbG9jaycgKyBpbmRleCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyYXRvcihkcmFnZ2VkSWQpIHtcbiAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gbWFuRGFuY2VyLmRhbmNlX2dpZl9maWxlO1xuICAgIH1cbiAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gd29tYW5EYW5jZXIuZGFuY2VfZ2lmX2ZpbGU7XG4gICAgfVxuICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIG1hblNpbmdlci5wbGF5U29uZygpO1xuICAgICAgICByZXR1cm4gbWFuU2luZ2VyLnNvbmdfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDQnID09IGRyYWdnZWRJZCkge1xuICAgICAgICB3b21hblNpbmdlci5wbGF5U29uZygpO1xuICAgICAgICByZXR1cm4gd29tYW5TaW5nZXIuc29uZ19naWY7XG4gICAgfVxuICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIGFjY29yZGVvblBsYXllci5wbGF5KCk7XG4gICAgICAgIHJldHVybiBhY2NvcmRlb25QbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIGJhc3NQbGF5ZXIucGxheSgpO1xuICAgICAgICByZXR1cm4gYmFzc1BsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgZGF2dWxQbGF5ZXIucGxheSgpO1xuICAgICAgICByZXR1cm4gZGF2dWxQbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxuICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIGd1aXRhclBsYXllci5wbGF5KCk7XG4gICAgICAgIHJldHVybiBndWl0YXJQbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHZpb2xpblBsYXllci5wbGF5KCk7XG4gICAgICAgIHJldHVybiB2aW9saW5QbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxuICAgIGlmICgnYm94MTAnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBwaXBlUGxheWVyLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxuICAgIGlmICgnYm94MTEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBzYXhQbGF5ZXIucGxheSgpO1xuICAgICAgICByZXR1cm4gc2F4UGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F6UGxheWVyLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIHNhelBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHN5bnRoZXNpemVyUGxheWVyLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIHN5bnRoZXNpemVyUGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbn1cbi8vINC80LXRgtC+0LQg0LLQvtC30LLRgNGJ0LDQtdGCINC40LrQvtC90LrQuCDQsiDQuNGB0YXQvtC00L3QvtC8INGA0LDQt9C80LXRgNC1ICjQtNGA0L7QvyDQstC90LjQtyksIFxuLy8g0LrQvtCz0LTQsCDQuNC60L7QvdC60Lgg0LLRgdC1INCx0YPQtNGD0YIg0L7QtNC90L7Qs9C+INGA0LDQt9C80LXRgNCwINC90YPQttC90L4g0YPQsdGA0LDRgtGMINGN0YLQvtGCINC80LXRgtC+0LRcbmZ1bmN0aW9uIHdpZHRoMihkcmFnZ2VkSWQpIHtcbiAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzMwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICcyNTBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMzAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDQnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzIxM3B4JztcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc1MDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMjEzcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzM1MHB4JztcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MTNweCc7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MTEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzQwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNTAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MDBweCc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJhdG9yMihkcmFnZ2VkSWQpIHtcbiAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29IYWxwYWgucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb0Zlcy5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgbWFuU2luZ2VyLnBhdXNlUGxheVNvbmcoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTWljcm9ILnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDQnID09IGRyYWdnZWRJZCkge1xuICAgICAgICB3b21hblNpbmdlci5wYXVzZVBsYXlTb25nKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb01pY3JvRi5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgYWNjb3JkZW9uUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljQWNjb3JkZW9uLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBiYXNzUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljQmFzcy5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgZGF2dWxQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNEYXZ1bC5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgZ3VpdGFyUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljR3VpdGFyLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICB2aW9saW5QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNWaW9saW4ucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94MTAnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBwaXBlUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljUGlwZS5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHNheFBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1NheC5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHNhelBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1Nhei5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHN5bnRoZXNpemVyUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU3ludGhlc2l6ZXIucG5nXCIgKyAnKSc7XG4gICAgfVxufVxuXG52YXIgbWFuRGFuY2UgPSBuZXcgX0RhbmNpbmcuRGFuY2UoJ3VybCgnICsgXCJnaWYvNS5naWZcIiArICcpJyk7XG52YXIgd29tYW5EYW5jZSA9IG5ldyBfRGFuY2luZy5EYW5jZSgndXJsKCcgKyBcImdpZi8xMi5naWZcIiArICcpJyk7IC8v0YHQvtC30LTQsNC90Ysg0YLQsNC90YbRi1xuXG52YXIgbWFuU29uZyA9IG5ldyBfU29uZy5Tb25nKCd1cmwoJyArIFwiZ2lmLzEuZ2lmXCIgKyAnKScsICdtdXNpYy9ib29tLndhdicpO1xudmFyIHdvbWFuU29uZyA9IG5ldyBfU29uZy5Tb25nKCd1cmwoJyArIFwiZ2lmLzEwLmdpZlwiICsgJyknLCAnbXVzaWMvd29tc29uZy53YXYnKTsgLy8g0YHQvtC30LTQsNC90Ysg0L/QtdGB0L3QuFxuXG4vL9GB0LzQtdC90LjRgtGMINC80YPQt9GL0LrRgyBcbnZhciBhY2NvcmRlb24gPSBuZXcgX0luc3RydW1lbnQuS2V5Ym9hcmRJbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzIuZ2lmXCIgKyAnKScsICdtdXNpYy9ib29tLndhdicpO1xudmFyIHN5bnRoZXNpemVyID0gbmV3IF9JbnN0cnVtZW50LktleWJvYXJkSW5zdHJ1bWVudCgndXJsKCcgKyBcImdpZi8zLmdpZlwiICsgJyknLCAnbXVzaWMvY2xhcC53YXYnKTtcbnZhciBiYXNzID0gbmV3IF9JbnN0cnVtZW50LlBlcmN1c3Npb25JbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzQuZ2lmXCIgKyAnKScsICdtdXNpYy9oaWhhdC53YXYnKTtcbnZhciBkYXZ1bCA9IG5ldyBfSW5zdHJ1bWVudC5QZXJjdXNzaW9uSW5zdHJ1bWVudCgndXJsKCcgKyBcImdpZi82LmdpZlwiICsgJyknLCAnbXVzaWMvY2xhcC53YXYnKTtcbnZhciBndWl0YXIgPSBuZXcgX0luc3RydW1lbnQuU3RyaW5nSW5zdHJ1bWV0KCd1cmwoJyArIFwiZ2lmLzcuZ2lmXCIgKyAnKScsICdtdXNpYy9raWNrLndhdicpO1xudmFyIHNheiA9IG5ldyBfSW5zdHJ1bWVudC5TdHJpbmdJbnN0cnVtZXQoJ3VybCgnICsgXCJnaWYvOC5naWZcIiArICcpJywgJ211c2ljL3RvbS53YXYnKTtcbnZhciBwaXBlID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzkuZ2lmXCIgKyAnKScsICdtdXNpYy9raWNrLndhdicpO1xudmFyIHNheCA9IG5ldyBfSW5zdHJ1bWVudC5XaW5kSW5zdHJ1bWVudCgndXJsKCcgKyBcImdpZi8xMS5naWZcIiArICcpJywgJ211c2ljL2NsYXAud2F2Jyk7XG52YXIgdmlvbGluID0gbmV3IF9JbnN0cnVtZW50LkJvd0luc3RydW1lbnQoJ3VybCgnICsgXCJnaWYvMTMuZ2lmXCIgKyAnKScsICdtdXNpYy9ib29tLndhdicpOyAvLyDRgdC+0LfQtNCw0L3RiyDQuNC90YHRgtGA0YPQvNC10L3RgtGLXG5cblxudmFyIGFjY29yZGVvblBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIHN5bnRoZXNpemVyUGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgYmFzc1BsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIGRhdnVsUGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgZ3VpdGFyUGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgc2F6UGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgcGlwZVBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIHNheFBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIHZpb2xpblBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpOyAvLyDRgdC+0LfQtNCw0L3RiyDQu9GO0LTQuCDQuNCz0YDQsNGO0YnQuNC1INC90LAg0LjQvdGB0YLRgNGD0LzQtdC90YLQsNGFXG5cbnZhciB3b21hbkRhbmNlciA9IG5ldyBfTWVtYmVyLldvbWFuKCk7XG52YXIgbWFuRGFuY2VyID0gbmV3IF9NZW1iZXIuTWFuKCk7IC8v0YHQvtC30LTQsNC90YvQtSDRgtCw0L3RhtC+0YDRi1xuXG52YXIgd29tYW5TaW5nZXIgPSBuZXcgX01lbWJlci5Xb21hbigpO1xudmFyIG1hblNpbmdlciA9IG5ldyBfTWVtYmVyLk1hbigpOyAvLyDRgdC+0LfQtNCw0L3RiyDQv9C10LLRhtGLXG5cblxud29tYW5EYW5jZXIuZGFuY2Uod29tYW5EYW5jZS5kYW5jZV9maWxlKTtcbm1hbkRhbmNlci5kYW5jZShtYW5EYW5jZS5kYW5jZV9maWxlKTsgLy/Qt9Cw0LTQsNC90Ysg0YLQsNC90YbRiyDQtNC70Y8g0YLQsNC90YbQvtGA0L7QslxuXG5cbndvbWFuU2luZ2VyLnNpbmcod29tYW5Tb25nLnNvbmdfZ2lmX2ZpbGUsIHdvbWFuU29uZy5zb25nX21wM19maWxlKTtcbm1hblNpbmdlci5zaW5nKG1hblNvbmcuc29uZ19naWZfZmlsZSwgbWFuU29uZy5zb25nX21wM19maWxlKTsgLy/Qt9Cw0LTQsNC90Ysg0L/QtdGB0L3QuCDQtNC70Y8g0L/QtdCy0YbQvtCyXG5cbmFjY29yZGVvblBsYXllci5wbGF5T25JbnN0cnVtZW50KGFjY29yZGVvbi5naWZfZmlsZSwgYWNjb3JkZW9uLmluc3R1bWVudF9tcDNfZmlsZSk7XG5zeW50aGVzaXplclBsYXllci5wbGF5T25JbnN0cnVtZW50KHN5bnRoZXNpemVyLmdpZl9maWxlLCBzeW50aGVzaXplci5pbnN0dW1lbnRfbXAzX2ZpbGUpO1xuYmFzc1BsYXllci5wbGF5T25JbnN0cnVtZW50KGJhc3MuZ2lmX2ZpbGUsIGJhc3MuaW5zdHVtZW50X21wM19maWxlKTtcbmRhdnVsUGxheWVyLnBsYXlPbkluc3RydW1lbnQoZGF2dWwuZ2lmX2ZpbGUsIGRhdnVsLmluc3R1bWVudF9tcDNfZmlsZSk7XG5ndWl0YXJQbGF5ZXIucGxheU9uSW5zdHJ1bWVudChndWl0YXIuZ2lmX2ZpbGUsIGd1aXRhci5pbnN0dW1lbnRfbXAzX2ZpbGUpO1xuc2F6UGxheWVyLnBsYXlPbkluc3RydW1lbnQoc2F6LmdpZl9maWxlLCBzYXouaW5zdHVtZW50X21wM19maWxlKTtcbnBpcGVQbGF5ZXIucGxheU9uSW5zdHJ1bWVudChwaXBlLmdpZl9maWxlLCBwaXBlLmluc3R1bWVudF9tcDNfZmlsZSk7XG5zYXhQbGF5ZXIucGxheU9uSW5zdHJ1bWVudChzYXguZ2lmX2ZpbGUsIHNheC5pbnN0dW1lbnRfbXAzX2ZpbGUpO1xudmlvbGluUGxheWVyLnBsYXlPbkluc3RydW1lbnQodmlvbGluLmdpZl9maWxlLCB2aW9saW4uaW5zdHVtZW50X21wM19maWxlKTsgLy8g0LfQsNC00LDQvdGLINC40L3RgdGC0YDRg9C80LXQvdGC0Ysg0LTQu9GPINC80YPQt9GL0LrQsNC90YLQvtCyXG5cblxuLy8g0JLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0L3QsCBzb2xvICDQutCw0LbQtNC+0LPQviDRg9GH0LDRgdGC0L3QuNC60LBcblxudmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaW5kZXgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU29sb09uJyArIGluZGV4KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBhcnIyID0gYXJyLnNsaWNlKDAsIGFyci5sZW5ndGgpO1xuXG4gICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIyLmluZGV4T2YoJ2JveCcgKyBpbmRleCk7XG4gICAgICAgIGZvciAodmFyIF9pbmRleCA9IDA7IF9pbmRleCA8IGFycjIubGVuZ3RoOyBfaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKF9pbmRleCAhPSBlbGVtSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJhdG9yRm9yT2ZmT3RoZXJzKGFycjJbX2luZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBhcmF0b3IoYXJyMltfaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgIF9sb29wKGluZGV4KTtcbn1cblxudmFyIF9sb29wMiA9IGZ1bmN0aW9uIF9sb29wMihpbmRleCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Tb2xvT2ZmJyArIGluZGV4KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBhcnIyID0gYXJyLnNsaWNlKDAsIGFyci5sZW5ndGgpO1xuXG4gICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIyLmluZGV4T2YoJ2JveCcgKyBpbmRleCk7XG4gICAgICAgIGZvciAodmFyIF9pbmRleDIgPSAwOyBfaW5kZXgyIDwgYXJyMi5sZW5ndGg7IF9pbmRleDIrKykge1xuICAgICAgICAgICAgY29tcGFyYXRvcihhcnIyW19pbmRleDJdKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgIF9sb29wMihpbmRleCk7XG59XG4vLyDQktC10YjQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsCDQvdCwIG9mZiAg0LrQsNC20LTQvtCz0L4g0YPRh9Cw0YHRgtC90LjQutCwXG5cbnZhciBfbG9vcDMgPSBmdW5jdGlvbiBfbG9vcDMoaW5kZXgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGF1c2UnICsgaW5kZXgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGFycjIgPSBhcnIuc2xpY2UoMCwgYXJyLmxlbmd0aCk7XG5cbiAgICAgICAgdmFyIGVsZW1JbmRleCA9IGFycjIuaW5kZXhPZignYm94JyArIGluZGV4KTtcbiAgICAgICAgY29tcGFyYXRvckZvck9mZk90aGVycyhhcnIyW2VsZW1JbmRleF0pO1xuICAgIH0pO1xufTtcblxuZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgIF9sb29wMyhpbmRleCk7XG59XG5cbnZhciBfbG9vcDQgPSBmdW5jdGlvbiBfbG9vcDQoaW5kZXgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGxheScgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgYXJyMiA9IGFyci5zbGljZSgwLCBhcnIubGVuZ3RoKTtcblxuICAgICAgICB2YXIgZWxlbUluZGV4ID0gYXJyMi5pbmRleE9mKCdib3gnICsgaW5kZXgpO1xuICAgICAgICBjb21wYXJhdG9yKGFycjJbZWxlbUluZGV4XSk7XG4gICAgfSk7XG59O1xuXG5mb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgX2xvb3A0KGluZGV4KTtcbn1cblxuZnVuY3Rpb24gY29tcGFyYXRvckZvck9mZk90aGVycyhkcmFnZ2VkSWQpIHtcbiAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gbWFuRGFuY2VyLmRhbmNlX2dpZl9maWxlO1xuICAgIH1cbiAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gd29tYW5EYW5jZXIuZGFuY2VfZ2lmX2ZpbGU7XG4gICAgfVxuICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIG1hblNpbmdlci5wYXVzZVBsYXlTb25nKCk7XG4gICAgICAgIHJldHVybiBtYW5TaW5nZXIuc29uZ19naWY7XG4gICAgfVxuICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHdvbWFuU2luZ2VyLnBhdXNlUGxheVNvbmcoKTtcbiAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnNvbmdfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuIGFjY29yZGVvblBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g2JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgYmFzc1BsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gYmFzc1BsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgZGF2dWxQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuIGd1aXRhclBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g5JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgdmlvbGluUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiB2aW9saW5QbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxuICAgIGlmICgnYm94MTAnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBwaXBlUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiBwaXBlUGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F4UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiBzYXhQbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxuICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICBzYXpQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuIHNhelBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHN5bnRoZXNpemVyUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG59Il19
