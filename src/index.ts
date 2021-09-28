import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  hasButtonTarget: boolean
  originalText: string
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

    this.originalText = this.buttonTarget.innerText
  }

  copy (event: Event): void {
    event.preventDefault()

    this.sourceTarget.select()
    document.execCommand('copy')

    this.copied()
  }

  copied (): void {
    if (!this.hasButtonTarget) return

    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    this.buttonTarget.innerText = this.data.get('successContent')

    this.timeout = setTimeout(() => {
      this.buttonTarget.innerText = this.originalText
    }, this.successDurationValue)
  }
}
