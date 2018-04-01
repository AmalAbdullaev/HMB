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
    this.instument_mp3_file = instument_mp3_file;
};

var StringInstrumet = exports.StringInstrumet = function StringInstrumet(gif_file, instument_mp3_file) {
    _classCallCheck(this, StringInstrumet);

    this.gif_file = gif_file;
    this.instument_mp3_file = instument_mp3_file;
};

var PercussionInstrument = exports.PercussionInstrument = function PercussionInstrument(gif_file, instument_mp3_file) {
    _classCallCheck(this, PercussionInstrument);

    this.gif_file = gif_file;
    this.instument_mp3_file = instument_mp3_file;
};

var BowInstrument = exports.BowInstrument = function BowInstrument(gif_file, instument_mp3_file) {
    _classCallCheck(this, BowInstrument);

    this.gif_file = gif_file;
    this.instument_mp3_file = instument_mp3_file;
};

var KeyboardInstrument = exports.KeyboardInstrument = function KeyboardInstrument(gif_file, instument_mp3_file) {
    _classCallCheck(this, KeyboardInstrument);

    this.gif_file = gif_file;
    this.instument_mp3_file = instument_mp3_file;
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
   this.song_mp3_file = song_mp3_file;
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

function comparator(draggedId) {
    if ('box1' == draggedId) {
        return manDancer.dance_gif_file;
    }
    if ('box2' == draggedId) {
        return womanDancer.dance_gif_file;
    }
    if ('box3' == draggedId) {
        return manSinger.song_gif;
    }
    if ('box4' == draggedId) {
        return womanSinger.song_gif;
    }
    if ('box5' == draggedId) {
        return accordeonPlayer.instrument_gif;
    }
    if ('box6' == draggedId) {
        return bassPlayer.instrument_gif;
    }
    if ('box7' == draggedId) {
        return davulPlayer.instrument_gif;
    }
    if ('box8' == draggedId) {
        return guitarPlayer.instrument_gif;
    }
    if ('box9' == draggedId) {
        return violinPlayer.instrument_gif;
    }
    if ('box10' == draggedId) {
        return pipePlayer.instrument_gif;
    }
    if ('box11' == draggedId) {
        return saxPlayer.instrument_gif;
    }
    if ('box12' == draggedId) {
        return sazPlayer.instrument_gif;
    }
    if ('box13' == draggedId) {
        return synthesizerPlayer.instrument_gif;
    }
}

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
        return 'url(' + "icons/icoMicroH.png" + ')';
    }
    if ('box4' == draggedId) {
        return 'url(' + "icons/icoMicroF.png" + ')';
    }
    if ('box5' == draggedId) {
        return 'url(' + "icons/icoMusicAccordeon.png" + ')';
    }
    if ('box6' == draggedId) {
        return 'url(' + "icons/icoMusicBass.png" + ')';
    }
    if ('box7' == draggedId) {
        return 'url(' + "icons/icoMusicDavul.png" + ')';
    }
    if ('box8' == draggedId) {
        return 'url(' + "icons/icoMusicGuitar.png" + ')';
    }
    if ('box9' == draggedId) {
        return 'url(' + "icons/icoMusicViolin.png" + ')';
    }
    if ('box10' == draggedId) {
        return 'url(' + "icons/icoMusicPipe.png" + ')';
    }
    if ('box11' == draggedId) {
        return 'url(' + "icons/icoMusicSax.png" + ')';
    }
    if ('box12' == draggedId) {
        return 'url(' + "icons/icoMusicSaz.png" + ')';
    }
    if ('box13' == draggedId) {
        return 'url(' + "icons/icoMusicSynthesizer.png" + ')';
    }
}

var manDance = new _Dancing.Dance('url(' + "gif/12.gif" + ')');
var womanDance = new _Dancing.Dance('url(' + "gif/5.gif" + ')'); //созданы танцы

var manSong = new _Song.Song('url(' + "gif/1.gif" + ')', 'song_mp3_file');
var womanSong = new _Song.Song('url(' + "gif/10.gif" + ')', 'song_mp3_file'); // созданы песни

