import { useEffect } from "react"

export const useVH = () => {
  const calcVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    window.addEventListener('resize', calcVH)
    return () => {
      window.removeEventListener('resize', calcVH)
    }
  }, [])
}