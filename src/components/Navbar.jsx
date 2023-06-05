import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a
              className='nav-link'
              data-widget='pushmenu'
              href='#'
              role='button'
            >
              <i className='fas fa-bars'></i>
            </a>
          </li>

          <li className='nav-item d-none d-sm-inline-block'>
            <Link to='/' className='nav-link'>
              <span className='fas fa-home'></span> User
            </Link>
          </li>
          <li className='nav-item d-none d-sm-inline-block'>
            <Link to='/users' className='nav-link'>
              <span className='fas fa-users'></span> User
            </Link>
          </li>
          <li className='nav-item d-none d-sm-inline-block'>
            <Link to='/roles' className='nav-link'>
              <span className='fas fa-key'></span> Role
            </Link>
          </li>
        </ul>

        <ul className='navbar-nav ml-auto'>
          <li className='nav-item mx-1'>
            <button className='btn btn-warning'>Login</button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-info'>Register</button>
          </li>

          <li className='nav-item dropdown '>
            <a className='nav-link' data-toggle='dropdown' href='#'>
              {/* <div className='media'> */}
              <img
                src='../../dist/img/user1-128x128.jpg'
                alt='User Avatar'
                className='img-size-50 mr-3 img-circle'
                style={{ marginTop: '-14px' }}
              />
              {/* </div> */}
            </a>
            <div className='dropdown-menu dropdown-menu-sm dropdown-menu-left'>
              <a href='#' className='dropdown-item text-center'>
                Logout
              </a>
            </div>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              data-widget='fullscreen'
              href='#'
              role='button'
            >
              <i className='fas fa-expand-arrows-alt'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              data-widget='control-sidebar'
              data-slide='true'
              href='#'
              role='button'
            >
              <i className='fas fa-th-large'></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
