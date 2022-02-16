import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tab", "content"];

  setCurrentTab() {
    this.tabTargets[this.currentTab].classList.add('active');
    this.contentTargets.forEach((content, i) => {
      content.classList.remove('active');
    });

    this.contentTargets[this.currentTab].classList.add('active');
  }
  
  handleTab (e) {
    this.tabTargets.forEach((tab, i) => {
      tab.classList.remove('active');
      if(tab === e.target) {
        this.currentTab = i;
      }
    });

    this.setCurrentTab();
  }

  connect() {
    if(this.tabTargets.length == 0) {
      return false;
    }

    this.currentTab = 0;
    this.setCurrentTab();
  }
}