import { useEffect, useMemo, useState } from "react"

export const useBreakpoints = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  // const MOBILE_BREAKPOINT = 375 
  const TABLET_BREAKPOINT = 768
  const DESKTOP_BREAKPOINT = 1440

  useEffect(() => {
    const onResize = () => {
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.addEventListener('resize', onResize)
    }
  }, [])


  const isMobile = useMemo(() => screenSize < TABLET_BREAKPOINT, [screenSize])
  const isTablet = useMemo(() => screenSize < DESKTOP_BREAKPOINT && !isMobile, [screenSize, isMobile])
  const isDesktop = useMemo(() => screenSize >= DESKTOP_BREAKPOINT, [screenSize])

  return {
    isDesktop,
    isMobile,
    isTablet
  }
}