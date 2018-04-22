(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
module.exports={
  "O_RDONLY": 0,
  "O_WRONLY": 1,
  "O_RDWR": 2,
  "S_IFMT": 61440,
  "S_IFREG": 32768,
  "S_IFDIR": 16384,
  "S_IFCHR": 8192,
  "S_IFBLK": 24576,
  "S_IFIFO": 4096,
  "S_IFLNK": 40960,
  "S_IFSOCK": 49152,
  "O_CREAT": 512,
  "O_EXCL": 2048,
  "O_NOCTTY": 131072,
  "O_TRUNC": 1024,
  "O_APPEND": 8,
  "O_DIRECTORY": 1048576,
  "O_NOFOLLOW": 256,
  "O_SYNC": 128,
  "O_SYMLINK": 2097152,
  "O_NONBLOCK": 4,
  "S_IRWXU": 448,
  "S_IRUSR": 256,
  "S_IWUSR": 128,
  "S_IXUSR": 64,
  "S_IRWXG": 56,
  "S_IRGRP": 32,
  "S_IWGRP": 16,
  "S_IXGRP": 8,
  "S_IRWXO": 7,
  "S_IROTH": 4,
  "S_IWOTH": 2,
  "S_IXOTH": 1,
  "E2BIG": 7,
  "EACCES": 13,
  "EADDRINUSE": 48,
  "EADDRNOTAVAIL": 49,
  "EAFNOSUPPORT": 47,
  "EAGAIN": 35,
  "EALREADY": 37,
  "EBADF": 9,
  "EBADMSG": 94,
  "EBUSY": 16,
  "ECANCELED": 89,
  "ECHILD": 10,
  "ECONNABORTED": 53,
  "ECONNREFUSED": 61,
  "ECONNRESET": 54,
  "EDEADLK": 11,
  "EDESTADDRREQ": 39,
  "EDOM": 33,
  "EDQUOT": 69,
  "EEXIST": 17,
  "EFAULT": 14,
  "EFBIG": 27,
  "EHOSTUNREACH": 65,
  "EIDRM": 90,
  "EILSEQ": 92,
  "EINPROGRESS": 36,
  "EINTR": 4,
  "EINVAL": 22,
  "EIO": 5,
  "EISCONN": 56,
  "EISDIR": 21,
  "ELOOP": 62,
  "EMFILE": 24,
  "EMLINK": 31,
  "EMSGSIZE": 40,
  "EMULTIHOP": 95,
  "ENAMETOOLONG": 63,
  "ENETDOWN": 50,
  "ENETRESET": 52,
  "ENETUNREACH": 51,
  "ENFILE": 23,
  "ENOBUFS": 55,
  "ENODATA": 96,
  "ENODEV": 19,
  "ENOENT": 2,
  "ENOEXEC": 8,
  "ENOLCK": 77,
  "ENOLINK": 97,
  "ENOMEM": 12,
  "ENOMSG": 91,
  "ENOPROTOOPT": 42,
  "ENOSPC": 28,
  "ENOSR": 98,
  "ENOSTR": 99,
  "ENOSYS": 78,
  "ENOTCONN": 57,
  "ENOTDIR": 20,
  "ENOTEMPTY": 66,
  "ENOTSOCK": 38,
  "ENOTSUP": 45,
  "ENOTTY": 25,
  "ENXIO": 6,
  "EOPNOTSUPP": 102,
  "EOVERFLOW": 84,
  "EPERM": 1,
  "EPIPE": 32,
  "EPROTO": 100,
  "EPROTONOSUPPORT": 43,
  "EPROTOTYPE": 41,
  "ERANGE": 34,
  "EROFS": 30,
  "ESPIPE": 29,
  "ESRCH": 3,
  "ESTALE": 70,
  "ETIME": 101,
  "ETIMEDOUT": 60,
  "ETXTBSY": 26,
  "EWOULDBLOCK": 35,
  "EXDEV": 18,
  "SIGHUP": 1,
  "SIGINT": 2,
  "SIGQUIT": 3,
  "SIGILL": 4,
  "SIGTRAP": 5,
  "SIGABRT": 6,
  "SIGIOT": 6,
  "SIGBUS": 10,
  "SIGFPE": 8,
  "SIGKILL": 9,
  "SIGUSR1": 30,
  "SIGSEGV": 11,
  "SIGUSR2": 31,
  "SIGPIPE": 13,
  "SIGALRM": 14,
  "SIGTERM": 15,
  "SIGCHLD": 20,
  "SIGCONT": 19,
  "SIGSTOP": 17,
  "SIGTSTP": 18,
  "SIGTTIN": 21,
  "SIGTTOU": 22,
  "SIGURG": 16,
  "SIGXCPU": 24,
  "SIGXFSZ": 25,
  "SIGVTALRM": 26,
  "SIGPROF": 27,
  "SIGWINCH": 28,
  "SIGIO": 23,
  "SIGSYS": 12,
  "SSL_OP_ALL": 2147486719,
  "SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION": 262144,
  "SSL_OP_CIPHER_SERVER_PREFERENCE": 4194304,
  "SSL_OP_CISCO_ANYCONNECT": 32768,
  "SSL_OP_COOKIE_EXCHANGE": 8192,
  "SSL_OP_CRYPTOPRO_TLSEXT_BUG": 2147483648,
  "SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS": 2048,
  "SSL_OP_EPHEMERAL_RSA": 0,
  "SSL_OP_LEGACY_SERVER_CONNECT": 4,
  "SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER": 32,
  "SSL_OP_MICROSOFT_SESS_ID_BUG": 1,
  "SSL_OP_MSIE_SSLV2_RSA_PADDING": 0,
  "SSL_OP_NETSCAPE_CA_DN_BUG": 536870912,
  "SSL_OP_NETSCAPE_CHALLENGE_BUG": 2,
  "SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG": 1073741824,
  "SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG": 8,
  "SSL_OP_NO_COMPRESSION": 131072,
  "SSL_OP_NO_QUERY_MTU": 4096,
  "SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION": 65536,
  "SSL_OP_NO_SSLv2": 16777216,
  "SSL_OP_NO_SSLv3": 33554432,
  "SSL_OP_NO_TICKET": 16384,
  "SSL_OP_NO_TLSv1": 67108864,
  "SSL_OP_NO_TLSv1_1": 268435456,
  "SSL_OP_NO_TLSv1_2": 134217728,
  "SSL_OP_PKCS1_CHECK_1": 0,
  "SSL_OP_PKCS1_CHECK_2": 0,
  "SSL_OP_SINGLE_DH_USE": 1048576,
  "SSL_OP_SINGLE_ECDH_USE": 524288,
  "SSL_OP_SSLEAY_080_CLIENT_DH_BUG": 128,
  "SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG": 0,
  "SSL_OP_TLS_BLOCK_PADDING_BUG": 512,
  "SSL_OP_TLS_D5_BUG": 256,
  "SSL_OP_TLS_ROLLBACK_BUG": 8388608,
  "ENGINE_METHOD_DSA": 2,
  "ENGINE_METHOD_DH": 4,
  "ENGINE_METHOD_RAND": 8,
  "ENGINE_METHOD_ECDH": 16,
  "ENGINE_METHOD_ECDSA": 32,
  "ENGINE_METHOD_CIPHERS": 64,
  "ENGINE_METHOD_DIGESTS": 128,
  "ENGINE_METHOD_STORE": 256,
  "ENGINE_METHOD_PKEY_METHS": 512,
  "ENGINE_METHOD_PKEY_ASN1_METHS": 1024,
  "ENGINE_METHOD_ALL": 65535,
  "ENGINE_METHOD_NONE": 0,
  "DH_CHECK_P_NOT_SAFE_PRIME": 2,
  "DH_CHECK_P_NOT_PRIME": 1,
  "DH_UNABLE_TO_CHECK_GENERATOR": 4,
  "DH_NOT_SUITABLE_GENERATOR": 8,
  "NPN_ENABLED": 1,
  "RSA_PKCS1_PADDING": 1,
  "RSA_SSLV23_PADDING": 2,
  "RSA_NO_PADDING": 3,
  "RSA_PKCS1_OAEP_PADDING": 4,
  "RSA_X931_PADDING": 5,
  "RSA_PKCS1_PSS_PADDING": 6,
  "POINT_CONVERSION_COMPRESSED": 2,
  "POINT_CONVERSION_UNCOMPRESSED": 4,
  "POINT_CONVERSION_HYBRID": 6,
  "F_OK": 0,
  "R_OK": 4,
  "W_OK": 2,
  "X_OK": 1,
  "UV_UDP_REUSEADDR": 4
}

},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _buttons = require('./buttons.js');

