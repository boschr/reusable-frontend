import Cookie from '@bit/boschr.js.utils.cookie';

export default class CookieBanner {
  constructor(settings = {}) {
    const defaultSettings = {
      selector: '.js-cookie',
      cookieDomain: '',
      hideClass: 'd-none',
      storageKey: 'cookiePreferences',
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
    const nlCookiePreferences = document.querySelectorAll('[data-cookie-preferences], [href="#cookie-preferences"]');
    [...nlCookiePreferences].forEach((el) => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        this.show();
      });
    });

    this.setState();
  }

  show() {
    if (this.el) {
      this.el.classList.remove(this.settings.hideClass);
    }
  }

  hide () {
    if (this.el) {
      this.el.classList.add(this.settings.hideClass);
    }
  }

  setState() {
    const cookie = Cookie.get(this.settings.storageKey);

    if (!cookie) {
      // Show banner on load if preferences are not known
      this.show();
    } else if (this.nlOptions) {
      // Check options on load if preferences are know
      const checked = cookie.split(' ');
      [...this.nlOptions].forEach((_option) => {
        const option = _option;
        option.checked = checked.indexOf(option.value) > -1;
      });
    }
  }

  onSubmit(event) {
    event.preventDefault();

    const values = [...this.nlOptions].filter(input => input.checked).map(input => input.value);

    Cookie.set(this.settings.storageKey, values.join(' '), { domain: this.settings.cookieDomain });
    location.reload();
  }
}
