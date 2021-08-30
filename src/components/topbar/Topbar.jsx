import React from 'react'
import './topbar.css'
import Logo from '../../images/opendoor logo transparent.png'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          {/* <img src={Logo} alt='logo' className='logo' /> */}

          <div className='donut'></div>
          <span className='logoName'>OpenDoor</span>
        </div>
        <div className='topCenter'>
          <ul className='centerContent'>
            <li className='centerItems'>Gift Card</li>
            <li className='centerItems'>Top Cities</li>
            <li className='centerItems'>Help</li>
            <li className='centerItems'>Blog</li>
          </ul>
        </div>
        <div className='topRight'>
          <ul className='rightContent'>
            <li className='signin'>Sign In</li>
            <li className='signup'>Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Topbar
