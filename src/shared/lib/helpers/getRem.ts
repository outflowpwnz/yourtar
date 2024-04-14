export const getRem = (px: number | string): number => {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
  const pixelValue = typeof px === 'number' ? px : parseFloat(px)

  if (isNaN(pixelValue) || isNaN(rootFontSize)) {
    throw new Error('Недопустимые входные данные или невозможно получить размер корневого шрифта.')
  }

  return pixelValue / rootFontSize
}
