import React from 'react'
import n from "./Nav.module.css"

function Nav() {
  return (
    <div>
      <nav className={`${n.nav} absolute text-white font-bold flex items-center justify-between`}>
        <div className={`${n.imageDiv}`}>
          <img src="/Images/logo.png" alt="Logo" width="100px" />
          <h3>CONVERTO</h3>
        </div>
        <a href="https://drive.usercontent.google.com/download?id=1uC4LNjfzocQlY9TFnI7qPKYMHV24dB45&export=download&authuser=0" target='_blank' className='font-medium text-xl px-2 py-1 md:px-4 md:py-2 border-2 rounded-xl duration-200 hover:bg-white hover:text-black' title='You can always download the latest version from here'>Download App</a>
      </nav>
    </div>
  )
}

export default Nav