import React from 'react'

const sidebar = () => {
  return (
    <aside className="w-64 h-screen text-foreground p-4">
      <ul className="space-y-2">
        <li><a href="#" className="block py-2 px-4 hover:text-blue-500 duration-300 transition-colors">Dashboard</a></li>
        <li><a href="#" className="block py-2 px-4 hover:text-blue-500 duration-300 transition-colors">Profile</a></li>
        <li><a href="#" className="block py-2 px-4 hover:text-blue-500 duration-300 transition-colors">Settings</a></li>
        <li><a href="#" className="block py-2 px-4 hover:text-blue-500 duration-300 transition-colors">Logout</a></li>
      </ul>
    </aside>
  )
}

export default sidebar