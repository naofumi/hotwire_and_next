import {Controller} from "/hotwire/javascript/stimulus.js"

export default class extends Controller {
  static values = {"selector": String}
  static classes = ["label"]

  add() {
    const labelable = document.querySelector(this.selectorValue)
    labelable.classList.add(this.labelClass)
  }

  remove() {
    const labelable = document.querySelector(this.selectorValue)
    labelable.classList.remove(this.labelClass)
  }
}
