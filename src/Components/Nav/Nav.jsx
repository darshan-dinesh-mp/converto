import React from 'react'
import n from "./Nav.module.css"

function Nav() {
  return (
    <div>
        <nav className={`${n.nav} absolute text-white font-bold`}>
          <h3>CONVERTO</h3>
        </nav>
    </div>
  )
}

export default Nav