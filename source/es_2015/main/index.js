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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _buttons = require('./buttons.js');

var _Dancing = require('./Dancing.js');

var _Instrument = require('./Instrument.js');

var _Member = require('./Member.js');

var _Song = require('./Song.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var manDance = new _Dancing.Dance('url(' + "gif/manDance.gif" + ')', 'url(' + "stopGif/manDance.jpg" + ')');
var womanDance = new _Dancing.Dance('url(' + "gif/womanDance.gif" + ')', 'url(' + "stopGif/womanDance.jpg" + ')'); //созданы танцы

var manSong = new _Song.Song('music/mansong.mp3');
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

var womanSinger = new _Member.WomanSinger(womanSong, 'url(' + "gif/womanVoice.gif" + ')', 'url(' + "stopGif/womanVoice.jpg" + ')');
var manSinger = new _Member.ManSinger(manSong, 'url(' + "gif/manVoice.gif" + ')', 'url(' + "stopGif/manVoice.jpg" + ')'); // созданы певцы

var accordeonPlayer = new _Member.Musician(accordeon, 'url(' + "gif/accordion.gif" + ')', 'url(' + "stopGif/accordion.jpg" + ')');
var synthesizerPlayer = new _Member.Musician(synthesizer, 'url(' + "gif/synthesizer.gif" + ')', 'url(' + "stopGif/synthesizer.jpg" + ')');
var bassPlayer = new _Member.Musician(bass, 'url(' + "gif/bass.gif" + ')', 'url(' + "stopGif/bass.jpg" + ')');
var davulPlayer = new _Member.Musician(davul, 'url(' + "gif/davul.gif" + ')', 'url(' + "stopGif/davul.jpg" + ')');
var guitarPlayer = new _Member.Musician(guitar, 'url(' + "gif/guitar.gif" + ')', 'url(' + "stopGif/guitar.jpg" + ')');
var sazPlayer = new _Member.Musician(saz, 'url(' + "gif/saz.gif" + ')', 'url(' + "stopGif/saz.jpg" + ')');
var pipePlayer = new _Member.Musician(pipe, 'url(' + "gif/pipe.gif" + ')', 'url(' + "stopGif/pipe.jpg" + ')');
var saxPlayer = new _Member.Musician(sax, 'url(' + "gif/sax.gif" + ')', 'url(' + "stopGif/sax.jpg" + ')');
var violinPlayer = new _Member.Musician(violin, 'url(' + "gif/violin.gif" + ')', 'url(' + "stopGif/violin.jpg" + ')'); // созданы люди играющие на инструментах

var arr = [];

var DragAndDrop = function () {
    function DragAndDrop() {
        _classCallCheck(this, DragAndDrop);
    }

    _createClass(DragAndDrop, [{
        key: 'handleDragStart',
        value: function handleDragStart(e) {
            e.dataTransfer.setData("text", this.id);
        }
    }, {
        key: 'handleDragEnterLeave',
        value: function handleDragEnterLeave(e) {
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
    }, {
        key: 'handleOverDrop',
        value: function handleOverDrop(e) {
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
            draggedEl.style.width = '200px';
            draggedEl.style.height = '270px';
            draggedEl.style.float = 'inherit';
            draggedEl.style.backgroundImage = getIcon(draggedId);

            (0, _buttons.closeButtons)(draggedId);
            var del = arr.indexOf(draggedId);
            arr.splice(del, 1);
        }
    }, {
        key: 'handleOverDrop2',
        value: function handleOverDrop2(e) {
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

            //задать размер гифок
            draggedEl.style.width = '200px';
            draggedEl.style.height = '273px';

            draggedEl.style.backgroundImage = activation(draggedId);

            (0, _buttons.openButtons)(draggedId);

            arr.push(draggedId);
        }
    }]);

    return DragAndDrop;
}();

var draggable = document.querySelectorAll('[draggable]');
var targets = document.querySelectorAll('[data-drop-target]');
var targets2 = document.querySelectorAll('[data-drop-target2]');
var drag_n_drop = new DragAndDrop();

//задаем дропы на элементы
(function () {
    for (var i = 0; i < draggable.length; i++) {
        draggable[i].addEventListener("dragstart", drag_n_drop.handleDragStart);
    }

    for (var _i = 0; _i < targets.length; _i++) {
        targets[_i].addEventListener("dragover", drag_n_drop.handleOverDrop);
        targets[_i].addEventListener("drop", drag_n_drop.handleOverDrop);
        targets[_i].addEventListener("dragenter", drag_n_drop.handleDragEnterLeave);
        targets[_i].addEventListener("dragleave", drag_n_drop.handleDragEnterLeave);
    }
    for (var _i2 = 0; _i2 < targets.length; _i2++) {
        targets2[_i2].addEventListener("dragover", drag_n_drop.handleOverDrop2);
        targets2[_i2].addEventListener("drop", drag_n_drop.handleOverDrop2);
        targets2[_i2].addEventListener("dragenter", drag_n_drop.handleDragEnterLeave);
        targets2[_i2].addEventListener("dragleave", drag_n_drop.handleDragEnterLeave);
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
},{"./Dancing.js":1,"./Instrument.js":2,"./Member.js":3,"./Song.js":4,"./buttons.js":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FNQUwtQ09NUFVURVIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRGFuY2luZy5qcyIsIkluc3RydW1lbnQuanMiLCJNZW1iZXIuanMiLCJTb25nLmpzIiwiYnV0dG9ucy5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERhbmNlID0gZXhwb3J0cy5EYW5jZSA9IGZ1bmN0aW9uIERhbmNlKHN0YXJ0RGFuY2VGaWxlLCBzdG9wRGFuY2VGaWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhbmNlKTtcblxuICAgIHRoaXMuc3RhcnREYW5jZUZpbGUgPSBzdGFydERhbmNlRmlsZTtcbiAgICB0aGlzLnN0b3BEYW5jZUZpbGUgPSBzdG9wRGFuY2VGaWxlO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgV2luZEluc3RydW1lbnQgPSBleHBvcnRzLldpbmRJbnN0cnVtZW50ID0gZnVuY3Rpb24gV2luZEluc3RydW1lbnQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2luZEluc3RydW1lbnQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59O1xuXG52YXIgU3RyaW5nSW5zdHJ1bWV0ID0gZXhwb3J0cy5TdHJpbmdJbnN0cnVtZXQgPSBmdW5jdGlvbiBTdHJpbmdJbnN0cnVtZXQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RyaW5nSW5zdHJ1bWV0KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIFBlcmN1c3Npb25JbnN0cnVtZW50ID0gZXhwb3J0cy5QZXJjdXNzaW9uSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIFBlcmN1c3Npb25JbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBlcmN1c3Npb25JbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIEJvd0luc3RydW1lbnQgPSBleHBvcnRzLkJvd0luc3RydW1lbnQgPSBmdW5jdGlvbiBCb3dJbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvd0luc3RydW1lbnQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59O1xuXG52YXIgS2V5Ym9hcmRJbnN0cnVtZW50ID0gZXhwb3J0cy5LZXlib2FyZEluc3RydW1lbnQgPSBmdW5jdGlvbiBLZXlib2FyZEluc3RydW1lbnQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5Ym9hcmRJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTWFuRGFuY2VyID0gZXhwb3J0cy5NYW5EYW5jZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFuRGFuY2VyKGRhbmNlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW5EYW5jZXIpO1xuXG4gICAgICAgIHRoaXMuZGFuY2UgPSBkYW5jZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWFuRGFuY2VyLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0YXJ0RGFuY2VGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFuY2Uuc3RvcERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYW5EYW5jZXI7XG59KCk7XG5cbnZhciBXb21hbkRhbmNlciA9IGV4cG9ydHMuV29tYW5EYW5jZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29tYW5EYW5jZXIoZGFuY2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdvbWFuRGFuY2VyKTtcblxuICAgICAgICB0aGlzLmRhbmNlID0gZGFuY2U7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdvbWFuRGFuY2VyLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0YXJ0RGFuY2VGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFuY2Uuc3RvcERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXb21hbkRhbmNlcjtcbn0oKTtcblxudmFyIE1hblNpbmdlciA9IGV4cG9ydHMuTWFuU2luZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hblNpbmdlcihzb25nLCBzdGFydFNpbmdpbmdGaWxlLCBzdG9wU2luZ2luZ0ZpbGUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hblNpbmdlcik7XG5cbiAgICAgICAgdGhpcy5zb25nID0gc29uZztcbiAgICAgICAgdGhpcy5zdGFydFNpbmdpbmdGaWxlID0gc3RhcnRTaW5naW5nRmlsZTtcbiAgICAgICAgdGhpcy5zdG9wU2luZ2luZ0ZpbGUgPSBzdG9wU2luZ2luZ0ZpbGU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hblNpbmdlciwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTaW5naW5nRmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5wYXVzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcFNpbmdpbmdGaWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1hblNpbmdlcjtcbn0oKTtcblxudmFyIFdvbWFuU2luZ2VyID0gZXhwb3J0cy5Xb21hblNpbmdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXb21hblNpbmdlcihzb25nLCBzdGFydFNpbmdpbmdGaWxlLCBzdG9wU2luZ2luZ0ZpbGUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdvbWFuU2luZ2VyKTtcblxuICAgICAgICB0aGlzLnNvbmcgPSBzb25nO1xuICAgICAgICB0aGlzLnN0YXJ0U2luZ2luZ0ZpbGUgPSBzdGFydFNpbmdpbmdGaWxlO1xuICAgICAgICB0aGlzLnN0b3BTaW5naW5nRmlsZSA9IHN0b3BTaW5naW5nRmlsZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV29tYW5TaW5nZXIsIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0U2luZ2luZ0ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUucGF1c2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BTaW5naW5nRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXb21hblNpbmdlcjtcbn0oKTtcblxudmFyIE11c2ljaWFuID0gZXhwb3J0cy5NdXNpY2lhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdXNpY2lhbihpbnN0cnVtZW50LCBzdGFydFBsYXlGaWxlLCBzdG9wUGxheUZpbGUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE11c2ljaWFuKTtcblxuICAgICAgICB0aGlzLmluc3RydW1lbnQgPSBpbnN0cnVtZW50O1xuICAgICAgICB0aGlzLnN0YXJ0UGxheUZpbGUgPSBzdGFydFBsYXlGaWxlO1xuICAgICAgICB0aGlzLnN0b3BQbGF5RmlsZSA9IHN0b3BQbGF5RmlsZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTXVzaWNpYW4sIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50LnNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudC5zb3VuZC5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0UGxheUZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnQuc291bmQucGF1c2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BQbGF5RmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNdXNpY2lhbjtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTb25nID0gZXhwb3J0cy5Tb25nID0gZnVuY3Rpb24gU29uZyhzb25nRmlsZSkge1xuICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvbmcpO1xuXG4gICB0aGlzLnNvbmdGaWxlID0gbmV3IEF1ZGlvKCk7XG4gICB0aGlzLnNvbmdGaWxlLnNyYyA9IHNvbmdGaWxlO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMub3BlbkJ1dHRvbnMgPSBvcGVuQnV0dG9ucztcbmV4cG9ydHMuY2xvc2VCdXR0b25zID0gY2xvc2VCdXR0b25zO1xuLy9zb2xvIGFuZCBwbGF5INC60L3QvtC/0LrQuCDRh9GC0L7QsSDQv9C+0Y/QstC70Y/Qu9C40YHRjCDQuCDQuNGB0YfQtdC30LDQu9C4INC/0YDQuCDQtNGA0L7Qv9Cw0YVcbmZ1bmN0aW9uIG9wZW5CdXR0b25zKGRyYWdnZWRJZCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCdib3gnICsgaW5kZXggPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQmxvY2snICsgaW5kZXgpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZUJ1dHRvbnMoZHJhZ2dlZElkKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBpZiAoJ2JveCcgKyBpbmRleCA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5CbG9jaycgKyBpbmRleCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfYnV0dG9ucyA9IHJlcXVpcmUoJy4vYnV0dG9ucy5qcycpO1xuXG52YXIgX0RhbmNpbmcgPSByZXF1aXJlKCcuL0RhbmNpbmcuanMnKTtcblxudmFyIF9JbnN0cnVtZW50ID0gcmVxdWlyZSgnLi9JbnN0cnVtZW50LmpzJyk7XG5cbnZhciBfTWVtYmVyID0gcmVxdWlyZSgnLi9NZW1iZXIuanMnKTtcblxudmFyIF9Tb25nID0gcmVxdWlyZSgnLi9Tb25nLmpzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBtYW5EYW5jZSA9IG5ldyBfRGFuY2luZy5EYW5jZSgndXJsKCcgKyBcImdpZi9tYW5EYW5jZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL21hbkRhbmNlLmpwZ1wiICsgJyknKTtcbnZhciB3b21hbkRhbmNlID0gbmV3IF9EYW5jaW5nLkRhbmNlKCd1cmwoJyArIFwiZ2lmL3dvbWFuRGFuY2UuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi93b21hbkRhbmNlLmpwZ1wiICsgJyknKTsgLy/RgdC+0LfQtNCw0L3RiyDRgtCw0L3RhtGLXG5cbnZhciBtYW5Tb25nID0gbmV3IF9Tb25nLlNvbmcoJ211c2ljL21hbnNvbmcubXAzJyk7XG52YXIgd29tYW5Tb25nID0gbmV3IF9Tb25nLlNvbmcoJ211c2ljL3dvbXNvbmcud2F2Jyk7IC8vINGB0L7Qt9C00LDQvdGLINC/0LXRgdC90LhcblxuLy/RgdC80LXQvdC40YLRjCDQvNGD0LfRi9C60YMgXG52YXIgYWNjb3JkZW9uID0gbmV3IF9JbnN0cnVtZW50LktleWJvYXJkSW5zdHJ1bWVudCgnbXVzaWMvYWNjb3JkZW9uLm1wMycpO1xudmFyIHN5bnRoZXNpemVyID0gbmV3IF9JbnN0cnVtZW50LktleWJvYXJkSW5zdHJ1bWVudCgnbXVzaWMvc3ludGhlc2l6ZXIubXAzJyk7XG52YXIgYmFzcyA9IG5ldyBfSW5zdHJ1bWVudC5QZXJjdXNzaW9uSW5zdHJ1bWVudCgnbXVzaWMvYmFzcy5tcDMnKTtcbnZhciBkYXZ1bCA9IG5ldyBfSW5zdHJ1bWVudC5QZXJjdXNzaW9uSW5zdHJ1bWVudCgnbXVzaWMvZGF2dWwubXAzJyk7XG52YXIgZ3VpdGFyID0gbmV3IF9JbnN0cnVtZW50LlN0cmluZ0luc3RydW1ldCgnbXVzaWMvZ3VpdGFyLm1wMycpO1xudmFyIHNheiA9IG5ldyBfSW5zdHJ1bWVudC5TdHJpbmdJbnN0cnVtZXQoJ211c2ljL3Nhei5tcDMnKTtcbnZhciBwaXBlID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCdtdXNpYy9waXBlLm1wMycpO1xudmFyIHNheCA9IG5ldyBfSW5zdHJ1bWVudC5XaW5kSW5zdHJ1bWVudCgnbXVzaWMvc2F4Lm1wMycpO1xudmFyIHZpb2xpbiA9IG5ldyBfSW5zdHJ1bWVudC5Cb3dJbnN0cnVtZW50KCdtdXNpYy92aW9saW4ubXAzJyk7IC8vINGB0L7Qt9C00LDQvdGLINC40L3RgdGC0YDRg9C80LXQvdGC0YtcblxudmFyIHdvbWFuRGFuY2VyID0gbmV3IF9NZW1iZXIuV29tYW5EYW5jZXIod29tYW5EYW5jZSk7XG52YXIgbWFuRGFuY2VyID0gbmV3IF9NZW1iZXIuTWFuRGFuY2VyKG1hbkRhbmNlKTsgLy/RgdC+0LfQtNCw0L3Ri9C1INGC0LDQvdGG0L7RgNGLXG5cbnZhciB3b21hblNpbmdlciA9IG5ldyBfTWVtYmVyLldvbWFuU2luZ2VyKHdvbWFuU29uZywgJ3VybCgnICsgXCJnaWYvd29tYW5Wb2ljZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL3dvbWFuVm9pY2UuanBnXCIgKyAnKScpO1xudmFyIG1hblNpbmdlciA9IG5ldyBfTWVtYmVyLk1hblNpbmdlcihtYW5Tb25nLCAndXJsKCcgKyBcImdpZi9tYW5Wb2ljZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL21hblZvaWNlLmpwZ1wiICsgJyknKTsgLy8g0YHQvtC30LTQsNC90Ysg0L/QtdCy0YbRi1xuXG52YXIgYWNjb3JkZW9uUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oYWNjb3JkZW9uLCAndXJsKCcgKyBcImdpZi9hY2NvcmRpb24uZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9hY2NvcmRpb24uanBnXCIgKyAnKScpO1xudmFyIHN5bnRoZXNpemVyUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oc3ludGhlc2l6ZXIsICd1cmwoJyArIFwiZ2lmL3N5bnRoZXNpemVyLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvc3ludGhlc2l6ZXIuanBnXCIgKyAnKScpO1xudmFyIGJhc3NQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihiYXNzLCAndXJsKCcgKyBcImdpZi9iYXNzLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvYmFzcy5qcGdcIiArICcpJyk7XG52YXIgZGF2dWxQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihkYXZ1bCwgJ3VybCgnICsgXCJnaWYvZGF2dWwuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9kYXZ1bC5qcGdcIiArICcpJyk7XG52YXIgZ3VpdGFyUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oZ3VpdGFyLCAndXJsKCcgKyBcImdpZi9ndWl0YXIuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9ndWl0YXIuanBnXCIgKyAnKScpO1xudmFyIHNhelBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHNheiwgJ3VybCgnICsgXCJnaWYvc2F6LmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvc2F6LmpwZ1wiICsgJyknKTtcbnZhciBwaXBlUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4ocGlwZSwgJ3VybCgnICsgXCJnaWYvcGlwZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL3BpcGUuanBnXCIgKyAnKScpO1xudmFyIHNheFBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHNheCwgJ3VybCgnICsgXCJnaWYvc2F4LmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvc2F4LmpwZ1wiICsgJyknKTtcbnZhciB2aW9saW5QbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbih2aW9saW4sICd1cmwoJyArIFwiZ2lmL3Zpb2xpbi5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL3Zpb2xpbi5qcGdcIiArICcpJyk7IC8vINGB0L7Qt9C00LDQvdGLINC70Y7QtNC4INC40LPRgNCw0Y7RidC40LUg0L3QsCDQuNC90YHRgtGA0YPQvNC10L3RgtCw0YVcblxudmFyIGFyciA9IFtdO1xuXG52YXIgRHJhZ0FuZERyb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRHJhZ0FuZERyb3AoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnQW5kRHJvcCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERyYWdBbmREcm9wLCBbe1xuICAgICAgICBrZXk6ICdoYW5kbGVEcmFnU3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIHRoaXMuaWQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVEcmFnRW50ZXJMZWF2ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVEcmFnRW50ZXJMZWF2ZShlKSB7XG4gICAgICAgICAgICBpZiAoZS50eXBlID09IFwiZHJhZ2VudGVyXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiZHJhZy1lbnRlclwiO1xuICAgICAgICAgICAgICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ2dlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dlZElkKTtcbiAgICAgICAgICAgICAgICBkcmFnZ2VkRWwuc3R5bGUud2lkdGggPSAnMTBweCc7XG4gICAgICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICcxMHB4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVPdmVyRHJvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVPdmVyRHJvcChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChlLnR5cGUgIT0gXCJkcm9wXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ2dlZEVsLnBhcmVudE5vZGUgPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYWdnZWRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWRFbCk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGRyYWdnZWRFbCk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8v0YPQsdGA0LDRgtGMINC/0L7RgtC+0LwgIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICcyMDBweCc7XG4gICAgICAgICAgICBkcmFnZ2VkRWwuc3R5bGUuaGVpZ2h0ID0gJzI3MHB4JztcbiAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS5mbG9hdCA9ICdpbmhlcml0JztcbiAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBnZXRJY29uKGRyYWdnZWRJZCk7XG5cbiAgICAgICAgICAgICgwLCBfYnV0dG9ucy5jbG9zZUJ1dHRvbnMpKGRyYWdnZWRJZCk7XG4gICAgICAgICAgICB2YXIgZGVsID0gYXJyLmluZGV4T2YoZHJhZ2dlZElkKTtcbiAgICAgICAgICAgIGFyci5zcGxpY2UoZGVsLCAxKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlT3ZlckRyb3AyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU92ZXJEcm9wMihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUudHlwZSAhPSBcImRyb3BcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy9NZWFucyBmdW5jdGlvbiB3aWxsIGV4aXQgaWYgbm8gXCJkcm9wXCIgZXZlbnQgaXMgZmlyZWQuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ2dlZEVsLnBhcmVudE5vZGUgPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vbm90ZTogd2hlbiBhIHJldHVybiBpcyByZWFjaGVkIGEgZnVuY3Rpb24gZXhpdHMuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYWdnZWRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWRFbCk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGRyYWdnZWRFbCk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8v0LfQsNC00LDRgtGMINGA0LDQt9C80LXRgCDQs9C40YTQvtC6XG4gICAgICAgICAgICBkcmFnZ2VkRWwuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICcyNzNweCc7XG5cbiAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhY3RpdmF0aW9uKGRyYWdnZWRJZCk7XG5cbiAgICAgICAgICAgICgwLCBfYnV0dG9ucy5vcGVuQnV0dG9ucykoZHJhZ2dlZElkKTtcblxuICAgICAgICAgICAgYXJyLnB1c2goZHJhZ2dlZElkKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEcmFnQW5kRHJvcDtcbn0oKTtcblxudmFyIGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkcmFnZ2FibGVdJyk7XG52YXIgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRyb3AtdGFyZ2V0XScpO1xudmFyIHRhcmdldHMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcC10YXJnZXQyXScpO1xudmFyIGRyYWdfbl9kcm9wID0gbmV3IERyYWdBbmREcm9wKCk7XG5cbi8v0LfQsNC00LDQtdC8INC00YDQvtC/0Ysg0L3QsCDRjdC70LXQvNC10L3RgtGLXG4oZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHJhZ2dhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRyYWdnYWJsZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdfbl9kcm9wLmhhbmRsZURyYWdTdGFydCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRhcmdldHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnX25fZHJvcC5oYW5kbGVPdmVyRHJvcCk7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyYWdfbl9kcm9wLmhhbmRsZU92ZXJEcm9wKTtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBkcmFnX25fZHJvcC5oYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgZHJhZ19uX2Ryb3AuaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgIH1cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCB0YXJnZXRzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ19uX2Ryb3AuaGFuZGxlT3ZlckRyb3AyKTtcbiAgICAgICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcmFnX25fZHJvcC5oYW5kbGVPdmVyRHJvcDIpO1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgZHJhZ19uX2Ryb3AuaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgZHJhZ19uX2Ryb3AuaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgIH1cbn0pKCk7XG5cbi8v0LDQutGC0LjQstCw0YbQuNC4INGD0YfQsNGB0YLQvdC40LrQsFxuZnVuY3Rpb24gYWN0aXZhdGlvbihkcmFnZ2VkSWQpIHtcblxuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5EYW5jZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gd29tYW5EYW5jZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gbWFuU2luZ2VyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGFjY29yZGVvblBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBiYXNzUGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGd1aXRhclBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiB2aW9saW5QbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHNheFBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gc2F6UGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wbGF5KCk7XG4gICAgfVxufVxuXG4vL9C+0YLQutC70Y7Rh9Cw0LXRgiDRg9GH0LDRgdGC0L3QuNC60LBcbmZ1bmN0aW9uIHBhdXNlKGRyYWdnZWRJZCkge1xuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5EYW5jZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuRGFuY2VyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5TaW5nZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g2JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g5JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzYXhQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzYXpQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wYXVzZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SWNvbihkcmFnZ2VkSWQpIHtcbiAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29IYWxwYWgucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb0Zlcy5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb01pY3JvSC5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgd29tYW5TaW5nZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTWljcm9GLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNBY2NvcmRlb24ucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNCYXNzLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBkYXZ1bFBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY0RhdnVsLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNHdWl0YXIucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1Zpb2xpbi5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNQaXBlLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F4UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F4LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F6UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F6LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc3ludGhlc2l6ZXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNTeW50aGVzaXplci5wbmdcIiArICcpJztcbiAgICB9XG59XG5cbi8v0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQutC90L7Qv9C+0Logc29sbyhvbi1vZmYpIGFuZCBwbGF5KG9uLW9mZilcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU29sb09uJyArIGkpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIuaW5kZXhPZignYm94JyArIGkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPSBlbGVtSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBwYXVzZShhcnJbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFjdGl2YXRpb24oYXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8g0JLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0L3QsCBzb2xvICDQutCw0LbQtNC+0LPQviDRg9GH0LDRgdGC0L3QuNC60LBcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAxMzsgaSsrKSB7XG4gICAgICAgIF9sb29wKGkpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDEzOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNvbG9PZmYnICsgaSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYWN0aXZhdGlvbihhcnJbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vINCS0LXRiNCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC90LAgcGxheSBhbmQgcGF1c2UgINC60LDQttC00L7Qs9C+INGD0YfQsNGB0YLQvdC40LrQsFxuXG4gICAgdmFyIF9sb29wMiA9IGZ1bmN0aW9uIF9sb29wMihpbmRleCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGF1c2UnICsgaW5kZXgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIuaW5kZXhPZignYm94JyArIGluZGV4KTtcbiAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyW2VsZW1JbmRleF0pO1xuICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBwYXVzZShhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIF9sb29wMihpbmRleCk7XG4gICAgfVxuXG4gICAgdmFyIF9sb29wMyA9IGZ1bmN0aW9uIF9sb29wMyhpbmRleCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGxheScgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsZW1JbmRleCA9IGFyci5pbmRleE9mKCdib3gnICsgaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFjdGl2YXRpb24oYXJyW2VsZW1JbmRleF0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBfbG9vcDMoaW5kZXgpO1xuICAgIH1cbn0pKCk7Il19
