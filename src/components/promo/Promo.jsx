import React from 'react'
import './promo.css'
import { Apple, PlayArrow } from '@material-ui/icons'

const Promo = () => {
  return (
    <div className='promo'>
      <div className='promoWrapper'>
        <div className='promoApp'>
          <div className='appCatchphrase'>
            Everything in <br /> One App
          </div>
          <div className='appDescription'>
            Experience the best your <br />
            neighborhood has to <br />
            offer, all in one app.
          </div>
          <div className='storeIcons'>
            <ul className='stores'>
              <li className='appStore'>
                <Apple className='storeIcon' />
                <div className='appStoreContent'>
                  Download on the <br />
                  <div className='storeText'>App Store</div>
                </div>
              </li>
              <li className='playStore'>
                <PlayArrow className='storeIcon' />
                <div className='appStoreContent'>
                  Get it on <br />
                  <div className='storeText'>Google Play</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
