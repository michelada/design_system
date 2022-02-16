import { Controller } from "@hotwired/stimulus"

const SHOW_SIDEBAR = true;

export default class extends Controller {
  static targets = [ "sidebar" ];

  connect(){
    if (SHOW_SIDEBAR) {
      this.sidebarTarget.classList.remove("hidden");
    }
  }
}