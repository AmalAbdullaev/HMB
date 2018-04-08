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

    arr.push(draggedEl);
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
            document.getElementById('btnSolo' + index).style.display = 'block';
            document.getElementById('btnOff' + index).style.display = 'block';
        }
    }
}

function buttonOutComparator(draggedId) {
    for (var index = 1; index <= 13; index++) {
        if ('box' + index == draggedId) {
            document.getElementById('btnSolo' + index).style.display = 'none';
            document.getElementById('btnOff' + index).style.display = 'none';
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
},{"./Dancing.js":1,"./Instrument.js":2,"./Member.js":3,"./Song.js":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FNQUwtQ09NUFVURVIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRGFuY2luZy5qcyIsIkluc3RydW1lbnQuanMiLCJNZW1iZXIuanMiLCJTb25nLmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEYW5jZSA9IGV4cG9ydHMuRGFuY2UgPSBmdW5jdGlvbiBEYW5jZShkYW5jZV9maWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhbmNlKTtcblxuICAgIHRoaXMuZGFuY2VfZmlsZSA9IGRhbmNlX2ZpbGU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBXaW5kSW5zdHJ1bWVudCA9IGV4cG9ydHMuV2luZEluc3RydW1lbnQgPSBmdW5jdGlvbiBXaW5kSW5zdHJ1bWVudChnaWZfZmlsZSwgaW5zdHVtZW50X21wM19maWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpbmRJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuZ2lmX2ZpbGUgPSBnaWZfZmlsZTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZSA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlLnNyYyA9IGluc3R1bWVudF9tcDNfZmlsZTtcbn07XG5cbnZhciBTdHJpbmdJbnN0cnVtZXQgPSBleHBvcnRzLlN0cmluZ0luc3RydW1ldCA9IGZ1bmN0aW9uIFN0cmluZ0luc3RydW1ldChnaWZfZmlsZSwgaW5zdHVtZW50X21wM19maWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0cmluZ0luc3RydW1ldCk7XG5cbiAgICB0aGlzLmdpZl9maWxlID0gZ2lmX2ZpbGU7XG4gICAgdGhpcy5pbnN0dW1lbnRfbXAzX2ZpbGUgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZS5zcmMgPSBpbnN0dW1lbnRfbXAzX2ZpbGU7XG59O1xuXG52YXIgUGVyY3Vzc2lvbkluc3RydW1lbnQgPSBleHBvcnRzLlBlcmN1c3Npb25JbnN0cnVtZW50ID0gZnVuY3Rpb24gUGVyY3Vzc2lvbkluc3RydW1lbnQoZ2lmX2ZpbGUsIGluc3R1bWVudF9tcDNfZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQZXJjdXNzaW9uSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLmdpZl9maWxlID0gZ2lmX2ZpbGU7XG4gICAgdGhpcy5pbnN0dW1lbnRfbXAzX2ZpbGUgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZS5zcmMgPSBpbnN0dW1lbnRfbXAzX2ZpbGU7XG59O1xuXG52YXIgQm93SW5zdHJ1bWVudCA9IGV4cG9ydHMuQm93SW5zdHJ1bWVudCA9IGZ1bmN0aW9uIEJvd0luc3RydW1lbnQoZ2lmX2ZpbGUsIGluc3R1bWVudF9tcDNfZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb3dJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuZ2lmX2ZpbGUgPSBnaWZfZmlsZTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZSA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlLnNyYyA9IGluc3R1bWVudF9tcDNfZmlsZTtcbn07XG5cbnZhciBLZXlib2FyZEluc3RydW1lbnQgPSBleHBvcnRzLktleWJvYXJkSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIEtleWJvYXJkSW5zdHJ1bWVudChnaWZfZmlsZSwgaW5zdHVtZW50X21wM19maWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleWJvYXJkSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLmdpZl9maWxlID0gZ2lmX2ZpbGU7XG4gICAgdGhpcy5pbnN0dW1lbnRfbXAzX2ZpbGUgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLmluc3R1bWVudF9tcDNfZmlsZS5zcmMgPSBpbnN0dW1lbnRfbXAzX2ZpbGU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNYW4gPSBleHBvcnRzLk1hbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW4pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNYW4sIFt7XG4gICAgICAgIGtleTogXCJzaW5nXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaW5nKHNvbmdfZ2lmLCBzb25nX2ZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZ19naWYgPSBzb25nX2dpZjtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlID0gc29uZ19maWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZGFuY2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRhbmNlKGRhbmNlX2dpZl9maWxlKSB7XG4gICAgICAgICAgICB0aGlzLmRhbmNlX2dpZl9maWxlID0gZGFuY2VfZ2lmX2ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwbGF5T25JbnN0cnVtZW50XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5T25JbnN0cnVtZW50KGluc3RydW1lbnRfZ2lmLCBpbnN0cnVtZW50X21wM19maWxlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRfZ2lmID0gaW5zdHJ1bWVudF9naWY7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRfbXAzX2ZpbGUgPSBpbnN0cnVtZW50X21wM19maWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudF9tcDNfZmlsZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRfbXAzX2ZpbGUubG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRfbXAzX2ZpbGUucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBsYXlTb25nXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5U29uZygpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLmxvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VQbGF5U29uZ1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2VQbGF5U29uZygpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWFuO1xufSgpO1xuXG52YXIgV29tYW4gPSBleHBvcnRzLldvbWFuID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvbWFuKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV29tYW4pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXb21hbiwgW3tcbiAgICAgICAga2V5OiBcInNpbmdcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNpbmcoc29uZ19naWYsIHNvbmdfZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5zb25nX2dpZiA9IHNvbmdfZ2lmO1xuICAgICAgICAgICAgdGhpcy5zb25nX2ZpbGUgPSBzb25nX2ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJkYW5jZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGFuY2UoZGFuY2VfZ2lmX2ZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGFuY2VfZ2lmX2ZpbGUgPSBkYW5jZV9naWZfZmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBsYXlTb25nXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5U29uZygpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLmxvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VQbGF5U29uZ1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2VQbGF5U29uZygpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZ19maWxlLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV29tYW47XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU29uZyA9IGV4cG9ydHMuU29uZyA9IGZ1bmN0aW9uIFNvbmcoc29uZ19naWZfZmlsZSwgc29uZ19tcDNfZmlsZSkge1xuICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvbmcpO1xuXG4gICB0aGlzLnNvbmdfZ2lmX2ZpbGUgPSBzb25nX2dpZl9maWxlO1xuICAgdGhpcy5zb25nX21wM19maWxlID0gbmV3IEF1ZGlvKCk7XG4gICB0aGlzLnNvbmdfbXAzX2ZpbGUuc3JjID0gc29uZ19tcDNfZmlsZTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfRGFuY2luZyA9IHJlcXVpcmUoXCIuL0RhbmNpbmcuanNcIik7XG5cbnZhciBfSW5zdHJ1bWVudCA9IHJlcXVpcmUoXCIuL0luc3RydW1lbnQuanNcIik7XG5cbnZhciBfTWVtYmVyID0gcmVxdWlyZShcIi4vTWVtYmVyLmpzXCIpO1xuXG52YXIgX1NvbmcgPSByZXF1aXJlKFwiLi9Tb25nLmpzXCIpO1xuXG5mdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnRW50ZXJMZWF2ZShlKSB7XG4gICAgaWYgKGUudHlwZSA9PSBcImRyYWdlbnRlclwiKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJkcmFnLWVudGVyXCI7XG4gICAgICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG4gICAgICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICcxMHB4JztcbiAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICcxMHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgfVxufVxuXG52YXIgYXJyID0gW107XG5cbmZ1bmN0aW9uIGhhbmRsZU92ZXJEcm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZS50eXBlICE9IFwiZHJvcFwiKSB7XG4gICAgICAgIHJldHVybjsgLy9NZWFucyBmdW5jdGlvbiB3aWxsIGV4aXQgaWYgbm8gXCJkcm9wXCIgZXZlbnQgaXMgZmlyZWQuXG4gICAgfVxuXG4gICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuXG4gICAgaWYgKGRyYWdnZWRFbC5wYXJlbnROb2RlID09IHRoaXMpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICByZXR1cm47IC8vbm90ZTogd2hlbiBhIHJldHVybiBpcyByZWFjaGVkIGEgZnVuY3Rpb24gZXhpdHMuXG4gICAgfVxuXG4gICAgZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRyYWdnZWRFbCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gd2lkdGgyKGRyYWdnZWRJZCk7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICc0MDBweCc7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmZsb2F0ID0gJ2luaGVyaXQnO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBjb21wYXJhdG9yMihkcmFnZ2VkSWQpO1xuXG4gICAgYnV0dG9uT3V0Q29tcGFyYXRvcihkcmFnZ2VkSWQpO1xuXG4gICAgYXJyLnBvcCgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVPdmVyRHJvcDIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChhcnIubGVuZ3RoID4gNSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUudHlwZSAhPSBcImRyb3BcIikge1xuICAgICAgICByZXR1cm47IC8vTWVhbnMgZnVuY3Rpb24gd2lsbCBleGl0IGlmIG5vIFwiZHJvcFwiIGV2ZW50IGlzIGZpcmVkLlxuICAgIH1cblxuICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICB2YXIgZHJhZ2dlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dlZElkKTtcblxuICAgIGlmIChkcmFnZ2VkRWwucGFyZW50Tm9kZSA9PSB0aGlzKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgcmV0dXJuOyAvL25vdGU6IHdoZW4gYSByZXR1cm4gaXMgcmVhY2hlZCBhIGZ1bmN0aW9uIGV4aXRzLlxuICAgIH1cblxuICAgIGRyYWdnZWRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWRFbCk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChkcmFnZ2VkRWwpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcblxuICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICc0NTBweCc7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICc0NTBweCc7XG5cbiAgICBkcmFnZ2VkRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gY29tcGFyYXRvcihkcmFnZ2VkSWQpO1xuICAgIGJ1dHRvbkluQ29tcGFyYXRvcihkcmFnZ2VkSWQpO1xuXG4gICAgYXJyLnB1c2goZHJhZ2dlZEVsKTtcbn1cbnZhciBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZHJhZ2dhYmxlXScpO1xudmFyIHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wLXRhcmdldF0nKTtcbnZhciB0YXJnZXRzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRyb3AtdGFyZ2V0Ml0nKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBkcmFnZ2FibGUubGVuZ3RoOyBpKyspIHtcbiAgICBkcmFnZ2FibGVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBoYW5kbGVEcmFnU3RhcnQpO1xufVxuXG5mb3IgKHZhciBfaSA9IDA7IF9pIDwgdGFyZ2V0cy5sZW5ndGg7IF9pKyspIHtcbiAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgaGFuZGxlT3ZlckRyb3ApO1xuICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGhhbmRsZU92ZXJEcm9wKTtcbiAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGhhbmRsZURyYWdFbnRlckxlYXZlKTtcbiAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIGhhbmRsZURyYWdFbnRlckxlYXZlKTtcbn1cbmZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHRhcmdldHMubGVuZ3RoOyBfaTIrKykge1xuICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGhhbmRsZU92ZXJEcm9wMik7XG4gICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBoYW5kbGVPdmVyRHJvcDIpO1xuICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBoYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIGhhbmRsZURyYWdFbnRlckxlYXZlKTtcbn1cblxuZnVuY3Rpb24gYnV0dG9uSW5Db21wYXJhdG9yKGRyYWdnZWRJZCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCdib3gnICsgaW5kZXggPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU29sbycgKyBpbmRleCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuT2ZmJyArIGluZGV4KS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYnV0dG9uT3V0Q29tcGFyYXRvcihkcmFnZ2VkSWQpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIGlmICgnYm94JyArIGluZGV4ID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNvbG8nICsgaW5kZXgpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuT2ZmJyArIGluZGV4KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJhdG9yKGRyYWdnZWRJZCkge1xuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5EYW5jZXIuZGFuY2VfZ2lmX2ZpbGU7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiB3b21hbkRhbmNlci5kYW5jZV9naWZfZmlsZTtcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgbWFuU2luZ2VyLnBsYXlTb25nKCk7XG4gICAgICAgIHJldHVybiBtYW5TaW5nZXIuc29uZ19naWY7XG4gICAgfVxuICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHdvbWFuU2luZ2VyLnBsYXlTb25nKCk7XG4gICAgICAgIHJldHVybiB3b21hblNpbmdlci5zb25nX2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgYWNjb3JkZW9uUGxheWVyLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIGFjY29yZGVvblBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g2JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgYmFzc1BsYXllci5wbGF5KCk7XG4gICAgICAgIHJldHVybiBiYXNzUGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBkYXZ1bFBsYXllci5wbGF5KCk7XG4gICAgICAgIHJldHVybiBkYXZ1bFBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgZ3VpdGFyUGxheWVyLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIGd1aXRhclBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g5JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgdmlvbGluUGxheWVyLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIHZpb2xpblBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHBpcGVQbGF5ZXIucGxheSgpO1xuICAgICAgICByZXR1cm4gcGlwZVBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHNheFBsYXllci5wbGF5KCk7XG4gICAgICAgIHJldHVybiBzYXhQbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxuICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICBzYXpQbGF5ZXIucGxheSgpO1xuICAgICAgICByZXR1cm4gc2F6UGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc3ludGhlc2l6ZXJQbGF5ZXIucGxheSgpO1xuICAgICAgICByZXR1cm4gc3ludGhlc2l6ZXJQbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxufVxuLy8g0LzQtdGC0L7QtCDQstC+0LfQstGA0YnQsNC10YIg0LjQutC+0L3QutC4INCyINC40YHRhdC+0LTQvdC+0Lwg0YDQsNC30LzQtdGA0LUgKNC00YDQvtC/INCy0L3QuNC3KSwgXG4vLyDQutC+0LPQtNCwINC40LrQvtC90LrQuCDQstGB0LUg0LHRg9C00YPRgiDQvtC00L3QvtCz0L4g0YDQsNC30LzQtdGA0LAg0L3Rg9C20L3QviDRg9Cx0YDQsNGC0Ywg0Y3RgtC+0YIg0LzQtdGC0L7QtFxuZnVuY3Rpb24gd2lkdGgyKGRyYWdnZWRJZCkge1xuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMzAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzI1MHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICczMDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMjEzcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzUwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3g2JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICcyMTNweCc7XG4gICAgfVxuICAgIGlmICgnYm94NycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMzUwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzQxM3B4JztcbiAgICB9XG4gICAgaWYgKCdib3g5JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MTAnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzQwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc1MDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MTMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzQwMHB4JztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmF0b3IyKGRyYWdnZWRJZCkge1xuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb0hhbHBhaC5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvRmVzLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBtYW5TaW5nZXIucGF1c2VQbGF5U29uZygpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NaWNyb0gucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHdvbWFuU2luZ2VyLnBhdXNlUGxheVNvbmcoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTWljcm9GLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNBY2NvcmRlb24ucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNCYXNzLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBkYXZ1bFBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY0RhdnVsLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNHdWl0YXIucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1Zpb2xpbi5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNQaXBlLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F4UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F4LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F6UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F6LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc3ludGhlc2l6ZXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNTeW50aGVzaXplci5wbmdcIiArICcpJztcbiAgICB9XG59XG5cbnZhciBtYW5EYW5jZSA9IG5ldyBfRGFuY2luZy5EYW5jZSgndXJsKCcgKyBcImdpZi81LmdpZlwiICsgJyknKTtcbnZhciB3b21hbkRhbmNlID0gbmV3IF9EYW5jaW5nLkRhbmNlKCd1cmwoJyArIFwiZ2lmLzEyLmdpZlwiICsgJyknKTsgLy/RgdC+0LfQtNCw0L3RiyDRgtCw0L3RhtGLXG5cbnZhciBtYW5Tb25nID0gbmV3IF9Tb25nLlNvbmcoJ3VybCgnICsgXCJnaWYvMS5naWZcIiArICcpJywgJ211c2ljL2Jvb20ud2F2Jyk7XG52YXIgd29tYW5Tb25nID0gbmV3IF9Tb25nLlNvbmcoJ3VybCgnICsgXCJnaWYvMTAuZ2lmXCIgKyAnKScsICdtdXNpYy93b21zb25nLndhdicpOyAvLyDRgdC+0LfQtNCw0L3RiyDQv9C10YHQvdC4XG5cbi8v0YHQvNC10L3QuNGC0Ywg0LzRg9C30YvQutGDIFxudmFyIGFjY29yZGVvbiA9IG5ldyBfSW5zdHJ1bWVudC5LZXlib2FyZEluc3RydW1lbnQoJ3VybCgnICsgXCJnaWYvMi5naWZcIiArICcpJywgJ211c2ljL2Jvb20ud2F2Jyk7XG52YXIgc3ludGhlc2l6ZXIgPSBuZXcgX0luc3RydW1lbnQuS2V5Ym9hcmRJbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzMuZ2lmXCIgKyAnKScsICdtdXNpYy9jbGFwLndhdicpO1xudmFyIGJhc3MgPSBuZXcgX0luc3RydW1lbnQuUGVyY3Vzc2lvbkluc3RydW1lbnQoJ3VybCgnICsgXCJnaWYvNC5naWZcIiArICcpJywgJ211c2ljL2hpaGF0LndhdicpO1xudmFyIGRhdnVsID0gbmV3IF9JbnN0cnVtZW50LlBlcmN1c3Npb25JbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzYuZ2lmXCIgKyAnKScsICdtdXNpYy9jbGFwLndhdicpO1xudmFyIGd1aXRhciA9IG5ldyBfSW5zdHJ1bWVudC5TdHJpbmdJbnN0cnVtZXQoJ3VybCgnICsgXCJnaWYvNy5naWZcIiArICcpJywgJ211c2ljL2tpY2sud2F2Jyk7XG52YXIgc2F6ID0gbmV3IF9JbnN0cnVtZW50LlN0cmluZ0luc3RydW1ldCgndXJsKCcgKyBcImdpZi84LmdpZlwiICsgJyknLCAnbXVzaWMvdG9tLndhdicpO1xudmFyIHBpcGUgPSBuZXcgX0luc3RydW1lbnQuV2luZEluc3RydW1lbnQoJ3VybCgnICsgXCJnaWYvOS5naWZcIiArICcpJywgJ211c2ljL2tpY2sud2F2Jyk7XG52YXIgc2F4ID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzExLmdpZlwiICsgJyknLCAnbXVzaWMvY2xhcC53YXYnKTtcbnZhciB2aW9saW4gPSBuZXcgX0luc3RydW1lbnQuQm93SW5zdHJ1bWVudCgndXJsKCcgKyBcImdpZi8xMy5naWZcIiArICcpJywgJ211c2ljL2Jvb20ud2F2Jyk7IC8vINGB0L7Qt9C00LDQvdGLINC40L3RgdGC0YDRg9C80LXQvdGC0YtcblxuXG52YXIgYWNjb3JkZW9uUGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgc3ludGhlc2l6ZXJQbGF5ZXIgPSBuZXcgX01lbWJlci5NYW4oKTtcbnZhciBiYXNzUGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgZGF2dWxQbGF5ZXIgPSBuZXcgX01lbWJlci5NYW4oKTtcbnZhciBndWl0YXJQbGF5ZXIgPSBuZXcgX01lbWJlci5NYW4oKTtcbnZhciBzYXpQbGF5ZXIgPSBuZXcgX01lbWJlci5NYW4oKTtcbnZhciBwaXBlUGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgc2F4UGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgdmlvbGluUGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7IC8vINGB0L7Qt9C00LDQvdGLINC70Y7QtNC4INC40LPRgNCw0Y7RidC40LUg0L3QsCDQuNC90YHRgtGA0YPQvNC10L3RgtCw0YVcblxudmFyIHdvbWFuRGFuY2VyID0gbmV3IF9NZW1iZXIuV29tYW4oKTtcbnZhciBtYW5EYW5jZXIgPSBuZXcgX01lbWJlci5NYW4oKTsgLy/RgdC+0LfQtNCw0L3Ri9C1INGC0LDQvdGG0L7RgNGLXG5cbnZhciB3b21hblNpbmdlciA9IG5ldyBfTWVtYmVyLldvbWFuKCk7XG52YXIgbWFuU2luZ2VyID0gbmV3IF9NZW1iZXIuTWFuKCk7IC8vINGB0L7Qt9C00LDQvdGLINC/0LXQstGG0YtcblxuXG53b21hbkRhbmNlci5kYW5jZSh3b21hbkRhbmNlLmRhbmNlX2ZpbGUpO1xubWFuRGFuY2VyLmRhbmNlKG1hbkRhbmNlLmRhbmNlX2ZpbGUpOyAvL9C30LDQtNCw0L3RiyDRgtCw0L3RhtGLINC00LvRjyDRgtCw0L3RhtC+0YDQvtCyXG5cblxud29tYW5TaW5nZXIuc2luZyh3b21hblNvbmcuc29uZ19naWZfZmlsZSwgd29tYW5Tb25nLnNvbmdfbXAzX2ZpbGUpO1xubWFuU2luZ2VyLnNpbmcobWFuU29uZy5zb25nX2dpZl9maWxlLCBtYW5Tb25nLnNvbmdfbXAzX2ZpbGUpOyAvL9C30LDQtNCw0L3RiyDQv9C10YHQvdC4INC00LvRjyDQv9C10LLRhtC+0LJcblxuYWNjb3JkZW9uUGxheWVyLnBsYXlPbkluc3RydW1lbnQoYWNjb3JkZW9uLmdpZl9maWxlLCBhY2NvcmRlb24uaW5zdHVtZW50X21wM19maWxlKTtcbnN5bnRoZXNpemVyUGxheWVyLnBsYXlPbkluc3RydW1lbnQoc3ludGhlc2l6ZXIuZ2lmX2ZpbGUsIHN5bnRoZXNpemVyLmluc3R1bWVudF9tcDNfZmlsZSk7XG5iYXNzUGxheWVyLnBsYXlPbkluc3RydW1lbnQoYmFzcy5naWZfZmlsZSwgYmFzcy5pbnN0dW1lbnRfbXAzX2ZpbGUpO1xuZGF2dWxQbGF5ZXIucGxheU9uSW5zdHJ1bWVudChkYXZ1bC5naWZfZmlsZSwgZGF2dWwuaW5zdHVtZW50X21wM19maWxlKTtcbmd1aXRhclBsYXllci5wbGF5T25JbnN0cnVtZW50KGd1aXRhci5naWZfZmlsZSwgZ3VpdGFyLmluc3R1bWVudF9tcDNfZmlsZSk7XG5zYXpQbGF5ZXIucGxheU9uSW5zdHJ1bWVudChzYXouZ2lmX2ZpbGUsIHNhei5pbnN0dW1lbnRfbXAzX2ZpbGUpO1xucGlwZVBsYXllci5wbGF5T25JbnN0cnVtZW50KHBpcGUuZ2lmX2ZpbGUsIHBpcGUuaW5zdHVtZW50X21wM19maWxlKTtcbnNheFBsYXllci5wbGF5T25JbnN0cnVtZW50KHNheC5naWZfZmlsZSwgc2F4Lmluc3R1bWVudF9tcDNfZmlsZSk7XG52aW9saW5QbGF5ZXIucGxheU9uSW5zdHJ1bWVudCh2aW9saW4uZ2lmX2ZpbGUsIHZpb2xpbi5pbnN0dW1lbnRfbXAzX2ZpbGUpOyAvLyDQt9Cw0LTQsNC90Ysg0LjQvdGB0YLRgNGD0LzQtdC90YLRiyDQtNC70Y8g0LzRg9C30YvQutCw0L3RgtC+0LIiXX0=
