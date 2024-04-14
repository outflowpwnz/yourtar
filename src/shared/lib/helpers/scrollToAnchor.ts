import { getPx } from "./getPx"

export const scrollToAnchor = (element: HTMLElement) => {
  const bodyRect = document.body.getBoundingClientRect()
  const elementRect = element.getBoundingClientRect()
  const topPosition = elementRect.top - bodyRect.top
  const offset = getPx(12)
  if (offset) {
    window.scrollTo({ top: topPosition - offset, behavior: 'smooth' })
  }
}