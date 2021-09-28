import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  hasButtonTarget: boolean
  originalText: string
  successDuration: number
  successDurationValue: number
  timeout: number
  buttonTarget: HTMLElement
  sourceTarget: HTMLInputElement

  static targets = ['button', 'source']
  static values = {
    successDuration: Number
  }

  connect (): void {
    if (!this.hasButtonTarget) return

    this.originalText = this.buttonTarget.innerText
    this.successDuration = this.successDurationValue || 2000
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
    }, this.successDuration)
  }
}
