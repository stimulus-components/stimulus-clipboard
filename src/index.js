import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['button', 'source']
  static values = {
    successDuration: Number
  }

  connect () {
    if (!this.hasButtonTarget) return

    this.originalText = this.buttonTarget.innerText
    this.successDuration = this.successDurationValue || 2000
  }

  copy (event) {
    event.preventDefault()

    this.sourceTarget.select()
    document.execCommand('copy')

    this.copied()
  }

  copied () {
    if (!this.hasButtonTarget) return

    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    this.buttonTarget.innerText = this.data.get('successContent')

    this.timeout = setTimeout(() => {
      this.buttonTarget.innerText = this.originalText
    }, this.successDuration)
  }
}
