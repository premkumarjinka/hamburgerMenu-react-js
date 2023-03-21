// Write your code here
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = () => (
  <div className="Header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          className="trigger-button"
          type="button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="Menu-icon" />
        </button>
      }
      className="popup-container"
    >
      {close => (
        <div className="popup-content">
          <ul className="conatiner1">
            <li className="Home-container">
              <AiFillHome className="Home-icon" />
              <Link to="/">
                <p className="description">Home</p>
              </Link>
            </li>
            <li className="About-container">
              <BsInfoCircleFill className="About-icon" />
              <Link to="/about">
                <p className="description">About</p>
              </Link>
            </li>
          </ul>
          <div>
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
