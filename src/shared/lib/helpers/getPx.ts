export const getPx = (rem: number | string): number => {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
  const remValue = typeof rem === 'number' ? rem : parseFloat(rem)

  if (isNaN(remValue) || isNaN(rootFontSize)) {
    throw new Error('Недопустимые входные данные или невозможно получить размер корневого шрифта.')
  }

  return remValue * rootFontSize
}
