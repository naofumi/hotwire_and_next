import {Controller} from "/hotwire/javascript/stimulus.js"

export default class extends Controller {
  static targets = ["popupWindow"]

  showPopup(event) {
    this.hideAllPopups()
    this.popupWindowTarget.classList.remove('hidden')
  }

  hideAllPopups() {
    document.querySelectorAll("[data-js=user-detail-popup]:not(.hidden)")
      .forEach((popup) => popup.classList.add('hidden'))
  }
}
