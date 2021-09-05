import { Controller } from 'stimulus'

export default class extends Controller {
  hasButtonTarget: boolean
  hasCopiedClass: boolean
  originalText: string
  successDuration: number
  successDurationValue: number
  timeout: number
  buttonTarget: HTMLElement
  sourceTarget: HTMLInputElement
  copiedClass: string

  static targets = ['button', 'source']
  static values = {
    successDuration: Number
  }

  static classes = ['copied']

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
    if (this.hasCopiedClass) {
      this.buttonTarget.classList.add(this.copiedClass)
    }

    this.timeout = setTimeout(() => {
      this.buttonTarget.innerText = this.originalText
      if (this.hasCopiedClass) {
        this.buttonTarget.classList.remove(this.copiedClass)
      }
    }, this.successDuration)
  }
}
