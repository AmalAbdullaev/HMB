(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    draggedEl.style.width = '200px';
    draggedEl.style.height = '200px';
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

    //задать размер гифок
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
},{"./Dancing.js":1,"./Instrument.js":2,"./Member.js":3,"./Song.js":4,"./buttons.js":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1VzZXJzL215c3RlcnkvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRGFuY2luZy5qcyIsIkluc3RydW1lbnQuanMiLCJNZW1iZXIuanMiLCJTb25nLmpzIiwiYnV0dG9ucy5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRGFuY2UgPSBleHBvcnRzLkRhbmNlID0gZnVuY3Rpb24gRGFuY2Uoc3RhcnREYW5jZUZpbGUsIHN0b3BEYW5jZUZpbGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGFuY2UpO1xuXG4gICAgdGhpcy5zdGFydERhbmNlRmlsZSA9IHN0YXJ0RGFuY2VGaWxlO1xuICAgIHRoaXMuc3RvcERhbmNlRmlsZSA9IHN0b3BEYW5jZUZpbGU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBXaW5kSW5zdHJ1bWVudCA9IGV4cG9ydHMuV2luZEluc3RydW1lbnQgPSBmdW5jdGlvbiBXaW5kSW5zdHJ1bWVudChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaW5kSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07XG5cbnZhciBTdHJpbmdJbnN0cnVtZXQgPSBleHBvcnRzLlN0cmluZ0luc3RydW1ldCA9IGZ1bmN0aW9uIFN0cmluZ0luc3RydW1ldChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHJpbmdJbnN0cnVtZXQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59O1xuXG52YXIgUGVyY3Vzc2lvbkluc3RydW1lbnQgPSBleHBvcnRzLlBlcmN1c3Npb25JbnN0cnVtZW50ID0gZnVuY3Rpb24gUGVyY3Vzc2lvbkluc3RydW1lbnQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGVyY3Vzc2lvbkluc3RydW1lbnQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59O1xuXG52YXIgQm93SW5zdHJ1bWVudCA9IGV4cG9ydHMuQm93SW5zdHJ1bWVudCA9IGZ1bmN0aW9uIEJvd0luc3RydW1lbnQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQm93SW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07XG5cbnZhciBLZXlib2FyZEluc3RydW1lbnQgPSBleHBvcnRzLktleWJvYXJkSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIEtleWJvYXJkSW5zdHJ1bWVudChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBLZXlib2FyZEluc3RydW1lbnQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNYW5EYW5jZXIgPSBleHBvcnRzLk1hbkRhbmNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYW5EYW5jZXIoZGFuY2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hbkRhbmNlcik7XG5cbiAgICAgICAgdGhpcy5kYW5jZSA9IGRhbmNlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNYW5EYW5jZXIsIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFuY2Uuc3RhcnREYW5jZUZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYW5jZS5zdG9wRGFuY2VGaWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1hbkRhbmNlcjtcbn0oKTtcblxudmFyIFdvbWFuRGFuY2VyID0gZXhwb3J0cy5Xb21hbkRhbmNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXb21hbkRhbmNlcihkYW5jZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV29tYW5EYW5jZXIpO1xuXG4gICAgICAgIHRoaXMuZGFuY2UgPSBkYW5jZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV29tYW5EYW5jZXIsIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFuY2Uuc3RhcnREYW5jZUZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYW5jZS5zdG9wRGFuY2VGaWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdvbWFuRGFuY2VyO1xufSgpO1xuXG52YXIgTWFuU2luZ2VyID0gZXhwb3J0cy5NYW5TaW5nZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFuU2luZ2VyKHNvbmcsIHN0YXJ0U2luZ2luZ0ZpbGUsIHN0b3BTaW5naW5nRmlsZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFuU2luZ2VyKTtcblxuICAgICAgICB0aGlzLnNvbmcgPSBzb25nO1xuICAgICAgICB0aGlzLnN0YXJ0U2luZ2luZ0ZpbGUgPSBzdGFydFNpbmdpbmdGaWxlO1xuICAgICAgICB0aGlzLnN0b3BTaW5naW5nRmlsZSA9IHN0b3BTaW5naW5nRmlsZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWFuU2luZ2VyLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUubG9vcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydFNpbmdpbmdGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLnBhdXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wU2luZ2luZ0ZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWFuU2luZ2VyO1xufSgpO1xuXG52YXIgV29tYW5TaW5nZXIgPSBleHBvcnRzLldvbWFuU2luZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvbWFuU2luZ2VyKHNvbmcsIHN0YXJ0U2luZ2luZ0ZpbGUsIHN0b3BTaW5naW5nRmlsZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV29tYW5TaW5nZXIpO1xuXG4gICAgICAgIHRoaXMuc29uZyA9IHNvbmc7XG4gICAgICAgIHRoaXMuc3RhcnRTaW5naW5nRmlsZSA9IHN0YXJ0U2luZ2luZ0ZpbGU7XG4gICAgICAgIHRoaXMuc3RvcFNpbmdpbmdGaWxlID0gc3RvcFNpbmdpbmdGaWxlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXb21hblNpbmdlciwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTaW5naW5nRmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5wYXVzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcFNpbmdpbmdGaWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdvbWFuU2luZ2VyO1xufSgpO1xuXG52YXIgTXVzaWNpYW4gPSBleHBvcnRzLk11c2ljaWFuID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE11c2ljaWFuKGluc3RydW1lbnQsIHN0YXJ0UGxheUZpbGUsIHN0b3BQbGF5RmlsZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTXVzaWNpYW4pO1xuXG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudCA9IGluc3RydW1lbnQ7XG4gICAgICAgIHRoaXMuc3RhcnRQbGF5RmlsZSA9IHN0YXJ0UGxheUZpbGU7XG4gICAgICAgIHRoaXMuc3RvcFBsYXlGaWxlID0gc3RvcFBsYXlGaWxlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNdXNpY2lhbiwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnQuc291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50LnNvdW5kLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRQbGF5RmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudC5zb3VuZC5wYXVzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcFBsYXlGaWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE11c2ljaWFuO1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNvbmcgPSBleHBvcnRzLlNvbmcgPSBmdW5jdGlvbiBTb25nKHNvbmdGaWxlKSB7XG4gICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29uZyk7XG5cbiAgIHRoaXMuc29uZ0ZpbGUgPSBuZXcgQXVkaW8oKTtcbiAgIHRoaXMuc29uZ0ZpbGUuc3JjID0gc29uZ0ZpbGU7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5vcGVuQnV0dG9ucyA9IG9wZW5CdXR0b25zO1xuZXhwb3J0cy5jbG9zZUJ1dHRvbnMgPSBjbG9zZUJ1dHRvbnM7XG4vL3NvbG8gYW5kIHBsYXkg0LrQvdC+0L/QutC4INGH0YLQvtCxINC/0L7Rj9Cy0LvRj9C70LjRgdGMINC4INC40YHRh9C10LfQsNC70Lgg0L/RgNC4INC00YDQvtC/0LDRhVxuZnVuY3Rpb24gb3BlbkJ1dHRvbnMoZHJhZ2dlZElkKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBpZiAoJ2JveCcgKyBpbmRleCA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5CbG9jaycgKyBpbmRleCkuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlQnV0dG9ucyhkcmFnZ2VkSWQpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIGlmICgnYm94JyArIGluZGV4ID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkJsb2NrJyArIGluZGV4KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idXR0b25zID0gcmVxdWlyZSgnLi9idXR0b25zLmpzJyk7XG5cbnZhciBfRGFuY2luZyA9IHJlcXVpcmUoJy4vRGFuY2luZy5qcycpO1xuXG52YXIgX0luc3RydW1lbnQgPSByZXF1aXJlKCcuL0luc3RydW1lbnQuanMnKTtcblxudmFyIF9NZW1iZXIgPSByZXF1aXJlKCcuL01lbWJlci5qcycpO1xuXG52YXIgX1NvbmcgPSByZXF1aXJlKCcuL1NvbmcuanMnKTtcblxudmFyIG1hbkRhbmNlID0gbmV3IF9EYW5jaW5nLkRhbmNlKCd1cmwoJyArIFwiZ2lmL21hbkRhbmNlLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvbWFuRGFuY2UuanBnXCIgKyAnKScpO1xudmFyIHdvbWFuRGFuY2UgPSBuZXcgX0RhbmNpbmcuRGFuY2UoJ3VybCgnICsgXCJnaWYvd29tYW5EYW5jZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL3dvbWFuRGFuY2UuanBnXCIgKyAnKScpOyAvL9GB0L7Qt9C00LDQvdGLINGC0LDQvdGG0YtcblxudmFyIG1hblNvbmcgPSBuZXcgX1NvbmcuU29uZygnbXVzaWMvbWFuc29uZy5tcDMnKTtcbnZhciB3b21hblNvbmcgPSBuZXcgX1NvbmcuU29uZygnbXVzaWMvd29tc29uZy53YXYnKTsgLy8g0YHQvtC30LTQsNC90Ysg0L/QtdGB0L3QuFxuXG4vL9GB0LzQtdC90LjRgtGMINC80YPQt9GL0LrRgyBcbnZhciBhY2NvcmRlb24gPSBuZXcgX0luc3RydW1lbnQuS2V5Ym9hcmRJbnN0cnVtZW50KCdtdXNpYy9hY2NvcmRlb24ubXAzJyk7XG52YXIgc3ludGhlc2l6ZXIgPSBuZXcgX0luc3RydW1lbnQuS2V5Ym9hcmRJbnN0cnVtZW50KCdtdXNpYy9zeW50aGVzaXplci5tcDMnKTtcbnZhciBiYXNzID0gbmV3IF9JbnN0cnVtZW50LlBlcmN1c3Npb25JbnN0cnVtZW50KCdtdXNpYy9iYXNzLm1wMycpO1xudmFyIGRhdnVsID0gbmV3IF9JbnN0cnVtZW50LlBlcmN1c3Npb25JbnN0cnVtZW50KCdtdXNpYy9kYXZ1bC5tcDMnKTtcbnZhciBndWl0YXIgPSBuZXcgX0luc3RydW1lbnQuU3RyaW5nSW5zdHJ1bWV0KCdtdXNpYy9ndWl0YXIubXAzJyk7XG52YXIgc2F6ID0gbmV3IF9JbnN0cnVtZW50LlN0cmluZ0luc3RydW1ldCgnbXVzaWMvc2F6Lm1wMycpO1xudmFyIHBpcGUgPSBuZXcgX0luc3RydW1lbnQuV2luZEluc3RydW1lbnQoJ211c2ljL3BpcGUubXAzJyk7XG52YXIgc2F4ID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCdtdXNpYy9zYXgubXAzJyk7XG52YXIgdmlvbGluID0gbmV3IF9JbnN0cnVtZW50LkJvd0luc3RydW1lbnQoJ211c2ljL3Zpb2xpbi5tcDMnKTsgLy8g0YHQvtC30LTQsNC90Ysg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1xuXG52YXIgd29tYW5EYW5jZXIgPSBuZXcgX01lbWJlci5Xb21hbkRhbmNlcih3b21hbkRhbmNlKTtcbnZhciBtYW5EYW5jZXIgPSBuZXcgX01lbWJlci5NYW5EYW5jZXIobWFuRGFuY2UpOyAvL9GB0L7Qt9C00LDQvdGL0LUg0YLQsNC90YbQvtGA0YtcblxudmFyIHdvbWFuU2luZ2VyID0gbmV3IF9NZW1iZXIuV29tYW5TaW5nZXIod29tYW5Tb25nLCAndXJsKCcgKyBcImdpZi93b21hblZvaWNlLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvd29tYW5Wb2ljZS5qcGdcIiArICcpJyk7XG52YXIgbWFuU2luZ2VyID0gbmV3IF9NZW1iZXIuTWFuU2luZ2VyKG1hblNvbmcsICd1cmwoJyArIFwiZ2lmL21hblZvaWNlLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvbWFuVm9pY2UuanBnXCIgKyAnKScpOyAvLyDRgdC+0LfQtNCw0L3RiyDQv9C10LLRhtGLXG5cbnZhciBhY2NvcmRlb25QbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihhY2NvcmRlb24sICd1cmwoJyArIFwiZ2lmL2FjY29yZGlvbi5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL2FjY29yZGlvbi5qcGdcIiArICcpJyk7XG52YXIgc3ludGhlc2l6ZXJQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihzeW50aGVzaXplciwgJ3VybCgnICsgXCJnaWYvc3ludGhlc2l6ZXIuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9zeW50aGVzaXplci5qcGdcIiArICcpJyk7XG52YXIgYmFzc1BsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKGJhc3MsICd1cmwoJyArIFwiZ2lmL2Jhc3MuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9iYXNzLmpwZ1wiICsgJyknKTtcbnZhciBkYXZ1bFBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKGRhdnVsLCAndXJsKCcgKyBcImdpZi9kYXZ1bC5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL2RhdnVsLmpwZ1wiICsgJyknKTtcbnZhciBndWl0YXJQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihndWl0YXIsICd1cmwoJyArIFwiZ2lmL2d1aXRhci5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL2d1aXRhci5qcGdcIiArICcpJyk7XG52YXIgc2F6UGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oc2F6LCAndXJsKCcgKyBcImdpZi9zYXouZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9zYXouanBnXCIgKyAnKScpO1xudmFyIHBpcGVQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihwaXBlLCAndXJsKCcgKyBcImdpZi9waXBlLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvcGlwZS5qcGdcIiArICcpJyk7XG52YXIgc2F4UGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oc2F4LCAndXJsKCcgKyBcImdpZi9zYXguZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9zYXguanBnXCIgKyAnKScpO1xudmFyIHZpb2xpblBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHZpb2xpbiwgJ3VybCgnICsgXCJnaWYvdmlvbGluLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvdmlvbGluLmpwZ1wiICsgJyknKTsgLy8g0YHQvtC30LTQsNC90Ysg0LvRjtC00Lgg0LjQs9GA0LDRjtGJ0LjQtSDQvdCwINC40L3RgdGC0YDRg9C80LXQvdGC0LDRhVxuXG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydChlKSB7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgdGhpcy5pZCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdFbnRlckxlYXZlKGUpIHtcbiAgICBpZiAoZS50eXBlID09IFwiZHJhZ2VudGVyXCIpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcImRyYWctZW50ZXJcIjtcbiAgICAgICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICB2YXIgZHJhZ2dlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dlZElkKTtcbiAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gJzEwcHgnO1xuICAgICAgICBkcmFnZ2VkRWwuc3R5bGUuaGVpZ2h0ID0gJzEwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcbiAgICB9XG59XG5cbnZhciBhcnIgPSBbXTtcblxuZnVuY3Rpb24gaGFuZGxlT3ZlckRyb3AoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChlLnR5cGUgIT0gXCJkcm9wXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkcmFnZ2VkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICB2YXIgZHJhZ2dlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dlZElkKTtcblxuICAgIGlmIChkcmFnZ2VkRWwucGFyZW50Tm9kZSA9PSB0aGlzKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRyYWdnZWRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWRFbCk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChkcmFnZ2VkRWwpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcblxuICAgIC8v0YPQsdGA0LDRgtGMINC/0L7RgtC+0LwgIHdpZHRoIGFuZCBoZWlnaHRcbiAgICBkcmFnZ2VkRWwuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnMjAwcHgnO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5mbG9hdCA9ICdpbmhlcml0JztcbiAgICBkcmFnZ2VkRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZ2V0SWNvbihkcmFnZ2VkSWQpO1xuXG4gICAgKDAsIF9idXR0b25zLmNsb3NlQnV0dG9ucykoZHJhZ2dlZElkKTtcbiAgICB2YXIgZGVsID0gYXJyLmluZGV4T2YoZHJhZ2dlZElkKTtcbiAgICBhcnIuc3BsaWNlKGRlbCwgMSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU92ZXJEcm9wMihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGFyci5sZW5ndGggPiA1KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZS50eXBlICE9IFwiZHJvcFwiKSB7XG4gICAgICAgIHJldHVybjsgLy9NZWFucyBmdW5jdGlvbiB3aWxsIGV4aXQgaWYgbm8gXCJkcm9wXCIgZXZlbnQgaXMgZmlyZWQuXG4gICAgfVxuXG4gICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuXG4gICAgaWYgKGRyYWdnZWRFbC5wYXJlbnROb2RlID09IHRoaXMpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICByZXR1cm47IC8vbm90ZTogd2hlbiBhIHJldHVybiBpcyByZWFjaGVkIGEgZnVuY3Rpb24gZXhpdHMuXG4gICAgfVxuXG4gICAgZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRyYWdnZWRFbCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgLy/Qt9Cw0LTQsNGC0Ywg0YDQsNC30LzQtdGAINCz0LjRhNC+0LpcbiAgICBkcmFnZ2VkRWwuc3R5bGUud2lkdGggPSAnNDUwcHgnO1xuICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnNDUwcHgnO1xuXG4gICAgZHJhZ2dlZEVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFjdGl2YXRpb24oZHJhZ2dlZElkKTtcblxuICAgICgwLCBfYnV0dG9ucy5vcGVuQnV0dG9ucykoZHJhZ2dlZElkKTtcblxuICAgIGFyci5wdXNoKGRyYWdnZWRJZCk7XG59XG52YXIgZHJhZ2dhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RyYWdnYWJsZV0nKTtcbnZhciB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcC10YXJnZXRdJyk7XG52YXIgdGFyZ2V0czIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wLXRhcmdldDJdJyk7XG5cbi8v0LfQsNC00LDQtdC8INC00YDQvtC/0Ysg0L3QsCDRjdC70LXQvNC10L3RgtGLXG4oZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHJhZ2dhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRyYWdnYWJsZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGhhbmRsZURyYWdTdGFydCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRhcmdldHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBoYW5kbGVPdmVyRHJvcCk7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGhhbmRsZU92ZXJEcm9wKTtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBoYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgIH1cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCB0YXJnZXRzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgaGFuZGxlT3ZlckRyb3AyKTtcbiAgICAgICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBoYW5kbGVPdmVyRHJvcDIpO1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgIH1cbn0pKCk7XG5cbi8v0LDQutGC0LjQstCw0YbQuNC4INGD0YfQsNGB0YLQvdC40LrQsFxuZnVuY3Rpb24gYWN0aXZhdGlvbihkcmFnZ2VkSWQpIHtcblxuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5EYW5jZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gd29tYW5EYW5jZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gbWFuU2luZ2VyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGFjY29yZGVvblBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBiYXNzUGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGd1aXRhclBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiB2aW9saW5QbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHNheFBsYXllci5wbGF5KCk7XG4gICAgfVxuICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gc2F6UGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wbGF5KCk7XG4gICAgfVxufVxuXG4vL9C+0YLQutC70Y7Rh9Cw0LXRgiDRg9GH0LDRgdGC0L3QuNC60LBcbmZ1bmN0aW9uIHBhdXNlKGRyYWdnZWRJZCkge1xuICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5EYW5jZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuRGFuY2VyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBtYW5TaW5nZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g2JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBhdXNlKCk7XG4gICAgfVxuICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3g5JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgIH1cbiAgICBpZiAoJ2JveDEwJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzYXhQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzYXpQbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wYXVzZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SWNvbihkcmFnZ2VkSWQpIHtcbiAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29IYWxwYWgucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb0Zlcy5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb01pY3JvSC5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgd29tYW5TaW5nZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTWljcm9GLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNBY2NvcmRlb24ucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNCYXNzLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBkYXZ1bFBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY0RhdnVsLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNHdWl0YXIucG5nXCIgKyAnKSc7XG4gICAgfVxuICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1Zpb2xpbi5wbmdcIiArICcpJztcbiAgICB9XG4gICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNQaXBlLnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F4UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F4LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc2F6UGxheWVyLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F6LnBuZ1wiICsgJyknO1xuICAgIH1cbiAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgc3ludGhlc2l6ZXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNTeW50aGVzaXplci5wbmdcIiArICcpJztcbiAgICB9XG59XG5cbi8v0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQutC90L7Qv9C+0Logc29sbyhvbi1vZmYpIGFuZCBwbGF5KG9uLW9mZilcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU29sb09uJyArIGkpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIuaW5kZXhPZignYm94JyArIGkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPSBlbGVtSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBwYXVzZShhcnJbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFjdGl2YXRpb24oYXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8g0JLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0L3QsCBzb2xvICDQutCw0LbQtNC+0LPQviDRg9GH0LDRgdGC0L3QuNC60LBcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAxMzsgaSsrKSB7XG4gICAgICAgIF9sb29wKGkpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDEzOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNvbG9PZmYnICsgaSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYWN0aXZhdGlvbihhcnJbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vINCS0LXRiNCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC90LAgcGxheSBhbmQgcGF1c2UgINC60LDQttC00L7Qs9C+INGD0YfQsNGB0YLQvdC40LrQsFxuXG4gICAgdmFyIF9sb29wMiA9IGZ1bmN0aW9uIF9sb29wMihpbmRleCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGF1c2UnICsgaW5kZXgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIuaW5kZXhPZignYm94JyArIGluZGV4KTtcbiAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyW2VsZW1JbmRleF0pO1xuICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBwYXVzZShhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIF9sb29wMihpbmRleCk7XG4gICAgfVxuXG4gICAgdmFyIF9sb29wMyA9IGZ1bmN0aW9uIF9sb29wMyhpbmRleCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGxheScgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsZW1JbmRleCA9IGFyci5pbmRleE9mKCdib3gnICsgaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFjdGl2YXRpb24oYXJyW2VsZW1JbmRleF0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBfbG9vcDMoaW5kZXgpO1xuICAgIH1cbn0pKCk7Il19
