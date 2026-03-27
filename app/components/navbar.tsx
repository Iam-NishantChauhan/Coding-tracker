import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex gap-x-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="border hover:bg-transparent text-white font-bold py-2 px-4 rounded">
        <a href="#" className="text-white no-underline">
          Sign In
        </a>
      </button>
    </nav>
  )
}

export default Navbar