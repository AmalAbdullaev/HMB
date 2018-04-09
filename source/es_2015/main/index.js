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

var manSong = new _Song.Song('music/womsong.wav');
var womanSong = new _Song.Song('music/womsong.wav'); // созданы песни

//сменить музыку 
var accordeon = new _Instrument.KeyboardInstrument('music/accordeon.mp3');
var synthesizer = new _Instrument.KeyboardInstrument('music/synthesizer.mp3');
var bass = new _Instrument.PercussionInstrument('music/bass.mp3');
var davul = new _Instrument.PercussionInstrument('music/davul.mp3');
var guitar = new _Instrument.StringInstrumet('music/guitar.mp3');
var saz = new _Instrument.StringInstrumet('music/saz.mp3');
var pipe = new _Instrument.WindInstrument('music/pipe.mp3');
var sax = new _Instrument.WindInstrument('music/sax.mp3');
var violin = new _Instrument.BowInstrument('music/violin.mp3'); // созданы инструменты

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
        manSinger.pause();
        return 'url(' + "icons/icoMicroH.png" + ')';
    }
    if ('box4' == draggedId) {
        womanSinger.pause();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FNQUwtQ09NUFVURVIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRGFuY2luZy5qcyIsIkluc3RydW1lbnQuanMiLCJNZW1iZXIuanMiLCJTb25nLmpzIiwiYnV0dG9ucy5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEYW5jZSA9IGV4cG9ydHMuRGFuY2UgPSBmdW5jdGlvbiBEYW5jZShzdGFydERhbmNlRmlsZSwgc3RvcERhbmNlRmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYW5jZSk7XG5cbiAgICB0aGlzLnN0YXJ0RGFuY2VGaWxlID0gc3RhcnREYW5jZUZpbGU7XG4gICAgdGhpcy5zdG9wRGFuY2VGaWxlID0gc3RvcERhbmNlRmlsZTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFdpbmRJbnN0cnVtZW50ID0gZXhwb3J0cy5XaW5kSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIFdpbmRJbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpbmRJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIFN0cmluZ0luc3RydW1ldCA9IGV4cG9ydHMuU3RyaW5nSW5zdHJ1bWV0ID0gZnVuY3Rpb24gU3RyaW5nSW5zdHJ1bWV0KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0cmluZ0luc3RydW1ldCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07XG5cbnZhciBQZXJjdXNzaW9uSW5zdHJ1bWVudCA9IGV4cG9ydHMuUGVyY3Vzc2lvbkluc3RydW1lbnQgPSBmdW5jdGlvbiBQZXJjdXNzaW9uSW5zdHJ1bWVudChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQZXJjdXNzaW9uSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07XG5cbnZhciBCb3dJbnN0cnVtZW50ID0gZXhwb3J0cy5Cb3dJbnN0cnVtZW50ID0gZnVuY3Rpb24gQm93SW5zdHJ1bWVudChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb3dJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIEtleWJvYXJkSW5zdHJ1bWVudCA9IGV4cG9ydHMuS2V5Ym9hcmRJbnN0cnVtZW50ID0gZnVuY3Rpb24gS2V5Ym9hcmRJbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleWJvYXJkSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE1hbkRhbmNlciA9IGV4cG9ydHMuTWFuRGFuY2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hbkRhbmNlcihkYW5jZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFuRGFuY2VyKTtcblxuICAgICAgICB0aGlzLmRhbmNlID0gZGFuY2U7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hbkRhbmNlciwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYW5jZS5zdGFydERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0b3BEYW5jZUZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWFuRGFuY2VyO1xufSgpO1xuXG52YXIgV29tYW5EYW5jZXIgPSBleHBvcnRzLldvbWFuRGFuY2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvbWFuRGFuY2VyKGRhbmNlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXb21hbkRhbmNlcik7XG5cbiAgICAgICAgdGhpcy5kYW5jZSA9IGRhbmNlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXb21hbkRhbmNlciwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYW5jZS5zdGFydERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0b3BEYW5jZUZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV29tYW5EYW5jZXI7XG59KCk7XG5cbnZhciBNYW5TaW5nZXIgPSBleHBvcnRzLk1hblNpbmdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYW5TaW5nZXIoc29uZywgc3RhcnRTaW5naW5nRmlsZSwgc3RvcFNpbmdpbmdGaWxlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW5TaW5nZXIpO1xuXG4gICAgICAgIHRoaXMuc29uZyA9IHNvbmc7XG4gICAgICAgIHRoaXMuc3RhcnRTaW5naW5nRmlsZSA9IHN0YXJ0U2luZ2luZ0ZpbGU7XG4gICAgICAgIHRoaXMuc3RvcFNpbmdpbmdGaWxlID0gc3RvcFNpbmdpbmdGaWxlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNYW5TaW5nZXIsIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0U2luZ2luZ0ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUucGF1c2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BTaW5naW5nRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYW5TaW5nZXI7XG59KCk7XG5cbnZhciBXb21hblNpbmdlciA9IGV4cG9ydHMuV29tYW5TaW5nZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29tYW5TaW5nZXIoc29uZywgc3RhcnRTaW5naW5nRmlsZSwgc3RvcFNpbmdpbmdGaWxlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXb21hblNpbmdlcik7XG5cbiAgICAgICAgdGhpcy5zb25nID0gc29uZztcbiAgICAgICAgdGhpcy5zdGFydFNpbmdpbmdGaWxlID0gc3RhcnRTaW5naW5nRmlsZTtcbiAgICAgICAgdGhpcy5zdG9wU2luZ2luZ0ZpbGUgPSBzdG9wU2luZ2luZ0ZpbGU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdvbWFuU2luZ2VyLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUubG9vcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydFNpbmdpbmdGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLnBhdXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wU2luZ2luZ0ZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV29tYW5TaW5nZXI7XG59KCk7XG5cbnZhciBNdXNpY2lhbiA9IGV4cG9ydHMuTXVzaWNpYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXVzaWNpYW4oaW5zdHJ1bWVudCwgc3RhcnRQbGF5RmlsZSwgc3RvcFBsYXlGaWxlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNdXNpY2lhbik7XG5cbiAgICAgICAgdGhpcy5pbnN0cnVtZW50ID0gaW5zdHJ1bWVudDtcbiAgICAgICAgdGhpcy5zdGFydFBsYXlGaWxlID0gc3RhcnRQbGF5RmlsZTtcbiAgICAgICAgdGhpcy5zdG9wUGxheUZpbGUgPSBzdG9wUGxheUZpbGU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE11c2ljaWFuLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudC5zb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnQuc291bmQubG9vcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydFBsYXlGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50LnNvdW5kLnBhdXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wUGxheUZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTXVzaWNpYW47XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU29uZyA9IGV4cG9ydHMuU29uZyA9IGZ1bmN0aW9uIFNvbmcoc29uZ0ZpbGUpIHtcbiAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb25nKTtcblxuICAgdGhpcy5zb25nRmlsZSA9IG5ldyBBdWRpbygpO1xuICAgdGhpcy5zb25nRmlsZS5zcmMgPSBzb25nRmlsZTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm9wZW5CdXR0b25zID0gb3BlbkJ1dHRvbnM7XG5leHBvcnRzLmNsb3NlQnV0dG9ucyA9IGNsb3NlQnV0dG9ucztcbi8vc29sbyBhbmQgcGxheSDQutC90L7Qv9C60Lgg0YfRgtC+0LEg0L/QvtGP0LLQu9GP0LvQuNGB0Ywg0Lgg0LjRgdGH0LXQt9Cw0LvQuCDQv9GA0Lgg0LTRgNC+0L/QsNGFXG5mdW5jdGlvbiBvcGVuQnV0dG9ucyhkcmFnZ2VkSWQpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIGlmICgnYm94JyArIGluZGV4ID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkJsb2NrJyArIGluZGV4KS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VCdXR0b25zKGRyYWdnZWRJZCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCdib3gnICsgaW5kZXggPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQmxvY2snICsgaW5kZXgpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1dHRvbnMgPSByZXF1aXJlKCcuL2J1dHRvbnMuanMnKTtcblxudmFyIF9EYW5jaW5nID0gcmVxdWlyZSgnLi9EYW5jaW5nLmpzJyk7XG5cbnZhciBfSW5zdHJ1bWVudCA9IHJlcXVpcmUoJy4vSW5zdHJ1bWVudC5qcycpO1xuXG52YXIgX01lbWJlciA9IHJlcXVpcmUoJy4vTWVtYmVyLmpzJyk7XG5cbnZhciBfU29uZyA9IHJlcXVpcmUoJy4vU29uZy5qcycpO1xuXG52YXIgbWFuRGFuY2UgPSBuZXcgX0RhbmNpbmcuRGFuY2UoJ3VybCgnICsgXCJnaWYvNS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIHdvbWFuRGFuY2UgPSBuZXcgX0RhbmNpbmcuRGFuY2UoJ3VybCgnICsgXCJnaWYvMTIuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTsgLy/RgdC+0LfQtNCw0L3RiyDRgtCw0L3RhtGLXG5cbnZhciBtYW5Tb25nID0gbmV3IF9Tb25nLlNvbmcoJ211c2ljL3dvbXNvbmcud2F2Jyk7XG52YXIgd29tYW5Tb25nID0gbmV3IF9Tb25nLlNvbmcoJ211c2ljL3dvbXNvbmcud2F2Jyk7IC8vINGB0L7Qt9C00LDQvdGLINC/0LXRgdC90LhcblxuLy/RgdC80LXQvdC40YLRjCDQvNGD0LfRi9C60YMgXG52YXIgYWNjb3JkZW9uID0gbmV3IF9JbnN0cnVtZW50LktleWJvYXJkSW5zdHJ1bWVudCgnbXVzaWMvYWNjb3JkZW9uLm1wMycpO1xudmFyIHN5bnRoZXNpemVyID0gbmV3IF9JbnN0cnVtZW50LktleWJvYXJkSW5zdHJ1bWVudCgnbXVzaWMvc3ludGhlc2l6ZXIubXAzJyk7XG52YXIgYmFzcyA9IG5ldyBfSW5zdHJ1bWVudC5QZXJjdXNzaW9uSW5zdHJ1bWVudCgnbXVzaWMvYmFzcy5tcDMnKTtcbnZhciBkYXZ1bCA9IG5ldyBfSW5zdHJ1bWVudC5QZXJjdXNzaW9uSW5zdHJ1bWVudCgnbXVzaWMvZGF2dWwubXAzJyk7XG52YXIgZ3VpdGFyID0gbmV3IF9JbnN0cnVtZW50LlN0cmluZ0luc3RydW1ldCgnbXVzaWMvZ3VpdGFyLm1wMycpO1xudmFyIHNheiA9IG5ldyBfSW5zdHJ1bWVudC5TdHJpbmdJbnN0cnVtZXQoJ211c2ljL3Nhei5tcDMnKTtcbnZhciBwaXBlID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCdtdXNpYy9waXBlLm1wMycpO1xudmFyIHNheCA9IG5ldyBfSW5zdHJ1bWVudC5XaW5kSW5zdHJ1bWVudCgnbXVzaWMvc2F4Lm1wMycpO1xudmFyIHZpb2xpbiA9IG5ldyBfSW5zdHJ1bWVudC5Cb3dJbnN0cnVtZW50KCdtdXNpYy92aW9saW4ubXAzJyk7IC8vINGB0L7Qt9C00LDQvdGLINC40L3RgdGC0YDRg9C80LXQvdGC0YtcblxudmFyIHdvbWFuRGFuY2VyID0gbmV3IF9NZW1iZXIuV29tYW5EYW5jZXIod29tYW5EYW5jZSk7XG52YXIgbWFuRGFuY2VyID0gbmV3IF9NZW1iZXIuTWFuRGFuY2VyKG1hbkRhbmNlKTsgLy/RgdC+0LfQtNCw0L3Ri9C1INGC0LDQvdGG0L7RgNGLXG5cbnZhciB3b21hblNpbmdlciA9IG5ldyBfTWVtYmVyLldvbWFuU2luZ2VyKHdvbWFuU29uZywgJ3VybCgnICsgXCJnaWYvMS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIG1hblNpbmdlciA9IG5ldyBfTWVtYmVyLk1hblNpbmdlcihtYW5Tb25nLCAndXJsKCcgKyBcImdpZi8yLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7IC8vINGB0L7Qt9C00LDQvdGLINC/0LXQstGG0YtcblxudmFyIGFjY29yZGVvblBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKGFjY29yZGVvbiwgJ3VybCgnICsgXCJnaWYvMy5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIHN5bnRoZXNpemVyUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oc3ludGhlc2l6ZXIsICd1cmwoJyArIFwiZ2lmLzQuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciBiYXNzUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oYmFzcywgJ3VybCgnICsgXCJnaWYvMTMuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciBkYXZ1bFBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKGRhdnVsLCAndXJsKCcgKyBcImdpZi82LmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgZ3VpdGFyUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oZ3VpdGFyLCAndXJsKCcgKyBcImdpZi83LmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgc2F6UGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oc2F6LCAndXJsKCcgKyBcImdpZi84LmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgcGlwZVBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHBpcGUsICd1cmwoJyArIFwiZ2lmLzkuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciBzYXhQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihzYXgsICd1cmwoJyArIFwiZ2lmLzEwLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgdmlvbGluUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4odmlvbGluLCAndXJsKCcgKyBcImdpZi8xMS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpOyAvLyDRgdC+0LfQtNCw0L3RiyDQu9GO0LTQuCDQuNCz0YDQsNGO0YnQuNC1INC90LAg0LjQvdGB0YLRgNGD0LzQtdC90YLQsNGFXG5cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCB0aGlzLmlkKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ0VudGVyTGVhdmUoZSkge1xuICAgIGlmIChlLnR5cGUgPT0gXCJkcmFnZW50ZXJcIikge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiZHJhZy1lbnRlclwiO1xuICAgICAgICB2YXIgZHJhZ2dlZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuICAgICAgICBkcmFnZ2VkRWwuc3R5bGUud2lkdGggPSAnMTBweCc7XG4gICAgICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnMTBweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgIH1cbn1cblxudmFyIGFyciA9IFtdO1xuXG5mdW5jdGlvbiBoYW5kbGVPdmVyRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGUudHlwZSAhPSBcImRyb3BcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuXG4gICAgaWYgKGRyYWdnZWRFbC5wYXJlbnROb2RlID09IHRoaXMpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRyYWdnZWRFbCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgLy/Rg9Cx0YDQsNGC0Ywg0L/QvtGC0L7QvCAgd2lkdGggYW5kIGhlaWdodFxuICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9IHdpZHRoMihkcmFnZ2VkSWQpO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnNDAwcHgnO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5mbG9hdCA9ICdpbmhlcml0JztcbiAgICBkcmFnZ2VkRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZ2V0SWNvbihkcmFnZ2VkSWQpO1xuXG4gICAgKDAsIF9idXR0b25zLmNsb3NlQnV0dG9ucykoZHJhZ2dlZElkKTtcblxuICAgIGFyci5wb3AoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlT3ZlckRyb3AyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoYXJyLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLnR5cGUgIT0gXCJkcm9wXCIpIHtcbiAgICAgICAgcmV0dXJuOyAvL01lYW5zIGZ1bmN0aW9uIHdpbGwgZXhpdCBpZiBubyBcImRyb3BcIiBldmVudCBpcyBmaXJlZC5cbiAgICB9XG5cbiAgICB2YXIgZHJhZ2dlZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG5cbiAgICBpZiAoZHJhZ2dlZEVsLnBhcmVudE5vZGUgPT0gdGhpcykge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgIHJldHVybjsgLy9ub3RlOiB3aGVuIGEgcmV0dXJuIGlzIHJlYWNoZWQgYSBmdW5jdGlvbiBleGl0cy5cbiAgICB9XG5cbiAgICBkcmFnZ2VkRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkRWwpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICBkcmFnZ2VkRWwuc3R5bGUud2lkdGggPSAnNDUwcHgnO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnNDUwcHgnO1xuXG4gICAgZHJhZ2dlZEVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFjdGl2YXRpb24oZHJhZ2dlZElkKTtcblxuICAgICgwLCBfYnV0dG9ucy5vcGVuQnV0dG9ucykoZHJhZ2dlZElkKTtcblxuICAgIGFyci5wdXNoKGRyYWdnZWRJZCk7XG59XG52YXIgZHJhZ2dhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RyYWdnYWJsZV0nKTtcbnZhciB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcC10YXJnZXRdJyk7XG52YXIgdGFyZ2V0czIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wLXRhcmdldDJdJyk7XG5cbi8v0LfQsNC00LDQtdC8INC00YDQvtC/0Ysg0L3QsCDRjdC70LXQvNC10L3RgtGLXG4oZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHJhZ2dhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRyYWdnYWJsZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGhhbmRsZURyYWdTdGFydCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRhcmdldHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBoYW5kbGVPdmVyRHJvcCk7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGhhbmRsZU92ZXJEcm9wKTtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBoYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgIH1cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCB0YXJnZXRzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgaGFuZGxlT3ZlckRyb3AyKTtcbiAgICAgICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBoYW5kbGVPdmVyRHJvcDIpO1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgIH1cbn0pKCk7XG5cbi8v0LDQutGC0LjQstCw0YbQuNC4INGD0YfQsNGB0YLQvdC40LrQsFxuZnVuY3Rpb24gYWN0aXZhdGlvbihkcmFnZ2VkSWQpIHtcblxuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5EYW5jZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gd29tYW5EYW5jZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gbWFuU2luZ2VyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGFjY29yZGVvblBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBiYXNzUGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGd1aXRhclBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiB2aW9saW5QbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHNheFBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gc2F6UGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wbGF5KCk7XG4gICAgfVxufVxuXG4vL9C+0YLQutC70Y7Rh9Cw0LXRgiDRg9GH0LDRgdGC0L3QuNC60LBcbmZ1bmN0aW9uIHBhdXNlKGRyYWdnZWRJZCkge1xuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5EYW5jZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuRGFuY2VyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5TaW5nZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g2JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g5JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzYXhQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzYXpQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wYXVzZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SWNvbihkcmFnZ2VkSWQpIHtcbiAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29IYWxwYWgucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb0Zlcy5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb01pY3JvSC5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgd29tYW5TaW5nZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTWljcm9GLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNBY2NvcmRlb24ucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNCYXNzLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBkYXZ1bFBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY0RhdnVsLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNHdWl0YXIucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1Zpb2xpbi5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNQaXBlLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F4UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F4LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F6UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F6LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc3ludGhlc2l6ZXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNTeW50aGVzaXplci5wbmdcIiArICcpJztcbiAgICB9XG59XG5cbi8v0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQutC90L7Qv9C+0Logc29sbyhvbi1vZmYpIGFuZCBwbGF5KG9uLW9mZilcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaW5kZXgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNvbG9PbicgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGFycjIgPSBhcnIuc2xpY2UoMCwgYXJyLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIyLmluZGV4T2YoJ2JveCcgKyBpbmRleCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaW5kZXggPSAwOyBfaW5kZXggPCBhcnIyLmxlbmd0aDsgX2luZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoX2luZGV4ICE9IGVsZW1JbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycjJbX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gcGF1c2UoYXJyMltfaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcnIyW19pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBfZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhY3RpdmF0aW9uKGFycjJbX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8g0JLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0L3QsCBzb2xvICDQutCw0LbQtNC+0LPQviDRg9GH0LDRgdGC0L3QuNC60LBcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIF9sb29wKGluZGV4KTtcbiAgICB9XG5cbiAgICB2YXIgX2xvb3AyID0gZnVuY3Rpb24gX2xvb3AyKGluZGV4KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Tb2xvT2ZmJyArIGluZGV4KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgYXJyMiA9IGFyci5zbGljZSgwLCBhcnIubGVuZ3RoKTtcblxuICAgICAgICAgICAgdmFyIGVsZW1JbmRleCA9IGFycjIuaW5kZXhPZignYm94JyArIGluZGV4KTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pbmRleDIgPSAwOyBfaW5kZXgyIDwgYXJyMi5sZW5ndGg7IF9pbmRleDIrKykge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyMltfaW5kZXgyXSk7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhY3RpdmF0aW9uKGFycjJbX2luZGV4Ml0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBfbG9vcDIoaW5kZXgpO1xuICAgIH1cbiAgICAvLyDQktC10YjQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsCDQvdCwIG9mZiAg0LrQsNC20LTQvtCz0L4g0YPRh9Cw0YHRgtC90LjQutCwXG5cbiAgICB2YXIgX2xvb3AzID0gZnVuY3Rpb24gX2xvb3AzKGluZGV4KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5QYXVzZScgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGFycjIgPSBhcnIuc2xpY2UoMCwgYXJyLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIyLmluZGV4T2YoJ2JveCcgKyBpbmRleCk7XG4gICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycjJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHBhdXNlKGFycjJbZWxlbUluZGV4XSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIF9sb29wMyhpbmRleCk7XG4gICAgfVxuXG4gICAgdmFyIF9sb29wNCA9IGZ1bmN0aW9uIF9sb29wNChpbmRleCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGxheScgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGFycjIgPSBhcnIuc2xpY2UoMCwgYXJyLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIyLmluZGV4T2YoJ2JveCcgKyBpbmRleCk7XG4gICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycjJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFjdGl2YXRpb24oYXJyMltlbGVtSW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgX2xvb3A0KGluZGV4KTtcbiAgICB9XG59KSgpO1xuXG4vLyDQvNC10YLQvtC0INCy0L7Qt9Cy0YDRidCw0LXRgiDQuNC60L7QvdC60Lgg0LIg0LjRgdGF0L7QtNC90L7QvCDRgNCw0LfQvNC10YDQtSAo0LTRgNC+0L8g0LLQvdC40LcpLCBcbi8vINC60L7Qs9C00LAg0LjQutC+0L3QutC4INCy0YHQtSDQsdGD0LTRg9GCINC+0LTQvdC+0LPQviDRgNCw0LfQvNC10YDQsCDQvdGD0LbQvdC+INGD0LHRgNCw0YLRjCDRjdGC0L7RgiDQvNC10YLQvtC0XG5mdW5jdGlvbiB3aWR0aDIoZHJhZ2dlZElkKSB7XG4gICAgaWYgKCdib3gxJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICczMDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMjUwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzMwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICcyMTNweCc7XG4gICAgfVxuICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNTAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzIxM3B4JztcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICczNTBweCc7XG4gICAgfVxuICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDEzcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzQwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzUwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDAwcHgnO1xuICAgIH1cbn0iXX0=
