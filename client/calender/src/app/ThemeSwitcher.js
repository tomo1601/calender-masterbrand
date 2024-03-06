'use client'
import { useTheme } from "next-themes";
import {useState, useEffect} from 'react'

const ThemeSwitcher = () => {
  const {theme, setTheme} =useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
        The curent theme: {theme}
        <button onClick={()=>setTheme('light')}>Light mode</button>
        <button onClick={()=>setTheme('dark')}>Dark mode</button>
    </div>
  )
}
export default ThemeSwitcher;
