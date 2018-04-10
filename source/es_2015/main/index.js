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
    var del = arr.indexOf(draggedId);
    arr.splice(del, 1);
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
    var _loop = function _loop(i) {
        document.querySelector('#btnSoloOn' + i).addEventListener('click', function (e) {
            var elemIndex = arr.indexOf('box' + i);
            for (var index = 0; index < arr.length; index++) {
                var elem = document.getElementById(arr[index]);
                if (index != elemIndex) {
                    elem.style.backgroundImage = pause(arr[index]);
                } else {
                    elem.style.backgroundImage = activation(arr[index]);
                }
            }
        });
    };

    // Вешаем обработчик клика на solo  каждого участника
    for (var i = 1; i <= 13; i++) {
        _loop(i);
    }

    for (var i = 1; i <= 13; i++) {
        document.querySelector('#btnSoloOff' + i).addEventListener('click', function (e) {
            for (var index = 0; index < arr.length; index++) {
                var elem = document.getElementById(arr[index]);
                elem.style.backgroundImage = activation(arr[index]);
            }
        });
    }
    // Вешаем обработчик клика на play and pause  каждого участника

    var _loop2 = function _loop2(index) {
        document.querySelector('#btnPause' + index).addEventListener('click', function (e) {
            var elemIndex = arr.indexOf('box' + index);
            var elem = document.getElementById(arr[elemIndex]);
            elem.style.backgroundImage = pause(arr[elemIndex]);
        });
    };

    for (var index = 1; index <= 13; index++) {
        _loop2(index);
    }

    var _loop3 = function _loop3(index) {
        document.querySelector('#btnPlay' + index).addEventListener('click', function (e) {
            var elemIndex = arr.indexOf('box' + index);
            var elem = document.getElementById(arr[elemIndex]);
            elem.style.backgroundImage = activation(arr[elemIndex]);
        });
    };

    for (var index = 1; index <= 13; index++) {
        _loop3(index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FNQUwtQ09NUFVURVIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRGFuY2luZy5qcyIsIkluc3RydW1lbnQuanMiLCJNZW1iZXIuanMiLCJTb25nLmpzIiwiYnV0dG9ucy5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERhbmNlID0gZXhwb3J0cy5EYW5jZSA9IGZ1bmN0aW9uIERhbmNlKHN0YXJ0RGFuY2VGaWxlLCBzdG9wRGFuY2VGaWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhbmNlKTtcblxuICAgIHRoaXMuc3RhcnREYW5jZUZpbGUgPSBzdGFydERhbmNlRmlsZTtcbiAgICB0aGlzLnN0b3BEYW5jZUZpbGUgPSBzdG9wRGFuY2VGaWxlO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgV2luZEluc3RydW1lbnQgPSBleHBvcnRzLldpbmRJbnN0cnVtZW50ID0gZnVuY3Rpb24gV2luZEluc3RydW1lbnQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2luZEluc3RydW1lbnQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59O1xuXG52YXIgU3RyaW5nSW5zdHJ1bWV0ID0gZXhwb3J0cy5TdHJpbmdJbnN0cnVtZXQgPSBmdW5jdGlvbiBTdHJpbmdJbnN0cnVtZXQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RyaW5nSW5zdHJ1bWV0KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIFBlcmN1c3Npb25JbnN0cnVtZW50ID0gZXhwb3J0cy5QZXJjdXNzaW9uSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIFBlcmN1c3Npb25JbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBlcmN1c3Npb25JbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIEJvd0luc3RydW1lbnQgPSBleHBvcnRzLkJvd0luc3RydW1lbnQgPSBmdW5jdGlvbiBCb3dJbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvd0luc3RydW1lbnQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59O1xuXG52YXIgS2V5Ym9hcmRJbnN0cnVtZW50ID0gZXhwb3J0cy5LZXlib2FyZEluc3RydW1lbnQgPSBmdW5jdGlvbiBLZXlib2FyZEluc3RydW1lbnQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5Ym9hcmRJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTWFuRGFuY2VyID0gZXhwb3J0cy5NYW5EYW5jZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFuRGFuY2VyKGRhbmNlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW5EYW5jZXIpO1xuXG4gICAgICAgIHRoaXMuZGFuY2UgPSBkYW5jZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWFuRGFuY2VyLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0YXJ0RGFuY2VGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFuY2Uuc3RvcERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYW5EYW5jZXI7XG59KCk7XG5cbnZhciBXb21hbkRhbmNlciA9IGV4cG9ydHMuV29tYW5EYW5jZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29tYW5EYW5jZXIoZGFuY2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdvbWFuRGFuY2VyKTtcblxuICAgICAgICB0aGlzLmRhbmNlID0gZGFuY2U7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdvbWFuRGFuY2VyLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0YXJ0RGFuY2VGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFuY2Uuc3RvcERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXb21hbkRhbmNlcjtcbn0oKTtcblxudmFyIE1hblNpbmdlciA9IGV4cG9ydHMuTWFuU2luZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hblNpbmdlcihzb25nLCBzdGFydFNpbmdpbmdGaWxlLCBzdG9wU2luZ2luZ0ZpbGUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hblNpbmdlcik7XG5cbiAgICAgICAgdGhpcy5zb25nID0gc29uZztcbiAgICAgICAgdGhpcy5zdGFydFNpbmdpbmdGaWxlID0gc3RhcnRTaW5naW5nRmlsZTtcbiAgICAgICAgdGhpcy5zdG9wU2luZ2luZ0ZpbGUgPSBzdG9wU2luZ2luZ0ZpbGU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hblNpbmdlciwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTaW5naW5nRmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5wYXVzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcFNpbmdpbmdGaWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1hblNpbmdlcjtcbn0oKTtcblxudmFyIFdvbWFuU2luZ2VyID0gZXhwb3J0cy5Xb21hblNpbmdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXb21hblNpbmdlcihzb25nLCBzdGFydFNpbmdpbmdGaWxlLCBzdG9wU2luZ2luZ0ZpbGUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdvbWFuU2luZ2VyKTtcblxuICAgICAgICB0aGlzLnNvbmcgPSBzb25nO1xuICAgICAgICB0aGlzLnN0YXJ0U2luZ2luZ0ZpbGUgPSBzdGFydFNpbmdpbmdGaWxlO1xuICAgICAgICB0aGlzLnN0b3BTaW5naW5nRmlsZSA9IHN0b3BTaW5naW5nRmlsZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV29tYW5TaW5nZXIsIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0U2luZ2luZ0ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUucGF1c2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BTaW5naW5nRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXb21hblNpbmdlcjtcbn0oKTtcblxudmFyIE11c2ljaWFuID0gZXhwb3J0cy5NdXNpY2lhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdXNpY2lhbihpbnN0cnVtZW50LCBzdGFydFBsYXlGaWxlLCBzdG9wUGxheUZpbGUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE11c2ljaWFuKTtcblxuICAgICAgICB0aGlzLmluc3RydW1lbnQgPSBpbnN0cnVtZW50O1xuICAgICAgICB0aGlzLnN0YXJ0UGxheUZpbGUgPSBzdGFydFBsYXlGaWxlO1xuICAgICAgICB0aGlzLnN0b3BQbGF5RmlsZSA9IHN0b3BQbGF5RmlsZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTXVzaWNpYW4sIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50LnNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudC5zb3VuZC5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0UGxheUZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnQuc291bmQucGF1c2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BQbGF5RmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNdXNpY2lhbjtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTb25nID0gZXhwb3J0cy5Tb25nID0gZnVuY3Rpb24gU29uZyhzb25nRmlsZSkge1xuICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvbmcpO1xuXG4gICB0aGlzLnNvbmdGaWxlID0gbmV3IEF1ZGlvKCk7XG4gICB0aGlzLnNvbmdGaWxlLnNyYyA9IHNvbmdGaWxlO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMub3BlbkJ1dHRvbnMgPSBvcGVuQnV0dG9ucztcbmV4cG9ydHMuY2xvc2VCdXR0b25zID0gY2xvc2VCdXR0b25zO1xuLy9zb2xvIGFuZCBwbGF5INC60L3QvtC/0LrQuCDRh9GC0L7QsSDQv9C+0Y/QstC70Y/Qu9C40YHRjCDQuCDQuNGB0YfQtdC30LDQu9C4INC/0YDQuCDQtNGA0L7Qv9Cw0YVcbmZ1bmN0aW9uIG9wZW5CdXR0b25zKGRyYWdnZWRJZCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCdib3gnICsgaW5kZXggPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQmxvY2snICsgaW5kZXgpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZUJ1dHRvbnMoZHJhZ2dlZElkKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBpZiAoJ2JveCcgKyBpbmRleCA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5CbG9jaycgKyBpbmRleCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYnV0dG9ucyA9IHJlcXVpcmUoJy4vYnV0dG9ucy5qcycpO1xuXG52YXIgX0RhbmNpbmcgPSByZXF1aXJlKCcuL0RhbmNpbmcuanMnKTtcblxudmFyIF9JbnN0cnVtZW50ID0gcmVxdWlyZSgnLi9JbnN0cnVtZW50LmpzJyk7XG5cbnZhciBfTWVtYmVyID0gcmVxdWlyZSgnLi9NZW1iZXIuanMnKTtcblxudmFyIF9Tb25nID0gcmVxdWlyZSgnLi9Tb25nLmpzJyk7XG5cbnZhciBtYW5EYW5jZSA9IG5ldyBfRGFuY2luZy5EYW5jZSgndXJsKCcgKyBcImdpZi81LmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgd29tYW5EYW5jZSA9IG5ldyBfRGFuY2luZy5EYW5jZSgndXJsKCcgKyBcImdpZi8xMi5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpOyAvL9GB0L7Qt9C00LDQvdGLINGC0LDQvdGG0YtcblxudmFyIG1hblNvbmcgPSBuZXcgX1NvbmcuU29uZygnbXVzaWMvd29tc29uZy53YXYnKTtcbnZhciB3b21hblNvbmcgPSBuZXcgX1NvbmcuU29uZygnbXVzaWMvd29tc29uZy53YXYnKTsgLy8g0YHQvtC30LTQsNC90Ysg0L/QtdGB0L3QuFxuXG4vL9GB0LzQtdC90LjRgtGMINC80YPQt9GL0LrRgyBcbnZhciBhY2NvcmRlb24gPSBuZXcgX0luc3RydW1lbnQuS2V5Ym9hcmRJbnN0cnVtZW50KCdtdXNpYy9hY2NvcmRlb24ubXAzJyk7XG52YXIgc3ludGhlc2l6ZXIgPSBuZXcgX0luc3RydW1lbnQuS2V5Ym9hcmRJbnN0cnVtZW50KCdtdXNpYy9zeW50aGVzaXplci5tcDMnKTtcbnZhciBiYXNzID0gbmV3IF9JbnN0cnVtZW50LlBlcmN1c3Npb25JbnN0cnVtZW50KCdtdXNpYy9iYXNzLm1wMycpO1xudmFyIGRhdnVsID0gbmV3IF9JbnN0cnVtZW50LlBlcmN1c3Npb25JbnN0cnVtZW50KCdtdXNpYy9kYXZ1bC5tcDMnKTtcbnZhciBndWl0YXIgPSBuZXcgX0luc3RydW1lbnQuU3RyaW5nSW5zdHJ1bWV0KCdtdXNpYy9ndWl0YXIubXAzJyk7XG52YXIgc2F6ID0gbmV3IF9JbnN0cnVtZW50LlN0cmluZ0luc3RydW1ldCgnbXVzaWMvc2F6Lm1wMycpO1xudmFyIHBpcGUgPSBuZXcgX0luc3RydW1lbnQuV2luZEluc3RydW1lbnQoJ211c2ljL3BpcGUubXAzJyk7XG52YXIgc2F4ID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCdtdXNpYy9zYXgubXAzJyk7XG52YXIgdmlvbGluID0gbmV3IF9JbnN0cnVtZW50LkJvd0luc3RydW1lbnQoJ211c2ljL3Zpb2xpbi5tcDMnKTsgLy8g0YHQvtC30LTQsNC90Ysg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1xuXG52YXIgd29tYW5EYW5jZXIgPSBuZXcgX01lbWJlci5Xb21hbkRhbmNlcih3b21hbkRhbmNlKTtcbnZhciBtYW5EYW5jZXIgPSBuZXcgX01lbWJlci5NYW5EYW5jZXIobWFuRGFuY2UpOyAvL9GB0L7Qt9C00LDQvdGL0LUg0YLQsNC90YbQvtGA0YtcblxudmFyIHdvbWFuU2luZ2VyID0gbmV3IF9NZW1iZXIuV29tYW5TaW5nZXIod29tYW5Tb25nLCAndXJsKCcgKyBcImdpZi8xLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgbWFuU2luZ2VyID0gbmV3IF9NZW1iZXIuTWFuU2luZ2VyKG1hblNvbmcsICd1cmwoJyArIFwiZ2lmLzIuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTsgLy8g0YHQvtC30LTQsNC90Ysg0L/QtdCy0YbRi1xuXG52YXIgYWNjb3JkZW9uUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oYWNjb3JkZW9uLCAndXJsKCcgKyBcImdpZi8zLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7XG52YXIgc3ludGhlc2l6ZXJQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihzeW50aGVzaXplciwgJ3VybCgnICsgXCJnaWYvNC5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIGJhc3NQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihiYXNzLCAndXJsKCcgKyBcImdpZi8xMy5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIGRhdnVsUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oZGF2dWwsICd1cmwoJyArIFwiZ2lmLzYuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciBndWl0YXJQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihndWl0YXIsICd1cmwoJyArIFwiZ2lmLzcuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciBzYXpQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihzYXosICd1cmwoJyArIFwiZ2lmLzguZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciBwaXBlUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4ocGlwZSwgJ3VybCgnICsgXCJnaWYvOS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmLzEuanBnXCIgKyAnKScpO1xudmFyIHNheFBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHNheCwgJ3VybCgnICsgXCJnaWYvMTAuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi8xLmpwZ1wiICsgJyknKTtcbnZhciB2aW9saW5QbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbih2aW9saW4sICd1cmwoJyArIFwiZ2lmLzExLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvMS5qcGdcIiArICcpJyk7IC8vINGB0L7Qt9C00LDQvdGLINC70Y7QtNC4INC40LPRgNCw0Y7RidC40LUg0L3QsCDQuNC90YHRgtGA0YPQvNC10L3RgtCw0YVcblxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnRW50ZXJMZWF2ZShlKSB7XG4gICAgaWYgKGUudHlwZSA9PSBcImRyYWdlbnRlclwiKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJkcmFnLWVudGVyXCI7XG4gICAgICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG4gICAgICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICcxMHB4JztcbiAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICcxMHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgfVxufVxuXG52YXIgYXJyID0gW107XG5cbmZ1bmN0aW9uIGhhbmRsZU92ZXJEcm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZS50eXBlICE9IFwiZHJvcFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZHJhZ2dlZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG5cbiAgICBpZiAoZHJhZ2dlZEVsLnBhcmVudE5vZGUgPT0gdGhpcykge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkcmFnZ2VkRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkRWwpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICAvL9GD0LHRgNCw0YLRjCDQv9C+0YLQvtC8ICB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gd2lkdGgyKGRyYWdnZWRJZCk7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICc0MDBweCc7XG4gICAgZHJhZ2dlZEVsLnN0eWxlLmZsb2F0ID0gJ2luaGVyaXQnO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBnZXRJY29uKGRyYWdnZWRJZCk7XG5cbiAgICAoMCwgX2J1dHRvbnMuY2xvc2VCdXR0b25zKShkcmFnZ2VkSWQpO1xuICAgIHZhciBkZWwgPSBhcnIuaW5kZXhPZihkcmFnZ2VkSWQpO1xuICAgIGFyci5zcGxpY2UoZGVsLCAxKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlT3ZlckRyb3AyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoYXJyLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLnR5cGUgIT0gXCJkcm9wXCIpIHtcbiAgICAgICAgcmV0dXJuOyAvL01lYW5zIGZ1bmN0aW9uIHdpbGwgZXhpdCBpZiBubyBcImRyb3BcIiBldmVudCBpcyBmaXJlZC5cbiAgICB9XG5cbiAgICB2YXIgZHJhZ2dlZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG5cbiAgICBpZiAoZHJhZ2dlZEVsLnBhcmVudE5vZGUgPT0gdGhpcykge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgIHJldHVybjsgLy9ub3RlOiB3aGVuIGEgcmV0dXJuIGlzIHJlYWNoZWQgYSBmdW5jdGlvbiBleGl0cy5cbiAgICB9XG5cbiAgICBkcmFnZ2VkRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkRWwpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICBkcmFnZ2VkRWwuc3R5bGUud2lkdGggPSAnNDUwcHgnO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnNDUwcHgnO1xuXG4gICAgZHJhZ2dlZEVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFjdGl2YXRpb24oZHJhZ2dlZElkKTtcblxuICAgICgwLCBfYnV0dG9ucy5vcGVuQnV0dG9ucykoZHJhZ2dlZElkKTtcblxuICAgIGFyci5wdXNoKGRyYWdnZWRJZCk7XG59XG52YXIgZHJhZ2dhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RyYWdnYWJsZV0nKTtcbnZhciB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcC10YXJnZXRdJyk7XG52YXIgdGFyZ2V0czIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wLXRhcmdldDJdJyk7XG5cbi8v0LfQsNC00LDQtdC8INC00YDQvtC/0Ysg0L3QsCDRjdC70LXQvNC10L3RgtGLXG4oZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHJhZ2dhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRyYWdnYWJsZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGhhbmRsZURyYWdTdGFydCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRhcmdldHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBoYW5kbGVPdmVyRHJvcCk7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGhhbmRsZU92ZXJEcm9wKTtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBoYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgIH1cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCB0YXJnZXRzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgaGFuZGxlT3ZlckRyb3AyKTtcbiAgICAgICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBoYW5kbGVPdmVyRHJvcDIpO1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgIH1cbn0pKCk7XG5cbi8v0LDQutGC0LjQstCw0YbQuNC4INGD0YfQsNGB0YLQvdC40LrQsFxuZnVuY3Rpb24gYWN0aXZhdGlvbihkcmFnZ2VkSWQpIHtcblxuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5EYW5jZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gd29tYW5EYW5jZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gbWFuU2luZ2VyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGFjY29yZGVvblBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBiYXNzUGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGd1aXRhclBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiB2aW9saW5QbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHNheFBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gc2F6UGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wbGF5KCk7XG4gICAgfVxufVxuXG4vL9C+0YLQutC70Y7Rh9Cw0LXRgiDRg9GH0LDRgdGC0L3QuNC60LBcbmZ1bmN0aW9uIHBhdXNlKGRyYWdnZWRJZCkge1xuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5EYW5jZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuRGFuY2VyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5TaW5nZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g2JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g5JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzYXhQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzYXpQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wYXVzZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SWNvbihkcmFnZ2VkSWQpIHtcbiAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29IYWxwYWgucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb0Zlcy5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb01pY3JvSC5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgd29tYW5TaW5nZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTWljcm9GLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNBY2NvcmRlb24ucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNCYXNzLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBkYXZ1bFBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY0RhdnVsLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNHdWl0YXIucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1Zpb2xpbi5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNQaXBlLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F4UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F4LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F6UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F6LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc3ludGhlc2l6ZXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNTeW50aGVzaXplci5wbmdcIiArICcpJztcbiAgICB9XG59XG5cbi8v0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQutC90L7Qv9C+0Logc29sbyhvbi1vZmYpIGFuZCBwbGF5KG9uLW9mZilcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU29sb09uJyArIGkpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIuaW5kZXhPZignYm94JyArIGkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPSBlbGVtSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBwYXVzZShhcnJbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFjdGl2YXRpb24oYXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8g0JLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0L3QsCBzb2xvICDQutCw0LbQtNC+0LPQviDRg9GH0LDRgdGC0L3QuNC60LBcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAxMzsgaSsrKSB7XG4gICAgICAgIF9sb29wKGkpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDEzOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNvbG9PZmYnICsgaSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYWN0aXZhdGlvbihhcnJbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vINCS0LXRiNCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC90LAgcGxheSBhbmQgcGF1c2UgINC60LDQttC00L7Qs9C+INGD0YfQsNGB0YLQvdC40LrQsFxuXG4gICAgdmFyIF9sb29wMiA9IGZ1bmN0aW9uIF9sb29wMihpbmRleCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGF1c2UnICsgaW5kZXgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIuaW5kZXhPZignYm94JyArIGluZGV4KTtcbiAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyW2VsZW1JbmRleF0pO1xuICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBwYXVzZShhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIF9sb29wMihpbmRleCk7XG4gICAgfVxuXG4gICAgdmFyIF9sb29wMyA9IGZ1bmN0aW9uIF9sb29wMyhpbmRleCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGxheScgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsZW1JbmRleCA9IGFyci5pbmRleE9mKCdib3gnICsgaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFjdGl2YXRpb24oYXJyW2VsZW1JbmRleF0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBfbG9vcDMoaW5kZXgpO1xuICAgIH1cbn0pKCk7XG5cbi8vINC80LXRgtC+0LQg0LLQvtC30LLRgNGJ0LDQtdGCINC40LrQvtC90LrQuCDQsiDQuNGB0YXQvtC00L3QvtC8INGA0LDQt9C80LXRgNC1ICjQtNGA0L7QvyDQstC90LjQtyksIFxuLy8g0LrQvtCz0LTQsCDQuNC60L7QvdC60Lgg0LLRgdC1INCx0YPQtNGD0YIg0L7QtNC90L7Qs9C+INGA0LDQt9C80LXRgNCwINC90YPQttC90L4g0YPQsdGA0LDRgtGMINGN0YLQvtGCINC80LXRgtC+0LRcbmZ1bmN0aW9uIHdpZHRoMihkcmFnZ2VkSWQpIHtcbiAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzMwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICcyNTBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMzAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDQnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzIxM3B4JztcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc1MDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnMjEzcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzM1MHB4JztcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MTNweCc7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNDAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MDBweCc7XG4gICAgfVxuICAgIGlmICgnYm94MTEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJzQwMHB4JztcbiAgICB9XG4gICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAnNTAwcHgnO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuICc0MDBweCc7XG4gICAgfVxufSJdfQ==
