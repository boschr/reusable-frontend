export default class Cookie {
  static set(cookieName, cvalue, settings = {}) {
    const defaultSettings = {
      exdays: 365,
      path: '/',
      domain: '',
    };
    this.settings = Object.assign({}, defaultSettings, settings);

    const d = new Date();
    d.setTime(d.getTime() + (this.settings.exdays * 24 * 60 * 60 * 1000));
    let cookieValue = `${cookieName}=${cvalue};expires=${d.toUTCString()};path=${this.settings.path}`;
    cookieValue += this.settings.domain.length > 0 ? `;domain=${this.settings.domain}` : '';

    document.cookie = cookieValue;
  }

  static get(cookieName) {
    const name = `${cookieName}=`;
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i += 1) {
      const c = ca[i].trim();

      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }

    return false;
  }

  static delete(cookieName) {
    if (Cookie.get(cookieName)) {
      Cookie.set(cookieName, '', -1);
    }
  }
}
