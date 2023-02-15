import { useState, useEffect } from 'react'

export function useScrollHandler () {
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollPos, setLastScrollPos] = useState(0)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    if (currentScrollPos < lastScrollPos && isScrolled) {
      setIsScrolled(false)
    } else if (currentScrollPos > lastScrollPos && !isScrolled) {
      setIsScrolled(true)
    }
    setLastScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return [isScrolled, lastScrollPos]
}
