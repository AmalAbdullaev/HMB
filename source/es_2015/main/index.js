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

//класс контроля участника

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


        // Вешаем обработчик клика на solo  каждого участника
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FNQUwtQ09NUFVURVIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiQzovVXNlcnMvQU1BTC1DT01QVVRFUi9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jb25zdGFudHMtYnJvd3NlcmlmeS9jb25zdGFudHMuanNvbiIsIkRhbmNpbmcuanMiLCJJbnN0cnVtZW50LmpzIiwiTWVtYmVyLmpzIiwiU29uZy5qcyIsImJ1dHRvbnMuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJPX1JET05MWVwiOiAwLFxuICBcIk9fV1JPTkxZXCI6IDEsXG4gIFwiT19SRFdSXCI6IDIsXG4gIFwiU19JRk1UXCI6IDYxNDQwLFxuICBcIlNfSUZSRUdcIjogMzI3NjgsXG4gIFwiU19JRkRJUlwiOiAxNjM4NCxcbiAgXCJTX0lGQ0hSXCI6IDgxOTIsXG4gIFwiU19JRkJMS1wiOiAyNDU3NixcbiAgXCJTX0lGSUZPXCI6IDQwOTYsXG4gIFwiU19JRkxOS1wiOiA0MDk2MCxcbiAgXCJTX0lGU09DS1wiOiA0OTE1MixcbiAgXCJPX0NSRUFUXCI6IDUxMixcbiAgXCJPX0VYQ0xcIjogMjA0OCxcbiAgXCJPX05PQ1RUWVwiOiAxMzEwNzIsXG4gIFwiT19UUlVOQ1wiOiAxMDI0LFxuICBcIk9fQVBQRU5EXCI6IDgsXG4gIFwiT19ESVJFQ1RPUllcIjogMTA0ODU3NixcbiAgXCJPX05PRk9MTE9XXCI6IDI1NixcbiAgXCJPX1NZTkNcIjogMTI4LFxuICBcIk9fU1lNTElOS1wiOiAyMDk3MTUyLFxuICBcIk9fTk9OQkxPQ0tcIjogNCxcbiAgXCJTX0lSV1hVXCI6IDQ0OCxcbiAgXCJTX0lSVVNSXCI6IDI1NixcbiAgXCJTX0lXVVNSXCI6IDEyOCxcbiAgXCJTX0lYVVNSXCI6IDY0LFxuICBcIlNfSVJXWEdcIjogNTYsXG4gIFwiU19JUkdSUFwiOiAzMixcbiAgXCJTX0lXR1JQXCI6IDE2LFxuICBcIlNfSVhHUlBcIjogOCxcbiAgXCJTX0lSV1hPXCI6IDcsXG4gIFwiU19JUk9USFwiOiA0LFxuICBcIlNfSVdPVEhcIjogMixcbiAgXCJTX0lYT1RIXCI6IDEsXG4gIFwiRTJCSUdcIjogNyxcbiAgXCJFQUNDRVNcIjogMTMsXG4gIFwiRUFERFJJTlVTRVwiOiA0OCxcbiAgXCJFQUREUk5PVEFWQUlMXCI6IDQ5LFxuICBcIkVBRk5PU1VQUE9SVFwiOiA0NyxcbiAgXCJFQUdBSU5cIjogMzUsXG4gIFwiRUFMUkVBRFlcIjogMzcsXG4gIFwiRUJBREZcIjogOSxcbiAgXCJFQkFETVNHXCI6IDk0LFxuICBcIkVCVVNZXCI6IDE2LFxuICBcIkVDQU5DRUxFRFwiOiA4OSxcbiAgXCJFQ0hJTERcIjogMTAsXG4gIFwiRUNPTk5BQk9SVEVEXCI6IDUzLFxuICBcIkVDT05OUkVGVVNFRFwiOiA2MSxcbiAgXCJFQ09OTlJFU0VUXCI6IDU0LFxuICBcIkVERUFETEtcIjogMTEsXG4gIFwiRURFU1RBRERSUkVRXCI6IDM5LFxuICBcIkVET01cIjogMzMsXG4gIFwiRURRVU9UXCI6IDY5LFxuICBcIkVFWElTVFwiOiAxNyxcbiAgXCJFRkFVTFRcIjogMTQsXG4gIFwiRUZCSUdcIjogMjcsXG4gIFwiRUhPU1RVTlJFQUNIXCI6IDY1LFxuICBcIkVJRFJNXCI6IDkwLFxuICBcIkVJTFNFUVwiOiA5MixcbiAgXCJFSU5QUk9HUkVTU1wiOiAzNixcbiAgXCJFSU5UUlwiOiA0LFxuICBcIkVJTlZBTFwiOiAyMixcbiAgXCJFSU9cIjogNSxcbiAgXCJFSVNDT05OXCI6IDU2LFxuICBcIkVJU0RJUlwiOiAyMSxcbiAgXCJFTE9PUFwiOiA2MixcbiAgXCJFTUZJTEVcIjogMjQsXG4gIFwiRU1MSU5LXCI6IDMxLFxuICBcIkVNU0dTSVpFXCI6IDQwLFxuICBcIkVNVUxUSUhPUFwiOiA5NSxcbiAgXCJFTkFNRVRPT0xPTkdcIjogNjMsXG4gIFwiRU5FVERPV05cIjogNTAsXG4gIFwiRU5FVFJFU0VUXCI6IDUyLFxuICBcIkVORVRVTlJFQUNIXCI6IDUxLFxuICBcIkVORklMRVwiOiAyMyxcbiAgXCJFTk9CVUZTXCI6IDU1LFxuICBcIkVOT0RBVEFcIjogOTYsXG4gIFwiRU5PREVWXCI6IDE5LFxuICBcIkVOT0VOVFwiOiAyLFxuICBcIkVOT0VYRUNcIjogOCxcbiAgXCJFTk9MQ0tcIjogNzcsXG4gIFwiRU5PTElOS1wiOiA5NyxcbiAgXCJFTk9NRU1cIjogMTIsXG4gIFwiRU5PTVNHXCI6IDkxLFxuICBcIkVOT1BST1RPT1BUXCI6IDQyLFxuICBcIkVOT1NQQ1wiOiAyOCxcbiAgXCJFTk9TUlwiOiA5OCxcbiAgXCJFTk9TVFJcIjogOTksXG4gIFwiRU5PU1lTXCI6IDc4LFxuICBcIkVOT1RDT05OXCI6IDU3LFxuICBcIkVOT1RESVJcIjogMjAsXG4gIFwiRU5PVEVNUFRZXCI6IDY2LFxuICBcIkVOT1RTT0NLXCI6IDM4LFxuICBcIkVOT1RTVVBcIjogNDUsXG4gIFwiRU5PVFRZXCI6IDI1LFxuICBcIkVOWElPXCI6IDYsXG4gIFwiRU9QTk9UU1VQUFwiOiAxMDIsXG4gIFwiRU9WRVJGTE9XXCI6IDg0LFxuICBcIkVQRVJNXCI6IDEsXG4gIFwiRVBJUEVcIjogMzIsXG4gIFwiRVBST1RPXCI6IDEwMCxcbiAgXCJFUFJPVE9OT1NVUFBPUlRcIjogNDMsXG4gIFwiRVBST1RPVFlQRVwiOiA0MSxcbiAgXCJFUkFOR0VcIjogMzQsXG4gIFwiRVJPRlNcIjogMzAsXG4gIFwiRVNQSVBFXCI6IDI5LFxuICBcIkVTUkNIXCI6IDMsXG4gIFwiRVNUQUxFXCI6IDcwLFxuICBcIkVUSU1FXCI6IDEwMSxcbiAgXCJFVElNRURPVVRcIjogNjAsXG4gIFwiRVRYVEJTWVwiOiAyNixcbiAgXCJFV09VTERCTE9DS1wiOiAzNSxcbiAgXCJFWERFVlwiOiAxOCxcbiAgXCJTSUdIVVBcIjogMSxcbiAgXCJTSUdJTlRcIjogMixcbiAgXCJTSUdRVUlUXCI6IDMsXG4gIFwiU0lHSUxMXCI6IDQsXG4gIFwiU0lHVFJBUFwiOiA1LFxuICBcIlNJR0FCUlRcIjogNixcbiAgXCJTSUdJT1RcIjogNixcbiAgXCJTSUdCVVNcIjogMTAsXG4gIFwiU0lHRlBFXCI6IDgsXG4gIFwiU0lHS0lMTFwiOiA5LFxuICBcIlNJR1VTUjFcIjogMzAsXG4gIFwiU0lHU0VHVlwiOiAxMSxcbiAgXCJTSUdVU1IyXCI6IDMxLFxuICBcIlNJR1BJUEVcIjogMTMsXG4gIFwiU0lHQUxSTVwiOiAxNCxcbiAgXCJTSUdURVJNXCI6IDE1LFxuICBcIlNJR0NITERcIjogMjAsXG4gIFwiU0lHQ09OVFwiOiAxOSxcbiAgXCJTSUdTVE9QXCI6IDE3LFxuICBcIlNJR1RTVFBcIjogMTgsXG4gIFwiU0lHVFRJTlwiOiAyMSxcbiAgXCJTSUdUVE9VXCI6IDIyLFxuICBcIlNJR1VSR1wiOiAxNixcbiAgXCJTSUdYQ1BVXCI6IDI0LFxuICBcIlNJR1hGU1pcIjogMjUsXG4gIFwiU0lHVlRBTFJNXCI6IDI2LFxuICBcIlNJR1BST0ZcIjogMjcsXG4gIFwiU0lHV0lOQ0hcIjogMjgsXG4gIFwiU0lHSU9cIjogMjMsXG4gIFwiU0lHU1lTXCI6IDEyLFxuICBcIlNTTF9PUF9BTExcIjogMjE0NzQ4NjcxOSxcbiAgXCJTU0xfT1BfQUxMT1dfVU5TQUZFX0xFR0FDWV9SRU5FR09USUFUSU9OXCI6IDI2MjE0NCxcbiAgXCJTU0xfT1BfQ0lQSEVSX1NFUlZFUl9QUkVGRVJFTkNFXCI6IDQxOTQzMDQsXG4gIFwiU1NMX09QX0NJU0NPX0FOWUNPTk5FQ1RcIjogMzI3NjgsXG4gIFwiU1NMX09QX0NPT0tJRV9FWENIQU5HRVwiOiA4MTkyLFxuICBcIlNTTF9PUF9DUllQVE9QUk9fVExTRVhUX0JVR1wiOiAyMTQ3NDgzNjQ4LFxuICBcIlNTTF9PUF9ET05UX0lOU0VSVF9FTVBUWV9GUkFHTUVOVFNcIjogMjA0OCxcbiAgXCJTU0xfT1BfRVBIRU1FUkFMX1JTQVwiOiAwLFxuICBcIlNTTF9PUF9MRUdBQ1lfU0VSVkVSX0NPTk5FQ1RcIjogNCxcbiAgXCJTU0xfT1BfTUlDUk9TT0ZUX0JJR19TU0xWM19CVUZGRVJcIjogMzIsXG4gIFwiU1NMX09QX01JQ1JPU09GVF9TRVNTX0lEX0JVR1wiOiAxLFxuICBcIlNTTF9PUF9NU0lFX1NTTFYyX1JTQV9QQURESU5HXCI6IDAsXG4gIFwiU1NMX09QX05FVFNDQVBFX0NBX0ROX0JVR1wiOiA1MzY4NzA5MTIsXG4gIFwiU1NMX09QX05FVFNDQVBFX0NIQUxMRU5HRV9CVUdcIjogMixcbiAgXCJTU0xfT1BfTkVUU0NBUEVfREVNT19DSVBIRVJfQ0hBTkdFX0JVR1wiOiAxMDczNzQxODI0LFxuICBcIlNTTF9PUF9ORVRTQ0FQRV9SRVVTRV9DSVBIRVJfQ0hBTkdFX0JVR1wiOiA4LFxuICBcIlNTTF9PUF9OT19DT01QUkVTU0lPTlwiOiAxMzEwNzIsXG4gIFwiU1NMX09QX05PX1FVRVJZX01UVVwiOiA0MDk2LFxuICBcIlNTTF9PUF9OT19TRVNTSU9OX1JFU1VNUFRJT05fT05fUkVORUdPVElBVElPTlwiOiA2NTUzNixcbiAgXCJTU0xfT1BfTk9fU1NMdjJcIjogMTY3NzcyMTYsXG4gIFwiU1NMX09QX05PX1NTTHYzXCI6IDMzNTU0NDMyLFxuICBcIlNTTF9PUF9OT19USUNLRVRcIjogMTYzODQsXG4gIFwiU1NMX09QX05PX1RMU3YxXCI6IDY3MTA4ODY0LFxuICBcIlNTTF9PUF9OT19UTFN2MV8xXCI6IDI2ODQzNTQ1NixcbiAgXCJTU0xfT1BfTk9fVExTdjFfMlwiOiAxMzQyMTc3MjgsXG4gIFwiU1NMX09QX1BLQ1MxX0NIRUNLXzFcIjogMCxcbiAgXCJTU0xfT1BfUEtDUzFfQ0hFQ0tfMlwiOiAwLFxuICBcIlNTTF9PUF9TSU5HTEVfREhfVVNFXCI6IDEwNDg1NzYsXG4gIFwiU1NMX09QX1NJTkdMRV9FQ0RIX1VTRVwiOiA1MjQyODgsXG4gIFwiU1NMX09QX1NTTEVBWV8wODBfQ0xJRU5UX0RIX0JVR1wiOiAxMjgsXG4gIFwiU1NMX09QX1NTTFJFRjJfUkVVU0VfQ0VSVF9UWVBFX0JVR1wiOiAwLFxuICBcIlNTTF9PUF9UTFNfQkxPQ0tfUEFERElOR19CVUdcIjogNTEyLFxuICBcIlNTTF9PUF9UTFNfRDVfQlVHXCI6IDI1NixcbiAgXCJTU0xfT1BfVExTX1JPTExCQUNLX0JVR1wiOiA4Mzg4NjA4LFxuICBcIkVOR0lORV9NRVRIT0RfRFNBXCI6IDIsXG4gIFwiRU5HSU5FX01FVEhPRF9ESFwiOiA0LFxuICBcIkVOR0lORV9NRVRIT0RfUkFORFwiOiA4LFxuICBcIkVOR0lORV9NRVRIT0RfRUNESFwiOiAxNixcbiAgXCJFTkdJTkVfTUVUSE9EX0VDRFNBXCI6IDMyLFxuICBcIkVOR0lORV9NRVRIT0RfQ0lQSEVSU1wiOiA2NCxcbiAgXCJFTkdJTkVfTUVUSE9EX0RJR0VTVFNcIjogMTI4LFxuICBcIkVOR0lORV9NRVRIT0RfU1RPUkVcIjogMjU2LFxuICBcIkVOR0lORV9NRVRIT0RfUEtFWV9NRVRIU1wiOiA1MTIsXG4gIFwiRU5HSU5FX01FVEhPRF9QS0VZX0FTTjFfTUVUSFNcIjogMTAyNCxcbiAgXCJFTkdJTkVfTUVUSE9EX0FMTFwiOiA2NTUzNSxcbiAgXCJFTkdJTkVfTUVUSE9EX05PTkVcIjogMCxcbiAgXCJESF9DSEVDS19QX05PVF9TQUZFX1BSSU1FXCI6IDIsXG4gIFwiREhfQ0hFQ0tfUF9OT1RfUFJJTUVcIjogMSxcbiAgXCJESF9VTkFCTEVfVE9fQ0hFQ0tfR0VORVJBVE9SXCI6IDQsXG4gIFwiREhfTk9UX1NVSVRBQkxFX0dFTkVSQVRPUlwiOiA4LFxuICBcIk5QTl9FTkFCTEVEXCI6IDEsXG4gIFwiUlNBX1BLQ1MxX1BBRERJTkdcIjogMSxcbiAgXCJSU0FfU1NMVjIzX1BBRERJTkdcIjogMixcbiAgXCJSU0FfTk9fUEFERElOR1wiOiAzLFxuICBcIlJTQV9QS0NTMV9PQUVQX1BBRERJTkdcIjogNCxcbiAgXCJSU0FfWDkzMV9QQURESU5HXCI6IDUsXG4gIFwiUlNBX1BLQ1MxX1BTU19QQURESU5HXCI6IDYsXG4gIFwiUE9JTlRfQ09OVkVSU0lPTl9DT01QUkVTU0VEXCI6IDIsXG4gIFwiUE9JTlRfQ09OVkVSU0lPTl9VTkNPTVBSRVNTRURcIjogNCxcbiAgXCJQT0lOVF9DT05WRVJTSU9OX0hZQlJJRFwiOiA2LFxuICBcIkZfT0tcIjogMCxcbiAgXCJSX09LXCI6IDQsXG4gIFwiV19PS1wiOiAyLFxuICBcIlhfT0tcIjogMSxcbiAgXCJVVl9VRFBfUkVVU0VBRERSXCI6IDRcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEYW5jZSA9IGV4cG9ydHMuRGFuY2UgPSBmdW5jdGlvbiBEYW5jZShzdGFydERhbmNlRmlsZSwgc3RvcERhbmNlRmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYW5jZSk7XG5cbiAgICB0aGlzLnN0YXJ0RGFuY2VGaWxlID0gc3RhcnREYW5jZUZpbGU7XG4gICAgdGhpcy5zdG9wRGFuY2VGaWxlID0gc3RvcERhbmNlRmlsZTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFdpbmRJbnN0cnVtZW50ID0gZXhwb3J0cy5XaW5kSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIFdpbmRJbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpbmRJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIFN0cmluZ0luc3RydW1ldCA9IGV4cG9ydHMuU3RyaW5nSW5zdHJ1bWV0ID0gZnVuY3Rpb24gU3RyaW5nSW5zdHJ1bWV0KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0cmluZ0luc3RydW1ldCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07XG5cbnZhciBQZXJjdXNzaW9uSW5zdHJ1bWVudCA9IGV4cG9ydHMuUGVyY3Vzc2lvbkluc3RydW1lbnQgPSBmdW5jdGlvbiBQZXJjdXNzaW9uSW5zdHJ1bWVudChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQZXJjdXNzaW9uSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07XG5cbnZhciBCb3dJbnN0cnVtZW50ID0gZXhwb3J0cy5Cb3dJbnN0cnVtZW50ID0gZnVuY3Rpb24gQm93SW5zdHJ1bWVudChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb3dJbnN0cnVtZW50KTtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcbiAgICB0aGlzLnNvdW5kLnNyYyA9IHNvdW5kO1xufTtcblxudmFyIEtleWJvYXJkSW5zdHJ1bWVudCA9IGV4cG9ydHMuS2V5Ym9hcmRJbnN0cnVtZW50ID0gZnVuY3Rpb24gS2V5Ym9hcmRJbnN0cnVtZW50KHNvdW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleWJvYXJkSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE1hbkRhbmNlciA9IGV4cG9ydHMuTWFuRGFuY2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hbkRhbmNlcihkYW5jZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFuRGFuY2VyKTtcblxuICAgICAgICB0aGlzLmRhbmNlID0gZGFuY2U7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hbkRhbmNlciwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYW5jZS5zdGFydERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0b3BEYW5jZUZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWFuRGFuY2VyO1xufSgpO1xuXG52YXIgV29tYW5EYW5jZXIgPSBleHBvcnRzLldvbWFuRGFuY2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvbWFuRGFuY2VyKGRhbmNlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXb21hbkRhbmNlcik7XG5cbiAgICAgICAgdGhpcy5kYW5jZSA9IGRhbmNlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXb21hbkRhbmNlciwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYW5jZS5zdGFydERhbmNlRmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhbmNlLnN0b3BEYW5jZUZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV29tYW5EYW5jZXI7XG59KCk7XG5cbnZhciBNYW5TaW5nZXIgPSBleHBvcnRzLk1hblNpbmdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYW5TaW5nZXIoc29uZywgc3RhcnRTaW5naW5nRmlsZSwgc3RvcFNpbmdpbmdGaWxlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW5TaW5nZXIpO1xuXG4gICAgICAgIHRoaXMuc29uZyA9IHNvbmc7XG4gICAgICAgIHRoaXMuc3RhcnRTaW5naW5nRmlsZSA9IHN0YXJ0U2luZ2luZ0ZpbGU7XG4gICAgICAgIHRoaXMuc3RvcFNpbmdpbmdGaWxlID0gc3RvcFNpbmdpbmdGaWxlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNYW5TaW5nZXIsIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0U2luZ2luZ0ZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUucGF1c2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BTaW5naW5nRmlsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYW5TaW5nZXI7XG59KCk7XG5cbnZhciBXb21hblNpbmdlciA9IGV4cG9ydHMuV29tYW5TaW5nZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29tYW5TaW5nZXIoc29uZywgc3RhcnRTaW5naW5nRmlsZSwgc3RvcFNpbmdpbmdGaWxlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXb21hblNpbmdlcik7XG5cbiAgICAgICAgdGhpcy5zb25nID0gc29uZztcbiAgICAgICAgdGhpcy5zdGFydFNpbmdpbmdGaWxlID0gc3RhcnRTaW5naW5nRmlsZTtcbiAgICAgICAgdGhpcy5zdG9wU2luZ2luZ0ZpbGUgPSBzdG9wU2luZ2luZ0ZpbGU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdvbWFuU2luZ2VyLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUubG9vcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydFNpbmdpbmdGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLnBhdXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wU2luZ2luZ0ZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV29tYW5TaW5nZXI7XG59KCk7XG5cbnZhciBNdXNpY2lhbiA9IGV4cG9ydHMuTXVzaWNpYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXVzaWNpYW4oaW5zdHJ1bWVudCwgc3RhcnRQbGF5RmlsZSwgc3RvcFBsYXlGaWxlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNdXNpY2lhbik7XG5cbiAgICAgICAgdGhpcy5pbnN0cnVtZW50ID0gaW5zdHJ1bWVudDtcbiAgICAgICAgdGhpcy5zdGFydFBsYXlGaWxlID0gc3RhcnRQbGF5RmlsZTtcbiAgICAgICAgdGhpcy5zdG9wUGxheUZpbGUgPSBzdG9wUGxheUZpbGU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE11c2ljaWFuLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudC5zb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnQuc291bmQubG9vcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydFBsYXlGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50LnNvdW5kLnBhdXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wUGxheUZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTXVzaWNpYW47XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU29uZyA9IGV4cG9ydHMuU29uZyA9IGZ1bmN0aW9uIFNvbmcoc29uZ0ZpbGUpIHtcbiAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb25nKTtcblxuICAgdGhpcy5zb25nRmlsZSA9IG5ldyBBdWRpbygpO1xuICAgdGhpcy5zb25nRmlsZS5zcmMgPSBzb25nRmlsZTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm9wZW5CdXR0b25zID0gb3BlbkJ1dHRvbnM7XG5leHBvcnRzLmNsb3NlQnV0dG9ucyA9IGNsb3NlQnV0dG9ucztcbi8vc29sbyBhbmQgcGxheSDQutC90L7Qv9C60Lgg0YfRgtC+0LEg0L/QvtGP0LLQu9GP0LvQuNGB0Ywg0Lgg0LjRgdGH0LXQt9Cw0LvQuCDQv9GA0Lgg0LTRgNC+0L/QsNGFXG5mdW5jdGlvbiBvcGVuQnV0dG9ucyhkcmFnZ2VkSWQpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgIGlmICgnYm94JyArIGluZGV4ID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkJsb2NrJyArIGluZGV4KS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VCdXR0b25zKGRyYWdnZWRJZCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCdib3gnICsgaW5kZXggPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQmxvY2snICsgaW5kZXgpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2J1dHRvbnMgPSByZXF1aXJlKCcuL2J1dHRvbnMuanMnKTtcblxudmFyIF9EYW5jaW5nID0gcmVxdWlyZSgnLi9EYW5jaW5nLmpzJyk7XG5cbnZhciBfSW5zdHJ1bWVudCA9IHJlcXVpcmUoJy4vSW5zdHJ1bWVudC5qcycpO1xuXG52YXIgX01lbWJlciA9IHJlcXVpcmUoJy4vTWVtYmVyLmpzJyk7XG5cbnZhciBfU29uZyA9IHJlcXVpcmUoJy4vU29uZy5qcycpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJ2NvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgbWFuRGFuY2UgPSBuZXcgX0RhbmNpbmcuRGFuY2UoJ3VybCgnICsgXCJnaWYvbWFuRGFuY2UuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9tYW5EYW5jZS5qcGdcIiArICcpJyk7XG52YXIgd29tYW5EYW5jZSA9IG5ldyBfRGFuY2luZy5EYW5jZSgndXJsKCcgKyBcImdpZi93b21hbkRhbmNlLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvd29tYW5EYW5jZS5qcGdcIiArICcpJyk7IC8v0YHQvtC30LTQsNC90Ysg0YLQsNC90YbRi1xuXG52YXIgbWFuU29uZyA9IG5ldyBfU29uZy5Tb25nKCdtdXNpYy9tYW5zb25nLm1wMycpO1xudmFyIHdvbWFuU29uZyA9IG5ldyBfU29uZy5Tb25nKCdtdXNpYy93b21zb25nLndhdicpOyAvLyDRgdC+0LfQtNCw0L3RiyDQv9C10YHQvdC4XG5cbi8v0YHQvNC10L3QuNGC0Ywg0LzRg9C30YvQutGDIFxudmFyIGFjY29yZGVvbiA9IG5ldyBfSW5zdHJ1bWVudC5LZXlib2FyZEluc3RydW1lbnQoJ211c2ljL2FjY29yZGVvbi5tcDMnKTtcbnZhciBzeW50aGVzaXplciA9IG5ldyBfSW5zdHJ1bWVudC5LZXlib2FyZEluc3RydW1lbnQoJ211c2ljL3N5bnRoZXNpemVyLm1wMycpO1xudmFyIGJhc3MgPSBuZXcgX0luc3RydW1lbnQuUGVyY3Vzc2lvbkluc3RydW1lbnQoJ211c2ljL2Jhc3MubXAzJyk7XG52YXIgZGF2dWwgPSBuZXcgX0luc3RydW1lbnQuUGVyY3Vzc2lvbkluc3RydW1lbnQoJ211c2ljL2RhdnVsLm1wMycpO1xudmFyIGd1aXRhciA9IG5ldyBfSW5zdHJ1bWVudC5TdHJpbmdJbnN0cnVtZXQoJ211c2ljL2d1aXRhci5tcDMnKTtcbnZhciBzYXogPSBuZXcgX0luc3RydW1lbnQuU3RyaW5nSW5zdHJ1bWV0KCdtdXNpYy9zYXoubXAzJyk7XG52YXIgcGlwZSA9IG5ldyBfSW5zdHJ1bWVudC5XaW5kSW5zdHJ1bWVudCgnbXVzaWMvcGlwZS5tcDMnKTtcbnZhciBzYXggPSBuZXcgX0luc3RydW1lbnQuV2luZEluc3RydW1lbnQoJ211c2ljL3NheC5tcDMnKTtcbnZhciB2aW9saW4gPSBuZXcgX0luc3RydW1lbnQuQm93SW5zdHJ1bWVudCgnbXVzaWMvdmlvbGluLm1wMycpOyAvLyDRgdC+0LfQtNCw0L3RiyDQuNC90YHRgtGA0YPQvNC10L3RgtGLXG5cbnZhciB3b21hbkRhbmNlciA9IG5ldyBfTWVtYmVyLldvbWFuRGFuY2VyKHdvbWFuRGFuY2UpO1xudmFyIG1hbkRhbmNlciA9IG5ldyBfTWVtYmVyLk1hbkRhbmNlcihtYW5EYW5jZSk7IC8v0YHQvtC30LTQsNC90YvQtSDRgtCw0L3RhtC+0YDRi1xuXG52YXIgd29tYW5TaW5nZXIgPSBuZXcgX01lbWJlci5Xb21hblNpbmdlcih3b21hblNvbmcsICd1cmwoJyArIFwiZ2lmL3dvbWFuVm9pY2UuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi93b21hblZvaWNlLmpwZ1wiICsgJyknKTtcbnZhciBtYW5TaW5nZXIgPSBuZXcgX01lbWJlci5NYW5TaW5nZXIobWFuU29uZywgJ3VybCgnICsgXCJnaWYvbWFuVm9pY2UuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9tYW5Wb2ljZS5qcGdcIiArICcpJyk7IC8vINGB0L7Qt9C00LDQvdGLINC/0LXQstGG0YtcblxudmFyIGFjY29yZGVvblBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKGFjY29yZGVvbiwgJ3VybCgnICsgXCJnaWYvYWNjb3JkaW9uLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvYWNjb3JkaW9uLmpwZ1wiICsgJyknKTtcbnZhciBzeW50aGVzaXplclBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHN5bnRoZXNpemVyLCAndXJsKCcgKyBcImdpZi9zeW50aGVzaXplci5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL3N5bnRoZXNpemVyLmpwZ1wiICsgJyknKTtcbnZhciBiYXNzUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oYmFzcywgJ3VybCgnICsgXCJnaWYvYmFzcy5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL2Jhc3MuanBnXCIgKyAnKScpO1xudmFyIGRhdnVsUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oZGF2dWwsICd1cmwoJyArIFwiZ2lmL2RhdnVsLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvZGF2dWwuanBnXCIgKyAnKScpO1xudmFyIGd1aXRhclBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKGd1aXRhciwgJ3VybCgnICsgXCJnaWYvZ3VpdGFyLmdpZlwiICsgJyknLCAndXJsKCcgKyBcInN0b3BHaWYvZ3VpdGFyLmpwZ1wiICsgJyknKTtcbnZhciBzYXpQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihzYXosICd1cmwoJyArIFwiZ2lmL3Nhei5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL3Nhei5qcGdcIiArICcpJyk7XG52YXIgcGlwZVBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHBpcGUsICd1cmwoJyArIFwiZ2lmL3BpcGUuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi9waXBlLmpwZ1wiICsgJyknKTtcbnZhciBzYXhQbGF5ZXIgPSBuZXcgX01lbWJlci5NdXNpY2lhbihzYXgsICd1cmwoJyArIFwiZ2lmL3NheC5naWZcIiArICcpJywgJ3VybCgnICsgXCJzdG9wR2lmL3NheC5qcGdcIiArICcpJyk7XG52YXIgdmlvbGluUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4odmlvbGluLCAndXJsKCcgKyBcImdpZi92aW9saW4uZ2lmXCIgKyAnKScsICd1cmwoJyArIFwic3RvcEdpZi92aW9saW4uanBnXCIgKyAnKScpOyAvLyDRgdC+0LfQtNCw0L3RiyDQu9GO0LTQuCDQuNCz0YDQsNGO0YnQuNC1INC90LAg0LjQvdGB0YLRgNGD0LzQtdC90YLQsNGFXG5cbnZhciBhcnIgPSBbXTtcbi8v0LrQu9Cw0YHRgSDQtNGA0LDQs9C10L3QtNGA0L7Qv9CwXG5cbnZhciBEcmFnQW5kRHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEcmFnQW5kRHJvcCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdBbmREcm9wKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRHJhZ0FuZERyb3AsIFt7XG4gICAgICAgIGtleTogJ2hhbmRsZURyYWdTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgdGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZURyYWdFbnRlckxlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZURyYWdFbnRlckxlYXZlKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gXCJkcmFnZW50ZXJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJkcmFnLWVudGVyXCI7XG4gICAgICAgICAgICAgICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuICAgICAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICcxMHB4JztcbiAgICAgICAgICAgICAgICBkcmFnZ2VkRWwuc3R5bGUuaGVpZ2h0ID0gJzEwcHgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZU92ZXJEcm9wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU92ZXJEcm9wKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKGUudHlwZSAhPSBcImRyb3BcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnZ2VkRWwucGFyZW50Tm9kZSA9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcblxuICAgICAgICAgICAgLy/Rg9Cx0YDQsNGC0Ywg0L/QvtGC0L7QvCAgd2lkdGggYW5kIGhlaWdodFxuICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnMjcwcHgnO1xuICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmZsb2F0ID0gJ2luaGVyaXQnO1xuICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG1lbWJlcl9jb250cm9sLmdldEljb24oZHJhZ2dlZElkKTtcblxuICAgICAgICAgICAgKDAsIF9idXR0b25zLmNsb3NlQnV0dG9ucykoZHJhZ2dlZElkKTtcbiAgICAgICAgICAgIHZhciBkZWwgPSBhcnIuaW5kZXhPZihkcmFnZ2VkSWQpO1xuICAgICAgICAgICAgYXJyLnNwbGljZShkZWwsIDEpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVPdmVyRHJvcDInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlT3ZlckRyb3AyKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKGFyci5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS50eXBlICE9IFwiZHJvcFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvL01lYW5zIGZ1bmN0aW9uIHdpbGwgZXhpdCBpZiBubyBcImRyb3BcIiBldmVudCBpcyBmaXJlZC5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnZ2VkRWwucGFyZW50Tm9kZSA9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy9ub3RlOiB3aGVuIGEgcmV0dXJuIGlzIHJlYWNoZWQgYSBmdW5jdGlvbiBleGl0cy5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcblxuICAgICAgICAgICAgLy/Qt9Cw0LTQsNGC0Ywg0YDQsNC30LzQtdGAINCz0LjRhNC+0LpcbiAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICcyMDBweCc7XG4gICAgICAgICAgICBkcmFnZ2VkRWwuc3R5bGUuaGVpZ2h0ID0gJzI3M3B4JztcblxuICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG1lbWJlcl9jb250cm9sLmFjdGl2YXRpb24oZHJhZ2dlZElkKTtcblxuICAgICAgICAgICAgKDAsIF9idXR0b25zLm9wZW5CdXR0b25zKShkcmFnZ2VkSWQpO1xuXG4gICAgICAgICAgICBhcnIucHVzaChkcmFnZ2VkSWQpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERyYWdBbmREcm9wO1xufSgpO1xuXG52YXIgZHJhZ2dhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RyYWdnYWJsZV0nKTtcbnZhciB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcC10YXJnZXRdJyk7XG52YXIgdGFyZ2V0czIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wLXRhcmdldDJdJyk7XG52YXIgZHJhZ19uX2Ryb3AgPSBuZXcgRHJhZ0FuZERyb3AoKTtcblxuLy/Qt9Cw0LTQsNC10Lwg0LTRgNC+0L/RiyDQvdCwINGN0LvQtdC80LXQvdGC0YtcbihmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkcmFnZ2FibGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZHJhZ2dhYmxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ19uX2Ryb3AuaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGFyZ2V0cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdfbl9kcm9wLmhhbmRsZU92ZXJEcm9wKTtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJhZ19uX2Ryb3AuaGFuZGxlT3ZlckRyb3ApO1xuICAgICAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGRyYWdfbl9kcm9wLmhhbmRsZURyYWdFbnRlckxlYXZlKTtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBkcmFnX25fZHJvcC5oYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgfVxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHRhcmdldHMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnX25fZHJvcC5oYW5kbGVPdmVyRHJvcDIpO1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyYWdfbl9kcm9wLmhhbmRsZU92ZXJEcm9wMik7XG4gICAgICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBkcmFnX25fZHJvcC5oYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBkcmFnX25fZHJvcC5oYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgfVxufSkoKTtcblxuLy/QutC70LDRgdGBINC60L7QvdGC0YDQvtC70Y8g0YPRh9Cw0YHRgtC90LjQutCwXG5cbnZhciBNZW1iZXJDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lbWJlckNvbnRyb2woKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW1iZXJDb250cm9sKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWVtYmVyQ29udHJvbCwgW3tcbiAgICAgICAga2V5OiAnYWN0aXZhdGlvbicsXG5cbiAgICAgICAgLy/QsNC60YLQuNCy0LDRhtC40Lgg0YPRh9Cw0YHRgtC90LjQutCwXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhY3RpdmF0aW9uKGRyYWdnZWRJZCkge1xuXG4gICAgICAgICAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYW5EYW5jZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29tYW5EYW5jZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFuU2luZ2VyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY29yZGVvblBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiYXNzUGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1aXRhclBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2aW9saW5QbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNheFBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2F6UGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL9C+0YLQutC70Y7Rh9Cw0LXRgiDRg9GH0LDRgdGC0L3QuNC60LBcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGF1c2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYW5EYW5jZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvbWFuRGFuY2VyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYW5TaW5nZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzYXhQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzYXpQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v0L/QvtC70YPRh9C40YLRjCDQuNC60L7QvdC60YMg0LLQvNC10YHRgtC+INGD0YfQsNGB0L3QuNC60LBcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SWNvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJY29uKGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgaWYgKCdib3gxJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29IYWxwYWgucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb0Zlcy5wbmdcIiArICcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTWljcm9ILnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICB3b21hblNpbmdlci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb01pY3JvRi5wbmdcIiArICcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgYWNjb3JkZW9uUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNBY2NvcmRlb24ucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY0Jhc3MucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIGRhdnVsUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNEYXZ1bC5wbmdcIiArICcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgZ3VpdGFyUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNHdWl0YXIucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljVmlvbGluLnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcGlwZVBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljUGlwZS5wbmdcIiArICcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHNheFBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F4LnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgc2F6UGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNTYXoucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICBzeW50aGVzaXplclBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU3ludGhlc2l6ZXIucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWVtYmVyQ29udHJvbDtcbn0oKTtcblxudmFyIG1lbWJlcl9jb250cm9sID0gbmV3IE1lbWJlckNvbnRyb2woKTtcblxuLy/QvtCx0YDQsNCx0L7RgtGH0LjQutC4INC60L3QvtC/0L7QuiBzb2xvKG9uLW9mZikgYW5kIHBsYXkob24tb2ZmKVxuXG52YXIgQnV0dG9uSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCdXR0b25IYW5kbGVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnV0dG9uSGFuZGxlcik7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJ1dHRvbkhhbmRsZXIsIFt7XG4gICAgICAgIGtleTogJ2FjdGl2YXRlU29sbycsXG5cblxuICAgICAgICAvLyDQktC10YjQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsCDQvdCwIHNvbG8gINC60LDQttC00L7Qs9C+INGD0YfQsNGB0YLQvdC40LrQsFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGVTb2xvKCkge1xuICAgICAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Tb2xvT24nICsgaSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbUluZGV4ID0gYXJyLmluZGV4T2YoJ2JveCcgKyBpKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT0gZWxlbUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBtZW1iZXJfY29udHJvbC5wYXVzZShhcnJbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBtZW1iZXJfY29udHJvbC5hY3RpdmF0aW9uKGFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAxMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2xvb3AoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlYWN0aXZhdGVTb2xvJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlYWN0aXZhdGVTb2xvKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gMTM7IGkrKykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Tb2xvT2ZmJyArIGkpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG1lbWJlcl9jb250cm9sLmFjdGl2YXRpb24oYXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCS0LXRiNCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC90LAgcGxheSBhbmQgcGF1c2UgINC60LDQttC00L7Qs9C+INGD0YfQsNGB0YLQvdC40LrQsFxuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwYXVzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHZhciBfbG9vcDIgPSBmdW5jdGlvbiBfbG9vcDIoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGF1c2UnICsgaW5kZXgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1JbmRleCA9IGFyci5pbmRleE9mKCdib3gnICsgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycltlbGVtSW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBtZW1iZXJfY29udHJvbC5wYXVzZShhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgX2xvb3AyKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGxheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdmFyIF9sb29wMyA9IGZ1bmN0aW9uIF9sb29wMyhpbmRleCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5QbGF5JyArIGluZGV4KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIuaW5kZXhPZignYm94JyArIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbWVtYmVyX2NvbnRyb2wuYWN0aXZhdGlvbihhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgX2xvb3AzKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCdXR0b25IYW5kbGVyO1xufSgpO1xuXG52YXIgYnV0dG9uX2hhbmRsZXIgPSBuZXcgQnV0dG9uSGFuZGxlcigpO1xuYnV0dG9uX2hhbmRsZXIuYWN0aXZhdGVTb2xvKCk7XG5idXR0b25faGFuZGxlci5kZWFjdGl2YXRlU29sbygpO1xuYnV0dG9uX2hhbmRsZXIucGF1c2UoKTtcbmJ1dHRvbl9oYW5kbGVyLnBsYXkoKTsiXX0=
