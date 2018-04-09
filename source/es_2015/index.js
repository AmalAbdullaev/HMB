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