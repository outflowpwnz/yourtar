export const useSleep = (time = 0) => {
  return async () => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }
}