var accordeon = new _Instrument.KeyboardInstrument('url(' + "gif/2.gif" + ')', 'mp3_url');
var synthesizer = new _Instrument.KeyboardInstrument('url(' + "gif/3.gif" + ')', 'mp3_url');
var bass = new _Instrument.PercussionInstrument('url(' + "gif/4.gif" + ')', 'mp3_url');
var davul = new _Instrument.PercussionInstrument('url(' + "gif/6.gif" + ')', 'mp3_url');
var guitar = new _Instrument.StringInstrumet('url(' + "gif/7.gif" + ')', 'mp3_url');
var saz = new _Instrument.StringInstrumet('url(' + "gif/8.gif" + ')', 'mp3_url');
var pipe = new _Instrument.WindInstrument('url(' + "gif/9.gif" + ')', 'mp3_url');
var sax = new _Instrument.WindInstrument('url(' + "gif/11.gif" + ')', 'mp3_url');
var violin = new _Instrument.BowInstrument('url(' + "gif/13.gif" + ')', 'mp3_url'); // созданы инструменты


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


womanSinger.sing(womanSong.song_gif_file, womanSinger.song_mp3_file);
manSinger.sing(manSong.song_gif_file, manSong.song_mp3_file); //заданы песни для певцов

accordeonPlayer.playOnInstrument(accordeon.gif_file, accordeon.instument_mp3_file);
synthesizerPlayer.playOnInstrument(synthesizer.gif_file, synthesizer.instument_mp3_file);
bassPlayer.playOnInstrument(bass.gif_file, bassPlayer.instrument_mp3_file);
davulPlayer.playOnInstrument(davul.gif_file, davul.instument_mp3_file);
guitarPlayer.playOnInstrument(guitar.gif_file, guitar.instument_mp3_file);
sazPlayer.playOnInstrument(saz.gif_file, saz.instument_mp3_file);
pipePlayer.playOnInstrument(pipe.gif_file, pipe.instument_mp3_file);
saxPlayer.playOnInstrument(sax.gif_file, sax.instument_mp3_file);
violinPlayer.playOnInstrument(violin.gif_file, violin.instument_mp3_file); // заданы инструменты для музыкантов
},{"./Dancing.js":1,"./Instrument.js":2,"./Member.js":3,"./Song.js":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FNQUwtQ09NUFVURVIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRGFuY2luZy5qcyIsIkluc3RydW1lbnQuanMiLCJNZW1iZXIuanMiLCJTb25nLmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRGFuY2UgPSBleHBvcnRzLkRhbmNlID0gZnVuY3Rpb24gRGFuY2UoZGFuY2VfZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYW5jZSk7XG5cbiAgICB0aGlzLmRhbmNlX2ZpbGUgPSBkYW5jZV9maWxlO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgV2luZEluc3RydW1lbnQgPSBleHBvcnRzLldpbmRJbnN0cnVtZW50ID0gZnVuY3Rpb24gV2luZEluc3RydW1lbnQoZ2lmX2ZpbGUsIGluc3R1bWVudF9tcDNfZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaW5kSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLmdpZl9maWxlID0gZ2lmX2ZpbGU7XG4gICAgdGhpcy5pbnN0dW1lbnRfbXAzX2ZpbGUgPSBpbnN0dW1lbnRfbXAzX2ZpbGU7XG59O1xuXG52YXIgU3RyaW5nSW5zdHJ1bWV0ID0gZXhwb3J0cy5TdHJpbmdJbnN0cnVtZXQgPSBmdW5jdGlvbiBTdHJpbmdJbnN0cnVtZXQoZ2lmX2ZpbGUsIGluc3R1bWVudF9tcDNfZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHJpbmdJbnN0cnVtZXQpO1xuXG4gICAgdGhpcy5naWZfZmlsZSA9IGdpZl9maWxlO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlID0gaW5zdHVtZW50X21wM19maWxlO1xufTtcblxudmFyIFBlcmN1c3Npb25JbnN0cnVtZW50ID0gZXhwb3J0cy5QZXJjdXNzaW9uSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIFBlcmN1c3Npb25JbnN0cnVtZW50KGdpZl9maWxlLCBpbnN0dW1lbnRfbXAzX2ZpbGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGVyY3Vzc2lvbkluc3RydW1lbnQpO1xuXG4gICAgdGhpcy5naWZfZmlsZSA9IGdpZl9maWxlO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlID0gaW5zdHVtZW50X21wM19maWxlO1xufTtcblxudmFyIEJvd0luc3RydW1lbnQgPSBleHBvcnRzLkJvd0luc3RydW1lbnQgPSBmdW5jdGlvbiBCb3dJbnN0cnVtZW50KGdpZl9maWxlLCBpbnN0dW1lbnRfbXAzX2ZpbGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQm93SW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLmdpZl9maWxlID0gZ2lmX2ZpbGU7XG4gICAgdGhpcy5pbnN0dW1lbnRfbXAzX2ZpbGUgPSBpbnN0dW1lbnRfbXAzX2ZpbGU7XG59O1xuXG52YXIgS2V5Ym9hcmRJbnN0cnVtZW50ID0gZXhwb3J0cy5LZXlib2FyZEluc3RydW1lbnQgPSBmdW5jdGlvbiBLZXlib2FyZEluc3RydW1lbnQoZ2lmX2ZpbGUsIGluc3R1bWVudF9tcDNfZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBLZXlib2FyZEluc3RydW1lbnQpO1xuXG4gICAgdGhpcy5naWZfZmlsZSA9IGdpZl9maWxlO1xuICAgIHRoaXMuaW5zdHVtZW50X21wM19maWxlID0gaW5zdHVtZW50X21wM19maWxlO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTWFuID0gZXhwb3J0cy5NYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFuKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFuKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWFuLCBbe1xuICAgICAgICBrZXk6IFwic2luZ1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2luZyhzb25nX2dpZiwgc29uZ19maWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmdfZ2lmID0gc29uZ19naWY7XG4gICAgICAgICAgICB0aGlzLnNvbmdfZmlsZSA9IHNvbmdfZmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImRhbmNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkYW5jZShkYW5jZV9naWZfZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5kYW5jZV9naWZfZmlsZSA9IGRhbmNlX2dpZl9maWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGxheU9uSW5zdHJ1bWVudFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheU9uSW5zdHJ1bWVudChpbnN0cnVtZW50X2dpZiwgaW5zdHJ1bWVudF9tcDNfZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50X2dpZiA9IGluc3RydW1lbnRfZ2lmO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50X21wM19maWxlID0gaW5zdHJ1bWVudF9tcDNfZmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYW47XG59KCk7XG5cbnZhciBXb21hbiA9IGV4cG9ydHMuV29tYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29tYW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXb21hbik7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdvbWFuLCBbe1xuICAgICAgICBrZXk6IFwic2luZ1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2luZyhzb25nX2dpZiwgc29uZ19maWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmdfZ2lmID0gc29uZ19naWY7XG4gICAgICAgICAgICB0aGlzLnNvbmdfZmlsZSA9IHNvbmdfZmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImRhbmNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkYW5jZShkYW5jZV9naWZfZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5kYW5jZV9naWZfZmlsZSA9IGRhbmNlX2dpZl9maWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdvbWFuO1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNvbmcgPSBleHBvcnRzLlNvbmcgPSBmdW5jdGlvbiBTb25nKHNvbmdfZ2lmX2ZpbGUsIHNvbmdfbXAzX2ZpbGUpIHtcbiAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb25nKTtcblxuICAgdGhpcy5zb25nX2dpZl9maWxlID0gc29uZ19naWZfZmlsZTtcbiAgIHRoaXMuc29uZ19tcDNfZmlsZSA9IHNvbmdfbXAzX2ZpbGU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX0RhbmNpbmcgPSByZXF1aXJlKFwiLi9EYW5jaW5nLmpzXCIpO1xuXG52YXIgX0luc3RydW1lbnQgPSByZXF1aXJlKFwiLi9JbnN0cnVtZW50LmpzXCIpO1xuXG52YXIgX01lbWJlciA9IHJlcXVpcmUoXCIuL01lbWJlci5qc1wiKTtcblxudmFyIF9Tb25nID0gcmVxdWlyZShcIi4vU29uZy5qc1wiKTtcblxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCB0aGlzLmlkKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ0VudGVyTGVhdmUoZSkge1xuICAgIGlmIChlLnR5cGUgPT0gXCJkcmFnZW50ZXJcIikge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiZHJhZy1lbnRlclwiO1xuICAgICAgICB2YXIgZHJhZ2dlZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuICAgICAgICBkcmFnZ2VkRWwuc3R5bGUud2lkdGggPSAnMTBweCc7XG4gICAgICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnMTBweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgIH1cbn1cblxudmFyIGFyciA9IFtdO1xuXG5mdW5jdGlvbiBoYW5kbGVPdmVyRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGUudHlwZSAhPSBcImRyb3BcIikge1xuICAgICAgICByZXR1cm47IC8vTWVhbnMgZnVuY3Rpb24gd2lsbCBleGl0IGlmIG5vIFwiZHJvcFwiIGV2ZW50IGlzIGZpcmVkLlxuICAgIH1cblxuICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICB2YXIgZHJhZ2dlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dlZElkKTtcblxuICAgIGlmIChkcmFnZ2VkRWwucGFyZW50Tm9kZSA9PSB0aGlzKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgcmV0dXJuOyAvL25vdGU6IHdoZW4gYSByZXR1cm4gaXMgcmVhY2hlZCBhIGZ1bmN0aW9uIGV4aXRzLlxuICAgIH1cblxuICAgIGRyYWdnZWRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWRFbCk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChkcmFnZ2VkRWwpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcblxuICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9IHdpZHRoMihkcmFnZ2VkSWQpO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnNDAwcHgnO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5mbG9hdCA9ICdpbmhlcml0JztcbiAgICBkcmFnZ2VkRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gY29tcGFyYXRvcjIoZHJhZ2dlZElkKTtcbiAgICBhcnIucG9wKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU92ZXJEcm9wMihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGFyci5sZW5ndGggPiA1KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZS50eXBlICE9IFwiZHJvcFwiKSB7XG4gICAgICAgIHJldHVybjsgLy9NZWFucyBmdW5jdGlvbiB3aWxsIGV4aXQgaWYgbm8gXCJkcm9wXCIgZXZlbnQgaXMgZmlyZWQuXG4gICAgfVxuXG4gICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuXG4gICAgaWYgKGRyYWdnZWRFbC5wYXJlbnROb2RlID09IHRoaXMpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICByZXR1cm47IC8vbm90ZTogd2hlbiBhIHJldHVybiBpcyByZWFjaGVkIGEgZnVuY3Rpb24gZXhpdHMuXG4gICAgfVxuXG4gICAgZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRyYWdnZWRFbCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gJzQ1MHB4JztcbiAgICBkcmFnZ2VkRWwuc3R5bGUuaGVpZ2h0ID0gJzQ1MHB4JztcblxuICAgIGRyYWdnZWRFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBjb21wYXJhdG9yKGRyYWdnZWRJZCk7XG5cbiAgICBhcnIucHVzaChkcmFnZ2VkRWwpO1xufVxudmFyIGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkcmFnZ2FibGVdJyk7XG52YXIgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRyb3AtdGFyZ2V0XScpO1xudmFyIHRhcmdldHMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcC10YXJnZXQyXScpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IGRyYWdnYWJsZS5sZW5ndGg7IGkrKykge1xuICAgIGRyYWdnYWJsZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGhhbmRsZURyYWdTdGFydCk7XG59XG5cbmZvciAodmFyIF9pID0gMDsgX2kgPCB0YXJnZXRzLmxlbmd0aDsgX2krKykge1xuICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBoYW5kbGVPdmVyRHJvcCk7XG4gICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgaGFuZGxlT3ZlckRyb3ApO1xuICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xufVxuZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgdGFyZ2V0cy5sZW5ndGg7IF9pMisrKSB7XG4gICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgaGFuZGxlT3ZlckRyb3AyKTtcbiAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGhhbmRsZU92ZXJEcm9wMik7XG4gICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGhhbmRsZURyYWdFbnRlckxlYXZlKTtcbiAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xufVxuXG5mdW5jdGlvbiBjb21wYXJhdG9yKGRyYWdnZWRJZCkge1xuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5EYW5jZXIuZGFuY2VfZ2lmX2ZpbGU7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiB3b21hbkRhbmNlci5kYW5jZV9naWZfZmlsZTtcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIG1hblNpbmdlci5zb25nX2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnNvbmdfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gYWNjb3JkZW9uUGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gYmFzc1BsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gZ3VpdGFyUGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gdmlvbGluUGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIuaW5zdHJ1bWVudF9naWY7XG4gICAgfVxuICAgIGlmICgnYm94MTEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gc2F4UGxheWVyLmluc3RydW1lbnRfZ2lmO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHNhelBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5pbnN0cnVtZW50X2dpZjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHdpZHRoMihkcmFnZ2VkSWQpIHtcbiAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzMwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICcyNTBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMzAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDQnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzIxM3B4JztcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc1MDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMjEzcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzM1MHB4JztcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MTNweCc7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MTEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzQwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNTAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MDBweCc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJhdG9yMihkcmFnZ2VkSWQpIHtcbiAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29IYWxwYWgucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb0Zlcy5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTWljcm9ILnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDQnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NaWNyb0YucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljQWNjb3JkZW9uLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY0Jhc3MucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljRGF2dWwucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljR3VpdGFyLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1Zpb2xpbi5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljUGlwZS5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F4LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNTYXoucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94MTMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1N5bnRoZXNpemVyLnBuZ1wiICsgJyknO1xuICAgIH1cbn1cblxudmFyIG1hbkRhbmNlID0gbmV3IF9EYW5jaW5nLkRhbmNlKCd1cmwoJyArIFwiZ2lmLzEyLmdpZlwiICsgJyknKTtcbnZhciB3b21hbkRhbmNlID0gbmV3IF9EYW5jaW5nLkRhbmNlKCd1cmwoJyArIFwiZ2lmLzUuZ2lmXCIgKyAnKScpOyAvL9GB0L7Qt9C00LDQvdGLINGC0LDQvdGG0YtcblxudmFyIG1hblNvbmcgPSBuZXcgX1NvbmcuU29uZygndXJsKCcgKyBcImdpZi8xLmdpZlwiICsgJyknLCAnc29uZ19tcDNfZmlsZScpO1xudmFyIHdvbWFuU29uZyA9IG5ldyBfU29uZy5Tb25nKCd1cmwoJyArIFwiZ2lmLzEwLmdpZlwiICsgJyknLCAnc29uZ19tcDNfZmlsZScpOyAvLyDRgdC+0LfQtNCw0L3RiyDQv9C10YHQvdC4XG5cbnZhciBhY2NvcmRlb24gPSBuZXcgX0luc3RydW1lbnQuS2V5Ym9hcmRJbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzIuZ2lmXCIgKyAnKScsICdtcDNfdXJsJyk7XG52YXIgc3ludGhlc2l6ZXIgPSBuZXcgX0luc3RydW1lbnQuS2V5Ym9hcmRJbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzMuZ2lmXCIgKyAnKScsICdtcDNfdXJsJyk7XG52YXIgYmFzcyA9IG5ldyBfSW5zdHJ1bWVudC5QZXJjdXNzaW9uSW5zdHJ1bWVudCgndXJsKCcgKyBcImdpZi80LmdpZlwiICsgJyknLCAnbXAzX3VybCcpO1xudmFyIGRhdnVsID0gbmV3IF9JbnN0cnVtZW50LlBlcmN1c3Npb25JbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzYuZ2lmXCIgKyAnKScsICdtcDNfdXJsJyk7XG52YXIgZ3VpdGFyID0gbmV3IF9JbnN0cnVtZW50LlN0cmluZ0luc3RydW1ldCgndXJsKCcgKyBcImdpZi83LmdpZlwiICsgJyknLCAnbXAzX3VybCcpO1xudmFyIHNheiA9IG5ldyBfSW5zdHJ1bWVudC5TdHJpbmdJbnN0cnVtZXQoJ3VybCgnICsgXCJnaWYvOC5naWZcIiArICcpJywgJ21wM191cmwnKTtcbnZhciBwaXBlID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzkuZ2lmXCIgKyAnKScsICdtcDNfdXJsJyk7XG52YXIgc2F4ID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzExLmdpZlwiICsgJyknLCAnbXAzX3VybCcpO1xudmFyIHZpb2xpbiA9IG5ldyBfSW5zdHJ1bWVudC5Cb3dJbnN0cnVtZW50KCd1cmwoJyArIFwiZ2lmLzEzLmdpZlwiICsgJyknLCAnbXAzX3VybCcpOyAvLyDRgdC+0LfQtNCw0L3RiyDQuNC90YHRgtGA0YPQvNC10L3RgtGLXG5cblxudmFyIGFjY29yZGVvblBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIHN5bnRoZXNpemVyUGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgYmFzc1BsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIGRhdnVsUGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgZ3VpdGFyUGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgc2F6UGxheWVyID0gbmV3IF9NZW1iZXIuTWFuKCk7XG52YXIgcGlwZVBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIHNheFBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpO1xudmFyIHZpb2xpblBsYXllciA9IG5ldyBfTWVtYmVyLk1hbigpOyAvLyDRgdC+0LfQtNCw0L3RiyDQu9GO0LTQuCDQuNCz0YDQsNGO0YnQuNC1INC90LAg0LjQvdGB0YLRgNGD0LzQtdC90YLQsNGFXG5cbnZhciB3b21hbkRhbmNlciA9IG5ldyBfTWVtYmVyLldvbWFuKCk7XG52YXIgbWFuRGFuY2VyID0gbmV3IF9NZW1iZXIuTWFuKCk7IC8v0YHQvtC30LTQsNC90YvQtSDRgtCw0L3RhtC+0YDRi1xuXG52YXIgd29tYW5TaW5nZXIgPSBuZXcgX01lbWJlci5Xb21hbigpO1xudmFyIG1hblNpbmdlciA9IG5ldyBfTWVtYmVyLk1hbigpOyAvLyDRgdC+0LfQtNCw0L3RiyDQv9C10LLRhtGLXG5cblxud29tYW5EYW5jZXIuZGFuY2Uod29tYW5EYW5jZS5kYW5jZV9maWxlKTtcbm1hbkRhbmNlci5kYW5jZShtYW5EYW5jZS5kYW5jZV9maWxlKTsgLy/Qt9Cw0LTQsNC90Ysg0YLQsNC90YbRiyDQtNC70Y8g0YLQsNC90YbQvtGA0L7QslxuXG5cbndvbWFuU2luZ2VyLnNpbmcod29tYW5Tb25nLnNvbmdfZ2lmX2ZpbGUsIHdvbWFuU2luZ2VyLnNvbmdfbXAzX2ZpbGUpO1xubWFuU2luZ2VyLnNpbmcobWFuU29uZy5zb25nX2dpZl9maWxlLCBtYW5Tb25nLnNvbmdfbXAzX2ZpbGUpOyAvL9C30LDQtNCw0L3RiyDQv9C10YHQvdC4INC00LvRjyDQv9C10LLRhtC+0LJcblxuYWNjb3JkZW9uUGxheWVyLnBsYXlPbkluc3RydW1lbnQoYWNjb3JkZW9uLmdpZl9maWxlLCBhY2NvcmRlb24uaW5zdHVtZW50X21wM19maWxlKTtcbnN5bnRoZXNpemVyUGxheWVyLnBsYXlPbkluc3RydW1lbnQoc3ludGhlc2l6ZXIuZ2lmX2ZpbGUsIHN5bnRoZXNpemVyLmluc3R1bWVudF9tcDNfZmlsZSk7XG5iYXNzUGxheWVyLnBsYXlPbkluc3RydW1lbnQoYmFzcy5naWZfZmlsZSwgYmFzc1BsYXllci5pbnN0cnVtZW50X21wM19maWxlKTtcbmRhdnVsUGxheWVyLnBsYXlPbkluc3RydW1lbnQoZGF2dWwuZ2lmX2ZpbGUsIGRhdnVsLmluc3R1bWVudF9tcDNfZmlsZSk7XG5ndWl0YXJQbGF5ZXIucGxheU9uSW5zdHJ1bWVudChndWl0YXIuZ2lmX2ZpbGUsIGd1aXRhci5pbnN0dW1lbnRfbXAzX2ZpbGUpO1xuc2F6UGxheWVyLnBsYXlPbkluc3RydW1lbnQoc2F6LmdpZl9maWxlLCBzYXouaW5zdHVtZW50X21wM19maWxlKTtcbnBpcGVQbGF5ZXIucGxheU9uSW5zdHJ1bWVudChwaXBlLmdpZl9maWxlLCBwaXBlLmluc3R1bWVudF9tcDNfZmlsZSk7XG5zYXhQbGF5ZXIucGxheU9uSW5zdHJ1bWVudChzYXguZ2lmX2ZpbGUsIHNheC5pbnN0dW1lbnRfbXAzX2ZpbGUpO1xudmlvbGluUGxheWVyLnBsYXlPbkluc3RydW1lbnQodmlvbGluLmdpZl9maWxlLCB2aW9saW4uaW5zdHVtZW50X21wM19maWxlKTsgLy8g0LfQsNC00LDQvdGLINC40L3RgdGC0YDRg9C80LXQvdGC0Ysg0LTQu9GPINC80YPQt9GL0LrQsNC90YLQvtCyIl19
