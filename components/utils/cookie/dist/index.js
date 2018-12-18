'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookie = function () {
  function Cookie() {
    _classCallCheck(this, Cookie);
  }

  _createClass(Cookie, null, [{
    key: 'set',
    value: function set(cookieName, cvalue) {
      var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var defaultSettings = {
        exdays: 365,
        path: '/',
        domain: ''
      };
      this.settings = Object.assign({}, defaultSettings, settings);

      var d = new Date();
      d.setTime(d.getTime() + this.settings.exdays * 24 * 60 * 60 * 1000);
      var cookieValue = cookieName + '=' + cvalue + ';expires=' + d.toUTCString() + ';path=' + this.settings.path;
      cookieValue += this.settings.domain.length > 0 ? ';domain=' + this.settings.domain : '';

      document.cookie = cookieValue;
    }
  }, {
    key: 'get',
    value: function get(cookieName) {
      var name = cookieName + '=';
      var ca = document.cookie.split(';');

      for (var i = 0; i < ca.length; i += 1) {
        var c = ca[i].trim();

        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }

      return false;
    }
  }, {
    key: 'delete',
    value: function _delete(cookieName) {
      if (Cookie.get(cookieName)) {
        Cookie.set(cookieName, '', -1);
      }
    }
  }]);

  return Cookie;
}();

exports.default = Cookie;

//# sourceMappingURL=index.js.map