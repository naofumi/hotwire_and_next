import {Controller} from "/hotwire/javascript/stimulus.js"
import {get} from "/hotwire/javascript/requestjs.js"

export default class extends Controller {
  static targets = ["sendable"]
  static values = {
    action: {type: String, default: document.location.pathname}
  }

  connect() {
  }

  send() {
    get(this.#actionUrl(), {responseKind: "turbo-stream"})
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
