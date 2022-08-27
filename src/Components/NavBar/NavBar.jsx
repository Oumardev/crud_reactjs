import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>
      Navbar
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/post'}>
            Post
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/profile'}>
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/comments'}>
            Comments
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
