import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg'

export default (props) => {
  return (
    <header>
      <a className="app-logo inline-flex mb-5 sm:mb-2" href="/">
        Home
        <Logo className="app-logo-svg" />
      </a>
    </header>
  )
}


