import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  hasButtonTarget: boolean
  originalContent: string
  successDurationValue: number
  timeout: number
  buttonTarget: HTMLElement
  sourceTarget: HTMLInputElement

  static targets = ['button', 'source']
  static values = {
    successDuration: {
      type: Number,
      default: 2000
    }
  }

  connect (): void {
    if (!this.hasButtonTarget) return

    this.originalContent = this.buttonTarget.innerHTML
  }

  copy (event: Event): void {
    event.preventDefault()

    if("input" == this.sourceTarget.tagName) {
      navigator.clipboard.writeText(this.sourceTarget.value).then(() => this.copied())
    } else {
      navigator.clipboard.writeText(this.sourceTarget.innerText).then(() => this.copied())
    }
  }

  copied (): void {
    if (!this.hasButtonTarget) return

    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    this.buttonTarget.innerText = this.data.get('successContent')

    this.timeout = setTimeout(() => {
      this.buttonTarget.innerHTML = this.originalContent
    }, this.successDurationValue)
  }
}
