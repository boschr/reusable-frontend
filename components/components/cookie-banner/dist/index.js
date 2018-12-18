'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _boschrJsUtils = require('@bit/boschr.js.utils.cookie');

var _boschrJsUtils2 = _interopRequireDefault(_boschrJsUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CookieBanner = function () {
  function CookieBanner() {
    var _this = this;

    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CookieBanner);

    var defaultSettings = {
      selector: '.js-cookie',
      cookieDomain: '',
      hideClass: 'd-none',
      storageKey: 'cookiePreferences'
    };
    this.settings = Object.assign({}, defaultSettings, settings);
    this.el = document.querySelector(this.settings.selector);

    if (this.el) {
      this.elForm = this.el.querySelector('form');

      if (this.elForm) {
        this.elForm.addEventListener('submit', this.onSubmit.bind(this));
        this.nlOptions = this.elForm.querySelectorAll('[name="cookie_options[]"]');
      }
    }

    // Posibility to modify your cookie preferences
    var nlCookiePreferences = document.querySelectorAll('[data-cookie-preferences], [href="#cookie-preferences"]');
    [].concat(_toConsumableArray(nlCookiePreferences)).forEach(function (el) {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        _this.show();
      });
    });

    this.setState();
  }

  _createClass(CookieBanner, [{
    key: 'show',
    value: function show() {
      if (this.el) {
        this.el.classList.remove(this.settings.hideClass);
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      if (this.el) {
        this.el.classList.add(this.settings.hideClass);
      }
    }
  }, {
    key: 'setState',
    value: function setState() {
      var cookie = _boschrJsUtils2.default.get(this.settings.storageKey);

      if (!cookie) {
        // Show banner on load if preferences are not known
        this.show();
      } else if (this.nlOptions) {
        // Check options on load if preferences are know
        var checked = cookie.split(' ');
        [].concat(_toConsumableArray(this.nlOptions)).forEach(function (_option) {
          var option = _option;
          option.checked = checked.indexOf(option.value) > -1;
        });
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(event) {
      event.preventDefault();

      var values = [].concat(_toConsumableArray(this.nlOptions)).filter(function (input) {
        return input.checked;
      }).map(function (input) {
        return input.value;
      });

      _boschrJsUtils2.default.set(this.settings.storageKey, values.join(' '), { domain: this.settings.cookieDomain });
      location.reload();
    }
  }]);

  return CookieBanner;
}();

exports.default = CookieBanner;

//# sourceMappingURL=index.js.map