import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <nav className="bg-gray-800 relative flex flex-wrap items-center justify-between px-2 py-3 bg-blueGray-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/"
            >
              <i className="fab fa-github text-lg leading-lg animate-pulse text-white opacity-75 m-2"></i>
              COVI-INFO_ANND
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <i className="fas fa-home text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/Hospital"
                >
                  <i className="fas fa-notes-medical text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Hospital</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/Medicines"
                >
                  <i className="fas fa-notes-medical text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Medicines</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/Food"
                >
                  <i className="fas fa-utensils text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Food</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/juice"
                >
                  <i className="fas fa-wine-glass-alt text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">juice</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/Oxygencylinder"
                >
                  <i className="fas fa-ambulance text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Oxygen cylinder</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/Contectus"
                >
                  <i className="fas fa-mobile-alt text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Contact Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/Moreinfo"
                >
                  <i className="fas fa-book text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">More Info</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
