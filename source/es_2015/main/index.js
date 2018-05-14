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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//solo and play кнопки чтоб появлялись и исчезали при дропах

var Buttons = exports.Buttons = function () {
    function Buttons() {
        _classCallCheck(this, Buttons);
    }

    _createClass(Buttons, [{
        key: 'openButtons',
        value: function openButtons(draggedId) {
            for (var index = 1; index <= 13; index++) {
                if ('box' + index == draggedId) {
                    document.getElementById('btnBlock' + index).style.display = 'inline-flex';
                }
            }
        }
    }, {
        key: 'closeButtons',
        value: function closeButtons(draggedId) {
            for (var index = 1; index <= 13; index++) {
                if ('box' + index == draggedId) {
                    document.getElementById('btnBlock' + index).style.display = 'none';
                }
            }
        }
    }]);

    return Buttons;
}();
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Buttons = require('./Buttons.js');

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
var buttons = new _Buttons.Buttons();
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
            draggedEl.style.height = '200px';
            draggedEl.style.float = 'inherit';
            draggedEl.style.backgroundImage = member_control.getIcon(draggedId);

            buttons.closeButtons(draggedId);
            var del = arr.indexOf(draggedId);
            arr.splice(del, 1);
        }
    }, {
        key: 'handleOverDrop2',
        value: function handleOverDrop2(e) {
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

            draggedEl.style.backgroundImage = member_control.activation(draggedId);

            buttons.openButtons(draggedId);

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
},{"./Buttons.js":2,"./Dancing.js":3,"./Instrument.js":4,"./Member.js":5,"./Song.js":6,"constants":1}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FNQUwtQ09NUFVURVIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiQzovVXNlcnMvQU1BTC1DT01QVVRFUi9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jb25zdGFudHMtYnJvd3NlcmlmeS9jb25zdGFudHMuanNvbiIsIkJ1dHRvbnMuanMiLCJEYW5jaW5nLmpzIiwiSW5zdHJ1bWVudC5qcyIsIk1lbWJlci5qcyIsIlNvbmcuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiT19SRE9OTFlcIjogMCxcbiAgXCJPX1dST05MWVwiOiAxLFxuICBcIk9fUkRXUlwiOiAyLFxuICBcIlNfSUZNVFwiOiA2MTQ0MCxcbiAgXCJTX0lGUkVHXCI6IDMyNzY4LFxuICBcIlNfSUZESVJcIjogMTYzODQsXG4gIFwiU19JRkNIUlwiOiA4MTkyLFxuICBcIlNfSUZCTEtcIjogMjQ1NzYsXG4gIFwiU19JRklGT1wiOiA0MDk2LFxuICBcIlNfSUZMTktcIjogNDA5NjAsXG4gIFwiU19JRlNPQ0tcIjogNDkxNTIsXG4gIFwiT19DUkVBVFwiOiA1MTIsXG4gIFwiT19FWENMXCI6IDIwNDgsXG4gIFwiT19OT0NUVFlcIjogMTMxMDcyLFxuICBcIk9fVFJVTkNcIjogMTAyNCxcbiAgXCJPX0FQUEVORFwiOiA4LFxuICBcIk9fRElSRUNUT1JZXCI6IDEwNDg1NzYsXG4gIFwiT19OT0ZPTExPV1wiOiAyNTYsXG4gIFwiT19TWU5DXCI6IDEyOCxcbiAgXCJPX1NZTUxJTktcIjogMjA5NzE1MixcbiAgXCJPX05PTkJMT0NLXCI6IDQsXG4gIFwiU19JUldYVVwiOiA0NDgsXG4gIFwiU19JUlVTUlwiOiAyNTYsXG4gIFwiU19JV1VTUlwiOiAxMjgsXG4gIFwiU19JWFVTUlwiOiA2NCxcbiAgXCJTX0lSV1hHXCI6IDU2LFxuICBcIlNfSVJHUlBcIjogMzIsXG4gIFwiU19JV0dSUFwiOiAxNixcbiAgXCJTX0lYR1JQXCI6IDgsXG4gIFwiU19JUldYT1wiOiA3LFxuICBcIlNfSVJPVEhcIjogNCxcbiAgXCJTX0lXT1RIXCI6IDIsXG4gIFwiU19JWE9USFwiOiAxLFxuICBcIkUyQklHXCI6IDcsXG4gIFwiRUFDQ0VTXCI6IDEzLFxuICBcIkVBRERSSU5VU0VcIjogNDgsXG4gIFwiRUFERFJOT1RBVkFJTFwiOiA0OSxcbiAgXCJFQUZOT1NVUFBPUlRcIjogNDcsXG4gIFwiRUFHQUlOXCI6IDM1LFxuICBcIkVBTFJFQURZXCI6IDM3LFxuICBcIkVCQURGXCI6IDksXG4gIFwiRUJBRE1TR1wiOiA5NCxcbiAgXCJFQlVTWVwiOiAxNixcbiAgXCJFQ0FOQ0VMRURcIjogODksXG4gIFwiRUNISUxEXCI6IDEwLFxuICBcIkVDT05OQUJPUlRFRFwiOiA1MyxcbiAgXCJFQ09OTlJFRlVTRURcIjogNjEsXG4gIFwiRUNPTk5SRVNFVFwiOiA1NCxcbiAgXCJFREVBRExLXCI6IDExLFxuICBcIkVERVNUQUREUlJFUVwiOiAzOSxcbiAgXCJFRE9NXCI6IDMzLFxuICBcIkVEUVVPVFwiOiA2OSxcbiAgXCJFRVhJU1RcIjogMTcsXG4gIFwiRUZBVUxUXCI6IDE0LFxuICBcIkVGQklHXCI6IDI3LFxuICBcIkVIT1NUVU5SRUFDSFwiOiA2NSxcbiAgXCJFSURSTVwiOiA5MCxcbiAgXCJFSUxTRVFcIjogOTIsXG4gIFwiRUlOUFJPR1JFU1NcIjogMzYsXG4gIFwiRUlOVFJcIjogNCxcbiAgXCJFSU5WQUxcIjogMjIsXG4gIFwiRUlPXCI6IDUsXG4gIFwiRUlTQ09OTlwiOiA1NixcbiAgXCJFSVNESVJcIjogMjEsXG4gIFwiRUxPT1BcIjogNjIsXG4gIFwiRU1GSUxFXCI6IDI0LFxuICBcIkVNTElOS1wiOiAzMSxcbiAgXCJFTVNHU0laRVwiOiA0MCxcbiAgXCJFTVVMVElIT1BcIjogOTUsXG4gIFwiRU5BTUVUT09MT05HXCI6IDYzLFxuICBcIkVORVRET1dOXCI6IDUwLFxuICBcIkVORVRSRVNFVFwiOiA1MixcbiAgXCJFTkVUVU5SRUFDSFwiOiA1MSxcbiAgXCJFTkZJTEVcIjogMjMsXG4gIFwiRU5PQlVGU1wiOiA1NSxcbiAgXCJFTk9EQVRBXCI6IDk2LFxuICBcIkVOT0RFVlwiOiAxOSxcbiAgXCJFTk9FTlRcIjogMixcbiAgXCJFTk9FWEVDXCI6IDgsXG4gIFwiRU5PTENLXCI6IDc3LFxuICBcIkVOT0xJTktcIjogOTcsXG4gIFwiRU5PTUVNXCI6IDEyLFxuICBcIkVOT01TR1wiOiA5MSxcbiAgXCJFTk9QUk9UT09QVFwiOiA0MixcbiAgXCJFTk9TUENcIjogMjgsXG4gIFwiRU5PU1JcIjogOTgsXG4gIFwiRU5PU1RSXCI6IDk5LFxuICBcIkVOT1NZU1wiOiA3OCxcbiAgXCJFTk9UQ09OTlwiOiA1NyxcbiAgXCJFTk9URElSXCI6IDIwLFxuICBcIkVOT1RFTVBUWVwiOiA2NixcbiAgXCJFTk9UU09DS1wiOiAzOCxcbiAgXCJFTk9UU1VQXCI6IDQ1LFxuICBcIkVOT1RUWVwiOiAyNSxcbiAgXCJFTlhJT1wiOiA2LFxuICBcIkVPUE5PVFNVUFBcIjogMTAyLFxuICBcIkVPVkVSRkxPV1wiOiA4NCxcbiAgXCJFUEVSTVwiOiAxLFxuICBcIkVQSVBFXCI6IDMyLFxuICBcIkVQUk9UT1wiOiAxMDAsXG4gIFwiRVBST1RPTk9TVVBQT1JUXCI6IDQzLFxuICBcIkVQUk9UT1RZUEVcIjogNDEsXG4gIFwiRVJBTkdFXCI6IDM0LFxuICBcIkVST0ZTXCI6IDMwLFxuICBcIkVTUElQRVwiOiAyOSxcbiAgXCJFU1JDSFwiOiAzLFxuICBcIkVTVEFMRVwiOiA3MCxcbiAgXCJFVElNRVwiOiAxMDEsXG4gIFwiRVRJTUVET1VUXCI6IDYwLFxuICBcIkVUWFRCU1lcIjogMjYsXG4gIFwiRVdPVUxEQkxPQ0tcIjogMzUsXG4gIFwiRVhERVZcIjogMTgsXG4gIFwiU0lHSFVQXCI6IDEsXG4gIFwiU0lHSU5UXCI6IDIsXG4gIFwiU0lHUVVJVFwiOiAzLFxuICBcIlNJR0lMTFwiOiA0LFxuICBcIlNJR1RSQVBcIjogNSxcbiAgXCJTSUdBQlJUXCI6IDYsXG4gIFwiU0lHSU9UXCI6IDYsXG4gIFwiU0lHQlVTXCI6IDEwLFxuICBcIlNJR0ZQRVwiOiA4LFxuICBcIlNJR0tJTExcIjogOSxcbiAgXCJTSUdVU1IxXCI6IDMwLFxuICBcIlNJR1NFR1ZcIjogMTEsXG4gIFwiU0lHVVNSMlwiOiAzMSxcbiAgXCJTSUdQSVBFXCI6IDEzLFxuICBcIlNJR0FMUk1cIjogMTQsXG4gIFwiU0lHVEVSTVwiOiAxNSxcbiAgXCJTSUdDSExEXCI6IDIwLFxuICBcIlNJR0NPTlRcIjogMTksXG4gIFwiU0lHU1RPUFwiOiAxNyxcbiAgXCJTSUdUU1RQXCI6IDE4LFxuICBcIlNJR1RUSU5cIjogMjEsXG4gIFwiU0lHVFRPVVwiOiAyMixcbiAgXCJTSUdVUkdcIjogMTYsXG4gIFwiU0lHWENQVVwiOiAyNCxcbiAgXCJTSUdYRlNaXCI6IDI1LFxuICBcIlNJR1ZUQUxSTVwiOiAyNixcbiAgXCJTSUdQUk9GXCI6IDI3LFxuICBcIlNJR1dJTkNIXCI6IDI4LFxuICBcIlNJR0lPXCI6IDIzLFxuICBcIlNJR1NZU1wiOiAxMixcbiAgXCJTU0xfT1BfQUxMXCI6IDIxNDc0ODY3MTksXG4gIFwiU1NMX09QX0FMTE9XX1VOU0FGRV9MRUdBQ1lfUkVORUdPVElBVElPTlwiOiAyNjIxNDQsXG4gIFwiU1NMX09QX0NJUEhFUl9TRVJWRVJfUFJFRkVSRU5DRVwiOiA0MTk0MzA0LFxuICBcIlNTTF9PUF9DSVNDT19BTllDT05ORUNUXCI6IDMyNzY4LFxuICBcIlNTTF9PUF9DT09LSUVfRVhDSEFOR0VcIjogODE5MixcbiAgXCJTU0xfT1BfQ1JZUFRPUFJPX1RMU0VYVF9CVUdcIjogMjE0NzQ4MzY0OCxcbiAgXCJTU0xfT1BfRE9OVF9JTlNFUlRfRU1QVFlfRlJBR01FTlRTXCI6IDIwNDgsXG4gIFwiU1NMX09QX0VQSEVNRVJBTF9SU0FcIjogMCxcbiAgXCJTU0xfT1BfTEVHQUNZX1NFUlZFUl9DT05ORUNUXCI6IDQsXG4gIFwiU1NMX09QX01JQ1JPU09GVF9CSUdfU1NMVjNfQlVGRkVSXCI6IDMyLFxuICBcIlNTTF9PUF9NSUNST1NPRlRfU0VTU19JRF9CVUdcIjogMSxcbiAgXCJTU0xfT1BfTVNJRV9TU0xWMl9SU0FfUEFERElOR1wiOiAwLFxuICBcIlNTTF9PUF9ORVRTQ0FQRV9DQV9ETl9CVUdcIjogNTM2ODcwOTEyLFxuICBcIlNTTF9PUF9ORVRTQ0FQRV9DSEFMTEVOR0VfQlVHXCI6IDIsXG4gIFwiU1NMX09QX05FVFNDQVBFX0RFTU9fQ0lQSEVSX0NIQU5HRV9CVUdcIjogMTA3Mzc0MTgyNCxcbiAgXCJTU0xfT1BfTkVUU0NBUEVfUkVVU0VfQ0lQSEVSX0NIQU5HRV9CVUdcIjogOCxcbiAgXCJTU0xfT1BfTk9fQ09NUFJFU1NJT05cIjogMTMxMDcyLFxuICBcIlNTTF9PUF9OT19RVUVSWV9NVFVcIjogNDA5NixcbiAgXCJTU0xfT1BfTk9fU0VTU0lPTl9SRVNVTVBUSU9OX09OX1JFTkVHT1RJQVRJT05cIjogNjU1MzYsXG4gIFwiU1NMX09QX05PX1NTTHYyXCI6IDE2Nzc3MjE2LFxuICBcIlNTTF9PUF9OT19TU0x2M1wiOiAzMzU1NDQzMixcbiAgXCJTU0xfT1BfTk9fVElDS0VUXCI6IDE2Mzg0LFxuICBcIlNTTF9PUF9OT19UTFN2MVwiOiA2NzEwODg2NCxcbiAgXCJTU0xfT1BfTk9fVExTdjFfMVwiOiAyNjg0MzU0NTYsXG4gIFwiU1NMX09QX05PX1RMU3YxXzJcIjogMTM0MjE3NzI4LFxuICBcIlNTTF9PUF9QS0NTMV9DSEVDS18xXCI6IDAsXG4gIFwiU1NMX09QX1BLQ1MxX0NIRUNLXzJcIjogMCxcbiAgXCJTU0xfT1BfU0lOR0xFX0RIX1VTRVwiOiAxMDQ4NTc2LFxuICBcIlNTTF9PUF9TSU5HTEVfRUNESF9VU0VcIjogNTI0Mjg4LFxuICBcIlNTTF9PUF9TU0xFQVlfMDgwX0NMSUVOVF9ESF9CVUdcIjogMTI4LFxuICBcIlNTTF9PUF9TU0xSRUYyX1JFVVNFX0NFUlRfVFlQRV9CVUdcIjogMCxcbiAgXCJTU0xfT1BfVExTX0JMT0NLX1BBRERJTkdfQlVHXCI6IDUxMixcbiAgXCJTU0xfT1BfVExTX0Q1X0JVR1wiOiAyNTYsXG4gIFwiU1NMX09QX1RMU19ST0xMQkFDS19CVUdcIjogODM4ODYwOCxcbiAgXCJFTkdJTkVfTUVUSE9EX0RTQVwiOiAyLFxuICBcIkVOR0lORV9NRVRIT0RfREhcIjogNCxcbiAgXCJFTkdJTkVfTUVUSE9EX1JBTkRcIjogOCxcbiAgXCJFTkdJTkVfTUVUSE9EX0VDREhcIjogMTYsXG4gIFwiRU5HSU5FX01FVEhPRF9FQ0RTQVwiOiAzMixcbiAgXCJFTkdJTkVfTUVUSE9EX0NJUEhFUlNcIjogNjQsXG4gIFwiRU5HSU5FX01FVEhPRF9ESUdFU1RTXCI6IDEyOCxcbiAgXCJFTkdJTkVfTUVUSE9EX1NUT1JFXCI6IDI1NixcbiAgXCJFTkdJTkVfTUVUSE9EX1BLRVlfTUVUSFNcIjogNTEyLFxuICBcIkVOR0lORV9NRVRIT0RfUEtFWV9BU04xX01FVEhTXCI6IDEwMjQsXG4gIFwiRU5HSU5FX01FVEhPRF9BTExcIjogNjU1MzUsXG4gIFwiRU5HSU5FX01FVEhPRF9OT05FXCI6IDAsXG4gIFwiREhfQ0hFQ0tfUF9OT1RfU0FGRV9QUklNRVwiOiAyLFxuICBcIkRIX0NIRUNLX1BfTk9UX1BSSU1FXCI6IDEsXG4gIFwiREhfVU5BQkxFX1RPX0NIRUNLX0dFTkVSQVRPUlwiOiA0LFxuICBcIkRIX05PVF9TVUlUQUJMRV9HRU5FUkFUT1JcIjogOCxcbiAgXCJOUE5fRU5BQkxFRFwiOiAxLFxuICBcIlJTQV9QS0NTMV9QQURESU5HXCI6IDEsXG4gIFwiUlNBX1NTTFYyM19QQURESU5HXCI6IDIsXG4gIFwiUlNBX05PX1BBRERJTkdcIjogMyxcbiAgXCJSU0FfUEtDUzFfT0FFUF9QQURESU5HXCI6IDQsXG4gIFwiUlNBX1g5MzFfUEFERElOR1wiOiA1LFxuICBcIlJTQV9QS0NTMV9QU1NfUEFERElOR1wiOiA2LFxuICBcIlBPSU5UX0NPTlZFUlNJT05fQ09NUFJFU1NFRFwiOiAyLFxuICBcIlBPSU5UX0NPTlZFUlNJT05fVU5DT01QUkVTU0VEXCI6IDQsXG4gIFwiUE9JTlRfQ09OVkVSU0lPTl9IWUJSSURcIjogNixcbiAgXCJGX09LXCI6IDAsXG4gIFwiUl9PS1wiOiA0LFxuICBcIldfT0tcIjogMixcbiAgXCJYX09LXCI6IDEsXG4gIFwiVVZfVURQX1JFVVNFQUREUlwiOiA0XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy9zb2xvIGFuZCBwbGF5INC60L3QvtC/0LrQuCDRh9GC0L7QsSDQv9C+0Y/QstC70Y/Qu9C40YHRjCDQuCDQuNGB0YfQtdC30LDQu9C4INC/0YDQuCDQtNGA0L7Qv9Cw0YVcblxudmFyIEJ1dHRvbnMgPSBleHBvcnRzLkJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnV0dG9ucygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1dHRvbnMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCdXR0b25zLCBbe1xuICAgICAgICBrZXk6ICdvcGVuQnV0dG9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuQnV0dG9ucyhkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPD0gMTM7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoJ2JveCcgKyBpbmRleCA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkJsb2NrJyArIGluZGV4KS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nsb3NlQnV0dG9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZUJ1dHRvbnMoZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCdib3gnICsgaW5kZXggPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5CbG9jaycgKyBpbmRleCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQnV0dG9ucztcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRGFuY2UgPSBleHBvcnRzLkRhbmNlID0gZnVuY3Rpb24gRGFuY2Uoc3RhcnREYW5jZUZpbGUsIHN0b3BEYW5jZUZpbGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGFuY2UpO1xuXG4gICAgdGhpcy5zdGFydERhbmNlRmlsZSA9IHN0YXJ0RGFuY2VGaWxlO1xuICAgIHRoaXMuc3RvcERhbmNlRmlsZSA9IHN0b3BEYW5jZUZpbGU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBXaW5kSW5zdHJ1bWVudCA9IGV4cG9ydHMuV2luZEluc3RydW1lbnQgPSBmdW5jdGlvbiBXaW5kSW5zdHJ1bWVudChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaW5kSW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07XG5cbnZhciBTdHJpbmdJbnN0cnVtZXQgPSBleHBvcnRzLlN0cmluZ0luc3RydW1ldCA9IGZ1bmN0aW9uIFN0cmluZ0luc3RydW1ldChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHJpbmdJbnN0cnVtZXQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59O1xuXG52YXIgUGVyY3Vzc2lvbkluc3RydW1lbnQgPSBleHBvcnRzLlBlcmN1c3Npb25JbnN0cnVtZW50ID0gZnVuY3Rpb24gUGVyY3Vzc2lvbkluc3RydW1lbnQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGVyY3Vzc2lvbkluc3RydW1lbnQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59O1xuXG52YXIgQm93SW5zdHJ1bWVudCA9IGV4cG9ydHMuQm93SW5zdHJ1bWVudCA9IGZ1bmN0aW9uIEJvd0luc3RydW1lbnQoc291bmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQm93SW5zdHJ1bWVudCk7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzb3VuZDtcbn07XG5cbnZhciBLZXlib2FyZEluc3RydW1lbnQgPSBleHBvcnRzLktleWJvYXJkSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIEtleWJvYXJkSW5zdHJ1bWVudChzb3VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBLZXlib2FyZEluc3RydW1lbnQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuc291bmQuc3JjID0gc291bmQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNYW5EYW5jZXIgPSBleHBvcnRzLk1hbkRhbmNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYW5EYW5jZXIoZGFuY2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hbkRhbmNlcik7XG5cbiAgICAgICAgdGhpcy5kYW5jZSA9IGRhbmNlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNYW5EYW5jZXIsIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFuY2Uuc3RhcnREYW5jZUZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYW5jZS5zdG9wRGFuY2VGaWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1hbkRhbmNlcjtcbn0oKTtcblxudmFyIFdvbWFuRGFuY2VyID0gZXhwb3J0cy5Xb21hbkRhbmNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXb21hbkRhbmNlcihkYW5jZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV29tYW5EYW5jZXIpO1xuXG4gICAgICAgIHRoaXMuZGFuY2UgPSBkYW5jZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV29tYW5EYW5jZXIsIFt7XG4gICAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFuY2Uuc3RhcnREYW5jZUZpbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJwYXVzZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYW5jZS5zdG9wRGFuY2VGaWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdvbWFuRGFuY2VyO1xufSgpO1xuXG52YXIgTWFuU2luZ2VyID0gZXhwb3J0cy5NYW5TaW5nZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFuU2luZ2VyKHNvbmcsIHN0YXJ0U2luZ2luZ0ZpbGUsIHN0b3BTaW5naW5nRmlsZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFuU2luZ2VyKTtcblxuICAgICAgICB0aGlzLnNvbmcgPSBzb25nO1xuICAgICAgICB0aGlzLnN0YXJ0U2luZ2luZ0ZpbGUgPSBzdGFydFNpbmdpbmdGaWxlO1xuICAgICAgICB0aGlzLnN0b3BTaW5naW5nRmlsZSA9IHN0b3BTaW5naW5nRmlsZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWFuU2luZ2VyLCBbe1xuICAgICAgICBrZXk6IFwicGxheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUubG9vcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydFNpbmdpbmdGaWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLnBhdXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wU2luZ2luZ0ZpbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWFuU2luZ2VyO1xufSgpO1xuXG52YXIgV29tYW5TaW5nZXIgPSBleHBvcnRzLldvbWFuU2luZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvbWFuU2luZ2VyKHNvbmcsIHN0YXJ0U2luZ2luZ0ZpbGUsIHN0b3BTaW5naW5nRmlsZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV29tYW5TaW5nZXIpO1xuXG4gICAgICAgIHRoaXMuc29uZyA9IHNvbmc7XG4gICAgICAgIHRoaXMuc3RhcnRTaW5naW5nRmlsZSA9IHN0YXJ0U2luZ2luZ0ZpbGU7XG4gICAgICAgIHRoaXMuc3RvcFNpbmdpbmdGaWxlID0gc3RvcFNpbmdpbmdGaWxlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXb21hblNpbmdlciwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbmcuc29uZ0ZpbGUucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5zb25nLnNvbmdGaWxlLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTaW5naW5nRmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29uZy5zb25nRmlsZS5wYXVzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcFNpbmdpbmdGaWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdvbWFuU2luZ2VyO1xufSgpO1xuXG52YXIgTXVzaWNpYW4gPSBleHBvcnRzLk11c2ljaWFuID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE11c2ljaWFuKGluc3RydW1lbnQsIHN0YXJ0UGxheUZpbGUsIHN0b3BQbGF5RmlsZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTXVzaWNpYW4pO1xuXG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudCA9IGluc3RydW1lbnQ7XG4gICAgICAgIHRoaXMuc3RhcnRQbGF5RmlsZSA9IHN0YXJ0UGxheUZpbGU7XG4gICAgICAgIHRoaXMuc3RvcFBsYXlGaWxlID0gc3RvcFBsYXlGaWxlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNdXNpY2lhbiwgW3tcbiAgICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnQuc291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50LnNvdW5kLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRQbGF5RmlsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudC5zb3VuZC5wYXVzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcFBsYXlGaWxlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE11c2ljaWFuO1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNvbmcgPSBleHBvcnRzLlNvbmcgPSBmdW5jdGlvbiBTb25nKHNvbmdGaWxlKSB7XG4gICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29uZyk7XG5cbiAgIHRoaXMuc29uZ0ZpbGUgPSBuZXcgQXVkaW8oKTtcbiAgIHRoaXMuc29uZ0ZpbGUuc3JjID0gc29uZ0ZpbGU7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9CdXR0b25zID0gcmVxdWlyZSgnLi9CdXR0b25zLmpzJyk7XG5cbnZhciBfRGFuY2luZyA9IHJlcXVpcmUoJy4vRGFuY2luZy5qcycpO1xuXG52YXIgX0luc3RydW1lbnQgPSByZXF1aXJlKCcuL0luc3RydW1lbnQuanMnKTtcblxudmFyIF9NZW1iZXIgPSByZXF1aXJlKCcuL01lbWJlci5qcycpO1xuXG52YXIgX1NvbmcgPSByZXF1aXJlKCcuL1NvbmcuanMnKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCdjb25zdGFudHMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIG1hbkRhbmNlID0gbmV3IF9EYW5jaW5nLkRhbmNlKCd1cmwoJyArIFwiaW1nL2dpZi9tYW5EYW5jZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJpbWcvc3RvcEdpZi9tYW5EYW5jZS5qcGdcIiArICcpJyk7XG52YXIgd29tYW5EYW5jZSA9IG5ldyBfRGFuY2luZy5EYW5jZSgndXJsKCcgKyBcImltZy9naWYvd29tYW5EYW5jZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJpbWcvc3RvcEdpZi93b21hbkRhbmNlLmpwZ1wiICsgJyknKTsgLy/RgdC+0LfQtNCw0L3RiyDRgtCw0L3RhtGLXG5cbnZhciBtYW5Tb25nID0gbmV3IF9Tb25nLlNvbmcoJ211c2ljL21hbnNvbmcubXAzJyk7XG52YXIgd29tYW5Tb25nID0gbmV3IF9Tb25nLlNvbmcoJ211c2ljL3dvbXNvbmcubXAzJyk7IC8vINGB0L7Qt9C00LDQvdGLINC/0LXRgdC90LhcblxuLy/RgdC80LXQvdC40YLRjCDQvNGD0LfRi9C60YMgXG52YXIgYWNjb3JkZW9uID0gbmV3IF9JbnN0cnVtZW50LktleWJvYXJkSW5zdHJ1bWVudCgnbXVzaWMvYWNjb3JkZW9uLm1wMycpO1xudmFyIHN5bnRoZXNpemVyID0gbmV3IF9JbnN0cnVtZW50LktleWJvYXJkSW5zdHJ1bWVudCgnbXVzaWMvc3ludGhlc2l6ZXIubXAzJyk7XG52YXIgYmFzcyA9IG5ldyBfSW5zdHJ1bWVudC5QZXJjdXNzaW9uSW5zdHJ1bWVudCgnbXVzaWMvYmFzcy5tcDMnKTtcbnZhciBkYXZ1bCA9IG5ldyBfSW5zdHJ1bWVudC5QZXJjdXNzaW9uSW5zdHJ1bWVudCgnbXVzaWMvZGF2dWwubXAzJyk7XG52YXIgZ3VpdGFyID0gbmV3IF9JbnN0cnVtZW50LlN0cmluZ0luc3RydW1ldCgnbXVzaWMvZ3VpdGFyLm1wMycpO1xudmFyIHNheiA9IG5ldyBfSW5zdHJ1bWVudC5TdHJpbmdJbnN0cnVtZXQoJ211c2ljL3Nhei5tcDMnKTtcbnZhciBwaXBlID0gbmV3IF9JbnN0cnVtZW50LldpbmRJbnN0cnVtZW50KCdtdXNpYy9waXBlLm1wMycpO1xudmFyIHNheCA9IG5ldyBfSW5zdHJ1bWVudC5XaW5kSW5zdHJ1bWVudCgnbXVzaWMvc2F4Lm1wMycpO1xudmFyIHZpb2xpbiA9IG5ldyBfSW5zdHJ1bWVudC5Cb3dJbnN0cnVtZW50KCdtdXNpYy92aW9saW4ubXAzJyk7IC8vINGB0L7Qt9C00LDQvdGLINC40L3RgdGC0YDRg9C80LXQvdGC0YtcblxudmFyIHdvbWFuRGFuY2VyID0gbmV3IF9NZW1iZXIuV29tYW5EYW5jZXIod29tYW5EYW5jZSk7XG52YXIgbWFuRGFuY2VyID0gbmV3IF9NZW1iZXIuTWFuRGFuY2VyKG1hbkRhbmNlKTsgLy/RgdC+0LfQtNCw0L3Ri9C1INGC0LDQvdGG0L7RgNGLXG5cbnZhciB3b21hblNpbmdlciA9IG5ldyBfTWVtYmVyLldvbWFuU2luZ2VyKHdvbWFuU29uZywgJ3VybCgnICsgXCJpbWcvZ2lmL3dvbWFuVm9pY2UuZ2lmXCIgKyAnKScsICd1cmwoJyArIFwiaW1nL3N0b3BHaWYvd29tYW5Wb2ljZS5qcGdcIiArICcpJyk7XG52YXIgbWFuU2luZ2VyID0gbmV3IF9NZW1iZXIuTWFuU2luZ2VyKG1hblNvbmcsICd1cmwoJyArIFwiaW1nL2dpZi9tYW5Wb2ljZS5naWZcIiArICcpJywgJ3VybCgnICsgXCJpbWcvc3RvcEdpZi9tYW5Wb2ljZS5qcGdcIiArICcpJyk7IC8vINGB0L7Qt9C00LDQvdGLINC/0LXQstGG0YtcblxudmFyIGFjY29yZGVvblBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKGFjY29yZGVvbiwgJ3VybCgnICsgXCJpbWcvZ2lmL2FjY29yZGlvbi5naWZcIiArICcpJywgJ3VybCgnICsgXCJpbWcvc3RvcEdpZi9hY2NvcmRpb24uanBnXCIgKyAnKScpO1xudmFyIHN5bnRoZXNpemVyUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oc3ludGhlc2l6ZXIsICd1cmwoJyArIFwiaW1nL2dpZi9zeW50aGVzaXplci5naWZcIiArICcpJywgJ3VybCgnICsgXCJpbWcvc3RvcEdpZi9zeW50aGVzaXplci5qcGdcIiArICcpJyk7XG52YXIgYmFzc1BsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKGJhc3MsICd1cmwoJyArIFwiaW1nL2dpZi9iYXNzLmdpZlwiICsgJyknLCAndXJsKCcgKyBcImltZy9zdG9wR2lmL2Jhc3MuanBnXCIgKyAnKScpO1xudmFyIGRhdnVsUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oZGF2dWwsICd1cmwoJyArIFwiaW1nL2dpZi9kYXZ1bC5naWZcIiArICcpJywgJ3VybCgnICsgXCJpbWcvc3RvcEdpZi9kYXZ1bC5qcGdcIiArICcpJyk7XG52YXIgZ3VpdGFyUGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oZ3VpdGFyLCAndXJsKCcgKyBcImltZy9naWYvZ3VpdGFyLmdpZlwiICsgJyknLCAndXJsKCcgKyBcImltZy9zdG9wR2lmL2d1aXRhci5qcGdcIiArICcpJyk7XG52YXIgc2F6UGxheWVyID0gbmV3IF9NZW1iZXIuTXVzaWNpYW4oc2F6LCAndXJsKCcgKyBcImltZy9naWYvc2F6LmdpZlwiICsgJyknLCAndXJsKCcgKyBcImltZy9zdG9wR2lmL3Nhei5qcGdcIiArICcpJyk7XG52YXIgcGlwZVBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHBpcGUsICd1cmwoJyArIFwiaW1nL2dpZi9waXBlLmdpZlwiICsgJyknLCAndXJsKCcgKyBcImltZy9zdG9wR2lmL3BpcGUuanBnXCIgKyAnKScpO1xudmFyIHNheFBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHNheCwgJ3VybCgnICsgXCJpbWcvZ2lmL3NheC5naWZcIiArICcpJywgJ3VybCgnICsgXCJpbWcvc3RvcEdpZi9zYXguanBnXCIgKyAnKScpO1xudmFyIHZpb2xpblBsYXllciA9IG5ldyBfTWVtYmVyLk11c2ljaWFuKHZpb2xpbiwgJ3VybCgnICsgXCJpbWcvZ2lmL3Zpb2xpbi5naWZcIiArICcpJywgJ3VybCgnICsgXCJpbWcvc3RvcEdpZi92aW9saW4uanBnXCIgKyAnKScpOyAvLyDRgdC+0LfQtNCw0L3RiyDQu9GO0LTQuCDQuNCz0YDQsNGO0YnQuNC1INC90LAg0LjQvdGB0YLRgNGD0LzQtdC90YLQsNGFXG5cbnZhciBhcnIgPSBbXTtcbnZhciBidXR0b25zID0gbmV3IF9CdXR0b25zLkJ1dHRvbnMoKTtcbi8v0LrQu9Cw0YHRgSDQtNGA0LDQs9C10L3QtNGA0L7Qv9CwXG5cbnZhciBEcmFnQW5kRHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEcmFnQW5kRHJvcCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdBbmREcm9wKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRHJhZ0FuZERyb3AsIFt7XG4gICAgICAgIGtleTogJ2hhbmRsZURyYWdTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgdGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZURyYWdFbnRlckxlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZURyYWdFbnRlckxlYXZlKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gXCJkcmFnZW50ZXJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJkcmFnLWVudGVyXCI7XG4gICAgICAgICAgICAgICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgICAgIHZhciBkcmFnZ2VkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkSWQpO1xuICAgICAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICcxMHB4JztcbiAgICAgICAgICAgICAgICBkcmFnZ2VkRWwuc3R5bGUuaGVpZ2h0ID0gJzEwcHgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZU92ZXJEcm9wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU92ZXJEcm9wKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKGUudHlwZSAhPSBcImRyb3BcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnZ2VkRWwucGFyZW50Tm9kZSA9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcblxuICAgICAgICAgICAgLy/Rg9Cx0YDQsNGC0Ywg0L/QvtGC0L7QvCAgd2lkdGggYW5kIGhlaWdodFxuICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS5oZWlnaHQgPSAnMjAwcHgnO1xuICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmZsb2F0ID0gJ2luaGVyaXQnO1xuICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG1lbWJlcl9jb250cm9sLmdldEljb24oZHJhZ2dlZElkKTtcblxuICAgICAgICAgICAgYnV0dG9ucy5jbG9zZUJ1dHRvbnMoZHJhZ2dlZElkKTtcbiAgICAgICAgICAgIHZhciBkZWwgPSBhcnIuaW5kZXhPZihkcmFnZ2VkSWQpO1xuICAgICAgICAgICAgYXJyLnNwbGljZShkZWwsIDEpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVPdmVyRHJvcDInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlT3ZlckRyb3AyKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKGFyci5sZW5ndGggPiA2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS50eXBlICE9IFwiZHJvcFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvL01lYW5zIGZ1bmN0aW9uIHdpbGwgZXhpdCBpZiBubyBcImRyb3BcIiBldmVudCBpcyBmaXJlZC5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRyYWdnZWRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgdmFyIGRyYWdnZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRJZCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnZ2VkRWwucGFyZW50Tm9kZSA9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy9ub3RlOiB3aGVuIGEgcmV0dXJuIGlzIHJlYWNoZWQgYSBmdW5jdGlvbiBleGl0cy5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dlZEVsKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJcIjtcblxuICAgICAgICAgICAgLy/Qt9Cw0LTQsNGC0Ywg0YDQsNC30LzQtdGAINCz0LjRhNC+0LpcbiAgICAgICAgICAgIGRyYWdnZWRFbC5zdHlsZS53aWR0aCA9ICcyMDBweCc7XG4gICAgICAgICAgICBkcmFnZ2VkRWwuc3R5bGUuaGVpZ2h0ID0gJzI3M3B4JztcblxuICAgICAgICAgICAgZHJhZ2dlZEVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG1lbWJlcl9jb250cm9sLmFjdGl2YXRpb24oZHJhZ2dlZElkKTtcblxuICAgICAgICAgICAgYnV0dG9ucy5vcGVuQnV0dG9ucyhkcmFnZ2VkSWQpO1xuXG4gICAgICAgICAgICBhcnIucHVzaChkcmFnZ2VkSWQpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERyYWdBbmREcm9wO1xufSgpO1xuXG52YXIgZHJhZ2dhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RyYWdnYWJsZV0nKTtcbnZhciB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcC10YXJnZXRdJyk7XG52YXIgdGFyZ2V0czIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wLXRhcmdldDJdJyk7XG52YXIgZHJhZ19uX2Ryb3AgPSBuZXcgRHJhZ0FuZERyb3AoKTtcblxuLy/Qt9Cw0LTQsNC10Lwg0LTRgNC+0L/RiyDQvdCwINGN0LvQtdC80LXQvdGC0YtcbihmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkcmFnZ2FibGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZHJhZ2dhYmxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ19uX2Ryb3AuaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGFyZ2V0cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdfbl9kcm9wLmhhbmRsZU92ZXJEcm9wKTtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJhZ19uX2Ryb3AuaGFuZGxlT3ZlckRyb3ApO1xuICAgICAgICB0YXJnZXRzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGRyYWdfbl9kcm9wLmhhbmRsZURyYWdFbnRlckxlYXZlKTtcbiAgICAgICAgdGFyZ2V0c1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBkcmFnX25fZHJvcC5oYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgfVxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHRhcmdldHMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnX25fZHJvcC5oYW5kbGVPdmVyRHJvcDIpO1xuICAgICAgICB0YXJnZXRzMltfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyYWdfbl9kcm9wLmhhbmRsZU92ZXJEcm9wMik7XG4gICAgICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBkcmFnX25fZHJvcC5oYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgICAgIHRhcmdldHMyW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBkcmFnX25fZHJvcC5oYW5kbGVEcmFnRW50ZXJMZWF2ZSk7XG4gICAgfVxufSkoKTtcblxuLy/QutC70LDRgdGBINC60L7QvdGC0YDQvtC70Y8g0YPRh9Cw0YHRgtC90LjQutCwXG5cbnZhciBNZW1iZXJDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lbWJlckNvbnRyb2woKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW1iZXJDb250cm9sKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWVtYmVyQ29udHJvbCwgW3tcbiAgICAgICAga2V5OiAnYWN0aXZhdGlvbicsXG5cbiAgICAgICAgLy/QsNC60YLQuNCy0LDRhtC40Lgg0YPRh9Cw0YHRgtC90LjQutCwXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhY3RpdmF0aW9uKGRyYWdnZWRJZCkge1xuXG4gICAgICAgICAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYW5EYW5jZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29tYW5EYW5jZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFuU2luZ2VyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY29yZGVvblBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiYXNzUGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1aXRhclBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2aW9saW5QbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNheFBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDEyJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2F6UGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL9C+0YLQutC70Y7Rh9Cw0LXRgiDRg9GH0LDRgdGC0L3QuNC60LBcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGF1c2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICBpZiAoJ2JveDEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYW5EYW5jZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvbWFuRGFuY2VyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYW5TaW5nZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDUnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2NvcmRlb25QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdnVsUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDgnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBndWl0YXJQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94OScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpcGVQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzYXhQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTInID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzYXpQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTMnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzeW50aGVzaXplclBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v0L/QvtC70YPRh9C40YLRjCDQuNC60L7QvdC60YMg0LLQvNC10YHRgtC+INGD0YfQsNGB0L3QuNC60LBcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SWNvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJY29uKGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgaWYgKCdib3gxJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29IYWxwYWgucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDInID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb0Zlcy5wbmdcIiArICcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MycgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgbWFuU2luZ2VyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTWljcm9ILnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3g0JyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICB3b21hblNpbmdlci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb01pY3JvRi5wbmdcIiArICcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94NScgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgYWNjb3JkZW9uUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNBY2NvcmRlb24ucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDYnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIGJhc3NQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VybCgnICsgXCJpY29ucy9pY29NdXNpY0Jhc3MucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDcnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIGRhdnVsUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNEYXZ1bC5wbmdcIiArICcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94OCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgZ3VpdGFyUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNHdWl0YXIucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDknID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHZpb2xpblBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljVmlvbGluLnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMCcgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgcGlwZVBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljUGlwZS5wbmdcIiArICcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnYm94MTEnID09IGRyYWdnZWRJZCkge1xuICAgICAgICAgICAgICAgIHNheFBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU2F4LnBuZ1wiICsgJyknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdib3gxMicgPT0gZHJhZ2dlZElkKSB7XG4gICAgICAgICAgICAgICAgc2F6UGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoJyArIFwiaWNvbnMvaWNvTXVzaWNTYXoucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2JveDEzJyA9PSBkcmFnZ2VkSWQpIHtcbiAgICAgICAgICAgICAgICBzeW50aGVzaXplclBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAndXJsKCcgKyBcImljb25zL2ljb011c2ljU3ludGhlc2l6ZXIucG5nXCIgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWVtYmVyQ29udHJvbDtcbn0oKTtcblxudmFyIG1lbWJlcl9jb250cm9sID0gbmV3IE1lbWJlckNvbnRyb2woKTtcblxuLy/QvtCx0YDQsNCx0L7RgtGH0LjQutC4INC60L3QvtC/0L7QuiBzb2xvKG9uLW9mZikgYW5kIHBsYXkob24tb2ZmKVxuXG52YXIgQnV0dG9uSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCdXR0b25IYW5kbGVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnV0dG9uSGFuZGxlcik7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJ1dHRvbkhhbmRsZXIsIFt7XG4gICAgICAgIGtleTogJ2FjdGl2YXRlU29sbycsXG5cblxuICAgICAgICAvLyDQktC10YjQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsCDQvdCwIHNvbG8gINC60LDQttC00L7Qs9C+INGD0YfQsNGB0YLQvdC40LrQsFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGVTb2xvKCkge1xuICAgICAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Tb2xvT24nICsgaSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbUluZGV4ID0gYXJyLmluZGV4T2YoJ2JveCcgKyBpKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT0gZWxlbUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBtZW1iZXJfY29udHJvbC5wYXVzZShhcnJbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBtZW1iZXJfY29udHJvbC5hY3RpdmF0aW9uKGFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAxMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2xvb3AoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlYWN0aXZhdGVTb2xvJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlYWN0aXZhdGVTb2xvKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gMTM7IGkrKykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Tb2xvT2ZmJyArIGkpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG1lbWJlcl9jb250cm9sLmFjdGl2YXRpb24oYXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCS0LXRiNCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC90LAgcGxheSBhbmQgcGF1c2UgINC60LDQttC00L7Qs9C+INGD0YfQsNGB0YLQvdC40LrQsFxuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwYXVzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHZhciBfbG9vcDIgPSBmdW5jdGlvbiBfbG9vcDIoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGF1c2UnICsgaW5kZXgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1JbmRleCA9IGFyci5pbmRleE9mKCdib3gnICsgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycltlbGVtSW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBtZW1iZXJfY29udHJvbC5wYXVzZShhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgX2xvb3AyKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGxheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdmFyIF9sb29wMyA9IGZ1bmN0aW9uIF9sb29wMyhpbmRleCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5QbGF5JyArIGluZGV4KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtSW5kZXggPSBhcnIuaW5kZXhPZignYm94JyArIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbWVtYmVyX2NvbnRyb2wuYWN0aXZhdGlvbihhcnJbZWxlbUluZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDw9IDEzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgX2xvb3AzKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCdXR0b25IYW5kbGVyO1xufSgpO1xuXG52YXIgYnV0dG9uX2hhbmRsZXIgPSBuZXcgQnV0dG9uSGFuZGxlcigpO1xuYnV0dG9uX2hhbmRsZXIuYWN0aXZhdGVTb2xvKCk7XG5idXR0b25faGFuZGxlci5kZWFjdGl2YXRlU29sbygpO1xuYnV0dG9uX2hhbmRsZXIucGF1c2UoKTtcbmJ1dHRvbl9oYW5kbGVyLnBsYXkoKTsiXX0=
