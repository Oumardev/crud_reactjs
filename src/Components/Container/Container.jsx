import React from 'react'
import NavBar from '../NavBar/NavBar'

export default function Container({children}) {
  return (
    <React.Fragment>
        <NavBar />
        <div className="container">
            {children}
        </div>
    </React.Fragment>
  )
}
