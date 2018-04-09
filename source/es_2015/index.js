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