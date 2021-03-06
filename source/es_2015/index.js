'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ButtonsState = require('./ButtonsState.js');

var _Dancing = require('./Dancing.js');

var _Instrument = require('./Instrument.js');

var _Member = require('./Member.js');

var _Song = require('./Song.js');

var _constants = require('constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var manDance = new _Dancing.Dance('url(' + "img/gif/manDance.gif" + ')', 'url(' + "img/stopGif/manDance.jpg" + ')');
var womanDance = new _Dancing.Dance('url(' + "img/gif/womanDance.gif" + ')', 'url(' + "img/stopGif/womanDance.jpg" + ')'); //созданы танцы

var manSong = new _Song.Song('music/mansong.mp3');
var womanSong = new _Song.Song('music/womsong.mp3'); // созданы песни

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

var womanSinger = new _Member.WomanSinger(womanSong, 'url(' + "img/gif/womanVoice.gif" + ')', 'url(' + "img/stopGif/womanVoice.jpg" + ')');
var manSinger = new _Member.ManSinger(manSong, 'url(' + "img/gif/manVoice.gif" + ')', 'url(' + "img/stopGif/manVoice.jpg" + ')'); // созданы певцы

var accordeonPlayer = new _Member.Musician(accordeon, 'url(' + "img/gif/accordion.gif" + ')', 'url(' + "img/stopGif/accordion.jpg" + ')');
var synthesizerPlayer = new _Member.Musician(synthesizer, 'url(' + "img/gif/synthesizer.gif" + ')', 'url(' + "img/stopGif/synthesizer.jpg" + ')');
var bassPlayer = new _Member.Musician(bass, 'url(' + "img/gif/bass.gif" + ')', 'url(' + "img/stopGif/bass.jpg" + ')');
var davulPlayer = new _Member.Musician(davul, 'url(' + "img/gif/davul.gif" + ')', 'url(' + "img/stopGif/davul.jpg" + ')');
var guitarPlayer = new _Member.Musician(guitar, 'url(' + "img/gif/guitar.gif" + ')', 'url(' + "img/stopGif/guitar.jpg" + ')');
var sazPlayer = new _Member.Musician(saz, 'url(' + "img/gif/saz.gif" + ')', 'url(' + "img/stopGif/saz.jpg" + ')');
var pipePlayer = new _Member.Musician(pipe, 'url(' + "img/gif/pipe.gif" + ')', 'url(' + "img/stopGif/pipe.jpg" + ')');
var saxPlayer = new _Member.Musician(sax, 'url(' + "img/gif/sax.gif" + ')', 'url(' + "img/stopGif/sax.jpg" + ')');
var violinPlayer = new _Member.Musician(violin, 'url(' + "img/gif/violin.gif" + ')', 'url(' + "img/stopGif/violin.jpg" + ')'); // созданы люди играющие на инструментах

var arr = [];
//solo and play кнопки чтоб появлялись и исчезали при дропахмод
var buttonsState = new _ButtonsState.ButtonsState();
//класс драгендропа

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
        key: 'handleOverDropIconPanel',
        value: function handleOverDropIconPanel(e) {
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
            draggedEl.style.backgroundImage = memberController.setIcon(draggedId);

            buttonsState.invisible(draggedId);
            var del = arr.indexOf(draggedId);
            arr.splice(del, 1);
        }
    }, {
        key: 'handleOverDropMakerPanel',
        value: function handleOverDropMakerPanel(e) {
            e.preventDefault();

            if (arr.length > 6) {
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

            draggedEl.style.backgroundImage = memberController.activate(draggedId);

            buttonsState.visible(draggedId);

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
        targets[_i].addEventListener("dragover", drag_n_drop.handleOverDropIconPanel);
        targets[_i].addEventListener("drop", drag_n_drop.handleOverDropIconPanel);
        targets[_i].addEventListener("dragenter", drag_n_drop.handleDragEnterLeave);
        targets[_i].addEventListener("dragleave", drag_n_drop.handleDragEnterLeave);
    }
    for (var _i2 = 0; _i2 < targets.length; _i2++) {
        targets2[_i2].addEventListener("dragover", drag_n_drop.handleOverDropMakerPanel);
        targets2[_i2].addEventListener("drop", drag_n_drop.handleOverDropMakerPanel);
        targets2[_i2].addEventListener("dragenter", drag_n_drop.handleDragEnterLeave);
        targets2[_i2].addEventListener("dragleave", drag_n_drop.handleDragEnterLeave);
    }
})();

//класс контроля участника

var MemberController = function () {
    function MemberController() {
        _classCallCheck(this, MemberController);
    }

    _createClass(MemberController, [{
        key: 'activate',

        //активации участника
        value: function activate(draggedId) {
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

    }, {
        key: 'deactivate',
        value: function deactivate(draggedId) {
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
        //получить иконку вместо учасника

    }, {
        key: 'setIcon',
        value: function setIcon(draggedId) {
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
    }]);

    return MemberController;
}();

var memberController = new MemberController();

//обработчики кнопок solo(on-off) and play(on-off)

var MemberControlButtons = function () {
    function MemberControlButtons() {
        _classCallCheck(this, MemberControlButtons);
    }

    _createClass(MemberControlButtons, [{
        key: 'soloPerformance',


        // Вешаем обработчик клика на solo  каждого участника
        value: function soloPerformance() {
            var _loop = function _loop(i) {
                document.querySelector('#btnSoloOn' + i).addEventListener('click', function (e) {
                    var elemIndex = arr.indexOf('box' + i);
                    for (var index = 0; index < arr.length; index++) {
                        var elem = document.getElementById(arr[index]);
                        if (index != elemIndex) {
                            elem.style.backgroundImage = memberController.deactivate(arr[index]);
                        } else {
                            elem.style.backgroundImage = memberController.activate(arr[index]);
                        }
                    }
                });
            };

            for (var i = 1; i <= 13; i++) {
                _loop(i);
            }
        }
    }, {
        key: 'resumePerformance',
        value: function resumePerformance() {
            for (var i = 1; i <= 13; i++) {
                document.querySelector('#btnSoloOff' + i).addEventListener('click', function (e) {
                    for (var index = 0; index < arr.length; index++) {
                        var elem = document.getElementById(arr[index]);
                        elem.style.backgroundImage = memberController.activate(arr[index]);
                    }
                });
            }
        }

        // Вешаем обработчик клика на play and pause  каждого участника

    }, {
        key: 'pause',
        value: function pause() {
            var _loop2 = function _loop2(index) {
                document.querySelector('#btnPause' + index).addEventListener('click', function (e) {
                    var elemIndex = arr.indexOf('box' + index);
                    var elem = document.getElementById(arr[elemIndex]);
                    elem.style.backgroundImage = memberController.deactivate(arr[elemIndex]);
                });
            };

            for (var index = 1; index <= 13; index++) {
                _loop2(index);
            }
        }
    }, {
        key: 'play',
        value: function play() {
            var _loop3 = function _loop3(index) {
                document.querySelector('#btnPlay' + index).addEventListener('click', function (e) {
                    var elemIndex = arr.indexOf('box' + index);
                    var elem = document.getElementById(arr[elemIndex]);
                    elem.style.backgroundImage = memberController.activate(arr[elemIndex]);
                });
            };

            for (var index = 1; index <= 13; index++) {
                _loop3(index);
            }
        }
    }]);

    return MemberControlButtons;
}();

var memberControlButtons = new MemberControlButtons();
memberControlButtons.soloPerformance();
memberControlButtons.resumePerformance();
memberControlButtons.pause();
memberControlButtons.play();