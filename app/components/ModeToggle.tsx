'use client'
import { useTheme } from "next-themes"
import {useState, useEffect} from 'react'

const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    // Avoid hydration mismatch by waiting until mounted
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="dark:hover:bg-transparent dark:hover:bg-transparent"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}

export default ModeToggle