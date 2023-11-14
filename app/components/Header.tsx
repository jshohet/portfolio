import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-row justify-evenly shadow-lg h-24 items-center">
        <a href="#home">
          <h2>Home</h2>
        </a>
        <a href="#projects">
          <h2>Projects</h2>
        </a>
        <a href="#about">
          <h2>About</h2>
        </a>
        <a href="#coursework">
          <h2>Coursework</h2>
        </a>
    </div>
  )
}

export default Header