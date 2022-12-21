/* eslint-disable linebreak-style */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["changeContent", "update"] }] */
export default class Navigation {
    constructor() {
      this.navs = document.querySelectorAll('[href]');
    }
  //function to navigate on the navigation menu 
    init() {
      this.navs.forEach((nav) => {
        nav.addEventListener('click', (e) => {
          if (e.target.tagName === 'A') {
            this.changeTabs(e);
            this.changeContent(e);
          }
        });
      });
    }
  // Everytime user changes tabs
    changeTabs(e) {
      this.navs.forEach((nav) => nav.classList.remove('active'));
      e.target.classList.add('active');
    }
  // everytime user changes to an active tab then the content must change
    changeContent(e) {
      document.querySelectorAll('.content-box').forEach((item) => {
        item.classList.remove('active');
      });
      const selector = e.target.getAttribute('href');
      const content = document.querySelector(selector);
      content.classList.add('active');
    }
  }