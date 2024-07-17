import {Controller} from "/hotwire/javascript/stimulus.js"
import {FetchRequest} from "/hotwire/javascript/requestjs.js"

export default class extends Controller {
  static targets = ["sendable"]
  static values = {
    action: {type: String, default: document.location.pathname},
    turboFrame: String
  }

  connect() {
    console.log(this.turboFrameValue)
  }

  send() {
    if (this.turboFrameValue) {
      Turbo.visit(this.#actionUrl(), {frame: this.turboFrameValue})
    } else {
      Turbo.visit(this.#actionUrl())
    }
  }

  #actionUrl() {
    return `${this.actionValue}?${this.#queryString()}`
  }

  #queryString() {
    return new URLSearchParams(this.#query()).toString()
  }

  // Returns something like
  // {code: "1", city: "上川郡美瑛町", postal_code: "0710200"}
  #query() {
    return this.sendableTargets.reduce((accum, target) => {
      accum[target.name] = target.value
      return accum
    }, {})
  }
}
