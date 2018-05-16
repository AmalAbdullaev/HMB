'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//solo and play кнопки чтоб появлялись и исчезали при дропах

var ButtonsState = exports.ButtonsState = function () {
    function ButtonsState() {
        _classCallCheck(this, ButtonsState);
    }

    _createClass(ButtonsState, [{
        key: 'visible',
        value: function visible(draggedId) {
            for (var index = 1; index <= 13; index++) {
                if ('box' + index == draggedId) {
                    document.getElementById('btnBlock' + index).style.display = 'inline-flex';
                }
            }
        }
    }, {
        key: 'invisible',
        value: function invisible(draggedId) {
            for (var index = 1; index <= 13; index++) {
                if ('box' + index == draggedId) {
                    document.getElementById('btnBlock' + index).style.display = 'none';
                }
            }
        }
    }]);

    return ButtonsState;
}();