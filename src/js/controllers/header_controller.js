import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  static targets = ["menu", "close", "avatar", "submenu"]

  connect () {
    if(window.innerWidth <= 768) {
      this.submenuTarget.classList.toggle("hidden");
    }
  }
  
  toggleSubmenu(e) {
    e.preventDefault();
    this.submenuTarget.classList.toggle("hidden");
  }

  toggleMenu() {
    this.menuTarget.classList.toggle("hidden");
    this.closeTarget.classList.toggle("hidden");
    this.avatarTarget.classList.toggle("hidden");
  }
}
