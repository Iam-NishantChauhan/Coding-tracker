import React from 'react'
import ModeToggle from './ModeToggle'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-background text-foreground border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex gap-x-4">
        <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
      </ul>
      <ModeToggle />
      <button className="border hover:bg-background text-foreground font-bold py-2 px-4 rounded duration-300 transition-colors  ">
          Sign In
      </button>
    </nav>
  )
}

export default Navbar