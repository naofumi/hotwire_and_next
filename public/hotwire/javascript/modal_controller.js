import {Controller} from "/hotwire/javascript/stimulus.js"

export default class extends Controller {
  static values = {"selector": String}
  static classes = ["opener"]

  connect() {
  }

  open() {
    const modalDialog = document.querySelector(this.selectorValue)
    modalDialog.classList.add(this.openerClass)
  }

  close() {
    console.log(this.openerClass)
    const modalDialog = document.querySelector(this.selectorValue)
    modalDialog.classList.remove(this.openerClass)
  }
}
