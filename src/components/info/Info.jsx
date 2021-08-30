import React from 'react'
import './info.css'
import Shopping from '../../images/undraw_shopping_app_flsj.svg'

const Info = () => {
  return (
    <div className='info'>
      <div className='infoWrapper'>
        <div className='firstInfo'>
          <div className='leftColumn'>
            <img src={Shopping} alt='' className='shopping' />
          </div>
          <div className='rightColumn'>
            <div className='rightColumnTitle'>Become a OpenDoor</div>
            <div className='rightColumnParagraph'>
              As a delivery driver, you'll make <br />
              reliable money-working anytime,
              <br />
              anywhere.
            </div>
            <div className='button'>Start Earning</div>
          </div>
        </div>
        <div className='secondInfo'>
          <div className='leftColumn'>
            <img src={Shopping} alt='' className='shopping' />
          </div>
          <div className='rightColumn'>
            <div className='rightColumnTitle'>Become a Partner</div>
            <div className='rightColumnParagraph'>
              As a delivery driver, you'll make <br />
              reliable money-working anytime,
              <br />
              anywhere.
            </div>
            <div className='button'>Sign Up Your Store</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