var _Dancing = require('./Dancing.js');

var _Instrument = require('./Instrument.js');

var _Member = require('./Member.js');

var _Song = require('./Song.js');

var _constants = require('constants');

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
            draggedEl.style.backgroundImage = member_control.getIcon(draggedId);

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

            draggedEl.style.backgroundImage = member_control.activation(draggedId);

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

var MemberControl = function () {
    function MemberControl() {
        _classCallCheck(this, MemberControl);
    }

    _createClass(MemberControl, [{
        key: 'activation',

        //активации участника
        value: function activation(draggedId) {

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
        key: 'pause',
        value: function pause(draggedId) {
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
        key: 'getIcon',
        value: function getIcon(draggedId) {
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

    return MemberControl;
}();

var member_control = new MemberControl();

//обработчики кнопок solo(on-off) and play(on-off)

var ButtonHandler = function () {
    function ButtonHandler() {
        _classCallCheck(this, ButtonHandler);
    }

    _createClass(ButtonHandler, [{
        key: 'activateSolo',
        value: function activateSolo() {
            var _loop = function _loop(i) {
                document.querySelector('#btnSoloOn' + i).addEventListener('click', function (e) {
                    var elemIndex = arr.indexOf('box' + i);
                    for (var index = 0; index < arr.length; index++) {
                        var elem = document.getElementById(arr[index]);
                        if (index != elemIndex) {
                            elem.style.backgroundImage = member_control.pause(arr[index]);
                        } else {
                            elem.style.backgroundImage = member_control.activation(arr[index]);
                        }
                    }
                });
            };

            // Вешаем обработчик клика на solo  каждого участника
            for (var i = 1; i <= 13; i++) {
                _loop(i);
            }
        }
    }, {
        key: 'deactivateSolo',
        value: function deactivateSolo() {
            for (var i = 1; i <= 13; i++) {
                document.querySelector('#btnSoloOff' + i).addEventListener('click', function (e) {
                    for (var index = 0; index < arr.length; index++) {
                        var elem = document.getElementById(arr[index]);
                        elem.style.backgroundImage = member_control.activation(arr[index]);
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
                    elem.style.backgroundImage = member_control.pause(arr[elemIndex]);
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
                    elem.style.backgroundImage = member_control.activation(arr[elemIndex]);
                });
            };

            for (var index = 1; index <= 13; index++) {
                _loop3(index);
            }
        }
    }]);

    return ButtonHandler;
}();

var button_handler = new ButtonHandler();
button_handler.activateSolo();
button_handler.deactivateSolo();
button_handler.pause();
button_handler.play();
},{"./Dancing.js":2,"./Instrument.js":3,"./Member.js":4,"./Song.js":5,"./buttons.js":6,"constants":1}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FNQUwtQ09NUFVURVIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiQzovVXNlcnMvQU1BTC1DT01QVVRFUi9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jb25zdGFudHMtYnJvd3NlcmlmeS9jb25zdGFudHMuanNvbiIsIkRhbmNpbmcuanMiLCJJbnN0cnVtZW50LmpzIiwiTWVtYmVyLmpzIiwiU29uZy5qcyIsImJ1dHRvbnMuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIk9fUkRPTkxZXCI6IDAsXG4gIFwiT19XUk9OTFlcIjogMSxcbiAgXCJPX1JEV1JcIjogMixcbiAgXCJTX0lGTVRcIjogNjE0NDAsXG4gIFwiU19JRlJFR1wiOiAzMjc2OCxcbiAgXCJTX0lGRElSXCI6IDE2Mzg0LFxuICBcIlNfSUZDSFJcIjogODE5MixcbiAgXCJTX0lGQkxLXCI6IDI0NTc2LFxuICBcIlNfSUZJRk9cIjogNDA5NixcbiAgXCJTX0lGTE5LXCI6IDQwOTYwLFxuICBcIlNfSUZTT0NLXCI6IDQ5MTUyLFxuICBcIk9fQ1JFQVRcIjogNTEyLFxuICBcIk9fRVhDTFwiOiAyMDQ4LFxuICBcIk9fTk9DVFRZXCI6IDEzMTA3MixcbiAgXCJPX1RSVU5DXCI6IDEwMjQsXG4gIFwiT19BUFBFTkRcIjogOCxcbiAgXCJPX0RJUkVDVE9SWVwiOiAxMDQ4NTc2LFxuICBcIk9fTk9GT0xMT1dcIjogMjU2LFxuICBcIk9fU1lOQ1wiOiAxMjgsXG4gIFwiT19TWU1MSU5LXCI6IDIwOTcxNTIsXG4gIFwiT19OT05CTE9DS1wiOiA0LFxuICBcIlNfSVJXWFVcIjogNDQ4LFxuICBcIlNfSVJVU1JcIjogMjU2LFxuICBcIlNfSVdVU1JcIjogMTI4LFxuICBcIlNfSVhVU1JcIjogNjQsXG4gIFwiU19JUldYR1wiOiA1NixcbiAgXCJTX0lSR1JQXCI6IDMyLFxuICBcIlNfSVdHUlBcIjogMTYsXG4gIFwiU19JWEdSUFwiOiA4LFxuICBcIlNfSVJXWE9cIjogNyxcbiAgXCJTX0lST1RIXCI6IDQsXG4gIFwiU19JV09USFwiOiAyLFxuICBcIlNfSVhPVEhcIjogMSxcbiAgXCJFMkJJR1wiOiA3LFxuICBcIkVBQ0NFU1wiOiAxMyxcbiAgXCJFQUREUklOVVNFXCI6IDQ4LFxuICBcIkVBRERSTk9UQVZBSUxcIjogNDksXG4gIFwiRUFGTk9TVVBQT1JUXCI6IDQ3LFxuICBcIkVBR0FJTlwiOiAzNSxcbiAgXCJFQUxSRUFEWVwiOiAzNyxcbiAgXCJFQkFERlwiOiA5LFxuICBcIkVCQURNU0dcIjogOTQsXG4gIFwiRUJVU1lcIjogMTYsXG4gIFwiRUNBTkNFTEVEXCI6IDg5LFxuICBcIkVDSElMRFwiOiAxMCxcbiAgXCJFQ09OTkFCT1JURURcIjogNTMsXG4gIFwiRUNPTk5SRUZVU0VEXCI6IDYxLFxuICBcIkVDT05OUkVTRVRcIjogNTQsXG4gIFwiRURFQURMS1wiOiAxMSxcbiAgXCJFREVTVEFERFJSRVFcIjogMzksXG4gIFwiRURPTVwiOiAzMyxcbiAgXCJFRFFVT1RcIjogNjksXG4gIFwiRUVYSVNUXCI6IDE3LFxuICBcIkVGQVVMVFwiOiAxNCxcbiAgXCJFRkJJR1wiOiAyNyxcbiAgXCJFSE9TVFVOUkVBQ0hcIjogNjUsXG4gIFwiRUlEUk1cIjogOTAsXG4gIFwiRUlMU0VRXCI6IDkyLFxuICBcIkVJTlBST0dSRVNTXCI6IDM2LFxuICBcIkVJTlRSXCI6IDQsXG4gIFwiRUlOVkFMXCI6IDIyLFxuICBcIkVJT1wiOiA1LFxuICBcIkVJU0NPTk5cIjogNTYsXG4gIFwiRUlTRElSXCI6IDIxLFxuICBcIkVMT09QXCI6IDYyLFxuICBcIkVNRklMRVwiOiAyNCxcbiAgXCJFTUxJTktcIjogMzEsXG4gIFwiRU1TR1NJWkVcIjogNDAsXG4gIFwiRU1VTFRJSE9QXCI6IDk1LFxuICBcIkVOQU1FVE9PTE9OR1wiOiA2MyxcbiAgXCJFTkVURE9XTlwiOiA1MCxcbiAgXCJFTkVUUkVTRVRcIjogNTIsXG4gIFwiRU5FVFVOUkVBQ0hcIjogNTEsXG4gIFwiRU5GSUxFXCI6IDIzLFxuICBcIkVOT0JVRlNcIjogNTUsXG4gIFwiRU5PREFUQVwiOiA5NixcbiAgXCJFTk9ERVZcIjogMTksXG4gIFwiRU5PRU5UXCI6IDIsXG4gIFwiRU5PRVhFQ1wiOiA4LFxuICBcIkVOT0xDS1wiOiA3NyxcbiAgXCJFTk9MSU5LXCI6IDk3LFxuICBcIkVOT01FTVwiOiAxMixcbiAgXCJFTk9NU0dcIjogOTEsXG4gIFwiRU5PUFJPVE9PUFRcIjogNDIsXG4gIFwiRU5PU1BDXCI6IDI4LFxuICBcIkVOT1NSXCI6IDk4LFxuICBcIkVOT1NUUlwiOiA5OSxcbiAgXCJFTk9TWVNcIjogNzgsXG4gIFwiRU5PVENPTk5cIjogNTcsXG4gIFwiRU5PVERJUlwiOiAyMCxcbiAgXCJFTk9URU1QVFlcIjogNjYsXG4gIFwiRU5PVFNPQ0tcIjogMzgsXG4gIFwiRU5PVFNVUFwiOiA0NSxcbiAgXCJFTk9UVFlcIjogMjUsXG4gIFwiRU5YSU9cIjogNixcbiAgXCJFT1BOT1RTVVBQXCI6IDEwMixcbiAgXCJFT1ZFUkZMT1dcIjogODQsXG4gIFwiRVBFUk1cIjogMSxcbiAgXCJFUElQRVwiOiAzMixcbiAgXCJFUFJPVE9cIjogMTAwLFxuICBcIkVQUk9UT05PU1VQUE9SVFwiOiA0MyxcbiAgXCJFUFJPVE9UWVBFXCI6IDQxLFxuICBcIkVSQU5HRVwiOiAzNCxcbiAgXCJFUk9GU1wiOiAzMCxcbiAgXCJFU1BJUEVcIjogMjksXG4gIFwiRVNSQ0hcIjogMyxcbiAgXCJFU1RBTEVcIjogNzAsXG4gIFwiRVRJTUVcIjogMTAxLFxuICBcIkVUSU1FRE9VVFwiOiA2MCxcbiAgXCJFVFhUQlNZXCI6IDI2LFxuICBcIkVXT1VMREJMT0NLXCI6IDM1LFxuICBcIkVYREVWXCI6IDE4LFxuICBcIlNJR0hVUFwiOiAxLFxuICBcIlNJR0lOVFwiOiAyLFxuICBcIlNJR1FVSVRcIjogMyxcbiAgXCJTSUdJTExcIjogNCxcbiAgXCJTSUdUUkFQXCI6IDUsXG4gIFwiU0lHQUJSVFwiOiA2LFxuICBcIlNJR0lPVFwiOiA2LFxuICBcIlNJR0JVU1wiOiAxMCxcbiAgXCJTSUdGUEVcIjogOCxcbiAgXCJTSUdLSUxMXCI6IDksXG4gIFwiU0lHVVNSMVwiOiAzMCxcbiAgXCJTSUdTRUdWXCI6IDExLFxuICBcIlNJR1VTUjJcIjogMzEsXG4gIFwiU0lHUElQRVwiOiAxMyxcbiAgXCJTSUdBTFJNXCI6IDE0LFxuICBcIlNJR1RFUk1cIjogMTUsXG4gIFwiU0lHQ0hMRFwiOiAyMCxcbiAgXCJTSUdDT05UXCI6IDE5LFxuICBcIlNJR1NUT1BcIjogMTcsXG4gIFwiU0lHVFNUUFwiOiAxOCxcbiAgXCJTSUdUVElOXCI6IDIxLFxuICBcIlNJR1RUT1VcIjogMjIsXG4gIFwiU0lHVVJHXCI6IDE2LFxuICBcIlNJR1hDUFVcIjogMjQsXG4gIFwiU0lHWEZTWlwiOiAyNSxcbiAgXCJTSUdWVEFMUk1cIjogMjYsXG4gIFwiU0lHUFJPRlwiOiAyNyxcbiAgXCJTSUdXSU5DSFwiOiAyOCxcbiAgXCJTSUdJT1wiOiAyMyxcbiAgXCJTSUdTWVNcIjogMTIsXG4gIFwiU1NMX09QX0FMTFwiOiAyMTQ3NDg2NzE5LFxuICBcIlNTTF9PUF9BTExPV19VTlNBRkVfTEVHQUNZX1JFTkVHT1RJQVRJT05cIjogMjYyMTQ0LFxuICBcIlNTTF9PUF9DSVBIRVJfU0VSVkVSX1BSRUZFUkVOQ0VcIjogNDE5NDMwNCxcbiAgXCJTU0xfT1BfQ0lTQ09fQU5ZQ09OTkVDVFwiOiAzMjc2OCxcbiAgXCJTU0xfT1BfQ09PS0lFX0VYQ0hBTkdFXCI6IDgxOTIsXG4gIFwiU1NMX09QX0NSWVBUT1BST19UTFNFWFRfQlVHXCI6IDIxNDc0ODM2NDgsXG4gIFwiU1NMX09QX0RPTlRfSU5TRVJUX0VNUFRZX0ZSQUdNRU5UU1wiOiAyMDQ4LFxuICBcIlNTTF9PUF9FUEhFTUVSQUxfUlNBXCI6IDAsXG4gIFwiU1NMX09QX0xFR0FDWV9TRVJWRVJfQ09OTkVDVFwiOiA0LFxuICBcIlNTTF9PUF9NSUNST1NPRlRfQklHX1NTTFYzX0JVRkZFUlwiOiAzMixcbiAgXCJTU0xfT1BfTUlDUk9TT0ZUX1NFU1NfSURfQlVHXCI6IDEsXG4gIFwiU1NMX09QX01TSUVfU1NMVjJfUlNBX1BBRERJTkdcIjogMCxcbiAgXCJTU0xfT1BfTkVUU0NBUEVfQ0FfRE5fQlVHXCI6IDUzNjg3MDkxMixcbiAgXCJTU0xfT1BfTkVUU0NBUEVfQ0hBTExFTkdFX0JVR1wiOiAyLFxuICBcIlNTTF9PUF9ORVRTQ0FQRV9ERU1PX0NJUEhFUl9DSEFOR0VfQlVHXCI6IDEwNzM3NDE4MjQsXG4gIFwiU1NMX09QX05FVFNDQVBFX1JFVVNFX0NJUEhFUl9DSEFOR0VfQlVHXCI6IDgsXG4gIFwiU1NMX09QX05PX0NPTVBSRVNTSU9OXCI6IDEzMTA3MixcbiAgXCJTU0xfT1BfTk9fUVVFUllfTVRVXCI6IDQwOTYsXG4gIFwiU1NMX09QX05PX1NFU1NJT05fUkVTVU1QVElPTl9PTl9SRU5FR09USUFUSU9OXCI6IDY1NTM2LFxuICBcIlNTTF9PUF9OT19TU0x2MlwiOiAxNjc3NzIxNixcbiAgXCJTU0xfT1BfTk9fU1NMdjNcIjogMzM1NTQ0MzIsXG4gIFwiU1NMX09QX05PX1RJQ0tFVFwiOiAxNjM4NCxcbiAgXCJTU0xfT1BfTk9fVExTdjFcIjogNjcxMDg4NjQsXG4gIFwiU1NMX09QX05PX1RMU3YxXzFcIjogMjY4NDM1NDU2LFxuICBcIlNTTF9PUF9OT19UTFN2MV8yXCI6IDEzNDIxNzcyOCxcbiAgXCJTU0xfT1BfUEtDUzFfQ0hFQ0tfMVwiOiAwLFxuICBcIlNTTF9PUF9QS0NTMV9DSEVDS18yXCI6IDAsXG4gIFwiU1NMX09QX1NJTkdMRV9ESF9VU0VcIjogMTA0ODU3NixcbiAgXCJTU0xfT1BfU0lOR0xFX0VDREhfVVNFXCI6IDUyNDI4OCxcbiAgXCJTU0xfT1BfU1NMRUFZXzA4MF9DTElFTlRfREhfQlVHXCI6IDEyOCxcbiAgXCJTU0xfT1BfU1NMUkVGMl9SRVVTRV9DRVJUX1RZUEVfQlVHXCI6IDAsXG4gIFwiU1NMX09QX1RMU19CTE9DS19QQURESU5HX0JVR1wiOiA1MTIsXG4gIFwiU1NMX09QX1RMU19ENV9CVUdcIjogMjU2LFxuICBcIlNTTF9PUF9UTFNfUk9MTEJBQ0tfQlVHXCI6IDgzODg2MDgsXG4gIFwiRU5HSU5FX01FVEhPRF9EU0FcIjogMixcbiAgXCJFTkdJTkVfTUVUSE9EX0RIXCI6IDQsXG4gIFwiRU5HSU5FX01FVEhPRF9SQU5EXCI6IDgsXG4gIFwiRU5HSU5FX01FVEhPRF9FQ0RIXCI6IDE2LFxuICBcIkVOR0lORV9NRVRIT0RfRUNEU0FcIjogMzIsXG4gIFwiRU5HSU5FX01FVEhPRF9DSVBIRVJTXCI6IDY0LFxuICBcIkVOR0lORV9NRVRIT0RfRElHRVNUU1wiOiAxMjgsXG4gIFwiRU5HSU5FX01FVEhPRF9TVE9SRVwiOiAyNTYsXG4gIFwiRU5HSU5FX01FVEhPRF9QS0VZX01FVEhTXCI6IDUxMixcbiAgXCJFTkdJTkVfTUVUSE9EX1BLRVlfQVNOMV9NRVRIU1wiOiAxMDI0LFxuICBcIkVOR0lORV9NRVRIT0RfQUxMXCI6IDY1NTM1LFxuICBcIkVOR0lORV9NRVRIT0RfTk9ORVwiOiAwLFxuICBcIkRIX0NIRUNLX1BfTk9UX1NBRkVfUFJJTUVcIjogMixcbiAgXCJESF9DSEVDS19QX05PVF9QUklNRVwiOiAxLFxuICBcIkRIX1VOQUJMRV9UT19DSEVDS19HRU5FUkFUT1JcIjogNCxcbiAgXCJESF9OT1RfU1VJVEFCTEVfR0VORVJBVE9SXCI6IDgsXG4gIFwiTlBOX0VOQUJMRURcIjogMSxcbiAgXCJSU0FfUEtDUzFfUEFERElOR1wiOiAxLFxuICBcIlJTQV9TU0xWMjNfUEFERElOR1wiOiAyLFxuICBcIlJTQV9OT19QQURESU5HXCI6IDMsXG4gIFwiUlNBX1BLQ1MxX09BRVBfUEFERElOR1wiOiA0LFxuICBcIlJTQV9YOTMxX1BBRERJTkdcIjogNSxcbiAgXCJSU0FfUEtDUzFfUFNTX1BBRERJTkdcIjogNixcbiAgXCJQT0lOVF9DT05WRVJTSU9OX0NPTVBSRVNTRURcIjogMixcbiAgXCJQT0lOVF9DT05WRVJTSU9OX1VOQ09NUFJFU1NFRFwiOiA0LFxuICBcIlBPSU5UX0NPTlZFUlNJT05fSFlCUklEXCI6IDYsXG4gIFwiRl9PS1wiOiAwLFxuICBcIlJfT0tcIjogNCxcbiAgXCJXX09LXCI6IDIsXG4gIFwiWF9PS1wiOiAxLFxuICBcIlVWX1VEUF9SRVVTRUFERFJcIjogNFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERhbmNlID0gZXhwb3J0cy5EYW5jZSA9IGZ1bmN0aW9uIERhbmNlKHN0YXJ0RGFuY2VGaWxlLCBzdG9wRGFuY2VGaWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhbmNlKTtcblxuICAgIHRoaXMuc3RhcnREYW5jZUZpbGUgPSBzdGFydERhbmNlRmlsZTtcbiAgICB0aGlzLnN0b3BEYW5jZUZpbGUgPSBzdG9wRGFuY2VGaWxlO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgV2luZEluc3RydW1lbnQgPSBleHBvcnRzLldpbmRJbnN0cnVtZW50ID0gZnVuY3Rpb24gV2luZEluc3RydW1lbnQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2luZEluc3RydW1lbnQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59O1xuXG52YXIgU3RyaW5nSW5zdHJ1bWV0ID0gZXhwb3J0cy5TdHJpbmdJbnN0cnVtZXQgPSBmdW5jdGlvbiBTdHJpbmdJbnN0cnVtZXQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RyaW5nSW5zdHJ1bWV0KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIFBlcmN1c3Npb25JbnN0cnVtZW50ID0gZXhwb3J0cy5QZXJjdXNzaW9uSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIFBlcmN1c3Npb25JbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBlcmN1c3Npb25JbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIEJvd0luc3RydW1lbnQgPSBleHBvcnRzLkJvd0luc3RydW1lbnQgPSBmdW5jdGlvbiBCb3dJbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvd0luc3RydW1lbnQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59O1xuXG52YXIgS2V5Ym9hcmRJbnN0cnVtZW50ID0gZXhwb3J0cy5LZXlib2FyZEluc3RydW1lbnQgPSBmdW5jdGlvbiBLZXlib2FyZEluc3RydW1lbnQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5Ym9hcmRJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTWFuRGFuY2VyID0gZXhwb3J0cy5NYW5EYW5jZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFuRGFuY2VyKGRhbmNlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW5EYW5jZXIpO1xuXG4gICAgICAgIHRoaXMuZGFuY2UgPSBkYW5jZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWFuRGFuY2VyLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0YXJ0RGFuY2VGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFuY2Uuc3RvcERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYW5EYW5jZXI7XG59KCk7XG5cbnZhciBXb21hbkRhbmNlciA9IGV4cG9ydHMuV29tYW5EYW5jZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29tYW5EYW5jZXIoZGFuY2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdvbWFuRGFuY2VyKTtcblxuICAgICAgICB0aGlzLmRhbmNlID0gZGFuY2U7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdvbWFuRGFuY2VyLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0YXJ0RGFuY2VGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFuY2Uuc3RvcERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXb21hbkRhbmNlcjtcbn0oKTtcblxudmFyIE1hblNpbmdlciA9IGV4cG9ydHMuTWFuU2luZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hblNpbmdlcihzb25nLCBzdGFydFNpbmdpbmdGaWxlLCBzdG9wU2luZ2luZ0ZpbGUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hblNpbmdlcik7XG5cbiAgICAgICAgdGhpcy5zb25nID0gc29uZztcbiAgICAgICAgdGhpcy5zdGFydFNpbmdpbmdGaWxlID0gc3RhcnRTaW5naW5nRmlsZTtcbiAgICAgICAgdGhpcy5zdG9wU2luZ2luZ0ZpbGUgPSBzdG9wU2luZ2luZ0ZpbGU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hblNpbmdlciwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTaW5naW5nRmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5wYXVzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcFNpbmdpbmdGaWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1hblNpbmdlcjtcbn0oKTtcblxudmFyIFdvbWFuU2luZ2VyID0gZXhwb3J0cy5Xb21hblNpbmdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXb21hblNpbmdlcihzb25nLCBzdGFydFNpbmdpbmdGaWxlLCBzdG9wU2luZ2luZ0ZpbGUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdvbWFuU2luZ2VyKTtcblxuICAgICAgICB0aGlzLnNvbmcgPSBzb25nO1xuICAgICAgICB0aGlzLnN0YXJ0U2luZ2luZ0ZpbGUgPSBzdGFydFNpbmdpbmdGaWxlO1xuICAgICAgICB0aGlzLnN0b3BTaW5naW5nRmlsZSA9IHN0b3BTaW5naW5nRmlsZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV29tYW5TaW5nZXIsIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0U2luZ2luZ0ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUucGF1c2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BTaW5naW5nRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXb21hblNpbmdlcjtcbn0oKTtcblxudmFyIE11c2ljaWFuID0gZXhwb3J0cy5NdXNpY2lhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdXNpY2lhbihpbnN0cnVtZW50LCBzdGFydFBsYXlGaWxlLCBzdG9wUGxheUZpbGUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE11c2ljaWFuKTtcblxuICAgICAgICB0aGlzLmluc3RydW1lbnQgPSBpbnN0cnVtZW50O1xuICAgICAgICB0aGlzLnN0YXJ0UGxheUZpbGUgPSBzdGFydFBsYXlGaWxlO1xuICAgICAgICB0aGlzLnN0b3BQbGF5RmlsZSA9IHN0b3BQbGF5RmlsZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTXVzaWNpYW4sIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50LnNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudC5zb3VuZC5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0UGxheUZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnQuc291bmQucGF1c2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BQbGF5RmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNdXNpY2lhbjtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTb25nID0gZXhwb3J0cy5Tb25nID0gZnVuY3Rpb24gU29uZyhzb25nRmlsZSkge1xuICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvbmcpO1xuXG4gICB0aGlzLnNvbmdGaWxlID0gbmV3IEF1ZGlvKCk7XG4gICB0aGlzLnNvbmdGaWxlLnNyYyA9IHNvbmdGaWxlO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMub3BlbkJ1dHRvbnMgPSBvcGVuQnV0dG9ucztcbmV4cG9ydHMuY2xvc2VCdXR0b25zID0gY2xvc2VCdXR0b25zO1xuLy9zb2xvIGFuZCBwbGF5INC60L3QvtC/0LrQuCDRh9GC0L7QsSDQv9C+0Y/QstC70Y/Qu9C40YHRjCDQuCDQuNGB0YfQtdC30LDQu9C4INC/0YDQuCDQtNGA0L7Qv9Cw0YVcbmZ1bmN0aW9uIG9wZW5CdXR0b25zKGRyYWdnZWRJZCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCdib3gnICsgaW5kZXggPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQmxvY2snICsgaW5kZXgpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZUJ1dHRvbnMoZHJhZ2dlZElkKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8PSAxMzsgaW5kZXgrKykge1xuICAgICAgICBpZiAoJ2JveCcgKyBpbmRleCA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5CbG9jaycgKyBpbmRleCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfYnV0dG9ucyA9IHJlcXVpcmUoJy4vYnV0dG9ucy5qcycpO1xuXG52YXIgX0RhbmNpbmcgPSByZXF1aXJlKCcuL0RhbmNpbmcuanMnKTtcblxudmFyIF9JbnN0cnVtZW50ID0gcmVxdWlyZSgnLi9JbnN0cnVtZW50LmpzJyk7XG5cbnZhciBfTWVtYmVyID0gcmVxdWlyZSgnLi9NZW1iZXIuanMnKTtcblxudmFyIF9Tb25nID0gcmVxdWlyZSgnLi9Tb25nLmpzJyk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnY29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBtYW5EYW5jZSA9IG5ldyBfRGFuY2luZy5EYW5jZSgndXJsKCcgKyBcImdpZi9tYW5EYW5jZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL21hbkRhbmNlLmpwZ1wiICsgJyknKTtcbnZhciB3b21hbkRhbmNlID0gbmV3IF9EYW5jaW5nLkRhbmNlKCd1cmwoJyArIFwiZ2lmL3dvbWFuRGFuY2UuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi93b21hbkRhbmNlLmpwZ1wiICsgJyknKTsgLy/RgdC+0LfQtNCw0L3RiyDRgtCw0L3RhtGLXG5cbnZhciBtYW5Tb25nID0gbmV3IF9Tb25nLlNvbmcoJ211c2ljL21hbnNvbmcubXAzJyk7XG52YXIgd29tYW5Tb25nID0gbmV3IF9Tb25nLlNvbmcoJ211c2ljL3dvbXNvbmcud2F2Jyk7IC8vINGB0L7Qt9C00LDQvdGLINC/0LXRgdC90LhcblxuLy/RgdC80LXQvdC40YLRjCDQvNGD0LfRi9C60YMgXG52YXIgYWNjb3JkZW9uID0gbmV3IF9JbnN0cnVtZW50LktleWJvYXJkSW5zdHJ1bWVudCgnbXVzaWMvYWNjb3JkZW9uLm1wMycpO1xudmFyIHN5bnRoZXNpemVyID0gbmV3IF9JbnN0cnVtZW50LktleWJvYXJkSW5zdHJ1bWVudCgnbXVzaWMvc3ludGhlc2l6ZXIubXAzJyk7XG52YXIgYmFzcyA9IG5ldyBfSW5zdHJ1bWVudC5QZXJjdXNzaW9uSW5zdHJ1bWVudCgnbXVzaWMvYmFzcy5tcDMnKTtcbnZhciBkYXZ1bCA9IG5ldyBfSW5zdHJ1bWVudC5QZXJjdXNzaW9uSW5zdHJ1bWVudCgnbXVzaWMvZGF2dWwubXAzJyk7XG52YXIgZ3VpdGFyID0gbmV3IF9JbnN0cnVtZW50LlN0cmluZ0luc3RydW1ldCgnbXVzaWMvZ3VpdGFyLm1wMycpO1xudmFyIHNheiA9IG5ldyBfSW5zdHJ1bWVudC5TdHJpbmdJbnN0cnVtZXQoJ211c2ljL3Nhei5tcDMnKTtcbnZhciBwaXBlID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCdtdXNpYy9waXBlLm1wMycpO1xudmFyIHNheCA9IG5ldyBfSW5zdHJ1bWVudC5XaW5kSW5zdHJ1bWVudCgnbXVzaWMvc2F4Lm1wMycpO1xudmFyIHZpb2xpbiA9IG5ldyBfSW5zdHJ1bWVudC5Cb3dJbnN0cnVtZW50KCdtdXNpYy92aW9saW4ubXAzJyk7IC8vINGB0L7Qt9C00LDQvdGLINC40L3RgdGC0YDRg9C80LXQvdGC0YtcblxudmFyIHdvbWFuRGFuY2VyID0gbmV3IF9NZW1iZXIuV29tYW5EYW5jZXIod29tYW5EYW5jZSk7XG52YXIgbWFuRGFuY2VyID0gbmV3IF9NZW1iZXIuTWFuRGFuY2VyKG1hbkRhbmNlKTsgLy/RgdC+0LfQtNCw0L3Ri9C1INGC0LDQvdGG0L7RgNGLXG5cbnZhciB3b21hblNpbmdlciA9IG5ldyBfTWVtYmVyLldvbWFuU2luZ2VyKHdvbWFuU29uZywgJ3VybCgnICsgXCJnaWYvd29tYW5Wb2ljZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL3dvbWFuVm9pY2UuanBnXCIgKyAnKScpO1xudmFyIG1hblNpbmdlciA9IG5ldyBfTWVtYmVyLk1hblNpbmdlcihtYW5Tb25nLCAndXJsKCcgKyBcImdpZi9tYW5Wb2ljZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL21hblZvaWNlLmpwZ1wiICsgJyknKTsgLy8g0YHQvtC30LTQsNC90Ysg0L/QtdCy0YbRi1xuXG52YXIgYWNjb3JkZW9uUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oYWNjb3JkZW9uLCAndXJsKCcgKyBcImdpZi9hY2NvcmRpb24uZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9hY2NvcmRpb24uanBnXCIgKyAnKScpO1xudmFyIHN5bnRoZXNpemVyUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oc3ludGhlc2l6ZXIsICd1cmwoJyArIFwiZ2lmL3N5bnRoZXNpemVyLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvc3ludGhlc2l6ZXIuanBnXCIgKyAnKScpO1xudmFyIGJhc3NQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihiYXNzLCAndXJsKCcgKyBcImdpZi9iYXNzLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvYmFzcy5qcGdcIiArICcpJyk7XG52YXIgZGF2dWxQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihkYXZ1bCwgJ3VybCgnICsgXCJnaWYvZGF2dWwuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9kYXZ1bC5qcGdcIiArICcpJyk7XG52YXIgZ3VpdGFyUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oZ3VpdGFyLCAndXJsKCcgKyBcImdpZi9ndWl0YXIuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9ndWl0YXIuanBnXCIgKyAnKScpO1xudmFyIHNhelBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHNheiwgJ3VybCgnICsgXCJnaWYvc2F6LmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvc2F6LmpwZ1wiICsgJyknKTtcbnZhciBwaXBlUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4ocGlwZSwgJ3VybCgnICsgXCJnaWYvcGlwZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL3BpcGUuanBnXCIgKyAnKScpO1xudmFyIHNheFBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHNheCwgJ3VybCgnICsgXCJnaWYvc2F4LmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvc2F4LmpwZ1wiICsgJyknKTtcbnZhciB2aW9saW5QbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbih2aW9saW4sICd1cmwoJyArIFwiZ2lmL3Zpb2xpbi5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL3Zpb2xpbi5qcGdcIiArICcpJyk7IC8vINGB0L7Qt9C00LDQvdGLINC70Y7QtNC4INC40LPRgNCw0Y7RidC40LUg0L3QsCDQuNC90YHRgtGA0YPQvNC10L3RgtCw0YVcblxudmFyIGFyciA9IFtdO1xuLy/QutC70LDRgdGBINC00YDQsNCz0LXQvdC00YDQvtC/0LBcblxudmFyIERyYWdBbmREcm9wID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERyYWdBbmREcm9wKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0FuZERyb3ApO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEcmFnQW5kRHJvcCwgW3tcbiAgICAgICAga2V5OiAnaGFuZGxlRHJhZ1N0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydChlKSB7XG4gICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCB0aGlzLmlkKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlRHJhZ0VudGVyTGVhdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRHJhZ0VudGVyTGVhdmUoZSkge1xuICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBcImRyYWdlbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcImRyYWctZW50ZXJcIjtcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ2dlZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICAgICAgICAgICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG4gICAgICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gJzEwcHgnO1xuICAgICAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnMTBweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlT3ZlckRyb3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlT3ZlckRyb3AoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoZS50eXBlICE9IFwiZHJvcFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZHJhZ2dlZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICAgICAgICB2YXIgZHJhZ2dlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dlZElkKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdnZWRFbC5wYXJlbnROb2RlID09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmFnZ2VkRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkRWwpO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChkcmFnZ2VkRWwpO1xuICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvL9GD0LHRgNCw0YLRjCDQv9C+0YLQvtC8ICB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgICBkcmFnZ2VkRWwuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmhlaWdodCA9ICcyNzBweCc7XG4gICAgICAgICAgICBkcmFnZ2VkRWwuc3R5bGUuZmxvYXQgPSAnaW5oZXJpdCc7XG4gICAgICAgICAgICBkcmFnZ2VkRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbWVtYmVyX2NvbnRyb2wuZ2V0SWNvbihkcmFnZ2VkSWQpO1xuXG4gICAgICAgICAgICAoMCwgX2J1dHRvbnMuY2xvc2VCdXR0b25zKShkcmFnZ2VkSWQpO1xuICAgICAgICAgICAgdmFyIGRlbCA9IGFyci5pbmRleE9mKGRyYWdnZWRJZCk7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKGRlbCwgMSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZU92ZXJEcm9wMicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVPdmVyRHJvcDIoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLnR5cGUgIT0gXCJkcm9wXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vTWVhbnMgZnVuY3Rpb24gd2lsbCBleGl0IGlmIG5vIFwiZHJvcFwiIGV2ZW50IGlzIGZpcmVkLlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZHJhZ2dlZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICAgICAgICB2YXIgZHJhZ2dlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dlZElkKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdnZWRFbC5wYXJlbnROb2RlID09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvL25vdGU6IHdoZW4gYSByZXR1cm4gaXMgcmVhY2hlZCBhIGZ1bmN0aW9uIGV4aXRzLlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmFnZ2VkRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkRWwpO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChkcmFnZ2VkRWwpO1xuICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvL9C30LDQtNCw0YLRjCDRgNCw0LfQvNC10YAg0LPQuNGE0L7QulxuICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnMjczcHgnO1xuXG4gICAgICAgICAgICBkcmFnZ2VkRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbWVtYmVyX2NvbnRyb2wuYWN0aXZhdGlvbihkcmFnZ2VkSWQpO1xuXG4gICAgICAgICAgICAoMCwgX2J1dHRvbnMub3BlbkJ1dHRvbnMpKGRyYWdnZWRJZCk7XG5cbiAgICAgICAgICAgIGFyci5wdXNoKGRyYWdnZWRJZCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRHJhZ0FuZERyb3A7XG59KCk7XG5cbnZhciBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZHJhZ2dhYmxlXScpO1xudmFyIHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wLXRhcmdldF0nKTtcbnZhciB0YXJnZXRzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRyb3AtdGFyZ2V0Ml0nKTtcbnZhciBkcmFnX25fZHJvcCA9IG5ldyBEcmFnQW5kRHJvcCgpO1xuXG4vL9C30LDQtNCw0LXQvCDQtNGA0L7Qv9GLINC90LAg0Y3Qu9C10LzQtdC90YLRi1xuKGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRyYWdnYWJsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBkcmFnZ2FibGVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnX25fZHJvcC5oYW5kbGVEcmFnU3RhcnQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0YXJnZXRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ19uX2Ryb3AuaGFuZGxlT3ZlckRyb3ApO1xuICAgICAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcmFnX25fZHJvcC5oYW5kbGVPdmVyRHJvcCk7XG4gICAgICAgIHRhcmdldHNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgZHJhZ19uX2Ryb3AuaGFuZGxlRHJhZ0VudGVyTGVhdmUpO1xuICAgICAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIGRyYWdfbl9kcm9wLmhhbmRsZURyYWdFbnRlckxlYXZlKTtcbiAgICB9XG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgdGFyZ2V0cy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdfbl9kcm9wLmhhbmRsZU92ZXJEcm9wMik7XG4gICAgICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJhZ19uX2Ryb3AuaGFuZGxlT3ZlckRyb3AyKTtcbiAgICAgICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGRyYWdfbl9kcm9wLmhhbmRsZURyYWdFbnRlckxlYXZlKTtcbiAgICAgICAgdGFyZ2V0czJbX2kyXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIGRyYWdfbl9kcm9wLmhhbmRsZURyYWdFbnRlckxlYXZlKTtcbiAgICB9XG59KSgpO1xuXG52YXIgTWVtYmVyQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNZW1iZXJDb250cm9sKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVtYmVyQ29udHJvbCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1lbWJlckNvbnRyb2wsIFt7XG4gICAgICAgIGtleTogJ2FjdGl2YXRpb24nLFxuXG4gICAgICAgIC8v0LDQutGC0LjQstCw0YbQuNC4INGD0YfQsNGB0YLQvdC40LrQsFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGlvbihkcmFnZ2VkSWQpIHtcblxuICAgICAgICAgICAgaWYgKCdib3gxJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFuRGFuY2VyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvbWFuRGFuY2VyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hblNpbmdlci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDQnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3b21hblNpbmdlci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2NvcmRlb25QbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3g2JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzc1BsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXZ1bFBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBndWl0YXJQbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3g5JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlvbGluUGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTAnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwaXBlUGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzYXhQbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNhelBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ludGhlc2l6ZXJQbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy/QvtGC0LrQu9GO0YfQsNC10YIg0YPRh9Cw0YHRgtC90LjQutCwXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3BhdXNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgaWYgKCdib3gxJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFuRGFuY2VyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3b21hbkRhbmNlci5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDQnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3b21hblNpbmdlci5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3g1JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjb3JkZW9uUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiYXNzUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXZ1bFBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3g4JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3VpdGFyUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2aW9saW5QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTAnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwaXBlUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2F4UGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2F6UGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ludGhlc2l6ZXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL9C/0L7Qu9GD0YfQuNGC0Ywg0LjQutC+0L3QutGDINCy0LzQtdGB0YLQviDRg9GH0LDRgdC90LjQutCwXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEljb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SWNvbihkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgIGlmICgnYm94MScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvSGFscGFoLnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29GZXMucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIG1hblNpbmdlci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb01pY3JvSC5wbmdcIiArICcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgd29tYW5TaW5nZXIucGF1c2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NaWNyb0YucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIGFjY29yZGVvblBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljQWNjb3JkZW9uLnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3g2JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICBiYXNzUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNCYXNzLnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3g3JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICBkYXZ1bFBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljRGF2dWwucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIGd1aXRhclBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljR3VpdGFyLnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3g5JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICB2aW9saW5QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1Zpb2xpbi5wbmdcIiArICcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTAnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1BpcGUucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDExJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICBzYXhQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1NheC5wbmdcIiArICcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHNhelBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F6LnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgc3ludGhlc2l6ZXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY1N5bnRoZXNpemVyLnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1lbWJlckNvbnRyb2w7XG59KCk7XG5cbnZhciBtZW1iZXJfY29udHJvbCA9IG5ldyBNZW1iZXJDb250cm9sKCk7XG5cbi8v0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQutC90L7Qv9C+0Logc29sbyhvbi1vZmYpIGFuZCBwbGF5KG9uLW9mZilcblxudmFyIEJ1dHRvbkhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnV0dG9uSGFuZGxlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1dHRvbkhhbmRsZXIpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCdXR0b25IYW5kbGVyLCBbe1xuICAgICAgICBrZXk6ICdhY3RpdmF0ZVNvbG8nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGVTb2xvKCkge1xuICAgICAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Tb2xvT24nICsgaSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbUluZGV4ID0gYXJyLmluZGV4T2YoJ2JveCcgKyBpKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT0gZWxlbUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBtZW1iZXJfY29udHJvbC5wYXVzZShhcnJbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBtZW1iZXJfY29udHJvbC5hY3RpdmF0aW9uKGFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyDQktC10YjQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsCDQvdCwIHNvbG8gINC60LDQttC00L7Qs9C+INGD0YfQsNGB0YLQvdC40LrQsFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gMTM7IGkrKykge1xuICAgICAgICAgICAgICAgIF9sb29wKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkZWFjdGl2YXRlU29sbycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWFjdGl2YXRlU29sbygpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDEzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU29sb09mZicgKyBpKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBtZW1iZXJfY29udHJvbC5hY3RpdmF0aW9uKGFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g0JLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0L3QsCBwbGF5IGFuZCBwYXVzZSAg0LrQsNC20LTQvtCz0L4g0YPRh9Cw0YHRgtC90LjQutCwXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3BhdXNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgdmFyIF9sb29wMiA9IGZ1bmN0aW9uIF9sb29wMihpbmRleCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5QYXVzZScgKyBpbmRleCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbUluZGV4ID0gYXJyLmluZGV4T2YoJ2JveCcgKyBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyW2VsZW1JbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG1lbWJlcl9jb250cm9sLnBhdXNlKGFycltlbGVtSW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBfbG9vcDIoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwbGF5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICB2YXIgX2xvb3AzID0gZnVuY3Rpb24gX2xvb3AzKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blBsYXknICsgaW5kZXgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1JbmRleCA9IGFyci5pbmRleE9mKCdib3gnICsgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycltlbGVtSW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBtZW1iZXJfY29udHJvbC5hY3RpdmF0aW9uKGFycltlbGVtSW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBfbG9vcDMoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJ1dHRvbkhhbmRsZXI7XG59KCk7XG5cbnZhciBidXR0b25faGFuZGxlciA9IG5ldyBCdXR0b25IYW5kbGVyKCk7XG5idXR0b25faGFuZGxlci5hY3RpdmF0ZVNvbG8oKTtcbmJ1dHRvbl9oYW5kbGVyLmRlYWN0aXZhdGVTb2xvKCk7XG5idXR0b25faGFuZGxlci5wYXVzZSgpO1xuYnV0dG9uX2hhbmRsZXIucGxheSgpOyJdfQ==
