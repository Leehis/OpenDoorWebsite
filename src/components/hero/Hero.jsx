import React from 'react'
import './hero.css'
import deliveryImage from '../../images/undraw_On_the_way_re_swjt.svg'
import { LocationOn, WatchLater } from '@material-ui/icons'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroWrapper'>
        <div className='heroContent'>
          <div className='heroText'>
            Top Restaurants <br />
            and more, delivered <br />
            to your door
          </div>
          <div className='searchBarWrapper'>
            <div className='searchDelivery'>
              <LocationOn className='icon' />
              Enter Delivery Address
            </div>
            <div className='deliveryTime'>
              <WatchLater className='icon' />
              Delivery Now
            </div>
            <div className='searchButtonWrapper'>
              <div className='searchButton'>Search</div>
            </div>
          </div>
        </div>

        <div className='imageBox'>
          <img src={deliveryImage} alt='' className='deliveryImage' />
        </div>
      </div>
    </div>
  )
}

export default Hero
